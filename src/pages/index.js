import { useState } from 'react'
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
      frontmatter: data
    }
  }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  return {
    props: {
      allBlogs: blogs, // Return all blogs instead of sliced
    }
  }
}

export default function Home({ allBlogs }) {
  const [currentPage, setCurrentPage] = useState(1)
  
  // Calculate paginated blogs
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const blogs = allBlogs.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allBlogs.length / BLOGS_PER_PAGE)

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Latest Posts</h1>
        
        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  )
}