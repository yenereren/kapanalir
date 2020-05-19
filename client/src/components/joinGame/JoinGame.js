import React from 'react';
import { Button, Space } from 'antd';
import {createGame} from '../../services/firebase';

import './JoinGame.css';


function JoinGame() {
  return (
    <Space className="JoinGame">
      <Button>Join</Button>
    </Space>
  );
}

export default JoinGame;
