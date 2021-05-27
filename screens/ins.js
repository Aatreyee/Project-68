import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ins extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
     <Text style={styles.text}> Instagram </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
    textShadowColor:'pink'
  },

  text: {
    fontFamily: 'sans-serif',
    fontWeight :'bold',
    color: 'red'
  },
});