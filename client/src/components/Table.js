import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

//utilising react-table to set up my page
//previously used generic html pages (allproductslist to display the store page)
export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setFilter,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useFilters
  );
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    //setFilter("name", value);
    setFilter("title", value);
    setFilterInput(value);
  };
  //page layout
  return (
    <>
      <div className="form-group input-group">
        <input
          className="form-control"
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search name"}
        />
      </div>
      <table
        {...getTableProps()}
        className="table table-bordered table-condensed table-responsive"
        style={{ display: "table" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}