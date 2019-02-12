
import {RESET_GAME, SELECT_LETTRE, SET_VALUE} from "./reducer";

export function setValue(data){
    return{
        type: SET_VALUE,
        payload : {
            motAtrouver : data.motatrouver,
            nbEssaie : data.nbessaie,
            motCache : data.motatrouver.replace(/[a-zA-Z]/g, '_')
        }
    }
}

export function lettreSelect(index){
    return{
        type: SELECT_LETTRE,
        payload : {
            lettreSelectionne : index
        }

    }
}

export function reset(){
    return {
        type: RESET_GAME
    }
}