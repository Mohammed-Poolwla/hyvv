export interface ILikeIcon {
  className: string;
}

const LikeIcon: React.FC<ILikeIcon> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#20C9AC" fillOpacity="0.1" />
      <path
        d="M6.5 16.5H8.5V10.5H6.5V16.5ZM17.5 11C17.5 10.45 17.05 10 16.5 10H13.345L13.82 7.715L13.835 7.555C13.835 7.35 13.75 7.16 13.615 7.025L13.085 6.5L9.795 9.795C9.61 9.975 9.5 10.225 9.5 10.5V15.5C9.5 16.05 9.95 16.5 10.5 16.5H15C15.415 16.5 15.77 16.25 15.92 15.89L17.43 12.365C17.475 12.25 17.5 12.13 17.5 12V11Z"
        fill="#20C9AC"
      />
    </svg>
  );
};

export default LikeIcon;
