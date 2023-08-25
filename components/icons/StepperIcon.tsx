export interface IStepperIcon {
  color: string;
}

const StepperIcon: React.FC<IStepperIcon> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={color} />
      <circle cx="12" cy="12" r="5.03226" fill="white" />
    </svg>
  );
};

export default StepperIcon;
