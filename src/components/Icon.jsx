function Icon(props) {
  if (props.name == "search") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21L16.65 16.65"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (props.name == "cart") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 6H21"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (props.name == "star") {
    return (
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5281 0.34762C6.68439 -0.098715 7.31561 -0.0987151 7.4719 0.34762L8.77589 4.07143C8.84473 4.26801 9.02822 4.40133 9.23646 4.40605L13.181 4.49549C13.6538 4.50622 13.8488 5.10654 13.4726 5.39311L10.334 7.78399C10.1683 7.91021 10.0982 8.12592 10.1581 8.32542L11.2919 12.1045C11.4279 12.5575 10.9172 12.9285 10.5284 12.6593L7.28465 10.4131C7.11341 10.2945 6.88659 10.2945 6.71535 10.4131L3.47161 12.6593C3.08281 12.9285 2.57215 12.5575 2.70805 12.1045L3.8419 8.32542C3.90176 8.12592 3.83167 7.91021 3.66598 7.78399L0.527385 5.39311C0.151193 5.10654 0.346249 4.50622 0.819037 4.49549L4.76354 4.40605C4.97178 4.40133 5.15527 4.26801 5.22411 4.07143L6.5281 0.34762Z"
          fill="#9D9D9D"
        />
      </svg>
    );
  } else if (props.name == "half-star") {
    return (
      <svg
        width="7"
        height="13"
        viewBox="0 0 7 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.67052 0C6.47362 0 6.27679 0.111572 6.1986 0.334747L4.89458 4.05856C4.8258 4.25516 4.64226 4.38846 4.43407 4.39319L0.489554 4.48264C0.0167758 4.49335 -0.178293 5.09366 0.197867 5.38025L3.33648 7.77112C3.50219 7.89734 3.57226 8.11304 3.51238 8.31256L2.37853 12.0916C2.24267 12.5446 2.75329 12.9156 3.14208 12.6464L6.38586 10.4002C6.47149 10.3409 6.57104 10.3113 6.67052 10.3113V0Z"
          fill="#FCA50A"
        />
      </svg>
    );
  }

  return null;
}
export default Icon;
