import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComment, faShare, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

const {title, description, image, content, userName} = props;

  return (
    <View 
      style={styles.background}>
      <View style={styles.container}>
      <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={{marginRight : 10,color : '#C0C0C0'}}>{description}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.status}>
        <View style={styles.unitStatus}>
          <FontAwesomeIcon icon={faThumbsUp} size={20} color="#808080"  />
          <Text style={styles.unitStatusText}>1.2k</Text>
        </View>
        <View style={styles.unitStatus}>
          <Text style={styles.unitStatusText}>1.2k Comments</Text>
        </View>
      </View>
      <View style={styles.operation}>
        <TouchableOpacity>
          <View style={styles.unitStatus}>
            <FontAwesomeIcon  icon={faThumbsUp} size={25} color="#808080"/>
            <Text style={styles.unitStatusText}>Like</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unitStatus}>
            <FontAwesomeIcon  icon={faComment} size={25} color="#808080"/>
            <Text style={styles.unitStatusText}>Like</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unitStatus}>
            <FontAwesomeIcon  icon={faShare} size={25} color="#808080"/>
            <Text style={styles.unitStatusText}>Like</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  background : {
    backgroundColor : 'black',
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom : 3,
    borderBottomWidth : 1,
    
  },
  container: {
    backgroundColor : '#3c3c3c',
    width : '95%',
    height : 'fit-content',
    marginVertical : 10,
    borderRadius : 10,
    paddingVertical : 10,
    borderWidth : 1,
    elevation : 7,
    shadowColor : 'black',
  },
  userName : {
    fontSize : 20,
    fontWeight : 'bold',
    color : '#C0C0C0',
    marginHorizontal : 10,
  },
  content : {
    fontSize : 15,
    color : '#C0C0C0',
    marginHorizontal : 10,
    marginBottom : 10,
  },
  image : {
    width : '100%',
    height : 200,
    alignSelf : 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  status : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginHorizontal : 10,
    marginTop : 10,
    borderBottomWidth : 1,
    paddingBottom : 10,
    borderColor : 'gray',
  },
  operation :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginHorizontal : 10,
    marginTop : 10,
  },
  unitStatus : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  unitStatusText : {
    marginLeft : 5,
    color : '#C0C0C0',
  }
})