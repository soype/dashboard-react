import React from 'react'
import Chart from 'react-apexcharts';

const Reviews = () => {

  const reviews = [
    {
      name: "Reviews",
      data: [10,40,30,60,35,90,80],
    },
  ]

  const options = {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-09-19T00:00:00.000Z",
          "2022-09-19T01:30:00.000Z",
          "2022-09-19T02:30:00.000Z",
          "2022-09-19T03:30:00.000Z",
          "2022-09-19T04:30:00.000Z",
          "2022-09-19T05:30:00.000Z",
          "2022-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    }

  return (
    <div className="reviews">
      <Chart series={reviews} type='area' options={options}>
        
      </Chart>
    </div>
  )
}

export default Reviews