import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


const PER_PAGE = 3;

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://ihsavru.me/Demo/uploads.json")
      .then((res) => res.json())
      .then((data) => {
        const {
          course: { uploads }
        } = data;
        setData(uploads);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(({ thumburl }) => <img src={thumburl} />);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
      <h1>React Paginate Example</h1>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
    
      />
      {currentPageData}
    </div>
  );
}

export default Pagination;