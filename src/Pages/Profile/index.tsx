import React from 'react';
import {useRoute} from '@react-navigation/native';
import Provider from './Provider';
import Client from './Client';

interface RouteProps {
  owner: boolean;
}

const Profile: React.FC = () => {
  const route = useRoute();

  const {owner} = route.params as RouteProps;

  if (owner === undefined) {
    return <Client />;
  }

  if (owner === true) {
    return <Provider />;
  } else {
    return <Client />;
  }
};

export default Profile;
