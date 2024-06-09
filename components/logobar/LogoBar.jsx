
import Link from "next/link"
import Image from 'next/image'
import Logo from "../logo/Logo"
const LogoBar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 flex justify-center items-center p-5">
        <Link href="/">
          <Logo color="#17488d" />
        </Link>
      </div>
    </div>
  )
}

export default LogoBar
