import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image,ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import Header from './HeaderStack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faGraduationCap, faHeart, faLocationDot, faBriefcase} from '@fortawesome/free-solid-svg-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const UpdateInfo = ( {navigation} ) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Chỉnh sửa trang cá nhân',
      headerTitleAlign: 'flex-start',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#3c3c3c',
        shadowColor: '#fff',
        elevation: 0,
      },
      headerLeft: () => {
        return (
          <View>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                navigation.goBack();
              }}>
              <FontAwesomeIcon icon={faHome} size={25} color={'#fff'} />
            </TouchableOpacity>
          </View>
        )
      },
    });
  }, [navigation])

  return (
    <View 
    style={styles.container}>
      <ScrollView 
      lazyLoad={true}
      scrollEnabled={true}
      scrollEventThrottle={90}
      contentContainerStyle={styles.wrapper}
      style={{
         width: width,
         height: height,
         backgroundColor: '#3c3c3c',
      }}>
      {/* Avatar */}
     
      <View style={styles.editAvatarContainer}>
        <View style={styles.editTitle}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >Ảnh đại diện</Text>
          <TouchableOpacity>
            <Text style={{
                color: '#55c1dd',
                fontWeight: 'bold',
              fontSize: 15,
            }}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.avatar} 
          source={require('../assets/logo2.png')}/>
      </View>
      {/* CoverImage */}
      <View style={styles.coverImageContainer}>
        <View style={styles.editTitle}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >Ảnh bìa</Text>
          <TouchableOpacity>
            <Text style={{
                color: '#55c1dd',
                fontWeight: 'bold',
              fontSize: 15,
            }}>Thêm</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.coverImage} 
          source={require('../assets/LOL/cover/6.jpg')}/>
      </View>
      <View style={styles.biographyContainer}>
        <View style={styles.editTitle}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >Tiểu sử</Text>
          <TouchableOpacity>
            <Text style={{
                color: '#55c1dd',
                fontWeight: 'bold',
              fontSize: 15,
            }}>Thêm</Text>
          </TouchableOpacity>
          </View>
          <Text style={{
            color: '#fff',
            fontSize: 15,
            marginLeft: 5,
            marginTop: 5,
            alignSelf: 'center',
            height: 'fit-content',
          }}>Mô tả bản thân</Text>
      </View>
      <View style={styles.detailContainer}>
          <View style={styles.editTitle}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >Chi tiết</Text>
            <TouchableOpacity>
              <Text style={{
                color: '#55c1dd',
                fontWeight: 'bold',
                fontSize: 15,
              }}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailUnit}>
              <FontAwesomeIcon icon={faHome} size={25} color={'#fff'} />
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginLeft: 10,
              }}>Đang sống tại Bình Dương</Text>
          </View>
          <View style={styles.detailUnit}>
              <FontAwesomeIcon icon={faGraduationCap} size={25} color={'#fff'} />
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginLeft: 10,
              }}>Đang học IUH </Text>
          </View>
          <View style={styles.detailUnit}>
              <FontAwesomeIcon icon={faHeart} size={25} color={'#fff'} />
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginLeft: 10,
              }}>Đang ...</Text>
          </View>
          <View style={styles.detailUnit}>
              <FontAwesomeIcon icon={faBriefcase} size={25} color={'#fff'} />
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginLeft: 10,
              }}>Đang ...</Text>
          </View>
         <View style={styles.linkContainer}>
              <View style={styles.editTitle}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >Liên kết</Text>
                <TouchableOpacity>
                  <Text style={{
                color: '#55c1dd',
                fontWeight: 'bold',
                    fontSize: 15,
                  }}>Thêm</Text>
                </TouchableOpacity>

              </View>
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginLeft: 5,
                marginTop: 5,
                height: 'fit-content',
              }}>Liên kết đến các trang web khác của bạn</Text>
         </View>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
      >
        <Text style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Lưu</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default UpdateInfo

const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: 'center',
      backgroundColor: '#3c3c3c',
      alignItems: 'center',
      paddingBottom: 40,
    }, 
    editAvatarContainer :{
        width: width * 0.95,
        height: 200,
        flexDirection: 'row',
        marginTop: 20,
        borderColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#3c3c3c',
        justifyContent: 'center',
        alignSelf: 'center',
    }, 
    editTitle :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 5,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    avatar :{
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'red',
        marginLeft: 5,
        marginTop: 5,
        position: 'absolute',
        alignSelf: 'center',
    },
    coverImageContainer :{
        width: width * 0.95,
        height: 'fit-content',
        marginTop: 20,
        borderColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#3c3c3c',
        paddingBottom: 10,
        alignSelf: 'center',

    },
    coverImage :{
        width: '100%',
        height: 200,
        backgroundColor: 'red',
        marginTop: 5,
        borderRadius: 25,
    },
    biographyContainer :{
        width: width * 0.95,
        height: 'fit-content',
        marginTop: 20,
        borderColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#3c3c3c',
        paddingBottom: 10,
        alignSelf: 'center',

    },
    detailContainer :{
        width: width * 0.95,
        height: 'fit-content',
        marginTop: 20,
        borderColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#3c3c3c',
        paddingBottom: 10,
        alignSelf: 'center',

    }, 
    detailUnit : {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapper: {
      width: width,
      height: 'fit-content',
      alignItems: 'center',
      paddingBottom: 40,
    },
    linkContainer : {
      width: '100%',
      height: 50,
    },
    saveButton : {
      width: '95%',
      height: 40,
      backgroundColor: '#8ac8d8',
      borderRadius: 5,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 20,
      justifyContent: 'center',
    }
})