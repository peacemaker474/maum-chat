import React, { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from '@emotion/styled';
import { firebaseClientAuth } from '../../config';

function LoginForm () {
  const userId = useRef(null);
  const password = useRef(null);

  const handleLoginSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userId.current.value && password.current.value) {
      const user = await signInWithEmailAndPassword(firebaseClientAuth, userId.current.value, password.current.value);
      console.log(user);
    }
  
    userId.current.value = '';
    password.current.value = '';
  }

  return (
    <Form onSubmit={handleLoginSubmit}>
      <Input id='userId' type='text' placeholder='아이디를 입력해주세요.' ref={userId}/>
      <Input id='password' type='password' placeholder='비밀번호를 입력해주세요.' ref={password}/>
      <Button> 로그인 </Button>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  all: unset;
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Button = styled.button`
  all: unset;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;