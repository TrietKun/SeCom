import { StyleSheet, Text, View } from 'react-native'
import React,{ useLayoutEffect }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Chat = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          header: () => (
            <View style={styles.customHeader}>
                <Text style={styles.headerText}>Đoạn chat</Text>
                <FontAwesomeIcon icon={faPen} size={20} color="#fff" style={styles.iconHeader} />
            </View>
          ),
        });
      }, [navigation]);
    


  return (
    <View>
      
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    customHeader: {
        height: 50, 
        backgroundColor: '#3498db', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      headerText: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
      },
      iconHeader: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20,
      },
    
})