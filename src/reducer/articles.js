import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action
    const filtratedArticles = {};

    switch (type) {
        case DELETE_ARTICLE:
            for(let id in articlesState) {
                if (id !== payload.id) {
                    filtratedArticles[id] = articlesState[id]
                }
            }
            return filtratedArticles
    }

    return articlesState
}