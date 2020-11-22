import React from 'react';
//Styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
//Images
import s2i from '../img/s2i.png';
//Animation
import { socialAnim } from '../animation';

const Footer = () => {
  return (
    <StyledFooter>
      <Contact>
        <h2>Contacts</h2>
        <ul>
          <li>Phone: +39 351-8512343</li>
          <li>Email: cesarebek1@gmail.com</li>
          <li>Address: Via E.Carletti 14/6</li>
        </ul>
      </Contact>
      <Copyright>
        <h3>Developed with 💙 by Cezary</h3>
      </Copyright>
      <Social>
        <h2>Social</h2>
        <ul>
          <a
            href="https://talent.start2impact.it/profile/cesare-bek"
            target="_blank"
            rel="noreferrer"
          >
            <motion.li
              variants={socialAnim}
              whileHover="hover"
              initial="hidden"
            >
              <img src={s2i} alt="social" />
            </motion.li>
          </a>
          <a
            href="https://www.instagram.com/cesare_bek/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.li
              variants={socialAnim}
              whileHover="hover"
              initial="hidden"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.li>
          </a>
          <a
            href="https://www.facebook.com/cesare.bich/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.li
              variants={socialAnim}
              whileHover="hover"
              initial="hidden"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </motion.li>
          </a>
        </ul>
      </Social>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  h2,
  h3 {
    color: #ffffff;
  }
  h2 {
    padding-bottom: 1rem;
  }
  li {
    list-style: none;
  }
`;

const Contact = styled.div`
  li {
    line-height: 150%;
    font-size: 1.1rem;
  }
`;

const Copyright = styled.div`
  align-self: flex-end;
`;

const Social = styled.div`
  text-align: center;
  ul {
    a {
      color: white;
    }
    display: flex;
    padding: 1rem;
    li {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      font-size: 2.5rem;
      img {
        width: 2.5rem;
      }
    }
  }
`;

export default Footer;
