import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React,{ useLayoutEffect }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, 
         faTv, 
         faComment, 
         faCirclePlus, 
         faMagnifyingGlass ,
         faUserGroup,
         faHeartCrack,
         faBell,
         faBars,
        } from '@fortawesome/free-solid-svg-icons';
import Post from '../components/Post'
import listPost from '../data/ListPost'
import listUser from '../data/List_user'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <View style={styles.customHeader}>
          <Image source={require('../assets/logoSec.png')} style={{width: 60, height: 30, marginLeft: 20}} />
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
            <FontAwesomeIcon icon={faCirclePlus} size={25} color="#fff" style={styles.iconHeader} />
            <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="#fff" style={styles.iconHeader} />
            <FontAwesomeIcon icon={faComment} size={25} color="#fff" style={styles.iconHeader} />
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <FontAwesomeIcon icon={faHome} size={25} color="#fff" style={styles.iconHeader} />
        <FontAwesomeIcon icon={faTv} size={25} color="#fff" style={styles.iconHeader} />
        <FontAwesomeIcon icon={faUserGroup} size={25} color="#fff" style={styles.iconHeader} />
        <FontAwesomeIcon icon={faHeartCrack} size={25} color="#fff" style={styles.iconHeader} />
        <FontAwesomeIcon icon={faBell} size={25} color="#fff" style={styles.iconHeader} />
        <FontAwesomeIcon icon={faBars} size={25} color="#fff" style={styles.iconHeader} />
      </View>
      <View style={styles.scrollContainer}>
            <ScrollView
              scrollEventThrottle={90}
              contentContainerStyle={styles.wrapperPost}
            >

              {
                listPost.map((item, index) => (
                  <Post
                    userName={listUser[item.idUser - 1].name}
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    content={item.content} 
                    />
                ))
              }
            </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   container: {
       width: width,
       height: height,
       alignItems: 'center',
       backgroundColor: '#C4B8E6',
   },
   customHeader: {
        height: 50, 
        width: width,
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
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      nav : {
        width: width ,
        height: 50,
        backgroundColor: '#CC8EE6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: 40,
        paddingRight: 40,
      },
      scrollContainer: {
        width: width,
        height: height - 100,
        backgroundColor: '#C4B8E6',
        alignItems: 'center',
      },
      wrapperPost: {
        width: width,
        height: 'fit-content',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
      },
})