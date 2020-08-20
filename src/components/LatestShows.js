import { Component } from 'react'
import { connect } from 'react-redux'
import { getLatestShows } from "./../redux/actions/showActions";

class LatestShows extends Component {
    componentDidMount(){
        this.props.getLatestShows()
    }
    render() {
        return this.props.latestList
        ? this.props.render(this.props.latestList.data)
        : null;
        
    }
}

const mapStateToProps = (storeState) => {
    return {latestList:storeState.showState.latest}
}


export default connect(mapStateToProps, {getLatestShows})(LatestShows)
