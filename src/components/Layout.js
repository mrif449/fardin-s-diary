import Head from 'next/head'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
  }

  if (!mounted) return null

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-light dark:bg-dark text-black dark:text-white transition-colors duration-200">
        <Head>
          <title>Static Blog</title>
          <meta name="description" content="A modern static blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className="border-b border-gray-200 dark:border-dark-secondary">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <h1 className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                DevBlog
              </h1>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-primary" />
              ) : (
                <MoonIcon className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </nav>

        <main>{children}</main>
      </div>
    </div>
  )
}