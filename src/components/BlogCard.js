import Link from 'next/link'
import { format } from 'date-fns'

export default function BlogCard({ blog, onTagClick }) {
  return (
    <Link href={`/blog/${blog.slug}`} legacyBehavior>
      <div className="bg-light-secondary dark:bg-dark-secondary rounded-lg p-6 hover:transform hover:scale-[1.01] transition-all duration-200 cursor-pointer shadow-sm">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-2 font-fira">
          {blog.frontmatter.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3 font-inter">
          {blog.frontmatter.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2 font-fira">
          {Array.isArray(blog.frontmatter.tags) && 
            blog.frontmatter.tags.map(tag => (
              <span
                key={tag}
                onClick={(e) => {
                  e.stopPropagation()
                  onTagClick(tag)
                }}
                className="px-2 py-1 text-sm rounded-full bg-primary bg-opacity-20 text-primary hover:bg-opacity-30 cursor-pointer"
              >
                #{tag}
              </span>
            ))
          }
        </div>

        <span className="text-primary text-sm block mt-3 font-fira">
          {blog.frontmatter.date ? format(new Date(blog.frontmatter.date), 'dd MMM yyyy') : 'No date available'}
        </span>
      </div>
    </Link>
  )
}