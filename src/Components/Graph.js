import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';




export default function Graph() {
    const [globalData, setGlobalDData] = useState({});
    
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/summary")
            let data = await response.json();
            
            //Deleting extra source
            setGlobalDData(data.Global)
            console.log(data.Global)
        }
        getData();
    }, [])
    console.log(Object.values(globalData))
    const data = {
                labels: Object.keys(globalData),
                datasets: [{
                    data: Object.values(globalData),
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#d500f9',
                    '#512da8',                   
                    '#ff9800'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#d500f9',
                        '#cddc39',
                        '#ff9800'
                    ]
                }]
            };
    return (
      <div>
        <h2 className="Title">COVID19 Pie Chart</h2>
        <Pie data={data} height={100}/>
      </div>
    );
  }
