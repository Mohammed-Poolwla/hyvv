export interface ICostIcon {}

const CostIcon: React.FC<ICostIcon> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3 7.9C3.03 7.31 2.3 6.7 2.3 5.75C2.3 4.66 3.31 3.9 5 3.9C6.42 3.9 7.13 4.44 7.39 5.3C7.51 5.7 7.84 6 8.26 6H8.56C9.22 6 9.69 5.35 9.46 4.73C9.04 3.55 8.06 2.57 6.5 2.19V1.5C6.5 0.67 5.83 0 5 0C4.17 0 3.5 0.67 3.5 1.5V2.16C1.56 2.58 0 3.84 0 5.77C0 8.08 1.91 9.23 4.7 9.9C7.2 10.5 7.7 11.38 7.7 12.31C7.7 13 7.21 14.1 5 14.1C3.35 14.1 2.5 13.51 2.17 12.67C2.02 12.28 1.68 12 1.27 12H0.99C0.32 12 -0.15 12.68 0.1 13.3C0.67 14.69 2 15.51 3.5 15.83V16.5C3.5 17.33 4.17 18 5 18C5.83 18 6.5 17.33 6.5 16.5V15.85C8.45 15.48 10 14.35 10 12.3C10 9.46 7.57 8.49 5.3 7.9Z"
        fill="#3361FF"
      />
    </svg>
  );
};

export default CostIcon;
