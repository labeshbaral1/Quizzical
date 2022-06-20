
export const toggleSelected = (qn, cn) => {

    return{
        type: "TOGGLE",
        payload: {
            questionNumber: qn, 
            choiceNumber: cn
        }
    }
}

