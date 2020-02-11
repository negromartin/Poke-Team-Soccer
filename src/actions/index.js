import axios from 'axios';

export const SHOW_JUGADORES = 'SHOW_JUGADORES';

export function showJugadores(){

	return (dispatch ,getState)=>{
		axios.get()
			.then((response)=>{
				console.log(response)
				dispatch({type: SHOW_JUGADORES, payload:response.data})
			})

	}


}