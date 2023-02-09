import React from 'react';


const AdminControlConfig = () => {
  return (
    <React.Fragment>
      <div className={"row"}>
        <div className="col-lg-6">
          <h3>Top Coins</h3>
          <input type="number" placeholder={"16"}/>
        </div>
        <div className="col-lg-6">
          <h3>Top n Coin  List</h3>
          <div className="searchbox-wrap">
            <input type="text" placeholder="Search for something..."/>
              <button><span>Send</span></button>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className="col-lg-6">1</div>
        <div className="col-lg-6">2</div>
      </div>
    </React.Fragment>
  );
};

export default AdminControlConfig;