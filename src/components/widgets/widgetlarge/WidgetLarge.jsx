import React from 'react'
import './widgetlarge.scss'

export default function WidgetLarge() {

    const Button=({type})=>{
        return <button className={"status-btn "+type} >{type}</button>
    }
  return (
    <div className='widget-lg'>
        <span className="title">Transactions</span>
        <table className="widget-table">
            <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            <tr>
                <td className='user-data'>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <span>Viraj Merai</span>
                </td>
                <td>16 May 2022</td>
                <td>₹ 2000</td>
                <td><Button type="Approved" /></td>
            </tr>
            <tr>
                <td className='user-data'>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <span>Viraj Merai</span>
                </td>
                <td>16 May 2022</td>
                <td>₹ 2000</td>
                <td><Button type="Pending" /></td>
            </tr>
            <tr>
                <td className='user-data'>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <span>Viraj Merai</span>
                </td>
                <td>16May 2022</td>
                <td>₹ 2000</td>
                <td><Button type="Pending" /></td>
            </tr>
            <tr>
                <td className='user-data'>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <span>Viraj Merai</span>
                </td>
                <td>16 May 2022</td>
                <td>₹ 2000</td>
                <td><Button type="Declined" /></td>
            </tr>
            <tr>
                <td className='user-data'>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <span>Viraj Merai</span>
                </td>
                <td>16 May 2022</td>
                <td>₹ 2000</td>
                <td><Button type="Approved" /></td>
            </tr>
        </table>
    </div>
  )
}
