import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import Home from '../Pages/Home';
import SignInClient from '../Pages/SignInClient';
import SignInProvider from '../Pages/SignInProvider';
import Register from '../Pages/Register';
import Category from '../Pages/Category';
import Filter from '../Pages/Filter';
import Profile from '../Pages/Profile';

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="SignInClient" component={SignInClient} />
    <Auth.Screen name="SignInProvider" component={SignInProvider} />
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="Filter" component={Filter} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="Category" component={Category} />
  </Auth.Navigator>
);

export default AuthRoutes;
