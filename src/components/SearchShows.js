import { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchResult } from "./../redux/actions/showActions";
import { withRouter } from 'react-router-dom';

class SearchShows extends Component {
    componentDidMount() {
        if (this.props.match.params.pageno !== null && this.props.match.params.pageno !== undefined) {
            this.props.getSearchResult(this.props.match.params.keywords)
        }
        else {
            this.props.getSearchResult(this.props.match.params.keywords, this.props.match.params.pageno)
        }
    }
    UNSAFE_componentWillUpdate(nextProps) {
        if (nextProps.match.params.pageno !== this.props.match.params.pageno && nextProps.match.params.keywords !== this.props.match.params.keywords) {
            if (this.props.match.params.pageno !== null && this.props.match.params.pageno !== undefined) {
                this.props.getSearchResult(this.props.match.params.keywords)
            }
            else {
                this.props.getSearchResult(this.props.match.params.keywords, this.props.match.params.pageno)
            }
        }
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
