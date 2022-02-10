import React from "react";
import garden from "../../assets/images/garden.png";
import cammcan from "../../assets/images/cammcan.png";
import mission from "../../assets/images/mission_dispensaries.png";
import neta from "../../assets/images/neta.png";
import rise from "../../assets/images/rise.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { arr } from "../../assets/data/Book";
export default function Partners({ isHome }) {
  const [code, setCode] = useState();
  const [despensaries, setDespensaries] = useState("");
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("garden-remedies-newton");
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const handleClick = () => {
    const obj = arr.find((el) => el["Zip Code"] == code);
    setDespensaries(obj.Dispensaries);
  };

  return (
    <div className={isHome ? "" : "main_container padding_top"}>
      <div className="partner">
        <div className="auto_container">
          <div className="partner_inner">
            <div className="custom_heading">
              <h3>Our Partners</h3>
              <h2>Our Partners Services Are Live!</h2>
            </div>
            <div className="partner_list">
              <ul>
                <li>
                  <div onClick={clickHandler} className="partner_main">
                    <span>
                      <img src={garden} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={neta} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={rise} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Your Green Package is making Cannabis Deliveries in the
                      Greater Boston, Newton, and Northamptonarea.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={{ height: "30%" }} className="partner_main">
                    <span>
                      <img src={mission} alt="Logo" />
                    </span>
                    <h4>Garden Remedies</h4>
                    <p>
                      Dedicated to bringing world-class cannabis products to
                      Massachusetts, CommCan is the Commonwealth's true
                      "home-grown" cannabis company. Family-owned and operated
                      by native Massachusetts residents without any outside
                      consultants, investors or management companies.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="partner_main">
                    <span>
                      <img src={cammcan} alt="Logo" />
                    </span>
                    <h4>CommCan</h4>
                    <p>
                      Dedicated to bringing world-class cannabis products to
                      Massachusetts, CommCan is the Commonwealth's true
                      "home-grown" cannabis company. Family-owned and operated
                      by native Massachusetts residents without any outside
                      consultants, investors or management companies.
                    </p>
                    <div className="my_btn">
                      <a href="" className="custom_btn">
                        Join our List
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custom_search">
              <label htmlFor="">
                See which Partner delivers to your Zipcode
              </label>
              <div className="custom_searchField">
                <input
                  onChange={handleChange}
                  value={code}
                  type="number"
                  placeholder="Enter Your Zipcode"
                />
                <button onClick={handleClick} className="custom_btn">
                  Search
                </button>
              </div>
              {despensaries && (
                <span>
                  <b>{despensaries}</b> delivers to your area
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
