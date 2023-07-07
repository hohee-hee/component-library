import React from "react";
import styled from "styled-components";

const SSAFariButton = ({
  value,
  width = "20",
  height = "2.5",
  callback = () => {
    alert("button clicked!");
  },
}) => {
  return (
    <Container width={width} height={height}>
      <button
        onClick={e => callback(e)}
        className="bg-indigo-700 rounded-3xl drop-shadow-lg text-white hover:bg-indigo-800">
        {value}
      </button>
    </Container>
  );
};

const Container = styled.div`
  button {
    width: ${props => props.width}rem;
    height: ${props => props.height}rem;
  }
`;

export default SSAFariButton;
