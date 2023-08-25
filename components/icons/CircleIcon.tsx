export interface ICircleIcon {
  color: string;
}

const CircleIcon: React.FC<ICircleIcon> = ({ color }) => {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <rect width="7" height="7" rx="3.5" fill={color} />
    </svg>
  );
};

export default CircleIcon;
