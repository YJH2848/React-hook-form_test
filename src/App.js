import { useForm } from "react-hook-form";
import * as S from "./style";
//react-hook-form을 사용하는 이유는 redux-form이랑 formik등이 있었는데 이것들이 react-hook-form보다 성능이 좋지 않기 때문이고 소스코드가 다른것들에 비해
//깔끔해서 사용한다

function App() {
  const { register, watch } = useForm();
  console.log(watch("password"));
  return (
    <S.Container className="App">
      <S.Login>
        <S.Form>
          <S.Input name="email" type="email" placeholder="이메일" />
          <S.Input name="name" type="name" placeholder="이름" />
          <S.Input
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="비밀번호 확인"
          />
          <S.Input type="submit" />
        </S.Form>
      </S.Login>
    </S.Container>
  );
}

export default App;
