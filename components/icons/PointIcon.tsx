export interface IPointIcon {
  color: string;
  className?: string;
}

const PointIcon: React.FC<IPointIcon> = ({ color, className }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
};

export default PointIcon;
