import React from 'react';

import "./ChartBar.css";

const ChartBar = (props)=>{
    let chartFilledHeight = '0%';

    if(props.maxValue > 0) {
        chartFilledHeight = Math.round((props.value / props.maxValue) * 100 + '%');

    }
    return(
        <div className='chart-bar'>
            <div className=' chart-bar__inner'>
            <div className='chart-bar__fill' 
            style={{height: chartFilledHeight }}>

            </div>
            <div className='chart-bar__label'>
            {props.label}
            </div>
            </div>
        </div>
    )
}

export default ChartBar;