/* eslint-disable prettier/prettier */
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function NotificationFrom(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Select a category:</Text>
        <Picker selectedValue={selectedCategory}
          onValueChange={(itemValue) =>
            setSelectedCategory(itemValue)
          }
          style={styles.picker}
        >
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Finance" value="Finance" />
          <Picker.Item label="Movies" value="Movies" />
        </Picker>
        <Text style={styles.label}>Type your message:</Text>
        <TextInput style={styles.message} />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.notifiactionButton} onPress={()=>{
          navigation.navigate("Notifications Sent");
        }}>
          <Text style={styles.notifcationText}>Notifcations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButtom}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flexDirection: 'column',
  },
  label: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 15,
  },
  picker: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  message: {
    color: 'black',
    borderWidth: 2,
    width: '80%',
    margin: 20,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  submitButtom: {
    backgroundColor: 'black',
    width: '40%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  notifiactionButton: {
    backgroundColor: 'white',
    width: '40%',
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonRow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  submitText: {
    color: 'white',
    fontSize: 25,
  },
  notifcationText: {
    color: 'black',
    fontSize: 25,
  },
}
)




export default NotificationFrom;
