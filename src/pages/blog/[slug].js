import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { format } from 'date-fns'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/blogs'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/blogs', params.slug + '.md'),
    'utf-8'
  )
  const { data, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter: {
        ...data,
        tags: data.tags || []
      },
      content,
      slug: params.slug
    }
  }
}

export default function BlogPost({ frontmatter, content }) {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-5 text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-2 font-fira">
          {frontmatter.title}
        </h1>
        <div className="flex items-center space-x-4 mb-4 font-fira">
          <span className="text-primary">
            {format(new Date(frontmatter.date), 'dd MMMM yyyy')}
          </span>
        </div>

        {Array.isArray(frontmatter.tags) && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 font-fira">
            {frontmatter.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-sm rounded-full bg-primary bg-opacity-20 text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div 
          className="prose dark:prose-invert max-w-none font-inter
            [&_h1]:border-b [&_h1]:pb-2 [&_h1]:border-gray-300 dark:[&_h1]:border-gray-600
            [&_h2]:border-b [&_h2]:pb-2 [&_h2]:border-gray-300 dark:[&_h2]:border-gray-600
            [&_h3]:border-b [&_h3]:pb-2 [&_h3]:border-gray-300 dark:[&_h3]:border-gray-600
            [&_h4]:border-b [&_h4]:pb-2 [&_h4]:border-gray-300 dark:[&_h4]:border-gray-600
            [&_h5]:border-b [&_h5]:pb-2 [&_h5]:border-gray-300 dark:[&_h5]:border-gray-600
            [&_h6]:border-b [&_h6]:pb-2 [&_h6]:border-gray-300 dark:[&_h6]:border-gray-600
            [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:bg-gray-100 dark:[&_pre]:bg-gray-800
            [&_code]:before:content-none [&_code]:after:content-none"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </article>
    </Layout>
  )
}