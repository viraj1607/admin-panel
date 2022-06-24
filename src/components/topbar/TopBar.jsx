import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './topbar.scss'

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <span className="logo">myAdmin</span>
        </div>
        <div className="right">
          <div className="icons">
            <div className="icon">
              <NotificationsNoneIcon/>
              <span className='icon-badge'>2</span>
            </div>
            <div className="icon">
              <LanguageIcon/>
              <span className='icon-badge'>2</span>
            </div>
            <div className="icon">
              <SettingsIcon/>
            </div>
            <div className="icon">
            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
