import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'

const BLOGS_PER_PAGE = 5

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/blogs'))
  const blogs = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('src/blogs', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)
    return {
      slug: filename.replace('.md', ''),
      frontmatter: {
        ...data,
        tags: data.tags || [] // Ensure tags always exist as array
      }
    }
  }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  // Get all unique tags safely
  const allTags = [...new Set(
    blogs.flatMap(blog => blog.frontmatter.tags)
  )].filter(tag => typeof tag === 'string')

  return { 
    props: { 
      allBlogs: blogs,
      allTags: allTags || []
    }
  }
}

export default function Home({ allBlogs = [], allTags = [] }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(router.query.tag || '')
  
  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || blog.frontmatter.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  // Pagination
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const blogs = filteredBlogs.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedTag])

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag)
    router.push(tag === selectedTag ? '/' : `/?tag=${tag}`, undefined, { shallow: true })
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-center">
            <div className="w-64">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.isArray(allTags) && allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === tag 
                    ? 'bg-primary text-white' 
                    : 'bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:opacity-80'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <BlogCard 
                key={index} 
                blog={blog} 
                onTagClick={handleTagClick} 
              />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No posts found matching your criteria.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Layout>
  )
}