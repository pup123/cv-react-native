import * as React from 'react';
import { Text, View, StyleSheet ,ScrollView } from 'react-native';

const Header = () =>{
  return(
    <ScrollView style={styles.info}>
      <View style={styles.hr} >
      </View>
      <View style={styles.text}>
        <Text style={styles.btn}>Age:</Text>
        <Text style={styles.end}>22</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.btn}>birth date:</Text>
        <Text style={styles.end}>29/1/2000</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.btn}>Job:</Text>
        <Text style={styles.end}>full time</Text>  
      </View>
      <View style={styles.text}>
        <Text style={styles.btn}>Adress</Text>
        <Text style={styles.end}>minya</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  info: {
    marginTop: 20,
  },
  hr:{
    height: 3,
    width: 330, 
    marginLeft: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 27,
  },
  btn:{
    display:'inline',
    backgroundColor: 'black',
    color: 'white',
    padding:10,
    fontWeight: 'bold',
    fontSize:20,
  },
  end:{
    justifyContent: 'flex-end',
    alignSelf: "center",
    fontWeight: 'bold',
  }

});

export default Header;