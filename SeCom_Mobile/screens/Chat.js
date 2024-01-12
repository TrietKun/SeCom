import { StyleSheet, Text, View, FlatList,TouchableOpacity, TextInput , Dimensions} from 'react-native'
import React,{ useLayoutEffect, useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import ConversationUnit from '../components/ConversationUnit';
import DataUser from '../data/dataUser';
import Avatar from '../components/Avatar';

const heigh = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

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
    <View style={styles.container}>
      <View style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          
      }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#001f3f" style={{
              position: 'absolute',
              top: 15,
              left: 25,
              zIndex: 1,
          
          }} />
          <TextInput
            style={styles.inputSearch}
            placeholder="Tìm kiếm"
            paddingLeft={40}
            opacity={0.5}
            onFocus={() => {
                setOpacity(1);
            }}
          />
      </View>
      <View style={styles.users}>
      <FlatList
        data={DataUser}
        showsHorizontalScrollIndicator = {false}
        renderItem={({item}) => (
            <Avatar  />
        )}
        keyExtractor={item => item.userId}
        horizontal={true}
      />
      </View>
      <View style={{
          width: '100%',
          height: heigh * 0.7,
          alignItems: 'center',
      }}>
        <FlatList
          data={DataUser}
          renderItem={({item}) => (
            <ConversationUnit
              name={item.name}
              avatar={item.avatar}
            />
          )}
          keyExtractor={item => item.userId}
        />
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#C4B8E6',
        alignItems: 'center',
      },
    customHeader: {
        height: 50, 
        // backgroundColor: '#3498db', 
        backgroundColor: '#CC8EE6',
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
        alignSelf: 'center',
      },
      iconUser :{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
      },
      users : {
          width: '100%',
          height: 80,
          backgroundColor: '#C4B8E6',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          padding: 5,
      },
      inputSearch :{
        width: '97%',
        height: 40,
        backgroundColor: '#E0E0E0',
        padding: 5,
        alignSelf: 'center',
        borderRadius: 30,
      },
})