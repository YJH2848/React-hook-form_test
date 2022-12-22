import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Login = styled.div`
  border: 2px solid black;
  width: 30vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: lightgray;
`;

export const Input = styled.input`
  width: 20vw;
  height: 5vh;
  border-radius: 5px;

  margin-bottom: 40px;
`;
