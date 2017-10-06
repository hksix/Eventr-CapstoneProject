import React, { Component } from 'react';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 60,
  startVelocity: 20,
  elementCount: 40,
  decay: 0.95
};
return <Confetti active={ someProp } config={ config }/>
