import React, {Component} from 'react'
import PropTypes from 'prop-types'
import English from './English'

class Translate extends Component {
    static contextTypes = {
        lang: PropTypes.string,
        dict: PropTypes.object
    }
    state = {
        lang: ['english', 'russian'],
        dict: {
            english: English,
            russian: Russian
        }
    }
    getChildContext() {
        return {
            lang: this.state.lang,
            dict: this.state.dict
        }
    }

    handleLangChange = lang => this.setState({ lang })

    // componentWillReceiveProps({ isOpen, article, loadArticleComments }) {

    // }
    render() {
        const {lang} = this.props
        return (
            <div>
                {this.context.user}
                <h2>Switch language:</h2>
                <button onClick={handleLangChange}>English</button>
                <button onClick={handleLangChange}>Russian</button>
            </div>
        )
    }
}

export default Translate;