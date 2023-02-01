import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Canvas = ({draw, height, width}) => {

  const canvas = useRef();
  useEffect(() => {
    const cnt = canvas.current.getContext('2d');
  });
  
  return (
    <canvas ref={canvas} height={500} width={500} />
    );
};

export default Canvas;