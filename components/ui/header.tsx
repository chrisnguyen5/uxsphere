import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/uxs-logo1.svg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="UXSphere">
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Logo} width={62} height={62} alt="UXS logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                {/* <Link
                  href="/signup"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <span className="gradient-text">
                  Learn more
                  </span>
                  
                  
                </Link> */}
              </li>
              <li>
                <Link href="https://buy.stripe.com/5kQ6oHfcc882dCj99pabK02" className="btn-sm text-white bg-gray-900 hover:bg-gray-700 ml-3 rounded-3xl border-1 border-gray-700">
                  Sign up
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
