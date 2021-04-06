import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-navigation'
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class NotificationScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View>
                <Text>
                    Notification
                </Text>
            </View>
        )
    }
}
