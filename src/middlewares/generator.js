import {CREATE_COMMENT} from '../constants'

export default store => next => action => {
    const uniqId = () => {
        const timestamp = new Date().getTime().toString()
        const size = timestamp.length
        const randomize = () => Math.floor(Math.random() * 74)
        const numberRange = (number) => {
            if(number >= 48) {
                if(number <= 57) {
                    return String.fromCharCode(number)
                } else {
                    if(number >= 65 && number <= 90) {
                        return String.fromCharCode(number)
                    } else {
                        if(number >= 97 && number <= 122) {
                            return String.fromCharCode(number)
                        } else {
                            console.log('gt 122: ', number)
                            return numberRange(number - randomize())
                        }
                    }
                }
            } else {
                console.log('lt 48: ', number)
                return numberRange(number + randomize())
            }
        }
        let i;
        let id = '';

        for(i=0; i < size; i++) {
            id = id + numberRange(+timestamp[i])
        }
        return id;
    }
    
    console.log('--- state before: ', store.getState())
    console.log('--- action: ', action)
    if (action.type === CREATE_COMMENT) {
        action.id = uniqId()
    } 
    next(action)
    console.log('--- state after: ', store.getState())
}