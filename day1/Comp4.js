import React from 'react';
import {View, Text} from 'react-native';
import Contacts from 'react-native-contacts';


export class Comp4 extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
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