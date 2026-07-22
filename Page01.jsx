import React, { useState } from 'react';
import './page01.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCircleQuestion, faEllipsisV, faArrowUpArrowDown, faTruck } from '@fortawesome/free-solid-svg-icons';

const Page01 = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [greetingName, setGreetingName] = useState('User');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleLogin = () => {
    const userName = username.trim() || 'User';
    const phoneNumber = phone.trim();
    
    if (userName && phoneNumber) {
      setGreetingName(userName);
      console.log(`Logged in as ${userName} (${phoneNumber})`);
      setUsername('');
      setPhone('');
    } else {
      alert('Please enter username and phone');
    }
  };

  const handleConfirm = () => {
    const from = fromLocation.trim();
    const to = toLocation.trim();
    
    if (from && to) {
      console.log('Booking confirmed:', { from, to });
      setFromLocation('');
      setToLocation('');
    } else {
      alert('Please enter from and to locations');
    }
  };

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter') {
      callback();
    }
  };

  return (
    <div>
      <h2 className="title">Transmaa</h2>
      <h1 className="custmr">
        <ol>
          <li>Customer:</li>
        </ol>
      </h1>

      <div className="container">
        {/* LEFT SIDE (LOGIN) */}
        <div className="main-a">
          <div className="left">
            <div className="card">
              <img src="logo.jpeg" alt="logo" className="logo-btn" />
              <h3>Welcome <br /> 💖</h3>
            </div>

            {/* Name Field */}
            <div>
              <div className="form-group">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleLogin)}
                />
              </div>
              <br />

              {/* Phone Field */}
              <div className="form-group">
                <span>&nbsp;&nbsp;&nbsp;+91 &nbsp;<b>|</b></span>&nbsp;
                <FontAwesomeIcon icon={faPhone} />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleLogin)}
                />
              </div>
            </div>
          </div>

          <button className="login-btn" id="loginBtn" onClick={handleLogin}>
            <i className="fa-duotone fa-solid fa-right-to-bracket"></i>Login
          </button>
        </div>

        {/* RIGHT SIDE (APP UI) */}
        <div className="main-b">
          <div className="que">
            <img src="logo 02.jpeg" alt="logo" className="logo-butn" />
            <FontAwesomeIcon icon={faCircleQuestion} />
          </div>

          <div className="right">
            <div className="sai">
              <h4 id="greeting">Hi {greetingName}</h4>
            </div>

            <div className="top-box">
              <div className="input-box">
                <label className="label-from">From,</label> <br /><br />
                <img src="load.jpeg" alt="load" className="load" />
                <input
                  type="text"
                  id="fromLocation"
                  placeholder="Load from..."
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleConfirm)}
                />
              </div>
              <br />

              <div className="input-box">
                <FontAwesomeIcon icon={faEllipsisV} aria-hidden="true" />
                <label className="label-to">To, </label>
                <FontAwesomeIcon icon={faArrowUpArrowDown} />
                <br />
                <img src="unload.jpeg" alt="unload" className="unload" />
                <input
                  type="text"
                  id="toLocation"
                  placeholder="Unload to..."
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleConfirm)}
                />
              </div>

              <button className="confirm-btn" id="confirmBtn" onClick={handleConfirm}>
                <b>Confirm</b>
              </button>
            </div>

            <div className="offer">
              <h2>%</h2>
              <h3>10% off on 2 Wheeler & Trucks</h3>
              <p>Subscribe to Porter Gold Now!</p>
            </div>
            <br />

            <div className="sale">
              <p>Special offer</p>
              <h3>SALE</h3>
              <h3>UP TO 50% OFF</h3>
              <p>ONLY <br /> TODAY</p>
              <button type="button">BUY NOW</button>
            </div>

            <div className="delivery">
              <img src="delivery.jpeg" alt="delivery" className="sale" />
              <h3>DELIVERY</h3>
              <br />
              <div className="bottom">
                <hr className="hr" />
                <button className="butn-botm">
                  <FontAwesomeIcon icon={faTruck} /> <br />&nbsp;Loads
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="text">
        <ul>
          <li>I want to shift my house, so I want a truck for moving household <br /> items. So, I am choosing Transmaa</li>
          <li>Here I am the Customer. I am logging in using Phone number and <br /> otp.</li>
          <li>I am selecting <b>From location as Sircilla and To location as Hitech <br /> city, </b>Hyderabad. And clicking on the confirm button.</li>
          <li><b>Next, I have to select the shifting date, <b style={{ color: 'red' }}>time,</b> type of goods and <br /> select a <b style={{ color: 'red' }}>truck type</b>.</b></li>
        </ul>

        <ol>
          <li>Timber/Plywood/Laminate</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Electrical / Electronics / Home Appliances</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; General</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Building/Construction</li>
        </ol>
      </div>
    </div>
  );
};

export default Page01;
