import React from 'react';
import { Button, Space, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { joinGame } from '../../services/firebase';

import './JoinGame.css';

const antIcon = <LoadingOutlined style={{ fontSize: 22, marginRight: 5 }} spin />;

function JoinGame() {
  const [gameId, setGameId] = React.useState();

  const [loading, setLoading] = React.useState(false);

  const onJoinGameClick = React.useCallback(async () => {
    if (loading || !gameId) return;

    setLoading(true);

    try {
      await joinGame({ gameId });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, [loading, gameId]);

  const onChange = (e) => {
    setGameId(e.target.value);
  }

  return (
    <Space className="JoinGame">
      <Input placeholder="Enter game id" onChange={onChange} />
      <Button onClick={onJoinGameClick}>{loading && <Spin indicator={antIcon} />} Join Game</Button>
    </Space>
  );
}

export default JoinGame;
