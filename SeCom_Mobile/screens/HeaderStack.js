import { StyleSheet, Text, View, Dimensions , TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus, faMagnifyingGlass, faComment } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Header = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.customHeader}>
          <Image source={require('../assets/logoSec.png')} style={{width: 60, height: 30, marginLeft: 20}} />
          <View style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faCirclePlus} size={25} color="#808080" style={styles.iconHeader} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="#808080" style={styles.iconHeader} />
            </TouchableOpacity>
            {/* <FontAwesomeIcon icon={faComment} size={25} color="#808080" style={styles.iconHeader} /> */}
          </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#3c3c3c',
      
    },
    customHeader: {
        height: 50, 
        width: width,
        backgroundColor: '#3c3c3c',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
      },
      headerText: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
      },
      iconHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
})