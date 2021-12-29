import React from "react";
import { Overlay } from "../../styles/Overlay.Style";
import { AlertWrapper, AlertContainer, Button } from "./Alert.Style";

export default function Alert({ setError }) {
  return (
    <Overlay zIndex='1'>
      <AlertWrapper>
        <AlertContainer>
          <h6>Attention vous ne pouvez pas !</h6>
          <Button onClick={() => setError(false)}>Ok</Button>
        </AlertContainer>
      </AlertWrapper>
    </Overlay>
  );
}
