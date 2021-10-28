import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ChamberContainer } from './style';

export const Chamber = ({ sceneName, sceneId }) => {
  const history = useHistory();
  return (
    <Link to={`/scenes/${sceneId}`}>
      <ChamberContainer>{sceneName}</ChamberContainer>
    </Link>
  );
};
