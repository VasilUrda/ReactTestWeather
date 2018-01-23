import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addCity, removeCity } from '../actions';
import CitiesTab from './tabs'
const styles = {
  centerAlign: {
    textAlign: 'center'
  },
  margin10: {
    marginLeft: 10
  }
}

class App extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    localStorage.state = JSON.stringify(this.props.cities);
  }

  render() {
    const { cities } = this.props
    return (
      <MuiThemeProvider>
        <div style={styles.centerAlign}>
          <TextField
            hintText="Input city"
            ref='city'
          />
          <RaisedButton label="Add City" primary={true} style={styles.margin10} onClick={() => {
            this.props.addCity(this.refs.city.input.value)
          }} />
          <div>
            <CitiesTab cities={cities} removeTab={this.props.removeCity} />
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities
})

const mapDispatchToProps = (dispatch) => ({
  addCity: (data) => dispatch(addCity(data)),
  removeCity: (data) => dispatch(removeCity(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)