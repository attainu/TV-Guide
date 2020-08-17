import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewAddList } from "./../redux/actions/userActActions";
import SubWatchCards from '../components/SubWatchCards';

class WatchPage extends Component {
    state={
        uid:JSON.parse(localStorage.getItem('user')).uid
    }
    componentDidMount(){
        
        this.props.viewAddList(this.state.uid)
    }
    render() {
        return this.props.userActs?(
            <SubWatchCards results={this.props.userActs} />
        ):null
    }
}

const mapStateToProps = (storeState) => {
    return {userActs: storeState.userActState.addResult}
}


export default connect(mapStateToProps, {viewAddList})(WatchPage)
