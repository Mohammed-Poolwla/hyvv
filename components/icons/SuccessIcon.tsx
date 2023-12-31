export interface ISuccessIcon {
  className?: string;
}

const SuccessIcon: React.FC<ISuccessIcon> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99967 1.33334C4.32634 1.33334 1.33301 4.32667 1.33301 8C1.33301 11.6733 4.32634 14.6667 7.99967 14.6667C11.673 14.6667 14.6663 11.6733 14.6663 8C14.6663 4.32667 11.673 1.33334 7.99967 1.33334ZM11.1863 6.46667L7.40634 10.2467C7.31301 10.34 7.18634 10.3933 7.05301 10.3933C6.91967 10.3933 6.79301 10.34 6.69967 10.2467L4.81301 8.36C4.61967 8.16667 4.61967 7.84667 4.81301 7.65334C5.00634 7.46 5.32634 7.46 5.51967 7.65334L7.05301 9.18667L10.4797 5.76C10.673 5.56667 10.993 5.56667 11.1863 5.76C11.3797 5.95334 11.3797 6.26667 11.1863 6.46667Z"
        fill="#27AE60"
      />
    </svg>
  );
};

export default SuccessIcon;
