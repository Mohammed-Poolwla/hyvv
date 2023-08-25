export interface IRedTrendingDownIcon {
  className: string;
}

const RedTrendingDownIcon: React.FC<IRedTrendingDownIcon> = ({ className }) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5.22223L5.26667 1.4889L3.84444 3.62223L1 0.777784"
        stroke="#FF4E4E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.22223 5.22223H9.00001V3.44445"
        stroke="#FF4E4E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RedTrendingDownIcon;
