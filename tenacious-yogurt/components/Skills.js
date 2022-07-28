import * as React from 'react';
import { Text, View, StyleSheet, ScrollView  } from 'react-native';
const Skills = () =>{
  return(
    <ScrollView style={{marginTop: 20}}>
      <View style={styles.hr}>
      </View>
      <Text style={styles.langTitle}>Skills</Text>
      <View>
        <View style={styles.langText}>
          <Text>HTML</Text>
          <Text>100%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr1}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>CSS</Text>
          <Text>90%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr2}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>JS</Text>
          <Text>60%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr3}>></Text>
        </View>
      </View>

      <View>
        <View style={styles.langText}>
          <Text>PHP</Text>
          <Text>80%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr4}>></Text>
        </View>
        
      </View>
      <View>
        <View style={styles.langText}>
          <Text>Wordpress</Text>
          <Text>90%</Text>
        </View>
        <View style={styles.langProgres}>
          <Text style={styles.langProgreshr5}>></Text>
        </View>
        
      </View>
    </ScrollView>
  )};

  const styles = StyleSheet.create({
      hr:{
        height: 3,
        width: 330, 
        marginLeft: 30,
        backgroundColor: 'yellow',
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
        color:'orange',
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
        marginTop: 3,
      },
      langProgreshr2:{
        height: 4,
        width: '90%', 
        backgroundColor: 'yellow',
        marginTop: 3,
      },
      langProgreshr3:{
        height: 4,
        width: '60%', 
        backgroundColor: 'yellow',
        marginTop: 3,
      },
      langProgreshr4:{
        height: 4,
        width: '80%', 
        backgroundColor: 'yellow',
        marginTop: 3,
      },
      langProgreshr5:{
        height: 4,
        width: '90%', 
        backgroundColor: 'yellow',
        marginTop: 3,
      },
  });

  export default Skills;