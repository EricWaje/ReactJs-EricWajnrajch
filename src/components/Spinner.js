import React, { useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { css } from '@emotion/core';

const spinner = css`
  display: block;
  text-align: center;
  margin: 25px 10px;
`;

const Spinner = () => {
  // eslint-disable-next-line
  const [color, setColor] = useState('#e6950a');

  return <SyncLoader css={spinner} color={color} />;
};

export default Spinner;
