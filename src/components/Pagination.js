import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 1)
    let end = Math.min(totalPages, currentPage + 1)
    
    // Adjust if near start/end
    if (currentPage <= 2) end = Math.min(3, totalPages)
    if (currentPage >= totalPages - 1) start = Math.max(totalPages - 2, 1)
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="p-2 rounded bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:bg-opacity-80 disabled:opacity-50"
      >
        <ChevronDoubleLeftIcon className="h-5 w-5" />
      </button>

      {getPageNumbers().map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === page
              ? 'bg-primary text-white'
              : 'bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:bg-opacity-80'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 rounded bg-light-secondary dark:bg-dark-secondary text-black dark:text-white hover:bg-opacity-80 disabled:opacity-50"
      >
        <ChevronDoubleRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}