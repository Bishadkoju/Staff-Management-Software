import React from "react";
import Chart from "react-apexcharts";

const EarningGraph = (props) => {
  const state = {
    series: [
      {
        name: "Salary",
        data: [110, 541, 235, 551, 349, 662, 269, 591, 148, 0, 0, 0],
      },
      {
        name: "Commission",
        data: [100, 400, 535, 201, 429, 732, 649, 191, 128, 0, 0, 0],
      },
      {
        name: "Bonus",
        data: [300, 420, 354, 512, 449, 492, 909, 491, 928, 0, 0, 0],
      },
    ],
    chart: {
      height: 350,
      width: 1000,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Earning of the year 2021",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };

  const displayGraph = () => {
    if(state){
      return <Chart
      options={state.options}
      series={state.series}
      type={state.chart.type}
      width={state.chart.width}
      height={state.chart.height}
    />
    }
  }

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {displayGraph()}
        </div>
      </div>
    </div>
  );
};

export default EarningGraph;
