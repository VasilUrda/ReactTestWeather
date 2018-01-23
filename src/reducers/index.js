function rootReducer(state = { cities: ['New York', 'Torento'] }, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_CITY': {
      var cities = state.cities.slice()

      cities.push(payload)
      cities = cities.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      return { cities: cities }
    }
    case 'REMOVE_CITY': {
      var cities = state.cities.slice()

      cities.splice(payload, 1);
      return { cities: cities }
    }
  }

  return localStorage.state == undefined ? state : { cities: JSON.parse(localStorage.state) }
}

export default rootReducer;
