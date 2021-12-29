import { CardStyle, ChipStyle, VisaLogo } from "./Card.Style";
import Chip from "./img/chip.png";
import Visa from "./img/visa.png";

export default function Card({ cardNumbers, month }) {
  return (
    <CardStyle>
      <div className='card--top'>
        <ChipStyle src={Chip} alt='logo chip' />
        <VisaLogo src={Visa} alt='logo visa' />
      </div>

      <div className='card--number'>
        {/* <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span>
        <span>#</span> */}
        {cardNumbers ? <span>{cardNumbers}</span> : <h1>j</h1>}
      </div>
      <div className='card--content'>
        <div>
          <span>Card Holder</span>
          <p>FULL NAME</p>
        </div>
        <div>
          <span>Expires</span>
          <p>{month ? month : "MM"}/YY</p>
        </div>
      </div>
    </CardStyle>
  );
}
