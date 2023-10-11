import React from "react";

type Props = {
  className : string,
}

function Logo(props : Props) : JSX.Element {
    return (
      <div className={`${props.className}`}>
        <svg width="150" height="80" viewBox="0 0 87 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.2283 23.9496C26.1591 23.9496 26.9136 23.1945 26.9136 22.2631C26.9136 21.3317 26.1591 20.5767 25.2283 20.5767C24.2975 20.5767 23.543 21.3317 23.543 22.2631C23.543 23.1945 24.2975 23.9496 25.2283 23.9496Z" fill="#97C93D" />
          <path d="M15.2752 6.87682C16.2059 6.87682 16.9605 6.12177 16.9605 5.19037C16.9605 4.25896 16.2059 3.50391 15.2752 3.50391C14.3444 3.50391 13.5898 4.25896 13.5898 5.19037C13.5898 6.12177 14.3444 6.87682 15.2752 6.87682Z" fill="#00A8E3" />
          <path d="M20.4646 6.87682C21.3954 6.87682 22.1499 6.12177 22.1499 5.19037C22.1499 4.25896 21.3954 3.50391 20.4646 3.50391C19.5338 3.50391 18.7793 4.25896 18.7793 5.19037C18.7793 6.12177 19.5338 6.87682 20.4646 6.87682Z" fill="#00A8E3" />
          <path d="M15.2902 11.3368C16.3139 11.3368 17.1438 10.5063 17.1438 9.48186C17.1438 8.45742 16.3139 7.62695 15.2902 7.62695C14.2664 7.62695 13.4365 8.45742 13.4365 9.48186C13.4365 10.5063 14.2664 11.3368 15.2902 11.3368Z" fill="#00A8E3" />
          <path d="M20.5066 11.2367C21.4751 11.2367 22.2602 10.451 22.2602 9.48188C22.2602 8.51271 21.4751 7.72705 20.5066 7.72705C19.5381 7.72705 18.7529 8.51271 18.7529 9.48188C18.7529 10.451 19.5381 11.2367 20.5066 11.2367Z" fill="#00A8E3" />
          <path d="M15.2482 15.4222C16.2719 15.4222 17.1018 14.5917 17.1018 13.5673C17.1018 12.5429 16.2719 11.7124 15.2482 11.7124C14.2244 11.7124 13.3945 12.5429 13.3945 13.5673C13.3945 14.5917 14.2244 15.4222 15.2482 15.4222Z" fill="#00A8E3" />
          <path d="M20.4636 15.3222C21.4321 15.3222 22.2173 14.5365 22.2173 13.5673C22.2173 12.5982 21.4321 11.8125 20.4636 11.8125C19.4951 11.8125 18.71 12.5982 18.71 13.5673C18.71 14.5365 19.4951 15.3222 20.4636 15.3222Z" fill="#00A8E3" />
          <path d="M15.2482 19.5887C16.2719 19.5887 17.1018 18.7583 17.1018 17.7338C17.1018 16.7094 16.2719 15.8789 15.2482 15.8789C14.2244 15.8789 13.3945 16.7094 13.3945 17.7338C13.3945 18.7583 14.2244 19.5887 15.2482 19.5887Z" fill="#00A8E3" />
          <path d="M20.4636 19.4887C21.4321 19.4887 22.2173 18.703 22.2173 17.7338C22.2173 16.7647 21.4321 15.979 20.4636 15.979C19.4951 15.979 18.71 16.7647 18.71 17.7338C18.71 18.703 19.4951 19.4887 20.4636 19.4887Z" fill="#00A8E3" />
          <path d="M15.2482 23.807C16.2719 23.807 17.1018 22.9765 17.1018 21.9521C17.1018 20.9276 16.2719 20.0972 15.2482 20.0972C14.2244 20.0972 13.3945 20.9276 13.3945 21.9521C13.3945 22.9765 14.2244 23.807 15.2482 23.807Z" fill="#00A8E3" />
          <path d="M20.4636 23.7069C21.4321 23.7069 22.2173 22.9213 22.2173 21.9521C22.2173 20.9829 21.4321 20.1973 20.4636 20.1973C19.4951 20.1973 18.71 20.9829 18.71 21.9521C18.71 22.9213 19.4951 23.7069 20.4636 23.7069Z" fill="#00A8E3" />
          <path d="M15.2482 27.9896C16.2719 27.9896 17.1018 27.1591 17.1018 26.1347C17.1018 25.1103 16.2719 24.2798 15.2482 24.2798C14.2244 24.2798 13.3945 25.1103 13.3945 26.1347C13.3945 27.1591 14.2244 27.9896 15.2482 27.9896Z" fill="#00A8E3" />
          <path d="M20.4636 27.8895C21.4321 27.8895 22.2173 27.1039 22.2173 26.1347C22.2173 25.1655 21.4321 24.3799 20.4636 24.3799C19.4951 24.3799 18.71 25.1655 18.71 26.1347C18.71 27.1039 19.4951 27.8895 20.4636 27.8895Z" fill="#00A8E3" />
          <path d="M15.2482 32.1717C16.2719 32.1717 17.1018 31.3413 17.1018 30.3168C17.1018 29.2924 16.2719 28.4619 15.2482 28.4619C14.2244 28.4619 13.3945 29.2924 13.3945 30.3168C13.3945 31.3413 14.2244 32.1717 15.2482 32.1717Z" fill="#00A8E3" />
          <path d="M20.4646 32.0038C21.3954 32.0038 22.1499 31.2487 22.1499 30.3173C22.1499 29.3859 21.3954 28.6309 20.4646 28.6309C19.5338 28.6309 18.7793 29.3859 18.7793 30.3173C18.7793 31.2487 19.5338 32.0038 20.4646 32.0038Z" fill="#00A8E3" />
          <path d="M20.4636 15.3222C21.4321 15.3222 22.2173 14.5365 22.2173 13.5673C22.2173 12.5982 21.4321 11.8125 20.4636 11.8125C19.4951 11.8125 18.71 12.5982 18.71 13.5673C18.71 14.5365 19.4951 15.3222 20.4636 15.3222Z" fill="#00A8E3" />
          <path d="M20.4636 19.4887C21.4321 19.4887 22.2173 18.703 22.2173 17.7338C22.2173 16.7647 21.4321 15.979 20.4636 15.979C19.4951 15.979 18.71 16.7647 18.71 17.7338C18.71 18.703 19.4951 19.4887 20.4636 19.4887Z" fill="#00A8E3" />
          <path d="M20.4636 23.7069C21.4321 23.7069 22.2173 22.9213 22.2173 21.9521C22.2173 20.9829 21.4321 20.1973 20.4636 20.1973C19.4951 20.1973 18.71 20.9829 18.71 21.9521C18.71 22.9213 19.4951 23.7069 20.4636 23.7069Z" fill="#00A8E3" />
          <path d="M20.4646 27.8212C21.3954 27.8212 22.1499 27.0661 22.1499 26.1347C22.1499 25.2033 21.3954 24.4482 20.4646 24.4482C19.5338 24.4482 18.7793 25.2033 18.7793 26.1347C18.7793 27.0661 19.5338 27.8212 20.4646 27.8212Z" fill="#00A8E3" />
          <path d="M25.2283 11.2367C26.1968 11.2367 26.9819 10.451 26.9819 9.48188C26.9819 8.51271 26.1968 7.72705 25.2283 7.72705C24.2597 7.72705 23.4746 8.51271 23.4746 9.48188C23.4746 10.451 24.2597 11.2367 25.2283 11.2367Z" fill="#00A8E3" />
          <path d="M25.2283 15.3222C26.1968 15.3222 26.9819 14.5365 26.9819 13.5673C26.9819 12.5982 26.1968 11.8125 25.2283 11.8125C24.2597 11.8125 23.4746 12.5982 23.4746 13.5673C23.4746 14.5365 24.2597 15.3222 25.2283 15.3222Z" fill="#00A8E3" />
          <path d="M25.2283 19.4887C26.1968 19.4887 26.9819 18.703 26.9819 17.7338C26.9819 16.7647 26.1968 15.979 25.2283 15.979C24.2597 15.979 23.4746 16.7647 23.4746 17.7338C23.4746 18.703 24.2597 19.4887 25.2283 19.4887Z" fill="#00A8E3" />
          <path d="M25.2284 6.101C25.7309 6.101 26.1384 5.69331 26.1384 5.19039C26.1384 4.68748 25.7309 4.27979 25.2284 4.27979C24.7258 4.27979 24.3184 4.68748 24.3184 5.19039C24.3184 5.69331 24.7258 6.101 25.2284 6.101Z" fill="#00A8E3" />
          <path d="M20.4637 2.1552C20.9663 2.1552 21.3737 1.74751 21.3737 1.24459C21.3737 0.741678 20.9663 0.333984 20.4637 0.333984C19.9611 0.333984 19.5537 0.741678 19.5537 1.24459C19.5537 1.74751 19.9611 2.1552 20.4637 2.1552Z" fill="#00A8E3" />
          <path d="M15.2479 2.07122C15.7505 2.07122 16.1579 1.66352 16.1579 1.16061C16.1579 0.657694 15.7505 0.25 15.2479 0.25C14.7453 0.25 14.3379 0.657694 14.3379 1.16061C14.3379 1.66352 14.7453 2.07122 15.2479 2.07122Z" fill="#00A8E3" />
          <path d="M10.2166 2.19671C10.7192 2.19671 11.1266 1.78901 11.1266 1.2861C11.1266 0.783182 10.7192 0.375488 10.2166 0.375488C9.71406 0.375488 9.30664 0.783182 9.30664 1.2861C9.30664 1.78901 9.71406 2.19671 10.2166 2.19671Z" fill="#00A8E3" />
          <path d="M29.3455 18.6445C29.8481 18.6445 30.2555 18.2368 30.2555 17.7339C30.2555 17.2309 29.8481 16.8232 29.3455 16.8232C28.843 16.8232 28.4355 17.2309 28.4355 17.7339C28.4355 18.2368 28.843 18.6445 29.3455 18.6445Z" fill="#00A8E3" />
          <path d="M29.3455 14.4775C29.8481 14.4775 30.2555 14.0698 30.2555 13.5669C30.2555 13.0639 29.8481 12.6562 29.3455 12.6562C28.843 12.6562 28.4355 13.0639 28.4355 13.5669C28.4355 14.0698 28.843 14.4775 29.3455 14.4775Z" fill="#00A8E3" />
          <path d="M29.3885 10.3925C29.8911 10.3925 30.2985 9.98481 30.2985 9.4819C30.2985 8.97898 29.8911 8.57129 29.3885 8.57129C28.8859 8.57129 28.4785 8.97898 28.4785 9.4819C28.4785 9.98481 28.8859 10.3925 29.3885 10.3925Z" fill="#00A8E3" />
          <path d="M1.16 18.6445C1.66257 18.6445 2.06999 18.2368 2.06999 17.7339C2.06999 17.2309 1.66257 16.8232 1.16 16.8232C0.657419 16.8232 0.25 17.2309 0.25 17.7339C0.25 18.2368 0.657419 18.6445 1.16 18.6445Z" fill="#00A8E3" />
          <path d="M1.16 22.7568C1.66257 22.7568 2.06999 22.3491 2.06999 21.8462C2.06999 21.3432 1.66257 20.9355 1.16 20.9355C0.657419 20.9355 0.25 21.3432 0.25 21.8462C0.25 22.3491 0.657419 22.7568 1.16 22.7568Z" fill="#00A8E3" />
          <path d="M1.16 14.478C1.66257 14.478 2.06999 14.0703 2.06999 13.5673C2.06999 13.0644 1.66257 12.6567 1.16 12.6567C0.657419 12.6567 0.25 13.0644 0.25 13.5673C0.25 14.0703 0.657419 14.478 1.16 14.478Z" fill="#00A8E3" />
          <path d="M1.16 10.3925C1.66257 10.3925 2.06999 9.98481 2.06999 9.4819C2.06999 8.97898 1.66257 8.57129 1.16 8.57129C0.657419 8.57129 0.25 8.97898 0.25 9.4819C0.25 9.98481 0.657419 10.3925 1.16 10.3925Z" fill="#00A8E3" />
          <path d="M5.44124 6.101C5.94382 6.101 6.35124 5.69331 6.35124 5.19039C6.35124 4.68748 5.94382 4.27979 5.44124 4.27979C4.93867 4.27979 4.53125 4.68748 4.53125 5.19039C4.53125 5.69331 4.93867 6.101 5.44124 6.101Z" fill="#00A8E3" />
          <path d="M5.44124 26.9423C5.94382 26.9423 6.35124 26.5346 6.35124 26.0317C6.35124 25.5288 5.94382 25.1211 5.44124 25.1211C4.93867 25.1211 4.53125 25.5288 4.53125 26.0317C4.53125 26.5346 4.93867 26.9423 5.44124 26.9423Z" fill="#00A8E3" />
          <path d="M5.44124 31.2275C5.94382 31.2275 6.35124 30.8198 6.35124 30.3169C6.35124 29.8139 5.94382 29.4062 5.44124 29.4062C4.93867 29.4062 4.53125 29.8139 4.53125 30.3169C4.53125 30.8198 4.93867 31.2275 5.44124 31.2275Z" fill="#00A8E3" />
          <path d="M10.2166 35.3676C10.7192 35.3676 11.1266 34.9599 11.1266 34.457C11.1266 33.9541 10.7192 33.5464 10.2166 33.5464C9.71406 33.5464 9.30664 33.9541 9.30664 34.457C9.30664 34.9599 9.71406 35.3676 10.2166 35.3676Z" fill="#00A8E3" />
          <path d="M20.4637 35.3256C20.9663 35.3256 21.3737 34.9179 21.3737 34.415C21.3737 33.9121 20.9663 33.5044 20.4637 33.5044C19.9611 33.5044 19.5537 33.9121 19.5537 34.415C19.5537 34.9179 19.9611 35.3256 20.4637 35.3256Z" fill="#00A8E3" />
          <path d="M15.2909 39.4565C15.7934 39.4565 16.2008 39.0488 16.2008 38.5459C16.2008 38.0429 15.7934 37.6353 15.2909 37.6353C14.7883 37.6353 14.3809 38.0429 14.3809 38.5459C14.3809 39.0488 14.7883 39.4565 15.2909 39.4565Z" fill="#00A8E3" />
          <path d="M5.44115 11.2367C6.40966 11.2367 7.1948 10.451 7.1948 9.48188C7.1948 8.51271 6.40966 7.72705 5.44115 7.72705C4.47263 7.72705 3.6875 8.51271 3.6875 9.48188C3.6875 10.451 4.47263 11.2367 5.44115 11.2367Z" fill="#00A8E3" />
          <path d="M5.44115 15.3222C6.40966 15.3222 7.1948 14.5365 7.1948 13.5673C7.1948 12.5982 6.40966 11.8125 5.44115 11.8125C4.47263 11.8125 3.6875 12.5982 3.6875 13.5673C3.6875 14.5365 4.47263 15.3222 5.44115 15.3222Z" fill="#00A8E3" />
          <path d="M5.44115 23.7069C6.40966 23.7069 7.1948 22.9213 7.1948 21.9521C7.1948 20.9829 6.40966 20.1973 5.44115 20.1973C4.47263 20.1973 3.6875 20.9829 3.6875 21.9521C3.6875 22.9213 4.47263 23.7069 5.44115 23.7069Z" fill="#00A8E3" />
          <path d="M5.44118 19.4208C6.37196 19.4208 7.12651 18.6657 7.12651 17.7343C7.12651 16.8029 6.37196 16.0479 5.44118 16.0479C4.5104 16.0479 3.75586 16.8029 3.75586 17.7343C3.75586 18.6657 4.5104 19.4208 5.44118 19.4208Z" fill="#00A8E3" />
          <path d="M5.44118 23.6385C6.37196 23.6385 7.12651 22.8835 7.12651 21.9521C7.12651 21.0207 6.37196 20.2656 5.44118 20.2656C4.5104 20.2656 3.75586 21.0207 3.75586 21.9521C3.75586 22.8835 4.5104 23.6385 5.44118 23.6385Z" fill="#00A8E3" />
          <path d="M10.2166 6.91833C11.1474 6.91833 11.9019 6.16327 11.9019 5.23187C11.9019 4.30046 11.1474 3.54541 10.2166 3.54541C9.28579 3.54541 8.53125 4.30046 8.53125 5.23187C8.53125 6.16327 9.28579 6.91833 10.2166 6.91833Z" fill="#00A8E3" />
          <path d="M10.2165 11.2782C11.1851 11.2782 11.9702 10.4925 11.9702 9.52338C11.9702 8.55422 11.1851 7.76855 10.2165 7.76855C9.24802 7.76855 8.46289 8.55422 8.46289 9.52338C8.46289 10.4925 9.24802 11.2782 10.2165 11.2782Z" fill="#00A8E3" />
          <path d="M10.2165 15.3637C11.1851 15.3637 11.9702 14.578 11.9702 13.6088C11.9702 12.6397 11.1851 11.854 10.2165 11.854C9.24802 11.854 8.46289 12.6397 8.46289 13.6088C8.46289 14.578 9.24802 15.3637 10.2165 15.3637Z" fill="#00A8E3" />
          <path d="M10.2165 19.5302C11.1851 19.5302 11.9702 18.7445 11.9702 17.7753C11.9702 16.8062 11.1851 16.0205 10.2165 16.0205C9.24802 16.0205 8.46289 16.8062 8.46289 17.7753C8.46289 18.7445 9.24802 19.5302 10.2165 19.5302Z" fill="#00A8E3" />
          <path d="M10.2165 23.6952C11.1851 23.6952 11.9702 22.9095 11.9702 21.9404C11.9702 20.9712 11.1851 20.1855 10.2165 20.1855C9.24802 20.1855 8.46289 20.9712 8.46289 21.9404C8.46289 22.9095 9.24802 23.6952 10.2165 23.6952Z" fill="#00A8E3" />
          <path d="M10.2165 27.8764C11.1851 27.8764 11.9702 27.0907 11.9702 26.1215C11.9702 25.1524 11.1851 24.3667 10.2165 24.3667C9.24802 24.3667 8.46289 25.1524 8.46289 26.1215C8.46289 27.0907 9.24802 27.8764 10.2165 27.8764Z" fill="#00A8E3" />
          <path d="M10.2166 31.9901C11.1474 31.9901 11.9019 31.2351 11.9019 30.3036C11.9019 29.3722 11.1474 28.6172 10.2166 28.6172C9.28579 28.6172 8.53125 29.3722 8.53125 30.3036C8.53125 31.2351 9.28579 31.9901 10.2166 31.9901Z" fill="#00A8E3" />
          <path d="M10.2165 19.5302C11.1851 19.5302 11.9702 18.7445 11.9702 17.7753C11.9702 16.8062 11.1851 16.0205 10.2165 16.0205C9.24802 16.0205 8.46289 16.8062 8.46289 17.7753C8.46289 18.7445 9.24802 19.5302 10.2165 19.5302Z" fill="#00A8E3" />
          <path d="M10.2165 23.6952C11.1851 23.6952 11.9702 22.9095 11.9702 21.9404C11.9702 20.9712 11.1851 20.1855 10.2165 20.1855C9.24802 20.1855 8.46289 20.9712 8.46289 21.9404C8.46289 22.9095 9.24802 23.6952 10.2165 23.6952Z" fill="#00A8E3" />
          <path d="M10.2165 27.8764C11.1851 27.8764 11.9702 27.0907 11.9702 26.1215C11.9702 25.1524 11.1851 24.3667 10.2165 24.3667C9.24802 24.3667 8.46289 25.1524 8.46289 26.1215C8.46289 27.0907 9.24802 27.8764 10.2165 27.8764Z" fill="#00A8E3" />
          <path d="M15.2478 36.1019C16.1786 36.1019 16.9331 35.3469 16.9331 34.4155C16.9331 33.4841 16.1786 32.729 15.2478 32.729C14.317 32.729 13.5625 33.4841 13.5625 34.4155C13.5625 35.3469 14.317 36.1019 15.2478 36.1019Z" fill="#00A8E3" />
          <path d="M86.2495 39.1822H82.9214V31.3979C82.9214 29.8987 81.751 28.6799 80.3132 28.6799C78.8754 28.6799 77.705 29.8997 77.705 31.3979V39.1822H74.377V31.3979C74.377 28.0626 77.0396 25.3486 80.3132 25.3486C83.5868 25.3486 86.2495 28.0626 86.2495 31.3979V39.1822Z" fill="#1C386B" />
          <path d="M44.7331 39.7501C41.4595 39.7501 38.7969 37.0361 38.7969 33.7008V25.6084H42.1249V33.7008C42.1249 35.2 43.2954 36.4188 44.7331 36.4188C46.1709 36.4188 47.3413 35.199 47.3413 33.7008V25.6084H50.6694V33.7008C50.6694 37.0371 48.0068 39.7501 44.7331 39.7501Z" fill="#1C386B" />
          <path d="M56.1962 39.1424H52.8682V29.5101C52.8682 27.3481 54.6198 25.5952 56.7805 25.5952H59.9164V28.9255H57.3716C56.722 28.9255 56.1962 29.4517 56.1962 30.1017V39.1424Z" fill="#1C386B" />
          <path d="M66.5397 39.6025C64.9168 39.6025 63.0413 39.2854 61.8689 38.3669C60.9045 37.6109 60.3955 36.5328 60.3955 35.2496C60.3955 33.4681 61.26 32.4405 61.9848 31.8926C63.8394 30.4905 67.0031 30.7422 68.9509 31.084V29.7919C68.9509 29.3173 68.5667 28.9328 68.0923 28.9328H62.3809V25.6025H68.2775C70.4876 25.6025 72.2789 27.395 72.2789 29.6066V38.0934C72.2789 38.4145 72.0601 38.6939 71.7482 38.7712L71.0134 38.9525C70.4391 39.0942 68.5538 39.6025 66.5397 39.6025ZM63.7236 34.9593C63.7236 36.8182 66.4209 37.056 68.9509 36.4565V33.8367C67.9884 33.4096 63.7236 32.827 63.7236 34.9593Z" fill="#1C386B" />
          <path d="M27.0253 25.6084H23.6973V39.1427H27.0253V25.6084Z" fill="#1C386B" />
          <path d="M33.8366 28.9582H36.9537V25.6279H33.8366C33.4524 25.6279 33.081 25.6824 32.7246 25.7745V20.5933H29.3965V34.1275H29.4054V35.3156C29.4054 37.4529 31.1363 39.1849 33.2721 39.1849H36.9012V35.8546H33.5642C33.1058 35.8546 32.7335 35.4831 32.7335 35.0233V30.061C32.7345 29.4516 33.2276 28.9582 33.8366 28.9582Z" fill="#1C386B" />
        </svg>
      </div>
    );
  }
  export default Logo