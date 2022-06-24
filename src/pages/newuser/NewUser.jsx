import React from 'react'
import './newuser.scss'

function NewUser() {
  return (
    <div className='newuser'>
        <div className='newuser-heading'>New User</div>
        <form>
            <div className="form-left">
            <div className="user-info">
                <label className='user-input'>
                    <b>Username</b>
                    <input type="text" placeholder='Enter User Name' />
                </label>
            </div>
            <div className="user-info">
                <label className='user-input'>
                    <b>Email</b>
                    <input type="text" placeholder='Enter Email' />
                </label>
            </div>
            <div className="user-info">
                <label className='user-input'>
                    <b>Phone</b>
                    <input type="text" placeholder='Enter Phone' />
                </label>
            </div>
            <div className="user-info">
                <label className='user-input'>
                    <b>Active</b>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>
            </div>
            </div>
            <div className="form-right">
            <div className="user-info">
                <label className='user-input'>
                    <b>Full Name</b>
                    <input type="text" placeholder='Enter Full Name' />
                </label>
            </div>
            <div className="user-info">
                <label className='user-input'>
                    <b>Password</b>
                    <input type="text" placeholder='Enter Password' />
                </label>
            </div>
            <div className="user-info">
                <label className='user-input'>
                    <b>Address</b>
                    <input type="text" placeholder='Enter Address' />
                </label>
            </div>
            <div className="user-info">
                <label><b>Gender</b></label>
                <div className='radio-input'>
                    <label>
                        <input type="radio" id="male" name="gender" value="male" />
                        Male
                    </label>
                    <label>
                        <input type="radio" id="female" name="gender" value="female" />
                        Female
                    </label>
                    <label>
                        <input type="radio" id="other" name="gender" value="other" />
                        Other
                    </label>
                </div>
            </div>
            </div>
        </form>
        <button className='create-btn'><b>Create</b></button>
    </div>
  )
}

export default NewUser