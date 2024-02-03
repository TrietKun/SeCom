import * as React from 'react';
import { Chip } from 'react-native-paper';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const MyComponent = () => (
  <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '95%',
  }}>
    <TextInput style={{
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    
    }}>

    </TextInput>
  <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    paddingHorizontal: 10,
  }}>
    <Chip style={styles.chip} icon={() => <FontAwesomeIcon icon={faCheck} size={20} color="" />}>Home</Chip>    
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Example Chip</Chip>
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Chip Chip Chip</Chip>
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Example Chip Chip Chip</Chip>
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Example Chip</Chip>
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Example Chip Chip Chip</Chip>
    <Chip style={styles.chip} icon="information" onPress={()=>{}}>Example</Chip>
  </View>
  </View>
);

export default MyComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip : {
    margin : 4,
  }
});