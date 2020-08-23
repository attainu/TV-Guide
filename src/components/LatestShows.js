import { Component } from 'react'
import { connect } from 'react-redux'
import { getLatestShows } from "./../redux/actions/showActions";
import { withRouter } from 'react-router-dom';

class LatestShows extends Component {
    componentDidMount() {
        if (this.props.match.params.pageno === null && this.props.match.params.pageno === undefined) {
            this.props.getLatestShows()
        }
        else {
            this.props.getLatestShows(this.props.match.params.pageno)
        }
        console.log(this.props.match.params.pageno)
    }
    UNSAFE_componentWillUpdate(nextProps) {
        console.log()
        if (nextProps.match.params.pageno === this.props.match.params.pageno && nextProps.match.params.keywords === this.props.match.params.keywords) {
            console.log(false)
        }
        else {
            if (this.props.match.params.pageno === null && this.props.match.params.pageno === undefined) {
                this.props.getLatestShows()
            }
            else {
                this.props.getLatestShows(this.props.match.params.pageno)
            }
            console.log(this.props.match.params.pageno)
        }

    }
    render() {
        return this.props.latestList
            ? this.props.render(this.props.latestList.data)
            : null;

    }
}

const mapStateToProps = (storeState) => {
    return { latestList: storeState.showState.latest }
}


export default connect(mapStateToProps, { getLatestShows })(withRouter(LatestShows))
