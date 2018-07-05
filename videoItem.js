import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class VideoItem extends React.Component {
    render() {
      let video=this.props.video;
      return (
          <View style={styles.container}>
            <Image source={{uri:video.snippet.thumbnails.medium.url}} style={styles.videoItemm}/> //povezivanje sa slikom videa iz data.json
            <View style={styles.descContainer}>            
                <Image source={{uri: 'http://randomuser.me/api/portraits/men/0.jpg'}} style={{width: 50, height: 50, borderRadius:25}}/>
               
                <View style={styles.videoDetails}>
                    <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                    <Text style={styles.videoStatus}>{video.snippet.channelTitle + " . "+ nFormatt(video.statistics.viewCount,1)}</Text>
                </View>

            <TouchableOpacity>
                <Icon name="more-vert" size={20} color='white'/>
            </TouchableOpacity>

            </View>
          </View>
    );
}
}


function nFormatt (num, digits) {
    var si = [
      { value: 1E18, symbol: "E" },
      { value: 1E15, symbol: "P" },
      { value: 1E12, symbol: "T" },
      { value: 1E9,  symbol: "G" },
      { value: 1E6,  symbol: "M" },
      { value: 1E3,  symbol: "k" }
    ], i;
    for (i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol+" views";
      }
    }
    return num.toString();
  }

const styles = StyleSheet.create({
    container: 
    {
        padding: 15,
    },

    videoItemm:
    {
        height: 200,
    },

    descContainer:
    {
        flexDirection: 'row',
        paddingTop: 15

    },

    videoTitle:
    {
        fontSize: 14,
        color: 'white',

    },

    videoDetails:
    {
        paddingHorizontal: 15,
        flex: 1,

    },

    videoStatus:
    {
        color: '#3c3c3c',  
        fontSize: 13,
        paddingTop: 3
    },

});