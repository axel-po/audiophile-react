import { NotFoundContainer } from "./NotFound.Style";
import { Button } from "../../styles/Buttons.Style";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <p>404 Error</p>
      <h3>Page not Found</h3>
      <Button to='/'>Back to Home</Button>
    </NotFoundContainer>
  );
}
