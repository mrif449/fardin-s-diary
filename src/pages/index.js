import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const BLOGS_PER_PAGE = 9

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/blogs'))
  const blogs = []
  const errors = []
  const tagCount = {}

  files.forEach(filename => {
    try {
      const markdownWithMeta = fs.readFileSync(path.join('src/blogs', filename), 'utf-8')
      const { data } = matter(markdownWithMeta)
      blogs.push({
        slug: filename.replace('.md', ''),
        frontmatter: {
          ...data,
          tags: data.tags || [] // Ensure tags always exist as array
        }
      })

      // Count tags
      data.tags.forEach(tag => {
        if (tagCount[tag]) {
          tagCount[tag].count += 1
          tagCount[tag].latest = new Date(data.date)
        } else {
          tagCount[tag] = { count: 1, latest: new Date(data.date) }
        }
      })
    } catch (error) {
      errors.push(`Error in file ${filename}: ${error.message}`)
    }
  })

  blogs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  // Get top 10 most used tags
  const topTags = Object.keys(tagCount)
    .sort((a, b) => {
      if (tagCount[b].count === tagCount[a].count) {
        return tagCount[b].latest - tagCount[a].latest
      }
      return tagCount[b].count - tagCount[a].count
    })
    .slice(0, 10)

  return { 
    props: { 
      allBlogs: blogs,
      allTags: Object.keys(tagCount),
      topTags: topTags || [],
      errors
    }
  }
}

export default function Home({ allBlogs = [], allTags = [], topTags = [], errors = [] }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(router.query.tag || '')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const page = parseInt(router.query.page) || 1
    setCurrentPage(page)
  }, [router.query.page])

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      const page = parseInt(new URL(as, window.location.href).searchParams.get('page')) || 1
      setCurrentPage(page)
      return true
    })
  }, [router])

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const title = blog.frontmatter.title || '';
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.frontmatter.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTag = !selectedTag || blog.frontmatter.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  // Pagination
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const blogs = filteredBlogs.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)

  useEffect(() => {
    if (!router.query.page) {
      setCurrentPage(1)
    }
  }, [searchQuery, selectedTag])

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag)
    router.push(tag === selectedTag ? '/' : `/?tag=${tag}`, undefined, { shallow: true })
    setIsDropdownOpen(false)
  }

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handlePageChange = (page) => {
    setIsLoading(true)
    setCurrentPage(page)
    router.push(`/?page=${page}`, undefined, { shallow: true }).then(() => {
      setIsLoading(false)
    })
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="mb-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative md:hidden mr-2 font-fira"> {/* Hide on medium and larger screens */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:bg-opacity-80"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div ref={sidebarRef} className={`fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-dark-secondary p-4 z-30 transform transition-transform duration-300 ${isDropdownOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:bg-opacity-80 mb-4"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <div className="space-y-2">
                    {Array.isArray(allTags) && allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`block w-full text-left px-4 py-3 text-lg font-semibold ${
                          selectedTag === tag 
                            ? 'bg-primary text-white' 
                            : 'bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:opacity-80'
                        } rounded-lg`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-2"> {/* Show on medium and larger screens */}
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="hidden md:block font-fira"> {/* Show on medium and larger screens */}
            <div className="flex flex-wrap gap-2">
              {Array.isArray(topTags) && topTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-lg text-sm ${
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
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </Layout>
  )
}