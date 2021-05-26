import React from "react";

function ColumnFilter({ column: { setFilter, filterValue, preFilteredRows } }) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      placeholder={`Search ${count} records`}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    />
  );
}
export default ColumnFilter;
