import React from 'react'

const ArticleCard = ({ title, date, image, link }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={image} alt={title} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{date}</p>
        <a href={link} className="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  )
}

export default ArticleCard;
