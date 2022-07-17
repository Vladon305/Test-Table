import React from 'react'

type PropsType = {
  currentPage: number
  pageCount: number
  onChoosePage: (page: number) => void
}

const Paginator: React.FC<PropsType> = ({ currentPage, pageCount, onChoosePage }) => {
  const pageLeft = currentPage - 1 > 0 ? (currentPage - 2 > 0 ? currentPage - 2 : currentPage - 1) : 1

  let pageRight = currentPage - 1 > 0
    ? currentPage - 2 > 0 ? currentPage + 2 : currentPage + 3
    : currentPage + 4

  if (pageRight > pageCount) {
    pageRight = pageCount
  }

  const pages = []
  for (let i = pageLeft; i <= pageRight; i++) {
    pages.push(i)
  }

  const pageStyle = 'flex items-center justify-center w-4 h-4 cursor-pointer'

  return (
    <div className="flex gap-5 py-5">
      {pages.map((page) => (
        <span
          key={page}
          className={page === currentPage ? `${pageStyle} bg-gray-500 rounded-md text-white` : pageStyle}
          onClick={() => onChoosePage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  )
}

export default Paginator