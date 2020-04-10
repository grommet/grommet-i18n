import React, { useState } from 'react';
import { Box, Heading, ThemeContext } from 'grommet';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const scaleDown = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
`;

const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`;

const animationIn = props => css`
  ${scaleDown} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const animationOut = props => css`
  ${scaleUp} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
`;

const CardContainer = styled(Box)`
  border: ${props =>
    props.hover ? '#ffffff' : `0.3em solid ${props.theme.global.colors.brand}`};
  background: ${props =>
    props.hover ? props.theme.global.colors.brand : '#ffffff'};
  animation: ${props => (props.hover ? animationIn : animationOut)};
`;

const Card = props => {
  const [hover, setHover] = useState(false);
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <Link to={`/${props.title}`} style={{ textDecoration: 'none' }}>
            <CardContainer
              theme={theme}
              hover={hover}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              justify="center"
              align="center"
              width="small"
              height="small"
            >
              <Heading level="2" color={hover ? '#ffffff' : 'brand'}>
                {props.title}
              </Heading>
            </CardContainer>
          </Link>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Card;
