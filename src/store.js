import {createStore} from 'redux';

//Inicializamos el estado con datos ya previstos
const initialState = {
	jugadores:[{
		id:1,
		nombre: "Pikachu",
		foto: "https://pokeres.bastionbot.org/images/pokemon/25.png",


	},

	{
		id:2,
		nombre: "Ivisaur",
		foto: "https://pokeres.bastionbot.org/images/pokemon/2.png",


	},
	{
		id:3,
		nombre: "Charizar",
		foto: "https://pokeres.bastionbot.org/images/pokemon/6.png",


	},
	{
		id:4,
		nombre: "Squirtle",
		foto: "https://pokeres.bastionbot.org/images/pokemon/7.png",


	},
	{
		id:5,
		nombre: "Beedril",
		foto: "https://pokeres.bastionbot.org/images/pokemon/15.png",


	},{
		id:6,
		nombre: "Nidoqueen",
		foto: "https://pokeres.bastionbot.org/images/pokemon/31.png",


	},
	{
		id:7,
		nombre: "Vileplume",
		foto: "https://pokeres.bastionbot.org/images/pokemon/45.png",


	},
	{
		id:8,
		nombre: "Abra",
		foto: "https://pokeres.bastionbot.org/images/pokemon/63.png",


	},
	{
		id:9,
		nombre: "Tentacruel",
		foto: "https://pokeres.bastionbot.org/images/pokemon/73.png",


	},
	{
		id:10,
		nombre: "Slowbro",
		foto: "https://pokeres.bastionbot.org/images/pokemon/80.png",


	},
	{
		id:11,
		nombre: "Dugtrio",
		foto: "https://pokeres.bastionbot.org/images/pokemon/51.png",


	},
	{
		id:12,
		nombre: "Kangaskhan",
		foto: "https://pokeres.bastionbot.org/images/pokemon/115.png",


	},
	{
		id:13,
		nombre: "Gyarados",
		foto: "https://pokeres.bastionbot.org/images/pokemon/130.png",


	},
	{
		id:14,
		nombre: "Electabuzz",
		foto: "https://pokeres.bastionbot.org/images/pokemon/125.png",


	}



	],
	titulares:[],
	suplentes:[]

};

//funcion reductora

const reducerEntrenador = (state = initialState, action) =>{
	if(action.type === "AGREGAR_TITULAR"){

		return{
			...state,
			titulares:state.titulares.concat(action.jugador),
			jugadores:state.jugadores.filter(j => j.id !== action.jugador.id)
		}
	}

	if(action.type === "AGREGAR_SUPLENTE"){

		return{
			...state,
			suplentes:state.suplentes.concat(action.jugador),
			jugadores:state.jugadores.filter(j => j.id !== action.jugador.id)
		}
	}

	
	if(action.type === "QUITAR_TITULAR"){

		return{
			...state,
			titulares:state.titulares.filter(j => j.id !== action.jugador.id),
			jugadores:state.jugadores.concat(action.jugador)
		}
	}

	if(action.type === "QUITAR_SUPLENTE"){

		return{
			...state,
			suplentes:state.suplentes.filter(j => j.id !== action.jugador.id),
			jugadores:state.jugadores.concat(action.jugador)
		}
	}

	return state
};


export default createStore(reducerEntrenador);