import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import Register from './Register';
import Login from './Login';
import Map from './Map';
import Owner from './Owner';
import Menu from './Menu';
import OwnerSettings from './OwnerSettings';

export default class Routes extends Component {
    render(){
        return(
        <Router>
            <Stack key='root'>
                <Scene key= 'login' component = { Login } initial = {true} hideNavBar={true} />
                <Scene key= 'owner' component = { Owner } hideNavBar={true} />
                <Scene key= 'register' component = { Register } hideNavBar={true} />
                <Scene key= 'map' component = { Map } hideNavBar={true} />
                <Scene key= 'menu' component = { Menu } hideNavBar={true} />
                <Scene key= 'ownerSettings' component = { OwnerSettings } hideNavBar={true} />
            </Stack>
        </Router>
        );
    }
}
