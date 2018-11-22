import React from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';


export class Comp4 extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    async requestReadContactsPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              'title': 'App Premission',
              'message': 'Chat x App need permission.'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can read contacts")
          } else {
            console.log("read contacts permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
    }

    listContacts() {
        this.requestReadContactsPermission().then(
            Contacts.checkPermission((err, permission) => {
                if (err) throw err;
    
                // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
                if (permission === 'undefined') {
                  Contacts.requestPermission((err, permission) => {
                    // ...
                  })
                }
                if (permission === 'authorized') {
                  this.getAllContacts()
                }
                if (permission === 'denied') {
                  // x.x
                }
              })
        )
    
    }

    render(){
        return (
            <View style={{backgroundColor:'royalblue', justifyContent:'center', 'flex':1, alignItems:'center'}}>
                <Text style={{color:'white', fontSize:40}}>
                    AFFIXUS PVT.
                </Text>
            </View>
        );
    }
}