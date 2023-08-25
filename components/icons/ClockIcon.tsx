export interface IClockIcon {
  width?: string;
  height?: string;
}

const ClockIcon: React.FC<IClockIcon> = ({ width, height }) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.6667C4.68629 14.6667 2 11.9804 2 8.66667C2 5.35296 4.68629 2.66667 8 2.66667C11.3137 2.66667 14 5.35296 14 8.66667C14 11.9804 11.3137 14.6667 8 14.6667Z"
        fill="#08657E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64085 5.33617C7.65544 5.14648 7.81362 5 8.00388 5V5C8.19093 5 8.34755 5.14174 8.36617 5.32787L8.66671 8.33333L10.8223 9.56508C10.9322 9.6279 11 9.7448 11 9.87141V9.87141C11 10.104 10.7788 10.273 10.5544 10.2118L7.73204 9.44206C7.50066 9.37896 7.34668 9.16045 7.36507 8.92133L7.64085 5.33617Z"
        fill="#08657E"
      />
    </svg>
  );
};

export default ClockIcon;
