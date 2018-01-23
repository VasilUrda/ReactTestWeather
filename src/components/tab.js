import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class CityTab extends Component {
    componentWillMount() {
        //super.constructor()

        this.state = { temperature : 'Getting Information...' }
        let self = this
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=eccab9b2239db1cddfe96341142ae18f`, {
            headers: {}
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            if (data.cod === 401) {
                return;
            } else {
                self.setState({ temperature: Number((data.main.temp - 273.15).toFixed(0)) });
            }
        });
    }

    render() {
        const { city } = this.props
        return (
            <p>{city} Temperate : {this.state.temperature}</p>
        );
    }
}
