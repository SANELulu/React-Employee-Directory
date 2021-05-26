import React, { useEffect, useState, Fragment } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import ColumnFilter from "./ColumnFilter";

function App() {
  const [randomUserTableData, setRandomUserTableData] = useState({
    loading: true,
    data: [],
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "gender",
        accessor: "gender",
      },
      {
        Header: "firstName",
        accessor: "name.first",
      },
      {
        Header: "lastName",
        accessor: "name.last",
      },
    ],
    []
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => response.json())
      .then((response) => {
        setRandomUserTableData({
          data: response.results,
          loading: false,
        });
      });
  }, []);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data: randomUserTableData.data, defaultColumn },
      useFilters,
      useSortBy
    );

  if (randomUserTableData.loading) {
    return <div>loading...</div>;
  }
  return (
    <Fragment>
      <div className="bg-secondary font-weight-bold text-center">
        USER DIRECTORY
        <table
          {...getTableProps()}
          style={{ border: "solid 1px grey" }}
          class="mx-auto"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      background: "grey",
                      fontWeight: "bold",
                      color: "black",
                      borderBottom: "solid 3px grey",
                    }}
                  >
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "20px",
                          border: "solid 1px gray",
                          background: "beige",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default App;
