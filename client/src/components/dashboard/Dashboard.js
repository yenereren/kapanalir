import React from 'react';
import {Menu} from 'antd';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {useUser} from '../../hooks/useUser';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function Dashboard() {
  const user = useUser();

  return (
    <div className="Dashboard">
      <Menu>
        <Menu.Item>
          <Link to="/new-game">New Game</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/join-game">Join Game</Link>
        </Menu.Item>
      </Menu>
      <div className="auth">
        {user ? (
          <React.Fragment>
            <div>{user.displayName}</div>
            <div>{user.email}</div>
          </React.Fragment>
        ) : (
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
