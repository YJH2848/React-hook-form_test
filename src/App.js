import { useForm } from "react-hook-form";
import * as S from "./style/style";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <S.Container className="App">
      <S.Box>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            name="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞게 입력을 해주세요",
              },
            })}
          />
          {errors.email && <S.Err>{errors.email.message}</S.Err>}

          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 6,
                message: "최소 6자 이상의 비밀번호를 입력해주세요",
              },
            })}
          />
          {errors.password && <S.Err>{errors.password.message}</S.Err>}

          <S.Input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            {...register("passwordConfirm")}
          />
          <S.Input type="submit" />
        </S.Form>
      </S.Box>
    </S.Container>
  );
}
