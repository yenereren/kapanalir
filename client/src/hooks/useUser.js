import React from 'react';
import {UserContext} from '../contexts/userContext';

export function useUser(){
  const user = React.useContext(UserContext);

  return user;
}