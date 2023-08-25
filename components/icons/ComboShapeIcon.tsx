import React from "react";

export interface IComboShapeIcon {
  className: string;
}

const ComboShapeIcon: React.FC<IComboShapeIcon> = ({ className }) => {
  return (
    <svg
      width="25"
      height="30"
      viewBox="0 0 24 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 3.75C9.25 2.50736 10.2574 1.5 11.5 1.5H13.5C14.7426 1.5 15.75 2.50736 15.75 3.75V4.75H9.25V3.75ZM7.75 4.75V3.75C7.75 1.67893 9.42893 0 11.5 0H13.5C15.5711 0 17.25 1.67893 17.25 3.75V4.75H18.5C20.7091 4.75 22.5 6.54086 22.5 8.75V11H14.3546C14.0579 10.267 13.3393 9.75 12.5 9.75C11.6607 9.75 10.9421 10.267 10.6454 11H2.5V8.75C2.5 6.54086 4.29086 4.75 6.5 4.75H7.75ZM14.3546 12.5H22.5V16.75C22.5 18.9591 20.7091 20.75 18.5 20.75H6.5C4.29086 20.75 2.5 18.9591 2.5 16.75V12.5H10.6454C10.9421 13.233 11.6607 13.75 12.5 13.75C13.3393 13.75 14.0579 13.233 14.3546 12.5Z"
        fill="#84818A"
      />
    </svg>
  );
};

export default ComboShapeIcon;
