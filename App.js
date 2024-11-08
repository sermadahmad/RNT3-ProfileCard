import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileCard = () => {
  return (
    <View style = {styles.card}>
      <Image style = {styles.image}
        source = {{
          uri:'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
        }}
      />
      <Text style = {styles.name}>SERMAD AHMAD</Text>
      <Text style = {styles.bio}>Just a cool cat exploring the world of React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor:'gray',
    margin: 20,
    padding:20,
    borderRadius:10,
    alignItems:'center',
    elevation:3,
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowRadius:4
  },
  image: {
    width:200,
    height:200,
    borderRadius:100,
    margin:10,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    padding:5
  },
  bio:{
    textAlign:'center',
    color:'white'
  }
});

export default ProfileCard;