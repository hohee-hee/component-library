import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  //input의 초기값을 빈 문자열로 설정합니다.
  const handleChange = e => {
    setValue(e.target.value);
  };
  //바뀔 때마다 value를 재설정합니다
  const reset = () => {
    setValue("");
  };
  //값을 초기화합니다
  return [value, handleChange, reset];
  //위의 변수와 함수를 리턴합니다
};
export default useInput;
