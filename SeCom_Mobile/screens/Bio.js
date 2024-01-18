import { StyleSheet, Text, View, Image, Dimensions,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Post from '../components/Post'
import listPost from '../data/ListPost'
import listUser from '../data/dataUser'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Bio = () => {
  return (
    <ScrollView 
    lazyLoad={true}
    scrollEventThrottle={90}
    contentContainerStyle={styles.wrapperPost}
    style={styles.container}>
       <View style={styles.scrollContainer}>
       <View style={{
        width: width,
      }}>
      <View style={styles.bioContainer}>
        <View style={styles.coverImage}>
          <Image source={require('../assets/LOL/cover/3.jpg')} style={{width: '100%', height: '100%'}} />
        </View>
        <View style={styles.avatar}>
          <Image source={require('../assets/LOL/cover/3.jpg')} style={{width: '100%', height: '100%'}} />
        </View>
        <View style={styles.profile}>
          <Text style={styles.name}>Nguyen Van A</Text>
          <Text style={styles.profileText}>Male</Text>
          <Text style={styles.profileText}>Address</Text>
          <Text style={styles.profileText}>Phone</Text>
          <Text style={styles.profileText}>Email</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={{textAlign: 'center', marginTop: 5,fontSize : 15}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
            <View style={{
              width: width,
              height: 'fit-content',
              alignItems: 'center',
            }}>

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
            </View>
      </View>
    </ScrollView>
  )
}

export default Bio

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  bioContainer: {
    width: width,
  },
  coverImage: {
    width: width,
    height: 200,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    overflow: 'hidden',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#808080',
    position: 'absolute',
    top: 100,
    left: '35%',
    borderWidth: 5,
    borderColor: '#fff',
    zIndex: 2,
  },
  profile: {
    width: width,
    height: 'fit-content',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#3c3c3c',
  },
  name : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  profileText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
  scrollContainer: {
    width: width,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingBottom: 10,
  },
  editProfileButton :{
    marginTop: 20,
    width: '80%',
    height: 30,
    backgroundColor: '#8ac8d8',
    borderRadius: 5,
    alignSelf: 'center',
  }
})