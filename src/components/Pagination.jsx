const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const Pagination = ({
  totalItems,
  pageSize = 16,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (totalPages <= 1) return null;

  const goto = (p) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    onPageChange(p);
  };

  // Generate a compact set of pages around current
  const siblings = 1;
  const start = Math.max(1, currentPage - siblings);
  const end = Math.min(totalPages, currentPage + siblings);
  const pages = range(start, end);

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goto(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded border text-sm ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-300 border-gray-200"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Prev
      </button>

      {start > 1 && (
        <>
          <button
            type="button"
            onClick={() => goto(1)}
            className={`px-3 py-2 rounded border text-sm ${
              currentPage === 1
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            1
          </button>
          {start > 2 && <span className="px-2 text-gray-400">…</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => goto(p)}
          className={`px-3 py-2 rounded border text-sm ${
            p === currentPage
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-2 text-gray-400">…</span>
          )}
          <button
            type="button"
            onClick={() => goto(totalPages)}
            className={`px-3 py-2 rounded border text-sm ${
              currentPage === totalPages
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        type="button"
        onClick={() => goto(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded border text-sm ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-300 border-gray-200"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
