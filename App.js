import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import ProfileCard from './profilecard';

const App = () => {
  const profile1 = {
    image:
      'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
    name: 'sermgfad',
    bio: 'Just a cool cat exploring the world of React Native!',
  };

  return <ProfileCard profile={profile1} />;
};

export default App;
