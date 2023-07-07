import React from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

const SSAFariInput = ({
  id,
  label,
  type = "text",
  value,
  placeholder = "입력하세요",
}) => {
  const [v, handleChange, reset] = useInput();

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={
          handleChange
          //상위 컴포넌트로 올릴때 어떻게 깔꼼하게 올리지;
        }
        className="border-indigo-500 w-80 border-b-2 focus:outline-none focus:border-indigo-950 focus:border-b-2"></Input>
    </Container>
  );
};

const Container = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

export default SSAFariInput;
