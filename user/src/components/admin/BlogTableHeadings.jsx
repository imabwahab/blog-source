import React from 'react'

function BlogTableHeadings() {
  return (
    <>
      <tr>
        <th scope="col" className="px-4 md:px-6 py-5 text-left text-sm font-semibold text-gray-700">#</th>
        <th scope="col" className="px-4 md:px-6 py-5 text-left text-sm font-semibold text-gray-700">Title</th>
        <th scope="col" className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 max-md:hidden">Category</th>
        <th scope="col" className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 max-lg:hidden">Created At</th>
        <th scope="col" className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 max-sm:hidden">Status</th>
        <th scope="col" className="px-4 md:px-6 py-3 text-center  text-sm font-semibold text-gray-700">Actions</th>
      </tr>
    </>
  )
}

export default BlogTableHeadings;