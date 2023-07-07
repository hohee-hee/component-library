import React from "react";
import styled from "styled-components";

const SSAFariButtonTransparent = ({
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
        className="bg-transparent border-indigo-700 border-2 rounded-3xl drop-shadow-lg text-black hover:border-indigo-200 ">
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

export default SSAFariButtonTransparent;
