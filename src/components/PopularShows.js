import { Component } from 'react'
import { connect } from 'react-redux'
import { getPopularShows } from "./../redux/actions/showActions";
import { withRouter } from 'react-router-dom';

class PopularShows extends Component {
    componentDidMount() {
        if (this.props.match.params.pageno === null && this.props.match.params.pageno === undefined) {
            this.props.getPopularShows()
        }
        else {
            this.props.getPopularShows(this.props.match.params.pageno)
        }

    }
    UNSAFE_componentWillUpdate(nextProps) {
        if (nextProps.match.params.pageno !== this.props.match.params.pageno) {
            if (this.props.match.params.pageno === null && this.props.match.params.pageno === undefined) {
                this.props.getPopularShows()
            }
            else {
                this.props.getPopularShows(this.props.match.params.pageno)
            }
        }
    }
    render() {
        return this.props.popularList
            ? this.props.render(this.props.popularList.data)
            : null;

    }
}

const mapStateToProps = (storeState) => {
    return { popularList: storeState.showState.popular }
}

export default connect(mapStateToProps, { getPopularShows })(withRouter(PopularShows))
