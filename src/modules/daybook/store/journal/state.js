// se le pone la funcion adentro para que sea reactivo y es donde se almacena la informacion

export default ( ) => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //da un codigo 25346456 cualquiera
            date: new Date().toDateString(), // da una fecha 
            text: 'Hola esto es un ejemplo',
            picture: null,
        }, 
        {
            id: new Date().getTime() + 1000, //da un codigo 25346456 cualquiera
            date: new Date().toDateString(), // da una fecha 
            text: 'Segundo ejemplo',
            picture: null,
        }, 
        {
            id: new Date().getTime() + 2000, //da un codigo 25346456 cualquiera
            date: new Date().toDateString(), // da una fecha 
            text: 'Tercer ejemplo',
            picture: null,
        }, 
    ]
})