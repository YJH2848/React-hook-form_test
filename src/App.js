import { Reset } from "styled-reset";
import * as S from "./style";
import React from "react";

import { useForm } from "react-hook-form";

function App() {
  const { register, watch } = useForm();
  console.log(watch("password"));

  return (
    <React.Fragment>
      <Reset />

      <S.Container>
        <S.Login>
          <S.Form>
            <S.input name="email" type="email" placeholder="이메일" />
            <S.input name="name" type="name" placeholder="이름" />
            <S.input
              name="password"
              type="password"
              placeholder="비밀번호"
              ref={register}
            />
            <S.input
              name="password"
              type="password"
              placeholder="비밀번호 확인"
            />
            <S.Submit type="submit" />
          </S.Form>
        </S.Login>
      </S.Container>
    </React.Fragment>
  );
}

export default App;
