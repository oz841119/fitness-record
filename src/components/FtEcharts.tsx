import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
export default function FtEcharts() {
    const chart = useRef<HTMLDivElement>(null)
    useEffect(() => { // 渲染圖表邏輯
        const myChart = echarts.init(chart.current!)
        const myChartOption = {
            title: {
                text: '槓鈴臥推',
                
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: ['2021-01-01','2021-01-03','2021-01-05','2021-01-07','2021-01-09','2021-01-11','2021-01-13','2021-01-15']
            },
            yAxis: [
                {},
                {
                    min: (value: {min: number}) => value.min / 1.05
                }
            ],
            series: [
                {
                    name: '總訓練容量',
                    type: 'bar',
                    data: [2000, 2100, 2000, 2100, 2200, 2150, 2200, 2300],
                    scale: true,
                    yAxisIndex: 0,
                },
                {
                    name: '平均重量',
                    type: 'line',
                    data: [50, 51, 55, 53, 55, 55, 57, 59],
                    scale: true,
                    yAxisIndex: 1,
                },
            ]
        }
        myChart.setOption(myChartOption)
    }, [])
    
    return (
        <div style={{width: '800px', height: '400px'}} ref={chart}></div>
    )
}