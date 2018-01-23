import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CityTab from './tab'

export default class CitiesTab extends Component {
    render() {
        const { cities, removeTab } = this.props
        return (
            <Tabs>
                <TabList>
                    {
                        cities.map((city, index) => (
                            <Tab key = {city} tabFor={city}>
                                <div >
                                    {city}
                                    <span style={{ marginLeft: 10 }} onClick={() => this.props.removeTab(index)}>X</span>
                                </div>
                            </Tab>
                        ))
                    }
                </TabList>
                {
                    cities.map((city, index) => (
                        <TabPanel key={city} tabId={city}>
                            <CityTab city = {city} />
                        </TabPanel>
                    )
                    )
                }
            </Tabs>
        );
    }
}
