export interface IGreenTrendingUpIcon {
  className: string;
}

const GreenTrendingUpIcon: React.FC<IGreenTrendingUpIcon> = ({ className }) => {
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
        d="M9 0.777771L5.26667 4.5111L3.84444 2.37777L1 5.22222"
        stroke="#1DBF73"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.22217 0.777779H8.99995V2.55556"
        stroke="#1DBF73"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GreenTrendingUpIcon;
