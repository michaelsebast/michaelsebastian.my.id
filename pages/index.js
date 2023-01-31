import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

import NewsletterForm from '@/components/NewsletterForm'

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
            Yogyakarta, Indonesia. am deeply interested in the latest advancements in technology and
            is always exploring new ways to integrate cutting-edge tools and techniques into my
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
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:inline">linkedin</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-red-500/10 transition selection:bg-white/30 hover:bg-red-500/80 hover:shadow-blue-500/5 focus:ring-red-500/40 dark:bg-red-400 dark:text-zinc-900 dark:shadow-red-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-red-400/80 dark:hover:shadow-red-400/5 dark:focus:ring-red-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:michael@frans.web.id"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-sky-500/10 transition selection:bg-white/30 hover:bg-sky-500/80 hover:shadow-sky-500/5 focus:ring-sky-500/40 dark:bg-sky-400 dark:text-zinc-900 dark:shadow-sky-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-sky-600/80 dark:hover:shadow-sky-400/5 dark:focus:ring-sky-600/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.facebook.com/michael.sebastian.abimanyu/"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="hidden sm:inline">facebook</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/michaelsebast_"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-purple-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-purple-500/10 transition selection:bg-white/30 hover:bg-purple-500/80 hover:shadow-purple-500/5 focus:ring-purple-500/40 dark:bg-purple-400 dark:text-zinc-900 dark:shadow-purple-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-purple-400/80 dark:hover:shadow-purple-400/5 dark:focus:ring-purple-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.instagram.com/michaelsebast_/"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
            </svg>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>
      <div className="content mb-auto">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Blog</h2>
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
