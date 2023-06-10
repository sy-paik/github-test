import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <>
    <LoginWrapper>
      <LoginHeader>
        회원가입
        </LoginHeader> 
    <form>
      <LoginLabel>이메일</LoginLabel>
      <InputEmail type="email" />
      <LoginLabel>비밀번호</LoginLabel>
      <InputPassword type="password" />
      <LoginButton disabled>회원가입</LoginButton>
    </form>
  </LoginWrapper>
    </>
  )
}

export default SignupPage;

const LoginWrapper = styled.div`
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  form {
    width: 322px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }

  button {
    border: none;
    cursor: pointer;
  }
`
const LoginHeader = styled.h1`
  text-align: center;
  padding-top: 30px;
`

const LoginLabel = styled.label`
  font-size: 12px;
  display: block;
`

const InputEmail = styled.input`
  padding: 8px 0;
  margin-bottom: 16px;
`

const InputPassword = styled.input`
  padding: 8px 0;
  margin-bottom: 30px;
`

const LoginButton = styled.button`
height: 44px;
background-color: #6521D3;
color: #fff;
border-radius: 44px;
margin-bottom: 20px;
font-size: 14px;
`


