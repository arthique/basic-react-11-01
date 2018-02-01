import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'searching for comment', id)
    return comments[id]
})
export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    console.log('---', 'searching for article', id)
    return articles[id]
})

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'computing filters')
    const {selected, dateRange: {from, to}} = filters
    const filtratedArticles = {};
    let published;
    for(let id in articles) {
        published = Date.parse(articles[id].date)
        if ((!selected.length || selected.includes(id)) && (!from || !to || (published > from && published < to))) {
            filtratedArticles[id] = articles[id]
        }
    }
    return filtratedArticles

})