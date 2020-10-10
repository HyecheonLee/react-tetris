import React from 'react';
import {StyledStartButton} from "./styles/StyledStartButton";

const StartButton = ({callback}) => {
  return (
      <StyledStartButton onClick={callback}>게임 시작</StyledStartButton>
  );
};

export default StartButton;
