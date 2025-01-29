import { useState, useEffect, useCallback } from "react";

interface PaginationOptions {
  totalItems?: number;
  itemsPerPage: number;
  fetchData?: (page: number, limit: number) => Promise<{ items: any[]; total: number }>;
}

export const usePagination = ({ totalItems = 0, itemsPerPage, fetchData }: PaginationOptions) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch data on page change
  const fetchPageData = useCallback(async () => {
    if (!fetchData) return;
    setLoading(true);
    const { items, total } = await fetchData(currentPage, itemsPerPage);
    setData(items);
    setTotalPages(Math.ceil(total / itemsPerPage));
    setLoading(false);
  }, [currentPage, fetchData, itemsPerPage]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page: number) => setCurrentPage(page);

  return { data, currentPage, totalPages, nextPage, prevPage, goToPage, loading };
};
