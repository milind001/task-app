

import react, {useState} from 'react'; 
import './index.scss';
import * as d3 from 'd3'
import {useEffect} from 'react'
import DonutChart from '../../components/Chart/DonutChart';

function UserDashbaord() {
  
  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 6 }
  ];

  useEffect(() => {

    // Create a dataset of pets and the amount of people that own them
    let dataSet = [
      {subject: "complete", count: 150},
      {subject: "incomplete", count: 75},
      {subject: "pending", count: 135},
      {subject: "total", count: 240}
    ]
    // Generate a p tag for each element in the dataSet with the text: Subject: Count 
    // d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ": " + dt.count)
    
    // Bar Chart:
      const getMax = () => { // Calculate the maximum value in the DataSet
        let max = 0
        dataSet.forEach((dt) => {
            if(dt.count > max) {max = dt.count}
        })
        return max
      }
      
      // Create each of the bars and then set them all to have the same height(Which is the max value)
      d3.select('#BarChart').selectAll('div').data(dataSet) 
      .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
      .append("text")
      .attr("text-anchor", "middle")
      .text(dt => dt.subject + ": " + dt.count) // label text
      .style("color", "#fff") // label color
      .transition()
      .duration(700)
      .style("font-size", "12.5px");
  
      //Transition the bars into having a height based on their corresponding count value
      d3.select('#BarChart')
      .selectAll('.bar')
      .transition()
      .duration(700)
      .style('height', bar => `${bar.count}px`)
      .style('width', '80px')
      .style('margin-right', '10px')
      .delay(300) // Fix their width and margin
      
  }, [])
  
  let user = localStorage.getItem('username');

  return (
    <>
    <div className='my-profile'>
        <p style={{margin: '0px', color: '#fff'}}>Logged in as: {user.toUpperCase()}</p>
    </div>
    <div style={{display: 'flex'}}>
      <div>
      {/* <div id="pgraphs"></div>  */}
      <div id="BarChart"></div>
      </div>
      <DonutChart data={data} />
    </div>
    </>
  );
}

export default UserDashbaord;