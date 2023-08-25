export interface IEmailCircleIcon {}

const EmailCircleIcon: React.FC<IEmailCircleIcon> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1485_44615)">
        <rect
          x="7"
          y="5.06934"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.6555 29.4121H31.3419C29.3266 29.4121 27.6777 31.061 27.6777 33.0763V55.0615C27.6777 57.0768 29.3266 58.7257 31.3419 58.7257H60.6555C62.6708 58.7257 64.3197 57.0768 64.3197 55.0615V33.0763C64.3197 31.061 62.6708 29.4121 60.6555 29.4121ZM59.9237 37.1987L47.9418 44.6919C46.7509 45.4431 45.2486 45.4431 44.0577 44.6919L32.0758 37.1987C31.6178 36.9055 31.343 36.4109 31.343 35.8795C31.343 34.652 32.6804 33.9192 33.7247 34.5604L45.9997 42.2369L58.2748 34.5604C59.3191 33.9192 60.6565 34.652 60.6565 35.8795C60.6565 36.4109 60.3817 36.9055 59.9237 37.1987Z"
          fill="#FF6633"
        />
        <rect
          x="7"
          y="5.06934"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          stroke="#F5F6F7"
          strokeWidth="3.92593"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1485_44615"
          x="0.0371094"
          y="0.106445"
          width="92.4453"
          height="92.4443"
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
            result="effect1_dropShadow_1485_44615"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1485_44615"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EmailCircleIcon;
