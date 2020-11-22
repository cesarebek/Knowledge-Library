import splash from '../img/splash.svg';
import styled from 'styled-components';

const Splash = () => {
  return (
    <StyledSplash>
      <img src={splash} alt="splash" />
    </StyledSplash>
  );
};

const StyledSplash = styled.div`
  position: fixed;
  img {
    height: 100vh;
  }
  bottom: -20%;
  left: -42%;
  rotate: -15deg;
  z-index: -1;
  @media (min-width: 700px) and (max-width: 100000px) {
    display: none;
  }
`;
export default Splash;
