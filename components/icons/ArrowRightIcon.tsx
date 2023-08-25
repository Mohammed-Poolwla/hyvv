export interface IArrowRightIcon {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const ArrowRightIcon: React.FC<IArrowRightIcon> = ({
  width,
  height,
  className,
  color,
}) => {
  return (
    <svg
      width={width ?? "50"}
      height={height ?? "50"}
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0864 33.0656L15.1994 33.9545L16.0874 34.8425L18.9731 37.7281L19.862 38.6171L20.7509 37.7281L33.0304 25.4487L33.9193 24.5597L33.0304 23.6708L20.7509 11.3913L19.862 10.5024L18.9731 11.3913L16.0874 14.277L15.1994 15.165L16.0864 16.0539L24.5737 24.5597L16.0864 33.0656Z"
        fill="white"
        stroke={color ?? "#525646"}
        strokeWidth="2.51429"
      />
    </svg>
  );
};

export default ArrowRightIcon;
