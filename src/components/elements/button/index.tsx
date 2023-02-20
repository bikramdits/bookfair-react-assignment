import { Button } from "antd";
import styled from "styled-components";
import IButtonProps from "models/interfaces/ibutton-props";

const ButtonContainer = styled.div`
  button {
    // button styles here
    transition: 0.15s ease-in-out;
  }
  button:hover {
    transform: scale(1.1)
  }
`;

const BasicButton = ({ children, type, onClick }: IButtonProps) => {
  return (
    <ButtonContainer>
      <Button type={type} onClick={onClick}>
        {children}
      </Button>
    </ButtonContainer>
  );
};

export default BasicButton;
