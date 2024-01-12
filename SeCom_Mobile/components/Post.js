import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Video from 'react-native-video'

const Post = (props) => {

const {title, description, image, content, userName} = props;

  return (
    <View style={styles.container}>
      {/* <Text>{title}</Text> */}
      <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
        <Text style={styles.userName}>{userName}</Text>
        <Text>{description}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Image
        style={styles.image}
        source={image}
      />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor : 'white',
    // width : 350,
    width : '95%',
    height : 'fit-content',
    marginVertical : 10,
    borderRadius : 10,
    paddingVertical : 10,
    borderWidth : 1,
  },
  userName : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black',
    marginHorizontal : 10,
  },
  content : {
    fontSize : 15,
    color : 'black',
    marginHorizontal : 10,
  },
  image : {
    width : '95%',
    height : 200,
    alignSelf : 'center',
  }
})