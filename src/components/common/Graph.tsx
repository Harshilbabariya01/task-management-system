import React from 'react'
import Chart from 'react-apexcharts';

const Graph = (props: any) => {
    return (
        <div className="mixed-chart my-5 container">
            <Chart
                options={props.option}
                series={props.series}
                type="bar"
                width="1100"
                height="500"
            />
        </div>
    )
}

export default Graph