import React from 'react';
import Echarts from 'echarts-for-react';

export default function ChartComponent() {

    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    }

    return (
        <Echarts 
            notMerge={true}
            option={option}
        />
    )
}