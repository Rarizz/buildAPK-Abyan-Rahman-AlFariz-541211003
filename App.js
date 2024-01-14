import react from 'react';
import {View,Text,Image,TextInput,Button,ScrollView,Linking, StyleSheet} from 'react-native';
import MyButton from './components/Button'
import Instagram_button from './components/Instagram_button'
import Linkedin_button from './components/Linkedin_button'
import { Card } from 'react-native-paper';



export default function App() {
  return (
    <ScrollView style={styles.container}>
    <View style={{ paddingBottom: 30 }}> 
      <Text style={styles.overviewheading}>Overview</Text>
      <Card style={styles.card}>
        <View style={styles.inner_card}>
          <View style={{ position: 'relative', height: 100 }}>
            <Image
              style={{
                width: 98,
                height: 140,
                position: 'absolute',
                bottom: -45,
                left: -8,
              }}
              source={require('./assets/cv_photo.png')}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 104 }}>
            <Text style={styles.pb1}>Abyan Rahman AlFariz</Text>
            <Text style={(styles.pb3, styles.textleft)}>
              Saya Abyan Rahman AlFariz. Siswa SMK Telkom Purwokerto dari jurusan RPL, memiliki ketertarikan di bidang data analyst.
            </Text>
          </View>
        </View>
      </Card>
      </View>
      <View
        style={{
          marginVertical: 16,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.projectheading}>My Project</Text>
      <View>
        <View style={{ marginBottom: 20 }}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image
                  style={{ width: 300, height: 190, borderRadius: 5 }}
                  source={require('./assets/EduApp.png')}
                />
              </View>
              <View
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 200,
                }}>
                <MyButton url="https://dribbble.com/shots/20368099-EduApp" />
              </View>
              <View style={{ marginLeft: 10, marginTop: -40, marginBottom: 10 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'black',
                    fontSize: 15,
                  }}>
                  EduApp
                </Text>
                <Text 
        style={{
          textAlign: 'left', 
          color: '#176B87', 
          fontSize:13
      }}>Desain Project</Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image
                  style={{ width: 300, height: 190, borderRadius: 5 }}
                  source={require('./assets/Haydoc.png')}
                />
              </View>
              <View
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 200,
                }}>
                <MyButton url= "https://dribbble.com/shots/20368124-Haydoc" />
              </View>
              <View style={{ marginLeft: 10, marginTop: -40, marginBottom: 10 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'black',
                    fontSize: 15,
                  }}>
                  Haydoc
                </Text>
                <Text 
        style={{
          textAlign: 'left', 
          color: '#176B87', 
          fontSize:13
      }}>Desain Project</Text>
              </View>
            </View>
          </Card>
        </View>
      </View>
      
      <View
        style={{
          marginVertical: 16,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.projectheading}>Social Media</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10
          }}>
           <Instagram_button url="https://www.instagram.com/farriiizzz_project" />
          <Linkedin_button url="https://www.linkedin.com/in/abyan-rahman-alfariz-93797927b/" />
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#DDDDDD',
  },
  overviewheading: {
    paddingTop: 52,
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  projectheading: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    position: 'relative',
    padding: 18,
    backgroundColor: '#EEEEEE',
  },
  inner_card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inner_card1: {
    textAlign: 'center',
  },
  // inner_card2: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // marginbottomcard: {
  //   marginBottom: 10,
  // },
  // textcenter: {
  //   textAlign: 'center',
  // },
  textleft: {
    textAlign: 'left',
  },
  // textright: {
  //   textAlign: 'right',
  // },
  pb1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // pb2: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  // p3: {
  //   fontSize: 14,
  // },
  pb3: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
