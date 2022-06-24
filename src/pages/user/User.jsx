import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import './user.scss'
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className='user'>
        <div className="user-header">
            <h3>Edit User</h3>
            <Link to='/newuser'><button className="create-user">Create</button></Link>
        </div>
        <div className="user-container">
            <div className="user-show">
                <div className="show-top">
                    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                    <div className="user-info">
                        <span className='name'>Viraj Merai</span>
                        <span className='position'>Full Stack Developer</span>
                    </div>
                </div>
                <div className="user-bottom">
                    <h5>Account Details</h5>
                    <div className='personal-detail'>
                        <PersonOutlineOutlinedIcon className='detail-icon'/>
                        <span>vir16</span>
                    </div>
                    <div className='personal-detail'>
                        <DateRangeOutlinedIcon className='detail-icon'/>
                        <span>16/05/1999</span>
                    </div>
                    <h5>Contact Details</h5>
                    <div className='personal-detail'>
                        <CallOutlinedIcon className='detail-icon'/>
                        <span>+91 9604340920</span>
                    </div>
                    <div className='personal-detail'>
                        <EmailOutlinedIcon className='detail-icon'/>
                        <span>virajnmerai16@gmail.com</span>
                    </div>
                    <div className='personal-detail'>
                        <LocationOnOutlinedIcon className='detail-icon'/>
                        <span>Surat</span>
                    </div>
                </div>
            </div>
            <div className="user-edit">
                <div className='edit-heading'>Edit</div>
                <form>
                    <div className="update-left">
                        <div className="form-details">
                            <label>
                                Username
                                <input type="text" placeholder='vir16' />
                            </label>
                        </div>
                        <div className="form-details">
                            <label>
                                Full Name
                                <input type="text" placeholder='Viraj Merai' />
                            </label>
                        </div>
                        <div className="form-details">
                            <label>
                                Email
                                <input type="text" placeholder='virajnmerai16@gmail.com' />
                            </label>
                        </div>
                        <div className="form-details">
                            <label>
                                Phone
                                <input type="text" placeholder='9604340920' />
                            </label>
                        </div>
                        <div className="form-details">
                            <label>
                                Address
                                <input type="text" placeholder='Surat' />
                            </label>
                        </div>
                    </div>
                    <div className="update-right">
                        <div className="upload-content">
                            <img className='update-img' src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                            <label htmlFor="uploadImg">
                                <PublishIcon className='upload-icon'/>
                            </label>
                            <input type="file" id='uploadImg' style={{display:"none"}}/>
                        </div>
                        <button className='update-btn'><b>Update</b></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User