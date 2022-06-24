import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './featuredinfo.scss'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="item">
            <span className="title">Revenue</span>
            <div className="money-container">
                <span className="money">₹ 2,145</span>
                <span className="moneyrate">-10.5 <ArrowDownwardIcon className='icons negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="item">
            <span className="title">Sales</span>
            <div className="money-container">
                <span className="money">₹ 2,145</span>
                <span className="moneyrate">-10.5 <ArrowDownwardIcon className='icons negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="item">
            <span className="title">Cost</span>
            <div className="money-container">
                <span className="money">₹ 2,145</span>
                <span className="moneyrate">+10.5 <ArrowUpwardIcon className='icons positive'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo