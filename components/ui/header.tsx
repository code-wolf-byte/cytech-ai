import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import logo from './logo.png'
import Image from 'next/image'
export default function Header() {

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
          <Image src={logo} alt='logo' width={100}  height={100}/>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" style={{ fontSize: '20px' }}>
                  Services
                </Link>
              </li>
              <li>
                  <Link href="/career" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" style={{ fontSize: '20px' }}>
                    Career
                  </Link>
                </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" style={{ fontSize: '20px' }}>
                  About us
                </Link>
              </li>
              
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" style={{ fontSize: '20px' }}>
                    Contact us
                  </Link>
                </li>
                
                
            </ul>
 {/* Desktop sign in links */}
 <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white  ml-3">
                  
                </Link>
              </li>
            </ul>
            
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
