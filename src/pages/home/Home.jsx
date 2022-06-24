import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import WidgetLarge from '../../components/widgets/widgetlarge/WidgetLarge'
import WidgetSmall from '../../components/widgets/widgetsmall/WidgetSmall'
import { data } from '../../dummyData'
import './home.scss'


function HomePage() {
  return (
    <div className='homepage'>
        <FeaturedInfo/>
        <Chart data={data} dataKey="active user" grid title="User Analytics"/>
        <div className="home-widgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default HomePage