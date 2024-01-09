import React from "react";

type Props = {
  className : string,
}

function UKFlagIcon(props : Props) : JSX.Element {
  return (
    <div className={`${props.className}`}>
      <svg fill="none" viewBox="0 0 21 14.1478" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
        <defs>
          <clipPath id="clip2_840_3345" xmlns="http://www.w3.org/2000/svg">
            <rect height="20" width="20" fill="white" transform="translate(0.5, -2.9131)" />
          </clipPath>
        </defs>
        <g id="Flag Pack" clipPath="url(#clip2_840_3345)" xmlns="http://www.w3.org/2000/svg">
          <path
            id="Vector_8"
            d="M20.16,13.6386h-19.32c-0.19,0 -0.34,-0.1544 -0.34,-0.3449v-12.4137c0,-0.1904 0.15,-0.3449 0.34,-0.3449h19.32c0.19,0 0.34,0.1545 0.34,0.3449v12.4137c0,0.1905 -0.15,0.3449 -0.34,0.3449z"
            fill="#41479B"
          />
          <path
            id="Vector_9"
            d="M20.5,0.88c0,-0.1904 -0.15,-0.3449 -0.34,-0.3449h-1.55l-6.39,4.1855v-4.1855h-3.44v4.1855l-6.39,-4.1855h-1.55c-0.19,0 -0.34,0.1545 -0.34,0.3449v0.8918l5.48,3.5909h-5.48v3.4483h5.48l-5.48,3.5909v0.8918c0,0.1905 0.15,0.3449 0.34,0.3449h1.55l6.39,-4.1854v4.1854h3.44v-4.1854l6.39,4.1854h1.55c0.19,0 0.34,-0.1544 0.34,-0.3449v-0.8918l-5.48,-3.5909h5.48v-3.4483h-5.48l5.48,-3.5909z"
            fill="#F5F5F5"
          />
          <g id="Group">
            <path id="Vector_10" d="M20.5,6.0524h-8.97v-5.5173h-2.06v5.5173h-8.97v2.0689h8.97v5.5173h2.06v-5.5173h8.97z" fill="#FF4B55" />
            <path id="Vector_11" d="M7.49,8.811l-6.98,4.5311c0.02,0.1666 0.16,0.2965 0.33,0.2965h0.48l7.44,-4.8275h-1.27z" fill="#FF4B55" />
            <path id="Vector_12" d="M14.03,8.811h-1.27l7.43,4.8205c0.17,-0.0185 0.31,-0.1598 0.31,-0.3378v-0.2835z" fill="#FF4B55" />
            <path id="Vector_13" d="M0.5,1.2607l6.32,4.1021h1.27l-7.39,-4.794c-0.12,0.0548 -0.2,0.1726 -0.2,0.3112z" fill="#FF4B55" />
            <path id="Vector_14" d="M13.49,5.3627l7,-4.5421c-0.03,-0.161 -0.16,-0.2855 -0.33,-0.2855h-0.5l-7.44,4.8276z" fill="#FF4B55" />
          </g>
        </g>
      </svg>
    </div>
  );
}
export default UKFlagIcon