import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './widgetsmall.scss'

export default function WidgetSmall() {
  return (
    <div className='widget-sm'>
      <span className="title">New Join Members</span>
      <ul className="userlist">
        <li className="list-item">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          <div className="user-info">
            <span className="username">Viraj Merai</span>
            <span className="userposition">Software Engineer</span>
          </div>
          <button>
            <VisibilityIcon className='icon'/>
            Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          <div className="user-info">
            <span className="username">Viraj Merai</span>
            <span className="userposition">Software Engineer</span>
          </div>
          <button>
            <VisibilityIcon className='icon'/>
            Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          <div className="user-info">
            <span className="username">Viraj Merai</span>
            <span className="userposition">Software Engineer</span>
          </div>
          <button>
            <VisibilityIcon className='icon'/>
            Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          <div className="user-info">
            <span className="username">Viraj Merai</span>
            <span className="userposition">Software Engineer</span>
          </div>
          <button>
            <VisibilityIcon className='icon'/>
            Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          <div className="user-info">
            <span className="username">Viraj Merai</span>
            <span className="userposition">Software Engineer</span>
          </div>
          <button>
            <VisibilityIcon className='icon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
