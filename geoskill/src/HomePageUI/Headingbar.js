import React from "react";

function Headingbar (){
    return (
        <div>
        <svg id="bar" width="1843" height="72" viewBox="0 0 1843 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path d="M1718.13 55.5821H76.0507L7.22718 0.41791H1835.11L1718.13 55.5821Z" fill="#B6BBC6"/>
              <path d="M8.45409 0.835821L76.2349 55.1642H1718.01L1833.22 0.835821H8.45409ZM6 0H1837L1718.24 56H75.8663L6 0Z" fill="#707070"/>
              </g>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="1843" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="10"/>
              <feGaussianBlur stdDeviation="3"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.356863 0 0 0 0 0.552941 0 0 0 0.545 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
        </svg>
        </div> 
    );
}

export default Headingbar;