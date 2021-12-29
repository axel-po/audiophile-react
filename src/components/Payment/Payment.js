import { useReducer, useEffect } from "react";
import { CardPayementWrapper, CardPayementContainer, Button } from "./Payment.Style";
import Card from "./Card";

export default function Payment() {
  const cardReducer = (state, action) => {
    switch (action.type) {
      case "CARD_NUMBER":
        return { ...state, cardNumber: action.payload };

      case "CARD_HOLDERS":
        return { ...state, cardHolders: action.payload };

      case "CARD_MONTH":
        return { ...state, monthExpire: action.payload };
      default:
        throw new Error("Action non supportée");
    }
  };

  const [state, dispatch] = useReducer(cardReducer, {});

  /* Event OnChange */
  const handleChangeCardNumber = (e) => {
    addCardNumber(e.target.value);
  };

  const handleChangeCardHolders = (e) => {
    addCardHolders(e.target.value);
  };

  const handleChangeMonth = (e) => {
    addMonthExpire(e.target.value);
  };

  /* Function add state on useReducer */
  const addCardNumber = (number) => {
    dispatch({ type: "CARD_NUMBER", payload: number });
  };

  const addCardHolders = (holders) => {
    dispatch({ type: "CARD_HOLDERS", payload: holders });
  };

  const addMonthExpire = (month) => {
    dispatch({ type: "CARD_MONTH", payload: month });
  };

  console.log(state);

  return (
    <>
      <CardPayementWrapper>
        <Card cardNumbers={state.cardNumber} month={state.monthExpire} />
        <CardPayementContainer>
          <div className='form-control'>
            <label htmlFor='cardNumber'>Card Number</label>
            <input onChange={handleChangeCardNumber} type='text' autoComplete='false' id='cardNumber' />
          </div>
          <div className='form-control'>
            <label htmlFor='cardHolders'>Card Holders</label>
            <input onChange={handleChangeCardHolders} type='text' autoComplete='false' id='cardHolders' />
          </div>
          <div className='form-control form-control--select'>
            <div>
              <label htmlFor='expire'>Expiration Date</label>
              <select onChange={handleChangeMonth} defaultValue={"DEFAULT"} id='expire' className='select--mr'>
                <option disabled='disabled' selected='selected'>
                  Month
                </option>
                <option value='dog'>Dog</option>
                <option value='cat'>Cat</option>
                <option value='hamster'>Hamster</option>
                <option value='parrot'>Parrot</option>
                <option value='spider'>Spider</option>
                <option value='goldfish'>Goldfish</option>
              </select>
            </div>

            <div>
              <select defaultValue={"DEFAULT"} id='expire'>
                <option disabled='disabled' selected='selected'>
                  Year
                </option>
                <option value='dog'>Dog</option>
                <option value='cat'>Cat</option>
                <option value='hamster'>Hamster</option>
                <option value='parrot'>Parrot</option>
                <option value='spider'>Spider</option>
                <option value='goldfish'>Goldfish</option>
              </select>
            </div>

            <div className='form-control form-control--cvv'>
              <label htmlFor='card-cvv'>CVV</label>
              <input type='text' id='card-cvv' />
            </div>
          </div>

          <Button>Submit</Button>
        </CardPayementContainer>
      </CardPayementWrapper>
    </>
  );
}
