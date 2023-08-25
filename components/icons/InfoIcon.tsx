export interface IInfoIcon {
  className: string;
}

const InfoIcon: React.FC<IInfoIcon> = ({ className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99998 6.33334C6.82317 6.33334 6.6536 6.40358 6.52858 6.52861C6.40355 6.65363 6.33332 6.8232 6.33332 7.00001V9.66668C6.33332 9.84349 6.40355 10.0131 6.52858 10.1381C6.6536 10.2631 6.82317 10.3333 6.99998 10.3333C7.17679 10.3333 7.34636 10.2631 7.47139 10.1381C7.59641 10.0131 7.66665 9.84349 7.66665 9.66668V7.00001C7.66665 6.8232 7.59641 6.65363 7.47139 6.52861C7.34636 6.40358 7.17679 6.33334 6.99998 6.33334ZM7.25332 3.72001C7.09101 3.65333 6.90896 3.65333 6.74665 3.72001C6.66482 3.75174 6.59005 3.79932 6.52665 3.86001C6.46776 3.92481 6.42041 3.99922 6.38665 4.08001C6.34933 4.15913 6.33106 4.24589 6.33332 4.33334C6.33281 4.42108 6.34963 4.50806 6.3828 4.58928C6.41598 4.67051 6.46486 4.74438 6.52665 4.80668C6.59145 4.86556 6.66586 4.91292 6.74665 4.94668C6.84765 4.98817 6.95729 5.00422 7.06595 4.99342C7.1746 4.98262 7.27894 4.94529 7.36979 4.88472C7.46064 4.82416 7.53523 4.7422 7.58699 4.64606C7.63875 4.54992 7.66611 4.44253 7.66665 4.33334C7.66419 4.15683 7.59514 3.98777 7.47332 3.86001C7.40991 3.79932 7.33515 3.75174 7.25332 3.72001ZM6.99998 0.333344C5.68144 0.333344 4.39251 0.724337 3.29618 1.45688C2.19985 2.18942 1.34537 3.23061 0.840786 4.44879C0.336202 5.66696 0.204179 7.00741 0.461414 8.30061C0.718649 9.59382 1.35359 10.7817 2.28594 11.7141C3.21829 12.6464 4.40617 13.2813 5.69938 13.5386C6.99259 13.7958 8.33303 13.6638 9.55121 13.1592C10.7694 12.6546 11.8106 11.8001 12.5431 10.7038C13.2757 9.60748 13.6666 8.31855 13.6666 7.00001C13.6666 6.12453 13.4942 5.25762 13.1592 4.44879C12.8241 3.63995 12.3331 2.90502 11.714 2.28596C11.095 1.66691 10.36 1.17584 9.55121 0.840813C8.74237 0.505782 7.87546 0.333344 6.99998 0.333344ZM6.99998 12.3333C5.94515 12.3333 4.914 12.0205 4.03694 11.4345C3.15988 10.8485 2.47629 10.0155 2.07263 9.04099C1.66896 8.06645 1.56334 6.99409 1.76913 5.95953C1.97492 4.92496 2.48287 3.97465 3.22875 3.22877C3.97463 2.48289 4.92494 1.97494 5.9595 1.76916C6.99407 1.56337 8.06642 1.66899 9.04096 2.07265C10.0155 2.47632 10.8485 3.15991 11.4345 4.03697C12.0205 4.91403 12.3333 5.94518 12.3333 7.00001C12.3333 8.4145 11.7714 9.77105 10.7712 10.7712C9.77103 11.7714 8.41447 12.3333 6.99998 12.3333Z"
        fill="#84818A"
      />
    </svg>
  );
};

export default InfoIcon;
