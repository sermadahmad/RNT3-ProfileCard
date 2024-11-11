import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileCard = ({profile}) => {
  return (
    <View style = {styles.card}>
      <Image style = {styles.image}
        source = {{ uri: profile.image}}/>
      <Text style = {styles.name}>{profile.name}</Text>
      <Text style = {styles.bio}>{profile.bio}</Text>
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