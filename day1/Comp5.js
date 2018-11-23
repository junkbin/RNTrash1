import React from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';


export class Comp5 extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    async requestContactsPermission() {
      const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);

      console.log(granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED
  }

  getContacts = () => {
      this.requestContactsPermission()
          .then(function (didGetPermission) {
              if (didGetPermission) {
                  Contacts.getAll((err, contacts) => {
                      if(err){
                        throw err;
                      } 

                      else{
                        console.log(contacts);
                        alert("We got some contacts!", contacts)
                      }
                      
                  })
              } else {
                  alert("Oh no no permissions!")
              }
          }).catch((err)=>{
              console.log(err);
          })
  }

    render(){
        return (
            <View style={{backgroundColor:'royalblue', justifyContent:'center', 'flex':1, alignItems:'center'}}>
                <Text style={{color:'white', fontSize:40}}>
                    AFFIXUS 5.
                </Text>
                
                <Button title="Press me for contacts!" onPress={this.getContacts} />
            </View>
        );
    }
}