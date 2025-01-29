import React from "react";
import { usePagination } from "./hooks/usePagination.tsx";

const fetchData = async (page: number, limit: number) => {
  const response = await fetch(`https://api.example.com/data?page=${page}&limit=${limit}`);
  const { items, total } = await response.json();
  return { items, total };
};

const PaginatedComponent = () => {
  const { data, currentPage, totalPages, nextPage, prevPage, goToPage, loading } = usePagination({
    itemsPerPage: 5,
    fetchData,
  });

  return (
    <div>
      {loading ? <p>Loading...</p> : data.map((item) => <p key={item.id}>{item.name}</p>)}

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedComponent;
