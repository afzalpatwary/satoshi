import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Countdown from "react-countdown";
import ReactTooltip from "react-tooltip";
import useSatoshi from "../../hooks/useSatoshi";
import summaryIcon1 from "../../icons/summary1.svg";
import summaryIcon3 from "../../icons/summary3.svg";
import summaryIcon4 from "../../icons/summary4.svg";
import summaryIcon5 from "../../icons/summary5.svg";
import Areachart from "./Areachart";
import DataTable from "./DataTable";
// import { MyDashboardTab } from "../../summaryData";
import Donut from "./Donut";
import './MyDashBoard.css';
import "./MyDashBoard.scss";

const MyDashBoard = () => {

    const {email} = useSatoshi();

    const [isLoading, setIsLoading] = useState(false);

    const [currentEquity, setCurrentEquity] = useState([]);
    
     const [investment, setInvesment] = useState([]);


    // const [time , setTime] = useState([]);


    // useEffect(()=>{

    //     setIsLoading(true);

    //     fetch('https://satoshi-api.onrender.com/table9 ')
    //     .then(res=>res.json())
    //     .then(data => {
    //         setTime(data)
    //         setIsLoading(false);
    //     });

    //   },[])


      useEffect(()=>{

        setIsLoading(true);

        fetch('https://satoshi-api.onrender.com/table7')
        .then(res=>res.json())
        .then(data => {
            setCurrentEquity(data)

            });
            setIsLoading(false);
      },[])

    //   console.log(currentEquity);



      useEffect(()=>{

        setIsLoading(true);

        fetch('https://satoshi-api.onrender.com/table2')
        .then(res=>res.json())
        .then(data => {
            setInvesment(data)
            });
            setIsLoading(false);
      },[])

  
  return (
      <React.Fragment>
          <div className="summaryItemWrapper">
              <div className="summary">
                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon1} className="img-fluid" alt="" />
                          <div>
                              <p className="mb-0 summaryPra">Next Weekly Buy</p>
                              <h2 className="summaryHeading mb-0 ">
                                  <div className={"d-flex"}>
                                      <div>
                                          1 day <Countdown daysInHours={true} date={Date.now() + 30000000} />
                                           
                                      </div>
                                  </div>
                              </h2>
                          </div>
                      </div>
                  </div>

                  {/* <div className="summaryItem d-flex align-items-center">
                     <div className="d-flex align-items-center flex-wrap gap-3">
                         <img src={summaryIcon2} className="img-fluid" alt="" />
                         <div>
                             <p className="mb-0 summaryPra">Next Month Buy</p>
                             <h2 className="summaryHeading mb-0 ">
                             {  !isLoading &&
                             
                                  time.filter( id => id?.theid === 2).map(t =>(
                                                <Countdown key={t.theid} date={(t?.time)} />
                                          ))}
                                {
                                            isLoading &&  <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                        }
                             </h2>
                         </div>
                     </div>
                  </div> */}

                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon3} className="img-fluid" alt="" />
                          <div>
                              <p data-tip="React-tooltip" className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                                  Current Equty Value
                                  <FontAwesomeIcon className={"mx-2"} icon={faCircleInfo} data-tip data-for="_info" />
                              </p>

                              <ReactTooltip className={"customTheme"} id="_info" type="dark">
                                  <span>
                                      This is an approximation of
                                      <br /> when the bot will buy, not an <br /> exact time.
                                  </span>
                              </ReactTooltip>

                              <h2 className="summaryHeading mb-0 " style={{ color: "#17BD8D" }}>
                                  {  !isLoading &&
                                      currentEquity.filter( em => em?.clientname === email).reverse().map(item => (
                                          <span key={item?.time}>{Math.ceil(item?.currentvalue)}</span>
                                      )).slice(0,1)
                                  } 

{
                                            isLoading &&  <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                        }

                                  <span className="fs-6"> USD</span>
                              </h2>
                          </div>
                      </div>
                  </div>

                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon4} className="img-fluid" alt="" />
                          <div>
                              <p className="mb-0 summaryPra">
                                  Total Investment
                              </p>
                              <h2 className="summaryHeading mb-0 " style={{ color: "#FFA114" }}>
                                  { !isLoading &&
                                     <>
                                      {
                                        investment.filter( em => em?.clientname === email && em?.estequity !== null && em?.coins !== []).reverse().map(item => (
                                            <span key={item?.time}>{Math.ceil(item?.estequity * 0.95)}</span>
                                        )).slice(0,1)
                                    }
                                    
                                    <span className="fs-6"> USD</span>
                                    </>
                                  }
                                  {
                                     isLoading &&  <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                        }
                              </h2>
                          </div>
                      </div>
                  </div>
                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center flex-wrap gap-3">
                          <img src={summaryIcon5} className="img-fluid" alt="" />
                          <div>
                              {/* <p className="mb-0 summaryPra"></p> */}
                              <p data-tip="React-tooltip" className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                                  Profit Against USD
                                  <FontAwesomeIcon className={"mx-2"} icon={faCircleInfo} data-tip data-for="Index" />
                              </p>

                              <ReactTooltip className={"customThemes"} id="Index" type="dark">
                                  <span>
                                      Satoshis Index has historically underperformed in <br /> bear markets but substantially outperforms in <br /> bull markets, resulting in superior gains.
                                  </span>
                              </ReactTooltip>

                              <h2 className="summaryHeading mb-0 ">-9.7</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <div className="row">
                  <div className="col-lg-6 mb-4">
                      <div className="DonutChart mb-4 ">
                          <h1 className="DonutChartHeading mb-4">Current Equity</h1>
                          <div className="DonutWrapper pb-4">
                              <div className="d-flex justify-content-center d-md-block">
                                  <Donut />
                              </div>
                          </div>
                      </div>
                      <div className="DonutChart">
                          <h1 className="DonutChartHeading performance mb-4">Bot Performance</h1>
                          <div className="botPerformanceChart">
                              <div>
                                  <Areachart />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                      <DataTable />
                  </div>
              </div>
          </div>

      </React.Fragment>
  );
}

export default MyDashBoard ;
