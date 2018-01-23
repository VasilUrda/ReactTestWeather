const addCity = data => ({
    type: 'ADD_CITY',
    payload: data
})

const removeCity = data => ({
    type: 'REMOVE_CITY',
    payload: data
})

export { addCity, removeCity }