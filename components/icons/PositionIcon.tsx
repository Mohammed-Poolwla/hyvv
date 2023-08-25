export interface IPositionIcon {
  color?: string;
}

const PositionIcon: React.FC<IPositionIcon> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 36 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6448 0.548828C7.93186 0.548828 0.0761719 8.40452 0.0761719 18.1175C0.0761719 28.5834 11.1695 43.0147 15.7374 48.5112C16.7413 49.7159 18.5734 49.7159 19.5774 48.5112C24.1201 43.0147 35.2135 28.5834 35.2135 18.1175C35.2135 8.40452 27.3578 0.548828 17.6448 0.548828ZM17.6448 24.392C14.1813 24.392 11.3703 21.581 11.3703 18.1175C11.3703 14.6539 14.1813 11.843 17.6448 11.843C21.1083 11.843 23.9193 14.6539 23.9193 18.1175C23.9193 21.581 21.1083 24.392 17.6448 24.392Z"
        fill={color ?? "#08657E"}
      />
    </svg>
  );
};

export default PositionIcon;
