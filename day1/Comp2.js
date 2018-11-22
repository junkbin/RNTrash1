import React from 'react';
import {View, Text} from 'react-native';

export class Comp2 extends React.Component{
    render(){
        return (
            <View style={{backgroundColor:'royalblue'}}>
                <Text style={{color:'white', fontSize:25}}>Hello Component!!!</Text>
            </View>
        );
    }
}