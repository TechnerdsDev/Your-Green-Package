import React from "react";

export default function Banner({ scroller }) {
  return (
    <div className="main_banner">
      <div className="auto_container">
        <div className="main_bannerInner">
          <div className="banner_heading">
            <h1>Cannabis Delivery Has Arrived!</h1>
            <h4>
              Your Green Package is making Cannabis Deliveries in the Greater
              Boston, Newton, and Northampton area.
            </h4>
            <div onClick={scroller} className="my_btn">
              <a className="custom_btn  ">Join our List</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
