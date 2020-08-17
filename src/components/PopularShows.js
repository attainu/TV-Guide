import { Component } from 'react'
import { connect } from 'react-redux'
import { getPopularShows } from "./../redux/actions/showActions";

export class PopularShows extends Component {
    componentDidMount(){
        this.props.getPopularShows()
    }
    render() {
        return this.props.popularList
        ? this.props.render(this.props.popularList.data)
        : null;
        
    }
}

const mapStateToProps = (storeState) => {
    return {popularList:storeState.showState.popular}
}

export default connect(mapStateToProps, {getPopularShows})(PopularShows)
