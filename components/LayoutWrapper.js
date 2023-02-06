import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from '@/components/Image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between py-10">
        <header className="py-auto flex items-center justify-between">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <div className="flex w-[90px] items-center">
                    <Image
                      src="/static/images/website-logo.png"
                      width="150px"
                      height="150px"
                      alt="website logo"
                      className="rounded-full"
                    />
                  </div>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:b focus:shadow-outline rounded-lg p-1 font-medium text-gray-900 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
