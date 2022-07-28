import * as React from 'react';
import { Text, View, StyleSheet, ScrollView  } from 'react-native';
const Lang = () =>{
  return(
    <ScrollView style={{marginTop: 20}}>
      <View style={styles.hr}>
      </View>
      <Text style={styles.langTitle}>Languages</Text>
      <View>
        <View style={styles.langText}>
          <Text>English</Text>
          <Text>100%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr1}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>arabic</Text>
          <Text>100%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr2}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>Frinch</Text>
          <Text>60%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr3}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>Italy</Text>
          <Text>80%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr4}>></Text>
        </View>
      </View>
    </ScrollView>
  )};

  const styles = StyleSheet.create({
      hr:{
        height: 3,
        width: 330, 
        marginLeft: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      langTitle:{
        marginLeft: 30,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
      },
      langText:{
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        fontWeight: 'bold',
        fontSize: 30,
        color:'black',
      },
      langProgres:{
        width:330,
        height:20,
        marginLeft: 30,
        backgroundColor: "black",
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 50,
      },
      langProgreshr1:{
        height: 4,
        width: '100%', 
        backgroundColor: 'yellow',
      },
      langProgreshr2:{
        height: 4,
        width: '90%', 
        backgroundColor: 'yellow',
      },
      langProgreshr3:{
        height: 4,
        width: '60%', 
        backgroundColor: 'yellow',
      },
      langProgreshr4:{
        height: 4,
        width: '80%', 
        backgroundColor: 'yellow',
      },
  });

  export default Lang;