import React from 'react';
import './Orders.css';
import { LiaFileImportSolid } from 'react-icons/lia';
import { TbArrowBadgeLeft } from 'react-icons/tb';
import { TbRefresh } from 'react-icons/tb';
import DataTable from './DataTable';
import { SiSymbolab } from "react-icons/si";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";


function Orders() {

  const ordersData = [
    {column1: '+',column2: <input type="checkbox"/>, column3: <SiSymbolab/>, column4: '#TKN20203754', column5: '2022-05-04', column6: 'lucknow', column7: 'Abhishek Dixit', column8: '0.00', column9: <button className='action-button'>Pending</button>, column10: <select className='selections'>
      <option className='option-name'>Action</option>
    </select> },
    {column1: '+',column2: <input type="checkbox"/>, column3: <SiSymbolab/>, column4: '#TKN20203753', column5: '2022-05-04', column6: 'lucknow', column7: 'Abhishek Dixit', column8: '0.00', column9: <button className='action-button'>Pending</button>, column10: <select className='selections'>
    <option className='option-name'>Action</option>
  </select> },
  {column1: '+',column2: <input type="checkbox"/>, column3: <SiSymbolab/>, column4: '#TKN20203752', column5: '2022-05-04', column6: 'lucknow', column7: 'Abhishek Dixit', column8: '0.00', column9: <button className='action-button'>Pending</button>, column10: <select className='selections'>
  <option className='option-name'>Action</option>
</select> },
    // Add more rows as needed
  ];

  return (
    <>
      <div className='orders'>
        <div className='orders-detail-headings'>
          <p className='name name1'>Pending</p>
          <p className='name'>Accepted</p>
          <p className='name'>AWB Created</p>
          <p className='name'>Ready to Ship</p>
          <p className='name'>Shipped</p>
          <p className='name'>Completed</p>
          <p className='name'>Cancelled</p>
        </div>
        <br />
        <div className='table-details'>
          <div className='option-filters'>
            <div className='filter-options'>
              <div className='option'>
                <LiaFileImportSolid />
                <label className='labels'>Import Orders</label>
              </div>
              <div className='option'>
                <TbArrowBadgeLeft />
                <label className='labels'>Import Orders</label>
              </div>
              <div className='option'>
                <TbArrowBadgeLeft />
                <label className='labels'>Import Orders</label>
              </div>
            </div>
            <button className='btn btn-primary button'>
              <TbRefresh />
              <label className='labels'>Refresh</label>
            </button>
          </div>
          {/* Add DataTable component here */}
          <div>
             {/* <h2>Orders</h2> */}
             <DataTable className="table-data text-center" data={ordersData} />
          </div>
          <div className='pages-count'>
            <div className='data'><LiaLessThanSolid/></div>
            <div className='data'> 1 </div>
            <div className='data'><LiaGreaterThanSolid/></div>
            <select className='selection1'>
              <option className='option-name'>20/page</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
