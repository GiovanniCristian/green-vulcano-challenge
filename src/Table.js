import React from "react";
import { usePagination, useTable } from "react-table";
import { useGlobalFilter, useAsyncDebounce} from "react-table";


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <span className="">
        <input
          className="search-bar my-3"
          value={value || " "}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
    )
}

function CreateItem (){
  return (
    <button className="button-item">
      Add Item
    </button>
  );
}

function Table({ columns, data }) {
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page, 
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state, 
    preGlobalFilteredRows, 
    setGlobalFilter
    } =
    useTable({
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    )

  return (
<>
<div>
    <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

    <CreateItem />
</div>
    <table {...getTableProps()} className="table-custom m-auto">
      <thead className="thead">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="text-center">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-center">
        {page.map((page, i) => {
          prepareRow(page);
          return (
            <tr {...page.getRowProps()}>
              {page.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
      <div className="pagination mt-3">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span className="mx-2 my-auto">
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
      </div>
</>

  );
}

export default Table;