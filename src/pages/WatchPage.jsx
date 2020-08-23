import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewAddList } from "./../redux/actions/userActActions";
import SubWatchCards from '../components/SubWatchCards';

class WatchPage extends Component {
    state = {
        uid: JSON.parse(localStorage.getItem('user')).uid
    }
    componentDidMount() {

        this.props.viewAddList(this.state.uid)
    }
    UNSAFE_componentWillUpdate() {

        this.props.viewAddList(this.state.uid)
    }
    render() {
        return <>
            <div className="container">
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Watch List</h4>
                    </div>
                    <div className="pageHeaderInfo" style={{ border: "0px" }}>

                    </div>
                </div>
            </div>
            {this.props.userActs ? (
                <SubWatchCards results={this.props.userActs} />
            ) : <h6 style={{ width: "80%", margin: "auto" }}>You haven't added any show to Watch List yet.</h6>}
        </>
    }
}

const mapStateToProps = (storeState) => {
    return { userActs: storeState.userActState.addResult }
}


export default connect(mapStateToProps, { viewAddList })(WatchPage)
