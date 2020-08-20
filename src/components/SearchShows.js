import { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchResult } from "./../redux/actions/showActions";
import { withRouter } from 'react-router-dom';

class SearchShows extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getSearchResult(this.props.match.params.keywords)
    }
    render() {
        return this.props.searchList
            ? this.props.render(this.props.searchList.data)
            : null;

    }
}

const mapStateToProps = (storeState) => {
    return { searchList: storeState.showState.searchResult }
}

export default withRouter(connect(mapStateToProps, { getSearchResult })(SearchShows))
