import Image from 'next/image';

const Logo = ({ color = 'currentColor', size = '100%' }) => {
  return (
    <Image
      priority
      src="/images/adjusted_logo.png"
      height={80}
      width={180}
      alt=""
    />
  )
}

export default Logo
