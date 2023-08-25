export interface IPurpleUserIcon {
  className?: string;
}

const PurpleUserIcon: React.FC<IPurpleUserIcon> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.2" width="20" height="20" rx="10" fill="#8338EC" />
      <circle cx="10.125" cy="8.125" r="1.875" fill="#8338EC" />
      <path
        d="M12.5 14H7.5C6.94772 14 6.49357 13.5408 6.68359 13.0223C7.03626 12.0599 7.9617 11 10 11C12.0383 11 12.9637 12.0599 13.3164 13.0223C13.5064 13.5408 13.0523 14 12.5 14Z"
        fill="#8338EC"
      />
    </svg>
  );
};

export default PurpleUserIcon;
