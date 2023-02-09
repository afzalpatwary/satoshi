import React from 'react';
import {Link} from "react-router-dom";
import "./StepOne.css";
import form_timeline_one from "../../../../assests/images/form_timeline_one.png"

const StepOne = () => {
    return (
        <React.Fragment>
            <div className="multi_step_form_head_content">
                <p>Connect your API Key from <span style={{color: "#0D99FF"}}>Binance</span> or <span
                  style={{color: "#0D99FF"}}>Coinbase</span>
                </p>
                <div className="form_timeline w-100 my-3">
                    <img className={"img-fluid"} src={form_timeline_one} alt="form_timeline"/>
                </div>
                <Link className={"connect_api"} to={"/documentation"}>
                    How to connect API key? How it Work?
                </Link>
                <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
            </div>

            <div className="multi_step_form_form">
                <div className="mb-3">
                    <label className="form-label text-white">Select Exchange</label>
                    <div className="select_exchange_button">
                        <button className={"binance"}>Binance</button>
                        <button className={"coinbase"}>Coinbase</button>
                    </div>
                    <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StepOne;