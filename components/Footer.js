import siteMetadata from '@/data/siteMetadata'
import {
  SiLinkedin,
  SiMaildotru,
  SiFacebook,
  SiGithub,
  SiTwitter,
  SiYoutube,
  SiInstagram,
} from 'react-icons/si'

export default function Footer() {
  return (
    <footer>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
      <div className="mt-3 flex flex-col items-center">
        <div className="mb-8 flex space-x-4">
          <a
            className="transition-all hover:scale-110"
            kind="linkedin"
            href={siteMetadata.linkedin}
          >
            <SiLinkedin size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={`mailto:${siteMetadata.email}`}>
            <SiMaildotru size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={siteMetadata.facebook}>
            <SiFacebook size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={siteMetadata.github}>
            <SiGithub size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={siteMetadata.twitter}>
            <SiTwitter size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={siteMetadata.youtube}>
            <SiYoutube size={24} />
          </a>
          <a className="transition-all hover:scale-110" href={siteMetadata.Instagram}>
            <SiInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
