export interface ITelegramCircleIcon {}

const TelegramCircleIcon: React.FC<ITelegramCircleIcon> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1485_44603)">
        <rect
          x="7"
          y="5.95801"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.4191 50.547L52.5033 58.7228C53.7629 59.4098 54.679 59.0663 54.9996 57.5548L59.5111 36.3024C59.9691 34.4474 58.8012 33.623 57.5874 34.1726L31.1136 44.3866C29.3044 45.1194 29.3273 46.1271 30.793 46.5622L37.5946 48.692L53.3278 38.7758C54.0606 38.3178 54.7477 38.5697 54.198 39.0735L41.4191 50.547Z"
          fill="black"
        />
        <rect
          x="7"
          y="5.95801"
          width="78.5185"
          height="78.5185"
          rx="39.2593"
          stroke="#F5F6F7"
          strokeWidth="3.92593"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1485_44603"
          x="0.0371094"
          y="0.995117"
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
            result="effect1_dropShadow_1485_44603"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1485_44603"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TelegramCircleIcon;
