import React from 'react';
import { Button, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {createGame} from '../../services/firebase';

import './NewGame.css';

const antIcon = <LoadingOutlined style={{ fontSize: 22, marginRight: 5 }} spin />;


function NewGame() {
  const [gameId, setGameId] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const onCreateGameClick = React.useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const res = await createGame();

      setGameId(res.data.id);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, [loading]);

  return (
    <Space className="NewGame" direction="vertical">
      <Button onClick={onCreateGameClick}>{loading && <Spin indicator={antIcon}/>} Create Game</Button>
      {gameId && <div>Game Id: {gameId}</div>}
    </Space>
  );
}

export default NewGame;
