// DataTable.js
import React, { useState } from 'react';
import './DataTable.css'; // Import the stylesheet
import { TiArrowUnsorted } from "react-icons/ti";


const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          <th><input className='' type="checkbox"/></th>
          <th>Channel <TiArrowUnsorted/></th>
          <th>Order No <TiArrowUnsorted/></th>
          <th>Order Date <TiArrowUnsorted/></th>
          <th>City <TiArrowUnsorted/></th>
          <th>Customer Name</th>
          <th>Order Value <TiArrowUnsorted/></th>
          <th>Status <TiArrowUnsorted/></th>
          <th>Operation <TiArrowUnsorted/></th>
          {/* Add more column headers as needed */}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>{row.column4}</td>
            <td>{row.column5}</td>
            <td>{row.column6}</td>
            <td>{row.column7}</td>
            <td>{row.column8}</td>
            <td>{row.column9}</td>
            <td>{row.column10}</td>
            {/* Add more cells for each column as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
