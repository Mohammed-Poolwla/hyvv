export interface IGraphCircleIcon {
  width?: string;
  height?: string;
}

const GraphCircleIcon: React.FC<IGraphCircleIcon> = ({ width, height }) => {
  return (
    <svg
      width={width ?? "28"}
      height={height ?? "28"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill="#08657E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2178 7.47311C14.3242 7.37755 14.465 7.32746 14.6092 7.33388C17.6564 7.4251 20.2031 9.6372 20.6646 12.5938C20.6676 12.6114 20.6676 12.6294 20.6646 12.6471C20.6746 12.787 20.6273 12.925 20.5333 13.0306C20.4392 13.1362 20.3062 13.2007 20.1635 13.2098L15.0439 13.5474C14.8746 13.5624 14.7067 13.5067 14.5814 13.3939C14.4561 13.2812 14.3851 13.1219 14.3858 12.9551L14.0417 7.92621V7.84329C14.0479 7.70185 14.1113 7.56867 14.2178 7.47311ZM13.8666 14.8624L18.304 14.5781L18.3342 14.5899C18.5248 14.593 18.7063 14.6703 18.8387 14.8047C18.9712 14.9391 19.0438 15.1197 19.0406 15.3066C18.8657 17.8547 16.9976 19.9837 14.4553 20.5322C11.9131 21.0806 9.30695 19.917 8.05868 17.6759C7.69164 17.0305 7.4597 16.3196 7.37647 15.585C7.34418 15.3673 7.33005 15.1474 7.3342 14.9275C7.34262 12.218 9.27168 9.87938 11.9709 9.30633C12.2976 9.24517 12.6252 9.40832 12.7678 9.70319C12.8033 9.7567 12.8317 9.81442 12.8523 9.87497C12.9029 10.656 12.9554 11.4297 13.0077 12.2001C13.0489 12.8085 13.0901 13.4149 13.13 14.0213C13.128 14.1641 13.1504 14.3063 13.1965 14.4418C13.3048 14.7085 13.5744 14.8777 13.8666 14.8624Z"
        fill="white"
      />
    </svg>
  );
};

export default GraphCircleIcon;