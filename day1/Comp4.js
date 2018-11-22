import React from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';


export class Comp4 extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    async requestContactsPermission() {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
              title: 'Hey you need to give us contacts permissions!',
              message: 'We need to read your contacts so we can sell them to advertisers.'
          }
      )
      return granted === PermissionsAndroid.RESULTS.GRANTED
  }

  getContacts = () => {
      this.requestContactsPermission()
          .then(function (didGetPermission: boolean) {
              if (didGetPermission) {
                  Contacts.getAll((err, contacts) => {
                      if (err) throw err;
                      alert("We got some contacts!")
                  })
              } else {
                  alert("Oh no no permissions!")
              }
          })
  }

    render(){
        return (
            <View style={{backgroundColor:'royalblue', justifyContent:'center', 'flex':1, alignItems:'center'}}>
                <Text style={{color:'white', fontSize:40}}>
                    AFFIXUS PVT.
                </Text>
                <Button title="Press me for contacts!" onPress={this.getContacts} />

            </View>
        );
    }
}