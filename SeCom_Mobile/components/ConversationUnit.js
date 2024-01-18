import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const heigh = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ConversationUnit = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <Avatar />
        <View>
        <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#808080',
        }}>User 1</Text>
        <Text style={{
            fontSize: 12,
            color: '#808080',
        }}>New message</Text>
       
        </View>
        <FontAwesomeIcon icon={faCircleCheck} size={20} color="#8BB5E4" style={{
            right : 10,
            position: 'absolute',
        }} />
    </TouchableOpacity>
  )
}

export default ConversationUnit

const styles = StyleSheet.create({
    container: {
        width: width * 0.97,
        height: 70,
        alignItems: 'center',
        backgroundColor: 'black',
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        color: '#fff',
        borderColor: '#808080',
        borderBottomWidth : 1,
        
    },
})