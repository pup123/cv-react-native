import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Icon  } from 'react-native';
// import { Icon } from '@rneui/themed';


const Header = () =>{
  return(
    <View style={styles.header}>
      <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOrHmMCBsuA75teZ9TcoXK5siQVQeHQz9Rw&usqp=CAU'}}
   style={styles.img}
   />
      <View style={styles.text}>
        <Text style={{fontWeight:'bold'}}>Ruba rabie</Text>
        <Text>Frontend Developer</Text>
      </View>
      
      <View style={{ height: 1,width: 70, backgroundColor: 'black'}} >
      </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'orange',
    color:'white',
  },
  text: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    // fontWeight: 'bold',
    // color:'orange',
  },
  img:{
    width: 100, 
    height: 100,
    borderRadius: '50%',
    textAlign: 'center'
  }
});

export default Header;