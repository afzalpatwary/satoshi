import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
export default class BarChart2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Servings",
                    data: [80, 70, 55, 48, 38, 27, 25, 15, 8, 5],
                },
            ],
            options: {
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
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: "10%",
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
                    // gradient: {
                    //     shade: "light",
                    //     type: "vertical",
                    //     shadeIntensity: 0.2,
                    //     gradientToColors: undefined,
                    //     inverseColors: false,
                    //     opacityFrom: 0.85,
                    //     opacityTo: 0.85,
                    //     stops: [10, 5, 100],
                    // },

                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#A30DFF",
                                opacity: 1,
                            },
                            {
                                offset: 20,
                                color: "#A30DFF",
                                opacity: 1,
                            },
                            {
                                offset: 60,
                                color: "#0D99FF",
                                opacity: 1,
                            },
                            {
                                offset: 100,
                                color: "#0D99FF",
                                opacity: 1,
                            },
                        ],
                    },
                },
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={260} />
                </div>
            </div>
        );
    }
}
