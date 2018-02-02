import {CREATE_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type } = action

    switch (type) {
        case CREATE_COMMENT:

            break
    }

    return state
}