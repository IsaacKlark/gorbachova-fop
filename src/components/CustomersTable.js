import React, { useState } from "react";
import Search from "./Search";
import { fakeTableData } from "../assets/fakeData";
import ReactPaginate from 'react-paginate';

const CustomersTable = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="customersTableWrapper">
      <div className="customersTableWrapper__head">
        <div>
          <p className="customersTableWrapper__title">All Customers</p>
          <p className="customersTableWrapper__subTitle">Active Members</p>
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>

      <div className="customersTableWrapper__tableMobileWrapper">
        <table className="customersTableWrapper__table">
          <thead>
            <tr className="customersTableWrapper__tableHeadRow">
              <th className="customersTableWrapper__tableHead">Customer Name</th>
              <th className="customersTableWrapper__tableHead">Company</th>
              <th className="customersTableWrapper__tableHead">Phone Number</th>
              <th className="customersTableWrapper__tableHead">Email</th>
              <th className="customersTableWrapper__tableHead">Country</th>
              <th className="customersTableWrapper__tableHead">Status</th>
            </tr>
          </thead>
          <tbody className="customersTableWrapper__tableBody">
            {fakeTableData.filter((el => el.company.includes(search))).map((row) => (
              <tr key={row.id} className="customersTableWrapper__tableRow">
                <td className="customersTableWrapper__tableCell" title={row.customerName}>
                  <div className="customersTableWrapper__tableCellText">
                    {row.customerName}
                  </div>
                </td>
                <td className="customersTableWrapper__tableCell" title={row.company}>
                  <div className="customersTableWrapper__tableCellText">
                    {row.company}
                  </div>
                </td>
                <td className="customersTableWrapper__tableCell" title={row.projectNumber}>
                  <div className="customersTableWrapper__tableCellText">
                    {row.projectNumber}
                  </div>
                </td>
                <td className="customersTableWrapper__tableCell" title={row.email}>
                  <div className="customersTableWrapper__tableCellText">
                    {row.email}
                  </div>
                </td>
                <td className="customersTableWrapper__tableCell" title={row.country}>
                  <div className="customersTableWrapper__tableCellText">
                    {row.country}
                  </div>
                </td>
                <td className="customersTableWrapper__tableCell">
                  <div className={
                    row.status === "Active" ?
                      "customersTableWrapper__statusActive"
                      : "customersTableWrapper__statusInactive"
                  }>
                    {row.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="customersTableWrapper__bottom">
        <p className="customersTableWrapper__bottomText">Showing data 1 to 8 of  256K entries</p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={() => { }}
          pageRangeDisplayed={4}
          pageCount={40}
          previousLabel="<"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={1}
          breakClassName="customersTableWrapper__paginationBreak"
          previousClassName="customersTableWrapper__paginationPage"
          nextClassName="customersTableWrapper__paginationPage"
          pageClassName="customersTableWrapper__paginationPage"
          activeClassName="customersTableWrapper__paginationPage--active"
        />
      </div>

    </div>
  )
}

export default CustomersTable;
