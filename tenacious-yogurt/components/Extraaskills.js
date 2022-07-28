import * as React from 'react';
import { Text, View, StyleSheet, ScrollView  } from 'react-native';

const Extraaskills = () =>{
  return(
    <ScrollView>
      <View style={styles.hr}>
      </View>
      <Text style={styles.exTitle}>Extraa Skills</Text>
      <View>
        
      </View>
      <View style={styles.hr}>
      </View>
    </ScrollView>
  )
};

  const styles = StyleSheet.create({
      hr:{
        height: 3,
        width: 330, 
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
      },
      exTitle:{
        marginLeft: 30,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
      },
  });

  export default Extraaskills;
