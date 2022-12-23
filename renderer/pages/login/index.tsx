import styled from '@emotion/styled';
import LoginForm from './LoginForm';

const LoginWrapper = styled.section`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

const LoginTitle = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

function Login () {
  return (
    <LoginWrapper>
      <LoginTitle> 로그인 </LoginTitle>
      <LoginForm />
    </LoginWrapper>
  );
}

export default Login;