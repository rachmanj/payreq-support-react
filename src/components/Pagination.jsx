import React, { useState } from 'react';

const Pagination = ({ bucs, currentPage, setCurrentPage, goToPage }) => {
  const [halaman, setHalaman] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    { page: halaman },
    { page: halaman + 1 },
    { page: halaman + 2 },
    { page: halaman + 3 },
    { page: halaman + 4 },
    { page: halaman + 5 },
  ];

  const nextPage = () => {
    setCurrentPage(bucs.current_page + 1);
  };

  const prevPage = () => {
    // currentPage > 1 && setCurrentPage(currentPage - 1);
    // console.log(bucs.links.slice(1, -1).length);
    // console.log(currentPage);
    if (currentPage === 1) {
      console.log(bucs.first_page_url);
      // console.log(bucs.links.length);
    } else {
      // console.log(bucs.links[bucs.links.length - 1].url);
      console.log(bucs.links[bucs.current_page - 1].url);
    }
  };

  return (
    <div className="flex mt-5 bg-white rounded-lg font-[Poppins]">
      <button
        onClick={() =>
          goToPage(
            currentPage === 1
              ? bucs.first_page_url
              : bucs.links[bucs.current_page - 1].url
          )
        }
        className="h-12 border-2 border-r-0 border-dark-purple px-4 rounded-l-lg hover:bg-dark-purple hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {bucs.links?.slice(1, -1).map((page, i) => (
        <button
          key={i}
          onClick={() => goToPage(page.url)}
          className={`h-12 border-2 border-r-2 border-dark-purple w-12 ${
            currentPage == page.label && 'bg-dark-purple text-white'
          } hover:bg-dark-purple hover:text-white`}
        >
          {page.label}
        </button>
      ))}
      <button
        onClick={() =>
          goToPage(
            currentPage === bucs.links.slice(1, -1).length
              ? bucs.last_page_url
              : bucs.links[bucs.links.length - 1].url
          )
        }
        className="h-12 border-2 border-dark-purple px-4 rounded-r-lg hover:bg-dark-purple hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
