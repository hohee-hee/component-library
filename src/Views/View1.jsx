import SSAFariButton from "../Components/SSAFariButton";
import SSAFariButtonTransparent from "../Components/SSAFariButtonTransparent";
import SSAFariInput from "../Components/SSAFariInput";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

const View1 = () => {
  const [value] = useInput();

  return (
    <Container>
      {/* 맨위 버튼 */}
      <SSAFariButton
        value="버튼"
        callback={() => {
          alert("props로 준 콜백 함수입니다");
        }}></SSAFariButton>
      <br></br>
      {/* outlined button test */}
      <SSAFariButtonTransparent
        value="라인만 있음"
        callback={() => {
          alert("props로 준 콜백 함수입니다");
        }}></SSAFariButtonTransparent>
      <br></br>
      <h1 className="text-lg">[ 입력 ]</h1>
      <br></br>
      <SSAFariInput placeholder="이름을 입력하세요."></SSAFariInput>
      <br></br>
      <ButtonContainer>
        <SSAFariButton
          width="4"
          height="1.8"
          value="확인"
          callback={() => {
            console.log("hello");
            console.log(value);
          }}></SSAFariButton>
        <SSAFariButtonTransparent
          width="4"
          height="1.8"
          value="취소"
          callback={() => {
            alert("props로 준 콜백 함수입니다");
          }}></SSAFariButtonTransparent>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin-left: 0.5rem;
  }
`;
export default View1;
