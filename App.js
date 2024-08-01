import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [picker1SelectedValue, setPicker1SelectedValue] = useState("val-Broccoli $5");
  const [picker2selectedValue, setPicker2SelectedValue] = useState("0");

  const [picker3SelectedValue, setPicker3SelectedValue] = useState("val-Orange $11");
  const [picker4selectedValue, setPicker4SelectedValue] = useState("0");

  const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");


  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient style={styles.container}
        colors={['#d1effc', '#c8e6c9']}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 0, y: 1 }}
      >     

        <View style={styles.title}>
          <Text style={styles.heading}>Welcome to POG!</Text>
          <Image
            source = {{uri: 'https://img.freepik.com/free-vector/fruit-vegetables-background-concept_23-2148479313.jpg?w=996&t=st=1715492837~exp=1715493437~hmac=c297a5b62b593f9b7477bd5be467a70542be0d78d4e483d152c574c9e905ed4a'}}
            style = {{width: '100%', height: '45%'}}
          />          
        </View> 
        
        <View style={styles.body}>
          <View style={styles.row1}>
            <Text style={styles.header1}>Vegetables</Text>
            <Text style={styles.header2}>Quantity</Text>
          </View>

          <View style={styles.row2}>
            <Picker
              style={styles.picker1}
              selectedValue={picker1SelectedValue}
              onValueChange={(itemValue, itemIndex) => setPicker1SelectedValue(itemValue)}
            >
              <Picker.Item label="Broccoli $5" value="val-Broccoli $5" />
              <Picker.Item label="Potato $5" value="val-Potato $5" />
              <Picker.Item label="Carrot $4" value="val-Carrot $4" />
              <Picker.Item label="Tomato $4" value="val-Tomato $4" />
              <Picker.Item label="Cabbage $7" value="val-Cabbage $7" />
            </Picker>

            <Picker
              style={styles.picker2}
              selectedValue={picker2selectedValue}
              onValueChange={(itemValue, itemIndex) => setPicker2SelectedValue(itemValue)}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>
          </View>

          <View style={styles.row4}>
            <Text style={styles.header1}>Fruits</Text>
            <Text style={styles.header2}>Quantity</Text>
          </View>

          <View style={styles.row2}>
            <Picker
              style={styles.picker3}
              selectedValue={picker3SelectedValue}
              onValueChange={(itemValue, itemIndex) => setPicker3SelectedValue(itemValue)}
            >                
              <Picker.Item label="Orange $11" value="val-Orange $11" />
              <Picker.Item label="Apple $11" value="val-Apple $11" />
              <Picker.Item label="Grapes $12" value="val-Grapes $12" />
              <Picker.Item label="Watermelon $19" value="val-Watermelon $19" />
              <Picker.Item label="Mango $12" value="val-Mango $12" />
            </Picker>

            <Picker style={styles.picker4}
              selectedValue={picker4selectedValue}
              onValueChange={(itemValue, itemIndex) => setPicker4SelectedValue(itemValue)}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
            </Picker>
          </View>

          <View style={styles.row3}>
            <View style={styles.button}>
              <Button 
                title="CALCULATE"
                onPress={() => {
                  const lastChar = picker1SelectedValue[picker1SelectedValue.length - 1];
                  const charToIntForPicker1 = parseInt(lastChar);
                  const charToIntForPicker2 = parseInt(picker2selectedValue);

                  const lastTwoChar = picker3SelectedValue.substr(picker3SelectedValue.length - 2, 2);
                  const charToIntForPicker3 = parseInt(lastTwoChar);
                  const charToIntForPicker4 = parseInt(picker4selectedValue);
                  setCalculatedValue((charToIntForPicker1 * charToIntForPicker2) + (charToIntForPicker3 * charToIntForPicker4));
                }}
               />
            </View>              
            <Text style={styles.placeholder}> {calculatedValue} </Text>
          </View>

          <View>
            <Text style={styles.footer}>Made by Htet Yamin Ei, Rabita Chhantyal, Rashmi Kumari, Marc Macaraeg</Text>
          </View>
        </View> 

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  title: {
    alignItems: 'center',
    marginTop: 50,
  },

  body: {
    marginTop: -100,
  },

  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },

  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  header1: {
    flex: 2,
    marginRight: 40,
    textAlign: 'center',    
    fontSize: 17,
    fontWeight: 'bold',
  },

  header2: {
    flex: 1,    
    fontSize: 17,
    fontWeight: 'bold',
  },

  row2: {
    flexDirection: 'row',
  },

  picker1: {
    flex: 2,
    marginTop: 10,
  },

  picker2: {
    flex: 1,
    marginTop: 10,
  },

  row3: {
    marginTop: 20,
  },

  picker3: {
    flex: 2,
    marginTop: 10,
  },

  picker4: {
    flex: 1,
    marginTop: 10,
  },

  row4: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },

  placeholder: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginTop: 30,
  },

  footer: {
    textAlign: 'center',
    paddingHorizontal: 30,
  }
});
