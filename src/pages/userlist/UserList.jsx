import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './userlist.scss'
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'User Name', width: 250, renderCell:(params)=>{
        return(
            <div className="user-list">
                <img className='user-list-img' src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell:(params)=>{
          return(
              <>
                <Link to={`/user/${params.row.id}`}><EditIcon style={{color:"green",marginRight:"15px", cursor:"pointer"}} /></Link>
                <DeleteIcon style={{color:"red",cursor:"pointer"}}/>
              </>
          )
      }
    },
    
  ];

  const rows = [
    { id: 1, username: 'Jon Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 2, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 3, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 4, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 5, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 6, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 7, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 8, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 9, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 10, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 11, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    { id: 12, username: 'Snow', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', email: "xyz@gmail.com", status:"active", transaction: "120.00" },
    
  ];

function UserList() {
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

export default UserList