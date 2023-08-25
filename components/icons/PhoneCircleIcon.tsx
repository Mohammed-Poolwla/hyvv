export interface IPhoneCircleIcon {}

const PhoneCircleIcon: React.FC<IPhoneCircleIcon> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1485_44618)">
        <rect
          x="7"
          y="5.2915"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.1965 50.245L54.543 49.7137C53.4254 49.5854 52.3261 49.9701 51.5383 50.758L48.1673 54.129C42.9824 51.4908 38.732 47.2586 36.0937 42.0555L39.4831 38.6661C40.2709 37.8783 40.6557 36.779 40.5274 35.6615L39.9961 31.0446C39.7762 29.1942 38.219 27.8018 36.3502 27.8018H33.1807C31.1104 27.8018 29.3882 29.5239 29.5165 31.5942C30.4875 47.2403 43.0007 59.7352 58.6285 60.7062C60.6988 60.8345 62.421 59.1123 62.421 57.0421V53.8725C62.4393 52.0221 61.0469 50.4648 59.1965 50.245Z"
          fill="#29CC39"
        />
        <rect
          x="7"
          y="5.2915"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          stroke="#F5F6F7"
          strokeWidth="3.92593"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1485_44618"
          x="0.0371094"
          y="0.328613"
          width="92.4453"
          height="92.4448"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.14902 0 0 0 0 0.2 0 0 0 0 0.301961 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1485_44618"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1485_44618"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PhoneCircleIcon;
