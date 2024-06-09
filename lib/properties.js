import { parseStringPromise } from 'xml2js';
import { ensureArray } from './ensureArray';

export const fetchPropertiesData = async (page = 1, limit = 10) => {
  const response = await fetch(`https://api.procode.pl/properties/xml/generate?page=${page}&limit=${limit}&fields=id,property_type,offer_type,parking_space,property_images,address,rent_price`);
  const text = await response.text();
  const data = await parseStringPromise(text, { explicitArray: false });

  // Process data as before
  data.response.item = ensureArray(data.response.item).map((item) => {
    item.property_images.image = ensureArray(item.property_images.image).map(img => ({
      url: img,
      width: 500,
      height: 300
    }));
    return item;
  });

  return data.response.item;
};

