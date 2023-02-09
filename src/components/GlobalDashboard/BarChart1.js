import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import useSatoshi from '../../hooks/useSatoshi';



const BarChart1 = () => {

    const {email, users} = useSatoshi()

    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories]= useState([]);

    const [values, setValues]= useState([]);



    useEffect(()=>{
        setIsLoading(true);
    
        const category = [];
        const value = [];
    
    
        const getData= async()=>{
            const reqData= await fetch("https://satoshi-api.onrender.com/table8");
            const resData= await reqData.json();
            
            resData.filter( em => em?.clientname === email).reverse()[0]?.coins.map(item =>  {
                
                category.push(item.s)
                value.push(item.q * item.p)
                
               })
    
               setCategories(category)
               setValues(value)
               setIsLoading(false);
            
        }
    
        getData()
    },[])
        

        return (
            <div>
                <div id="chart" className='barChartWrapper'>
                    <ReactApexChart 
                    options = {
                        {
                            annotations: {
                                points: [
                                    {
                                        x: "Bananas",
                                        seriesIndex: 0,
                                        label: {
                                            borderColor: "#775DD0",
                                            offsetY: 0,
                                            style: {
                                                color: "#fff",
                                                background: "#775DD0",
                                            },
                                            text: "Bananas are good",
                                        },
                                    },
                                ],
                            },
                            chart: {
                                height: 180,
                                type: "bar",
                                background: "#191A1D",
            
                                toolbar: {
                                    show: false,
                                },
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                width: 0,
                            },
                            grid: {
                                show: true,
                                borderColor: "#202124",
                                strokeDashArray: 0,
                                position: "back",
                                xaxis: {
                                    lines: {
                                        show: true,
                                    },
                                },
                                yaxis: {
                                    lines: {
                                        show: true,
                                    },
                                },
                            },
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    columnWidth: "10px",
                                    borderRadius: 6,
                                    colors: {
                                        ranges: [
                                            {
                                                from: 0,
                                                to: 0,
                                                color: undefined,
                                            },
                                        ],
                                        backgroundBarColors: ["#202124"],
                                        backgroundBarOpacity: 1,
                                        backgroundBarRadius: 4,
                                    },
                                },
                            },
                            xaxis: {
                                labels: {
                                    rotate: -45,
                                },
                            
                                axisBorder: {
                                    show: false,
                                },
                                axisTicks: {
                                    show: false,
                                },
                                categories: ["BTC-USD", "ETH-USD", "SOL-USD", "SHIB-USD", "AVAX-USD", "ADA-USD", "JASMY-USD", "MATIC-USD", "ALGO-USD", "LINK-USD"],
                                tickPlacement: "on",
                            },
                            yaxis: {
                                show: false,
                            },
            
                            fill: {
                                type: "gradient",
            
                                gradient: {
                                    type: "vertical",
                                    shadeIntensity: 1,
                                    opacityFrom: 0.7,
                                    opacityTo: 0.9,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#17BD8D",
                                            opacity: 1,
                                        },
                                        {
                                            offset: 20,
                                            color: "#17BD8D",
                                            opacity: 1,
                                        },
                                        {
                                            offset: 60,
                                            color: "#FF4E3E",
                                            opacity: 1,
                                        },
                                        {
                                            offset: 100,
                                            color: "#FF4E3E",
                                            opacity: 1,
                                        },
                                    ],
                                },
                            },
                        }
                    }

                    series={
                        [
                            {
                                name: "Servings",
                                data: [80, 70, 55, 48, 38, 27, 25, 15, 8, 5],
                            },
                        ]
                    } 
                    type="bar" 
                    height={260} />
                </div>
            </div>
        );
    }

    export default BarChart1;