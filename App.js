import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; //ucitali smo biblioteku sa ikonama
import VideoItem from './videoItem.js'; //ucitali smo video item kreiran u JS-u
import data from './data.json';   //ubacivanje fej postojeceg fajla data.json

export default class App extends React.Component {
  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>      //kreiranje nav bara
          <Image source={require('./yt_logo_mono_light.png')} style={styles.logoItem}/>     //dodavanje logo-a i podesavanje velicine
            <View style={styles.navRight}>     //dodali smo novi view da bi smo odvojili sekcije unutar navBara
              
              <TouchableOpacity>    //reagovanje na dodir
                <Icon style={styles.navItem} name="search" size={25}/>   //ubacili smo ikonu za pretragu velicine 25*25
              </TouchableOpacity>
              
              <TouchableOpacity>
                <Icon style={styles.navItem} name="account-circle" size={25}/>   
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.body}>  //kreirali smo prostor gde se nalazi video snimci
          <FlatList
            data={data.items}
            renderItem={(video)=><VideoItem video={video.item}/>}
            keyExtractor={(item)=>item.id}
            ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor: 'darkgray' }}/>}
          />
        </View>

        <View style={styles.tabBar}>
         
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25}/>
            <Text style={styles.tabTittle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25}/>
            <Text style={styles.tabTittle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25}/>
            <Text style={styles.tabTittle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25}/>
            <Text style={styles.tabTittle}>Library</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: 
  {
    flex: 1, //maksimalna fleksibilnost za predemte koji su flekcibilni (opseg: 0-1)
    backgroundColor: 'black',
    opacity: 0.85
  },

  logoItem:
  {
    width: 98,   
    height: 22 ,
  },

  navBar:
  {
    height: 55,
    backgroundColor: 'gray',
    paddingHorizontal: 15,  //razmak izmedju granice i sadrzaja po horizontali
    flexDirection: 'row', //pravac fleksibilnosti
    alignItems: 'center', //poravnanje centrirano
    justifyContent: 'space-between',    //razmak izmedju logo-a i navRight
    marginTop:20,  //razmak od vrha okrana(ekrana)
    opacity: 0.9    //neprozornost
  },

  navRight:
  {
    paddingLeft: 145,    //da bi se pomerio logo blize levoj izvici
    flexDirection: 'row',
  },

  navItem:
  {
    marginLeft: 25  //margina leve strane
  },

  body:
  {
    flex: 1,    //odvojili smo navBar i tabBar
  },
  
  tabBar:
  {
    backgroundColor: 'red',
    height: 60,
    borderTopWidth: 0.8,    //border(okvir) sa gornje strane sirine 0.8
    borderColor: 'gray',    //okvir je sive boje
    flexDirection: 'row',
    justifyContent: 'space-around',   //oko svakog itema stvara prazan prostor i postavlja ih na jednake razmake
  },

  tabItem:
  {
    alignItems: 'center', //naslovi i ikonice da budu centrirani
    justifyContent: 'center'  //centriranje po horizontali
  },

  tabTittle:
  {
    fontSize: 12,   //velicina slova
    color: 'black', //boja slova
    paddingTop: 4   //razmak izmedju ikonice i naslova
  },

});
