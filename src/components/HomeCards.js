import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import { addToSubscribeList, addToWatchList } from './../redux/actions/userActActions'
import { connect } from 'react-redux'
import './../css/Cards.css'
import { withRouter } from 'react-router-dom'
class HomeCards extends Component {

    handleWatch = (e) => {
        e.preventDefault()
        const userId = JSON.parse(localStorage.getItem('user')).uid
        const watchid = `${this.props.showData.id}-${userId}`;
        const info = {
            uid: userId,
            backdrop_path: this.props.showData.backdrop_path,
            id: this.props.showData.id,
            original_name: this.props.showData.original_name,
            overview: this.props.showData.overview,
            poster_path: this.props.showData.poster_path
        }
        this.props.addToWatchList(info, watchid)

    }
    handleSubscibe = (e) => {
        e.preventDefault()
        const userId = JSON.parse(localStorage.getItem('user')).uid
        const subid = `${this.props.showData.id}-${userId}`;
        const info = {
            uid: userId,
            backdrop_path: this.props.showData.backdrop_path,
            id: this.props.showData.id,
            original_name: this.props.showData.original_name,
            overview: this.props.showData.overview,
            poster_path: this.props.showData.poster_path
        }
        this.props.addToSubscribeList(info, subid)


    }
    handleDetailts = () => {

        this.props.history.push(`/showdetails/${this.props.showData.id}`)
    }
    render() {
        return (
            <span>
                <div className="card" key={this.props.showData.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.showData.poster_path})` }}>
                    <div className="overlay">
                        {this.props.userDetail ?
                            (<>
                                <form onSubmit={this.handleWatch}>
                                    <button className="overlay-butt" ><span className="fa fa-plus-circle" ></span>ADD</button>
                                </form>
                                <form onSubmit={this.handleSubscibe}>
                                    <button className="overlay-butt" ><span className="fa fa-check-circle" ></span>SUBSCRIBE</button>
                                </form>
                            </>)
                            : (<form style={{ width: "100%", margin: "auto" }}><button className="overlay-butt" onClick={(e) => e.preventDefault()}>Login First!</button></form>)}
                    </div>

                    <div className="card--original_name">{this.props.showData.original_name.slice(0, 20)}</div>
                </div>
                <div className="readme" onClick={this.handleDetailts}>Read More</div>
            </span>
        )
    }
}
const mapStatesToMatch = (storeState) => {
    return { userDetail: storeState.authState.user }
}
export default withRouter(connect(mapStatesToMatch, { addToSubscribeList, addToWatchList })(HomeCards))
