import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBarButtons.css'

function LeftBarButtons() {
  return (
    <div className="">
      <h3>D-AMS</h3>
      <ul className='left-bar-button-list'>
        <li>
          <Link to="/models/khoa-y" className='left-bar-button'>Dashboard</Link>
        </li>
        <li>
          <Link to="/models/khoa-y" className='left-bar-button left-bar-button-selected'>Property</Link>
        </li>
        <li>
          <Link to="/manager" className='left-bar-button'>Manager</Link>
        </li>
        <li>
          <Link to="/client" className='left-bar-button'>Client</Link>
        </li>
        <li>
          <Link to="/resident" className='left-bar-button'>Resident</Link>
        </li>
        <li>
          <Link to="/listing" className='left-bar-button'>Listing</Link>
        </li>
        <li>
          <Link to="/setting" className='left-bar-button'>Setting</Link>
        </li>
        <li>
          <a href="https://visualsensegroup.com/virtual-tour/khoa-y" className='left-bar-button' target="_blank" rel="noopener noreferrer">360 Visiting</a>
        </li>
      </ul>
    </div>
  );
}

export default LeftBarButtons;
