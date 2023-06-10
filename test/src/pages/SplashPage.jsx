import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import styled from 'styled-components';
import MainLogo from '../assets/MainLogo.png'

const SplashPage = () => {
  return (
<>
<SplashScreen>
  <MainLogoImg src={MainLogo} alt='들숨날숨 로고' />
  <MainTitle>들숨날숨</MainTitle>
</SplashScreen>
</>
  )
}

export default SplashPage;

const SplashScreen = styled.div`
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 8px;
`

const MainLogoImg = styled.img`
  width: 181px;
  height: 219px;
  margin-bottom: 20px;
`

const MainTitle = styled.h1`
  font-size: 24px;
`