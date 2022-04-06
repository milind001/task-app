

import react, {useState, useEffect} from 'react'; 
import './index.scss';
import * as d3 from 'd3'
import DonutChart from '../../components/Chart/DonutChart';
import axios from '../../resources/axios';
import Widget from '../../components/Widget/Widget';

function UserDashbaord() {
  
  const [data, setData] = useState([]);
  const [widgetData, setWidgetData] = useState([]);

  const username = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`count/${username}`)
      .then(res=> {
        // console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [username]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        // API ID
        const api = "902c8175f68c5e6434de3dc741f3afb2";
        // API URL
        const url =
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
          `lon=${lon}&appid=${api}&units=metric`;

        fetch(url)
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            setWidgetData(data)
          })
          .catch(err => console.log(err))
      });
    }
  }, []);

  // useEffect(() => {

  //   // Create a dataset of pets and the amount of people that own them
  //   let dataSet = [
  //     {subject: "complete", count: 150},
  //     {subject: "incomplete", count: 75},
  //     {subject: "pending", count: 135},
  //     {subject: "total", count: 240}
  //   ]
    
  //   // Bar Chart:
  //     const getMax = () => { // Calculate the maximum value in the DataSet
  //       let max = 0
  //       dataSet.forEach((dt) => {
  //           if(dt.count > max) {max = dt.count}
  //       })
  //       return max
  //     }
      
  //     // Create each of the bars and then set them all to have the same height(Which is the max value)
  //     d3.select('#BarChart').selectAll('div').data(dataSet) 
  //     .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
  //     .append("text")
  //     .attr("text-anchor", "middle")
  //     .text(dt => dt.subject + ": " + dt.count) // label text
  //     .style("color", "#fff") // label color
  //     .transition()
  //     .duration(700)
  //     .style("font-size", "12.5px");
  
  //     //Transition the bars into having a height based on their corresponding count value
  //     d3.select('#BarChart')
  //     .selectAll('.bar')
  //     .transition()
  //     .duration(700)
  //     .style('height', bar => `${bar.count}px`)
  //     .style('width', '80px')
  //     .style('margin-right', '10px')
  //     .delay(300) // Fix their width and margin
      
  // }, [])
  
  let user = localStorage.getItem('username');

  return (
    <>
    <div className='my-profile'>
        <p style={{margin: '0px', color: '#fff'}}>Logged in as: {user.toUpperCase()}</p>
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      {/* <div>
      <div id="BarChart"></div>
      </div> */}
      {data.length>0 && <DonutChart data={data} />}
      {Object.keys(widgetData).length !== 0  ? <Widget widgetData={widgetData} /> : null}
    </div>
    <div className='status'>
        <div><span className="dot col-1"></span> <p>Complete</p></div>
        <div><span className="dot col-2"></span> <p>Incomplete</p></div>
        <div><span className="dot col-3"></span> <p>Pending</p></div>
      </div>
    </>
  );
}

export default UserDashbaord;