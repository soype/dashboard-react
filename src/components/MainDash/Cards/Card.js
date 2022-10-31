import React, {useState} from 'react'

import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from "react-apexcharts";
import {UilTimes} from "@iconscout/react-unicons";
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {
        expanded? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ):
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      }
    </AnimateSharedLayout>
  )
}


// Compact Card

const CompactCard = ({param, setExpanded}) => {
  const Png = param.png;
  return(
    <motion.div className="compact-card"
    style={{
      background : param.color.background,
      boxShadow: param.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId='exandableCard'
    >
      <div className="radial-bar">
        <CircularProgressbar 
          value={param.barValue}
          text={`%${param.barValue}`}
        />
        <span className="card-title">{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

const ExpandedCard = ({param, setExpanded}) => {

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
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
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return(
    <motion.div 
      className="expanded-card"
      style={{
        background : param.color.background,
        boxShadow: param.color.boxShadow
      }}
      layoutId='exandableCard'
    >
      <div className='expanded-card-close'>
        <UilTimes onClick={setExpanded} />
      </div>
      <span className='expanded-card-title'>{param.title}</span>
      <div className="chart-container">
        <Chart series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  )
}

export default Card