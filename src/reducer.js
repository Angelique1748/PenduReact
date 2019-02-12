import Immutable from 'seamless-immutable';

const initialState = Immutable({

    motATrouver:'',
    motT:'',
    nbEssaie:0,
    lettres: 'abcdefghijklmnopqrstuvwxyz',
    lettreSelectionne: '',
    indice: [],
    victoire : '',
    messageFin: ''

});

export const SET_VALUE = 'setValue';
export const SELECT_LETTRE = 'selectLettre';
export const RESET_GAME = 'reset';

export default function reducer(currentState = initialState, action){

    switch (action.type) {

        case 'setValue' :
            currentState = currentState.set('motATrouver', action.payload.motAtrouver);
            currentState = currentState.set('nbEssaie', action.payload.nbEssaie);
            currentState = currentState.set('motT', action.payload.motCache);
            break;

        case 'selectLettre' :

            currentState = currentState.set('lettreSelectionne', action.payload.lettreSelectionne);
            currentState = currentState.set('indice', []);
            if (currentState.motATrouver.includes(currentState.lettreSelectionne)){
                for(let i=0; i<currentState.motATrouver.length; i++){
                    if(currentState.motATrouver[i] === currentState.lettreSelectionne){
                        currentState = currentState.set('indice', [...currentState.indice, i])
                    }
                }
                    currentState.indice.map((indice)=> (
                        currentState = currentState.set('motT', currentState.motT.substring(0, indice) + currentState.lettreSelectionne + currentState.motT.substring(indice + 1))
                    ));

                if(!(currentState.motT.includes("_"))){
                    currentState = currentState.set('victoire', true);
                    currentState = currentState.set('messageFin', 'BRAVO ! Vous avez gagné.')
                }

            }else{
                currentState = currentState.set('nbEssaie', currentState.nbEssaie - 1);
                if (currentState.nbEssaie === 0){
                    currentState = currentState.set('victoire', false);
                    currentState = currentState.set('messageFin', 'DOMMAGE ! Réessayer.')


                }
            }
            break;

        case 'reset' : {
            currentState = initialState
        }
    }

    return currentState;

}