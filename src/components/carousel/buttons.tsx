import { ButtonBack, ButtonNext } from "pure-react-carousel";

export const BackButton = (props) => {
  return <ButtonBack {...props}>&lt;</ButtonBack>;
};

export const NextButton = (props) => {
  return <ButtonNext {...props}>&gt;</ButtonNext>;
};
