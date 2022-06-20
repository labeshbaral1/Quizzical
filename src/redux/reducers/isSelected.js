
const numberOfQuestions = 6
const numberOfChoices = 4

const createInitialState = () => {
    let obj = {}
    for(let i = 1; i<=numberOfQuestions;i++){
        let r = {}
     for(let j = 1; j<=numberOfChoices; j++){
        r[j] = false
     }
     obj[i] = r
}
    return obj

}




export const isSelectedReducer = (state= createInitialState(), action) => {
    switch(action.type){

        case "TOGGLE": 

        const qn = action.payload.questionNumber
        const cn = action.payload.choiceNumber 

    
        
        return {
            ...state, 
            [qn]: Object.fromEntries(Object.keys(state[qn]).map((key) => [key, key == cn]))
        }
        default: return {
            ...state
        }
    }
    
}


