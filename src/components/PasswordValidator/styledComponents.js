// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`
export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  border-radius: 12px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const Text = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #f8fafc;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 28px;
    width: 100%;
  }
`
export const PasswordInput = styled.input`
  font-size: 14px;
  background-color: #edeeff;
  color: #475569;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`
export const ErrorMessage = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #ef4444;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
