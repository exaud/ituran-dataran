import React from "react";

type Props = {
  className : string,
}

function DashboardsIcon( props : Props) {
    return (
      <div className={`${props.className}`}>
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
          <g id="heroicons-mini/squares-plus" xmlns="http://www.w3.org/2000/svg">
            <g id="Vector_2">
              <path d="M2.4,5.1c0,-1.491 1.2088,-2.7 2.7,-2.7h3c1.4912,0 2.7,1.209 2.7,2.7v3c0,1.491 -1.2088,2.7 -2.7,2.7h-3c-1.4912,0 -2.7,-1.209 -2.7,-2.7z" fill="currentColor" />
              <path d="M2.4,15.9c0,-1.491 1.2088,-2.7 2.7,-2.7h3c1.4912,0 2.7,1.209 2.7,2.7v3c0,1.491 -1.2088,2.7 -2.7,2.7h-3c-1.4912,0 -2.7,-1.209 -2.7,-2.7z" fill="currentColor" />
              <path d="M13.2,5.1c0,-1.491 1.2088,-2.7 2.7,-2.7h3c1.4912,0 2.7,1.209 2.7,2.7v3c0,1.491 -1.2088,2.7 -2.7,2.7h-3c-1.4912,0 -2.7,-1.209 -2.7,-2.7z" fill="currentColor" />
              <path
                d="M18.3,14.1c0,-0.497 -0.403,-0.9 -0.9,-0.9c-0.4971,0 -0.9,0.403 -0.9,0.9v2.4h-2.4c-0.4971,0 -0.9,0.403 -0.9,0.9c0,0.497 0.4029,0.9 0.9,0.9h2.4v2.4c0,0.497 0.4029,0.9 0.9,0.9c0.497,0 0.9,-0.403 0.9,-0.9v-2.4h2.4c0.497,0 0.9,-0.403 0.9,-0.9c0,-0.497 -0.403,-0.9 -0.9,-0.9h-2.4z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
  export default DashboardsIcon