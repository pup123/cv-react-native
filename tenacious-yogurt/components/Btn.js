import * as React from 'react';
import { Text, View, StyleSheet, ScrollView  } from 'react-native';

const Btn = () =>{
  return(
    <ScrollView>
      <Text style={styles.btn}>Downlod CV</Text>
    </ScrollView>
  )
};

  const styles = StyleSheet.create({
    btn:{
      width:330,
      marginLeft:30,
      marginTop:100,
      backgroundColor:'orange',
      color:'white',
      fontWeight: 'bold',
      fontSize:26,
      textAlign: 'center',
    }
  });

  export default Btn;
