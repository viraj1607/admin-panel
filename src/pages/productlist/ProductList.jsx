import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './productlist.scss'
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 250, renderCell:(params)=>{
        return(
            <div className="user-list">
                <img className='user-list-img' src={params.row.productimg} alt="" />
                {params.row.product}
            </div>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell:(params)=>{
          return(
              <>
                <Link to={`/product/${params.row.id}`}><EditIcon style={{color:"green",marginRight:"15px", cursor:"pointer"}} /></Link>
                <DeleteIcon style={{color:"red",cursor:"pointer"}}/>
              </>
          )
      }
    },
    
  ];

  const rows = [
    { id: 1, product: 'Jon Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 2, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 3, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 4, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 5, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 6, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 7, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 8, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 9, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 10, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 11, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    { id: 12, product: 'Snow', productimg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', stock: "143", status:"active", price: "120.00" },
    
  ];

function ProductList() {
  return (
    <div className='userlist'>
         <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}

export default ProductList