export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
    return (
      <div className="flex justify-center gap-2 mt-8">
        {pages.map((page) => (
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
      </div>
    )
  }