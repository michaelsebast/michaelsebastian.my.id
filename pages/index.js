import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { SiInstagram, SiTwitter, SiFacebook, SiMaildotru, SiLinkedin } from 'react-icons/si'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="pb-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Michael Sebastian
            </h1>
            <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
              Just a guy who loves art & technology.👋
            </h2>
          </div>
          <div className='className="relative sm:w-[200px]" mb-8 mr-auto w-[100px] sm:mb-0'>
            <Image
              src="/static/images/profile.png"
              alt="avatar"
              width="200px"
              height="200px"
              // className=" [clip-path:polygon(0%_0%,100%_0%,50%_100%,0%_50%)]"
              className="rounded-full"
            />
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            My name is{' '}
            <a className="underline decoration-indigo-500"> Michael Sebastian Abimanyu</a> and I am
            an aspiring <a className="underline decoration-sky-500">3D artist</a>, technology
            enthusiast, and <a className="underline decoration-rose-500">game developer</a> from
            Yogyakarta, Indonesia. I am deeply interested in the latest advancements in technology
            and is always exploring new ways to integrate cutting-edge tools and techniques into my
            work.
          </p>
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-cyan-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-cyan-500/10 transition selection:bg-white/30 hover:bg-cyan-500/80 hover:shadow-blue-500/5 focus:ring-cyan-500/40 dark:bg-cyan-400 dark:text-zinc-900 dark:shadow-cyan-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-cyan-400/80 dark:hover:shadow-cyan-400/5 dark:focus:ring-cyan-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/michael-sebastian-abimanyu-982248261"
            rel="noreferrer"
            target="_blank"
          >
            <SiLinkedin size={24} />
            <span className="hidden sm:inline">Linkedin</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-red-500/10 transition selection:bg-white/30 hover:bg-red-500/80 hover:shadow-blue-500/5 focus:ring-red-500/40 dark:bg-red-400 dark:text-zinc-900 dark:shadow-red-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-red-400/80 dark:hover:shadow-red-400/5 dark:focus:ring-red-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:michael@frans.web.id"
            rel="noreferrer"
            target="_blank"
          >
            <SiMaildotru size={26} />
            <span className="hidden sm:inline">E-mail</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-sky-500/10 transition selection:bg-white/30 hover:bg-sky-500/80 hover:shadow-sky-500/5 focus:ring-sky-500/40 dark:bg-sky-400 dark:text-zinc-900 dark:shadow-sky-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-sky-600/80 dark:hover:shadow-sky-400/5 dark:focus:ring-sky-600/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.facebook.com/michael.sebastian.abimanyu/"
          >
            <SiFacebook size={26} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/michaelsebast_"
            rel="noreferrer"
            target="_blank"
          >
            <SiTwitter size={27} />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-purple-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-purple-500/10 transition selection:bg-white/30 hover:bg-purple-500/80 hover:shadow-purple-500/5 focus:ring-purple-500/40 dark:bg-purple-400 dark:text-zinc-900 dark:shadow-purple-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-purple-400/80 dark:hover:shadow-purple-400/5 dark:focus:ring-purple-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.instagram.com/michaelsebast_/"
            rel="noreferrer"
            target="_blank"
          >
            <SiInstagram size={26} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-9 justify-center"></div>
        </div>
      </div>
      <div className="mb-auto">
        <h2 className="mb-auto text-xl font-bold text-zinc-800 dark:text-white">Blog</h2>
        <p className="mt-auto max-w-[46ch] leading-tight text-zinc-500 dark:text-slate-300">
          My latest blog posts 🚀
        </p>
      </div>
      <div className="py-auto container">
        <ul className="md:px- flex-warp divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-2">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-7 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-9 justify-center"></div>
      </div>
      <div className="content mb-4">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="mt-auto max-w-[46ch] leading-tight text-zinc-500 dark:text-slate-300">
          Projects that i've worked on 💪
        </p>
      </div>
      <div className="py-auto container mb-10">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
