import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';
import "./sidebar.scss"

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <div className="menu">
                <h3 className="title">Dashboard</h3>
                <ul className="menu-list">
                    <Link to='/'>
                    <li className="item active">
                        <HomeOutlinedIcon className='icon' />
                        Home
                    </li>
                    </Link>
                    <li className="item">
                    <BarChartIcon className='icon' />
                    Analytics
                    </li>
                    <li className="item">
                    <TrendingUpIcon className='icon' />
                    Sales
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h3 className="title">Quick Menu</h3>
                <ul className="menu-list">
                    <Link to='/users'>
                    <li className="item">
                        <GroupOutlinedIcon className='icon' />
                        Users
                    </li>
                    </Link>
                    <Link to='/products'>
                    <li className="item">
                    <StorefrontOutlinedIcon className='icon' />
                    Products
                    </li>
                    </Link>
                    <li className="item">
                    <CurrencyRupeeIcon className='icon' />
                    Transactions
                    </li>
                    <li className="item">
                    <LegendToggleIcon className='icon' />
                    Reports
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h3 className="title">Notifications</h3>
                <ul className="menu-list">
                    <li className="item">
                    <MailOutlineIcon className='icon' />
                    Mail
                    </li>
                    <li className="item">
                    <RateReviewOutlinedIcon className='icon' />
                    Feedback
                    </li>
                    <li className="item">
                    <ChatOutlinedIcon className='icon' />
                    Messages
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h3 className="title">Staff</h3>
                <ul className="menu-list">
                    <li className="item">
                    <WorkOutlineIcon className='icon' />
                    Manage
                    </li>
                    <li className="item">
                    <BarChartIcon className='icon' />
                    Analytics
                    </li>
                    <li className="item">
                    <LegendToggleIcon className='icon' />
                    Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
