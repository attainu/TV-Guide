import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import {addToSubscribeList,addToWatchList} from './../redux/actions/userActActions'
import { connect } from 'react-redux'

class HomeCards extends Component {

    handleWatch = (e) => {
        e.preventDefault()
       const userId=JSON.parse(localStorage.getItem('user')).uid
        console.log(JSON.parse(localStorage.getItem('user')).uid)
        const info = {
            uid: userId,
            backdrop_path: this.props.showData.backdrop_path,
            id: this.props.showData.id,
            original_name: this.props.showData.original_name,
            overview: this.props.showData.overview,
            poster_path: this.props.showData.poster_path
        }
        this.props.addToWatchList(info)

    }
    handleSubscibe = (e) => {
        e.preventDefault()
        
        const info = {
            uid: null,
            backdrop_path: this.props.showData.backdrop_path,
            id: this.props.showData.id,
            original_name: this.props.showData.original_name,
            overview: this.props.showData.overview,
            poster_path: this.props.showData.poster_path
        }
        this.props.addToSubscribeList(info)

    }
    render() {
        return (
            <div className="card" key={this.props.showData.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.showData.poster_path})` }}>
                <div className="overlay">
                    <form onSubmit={this.handleWatch}>
                        <button className="overlay-butt" ><span className="fa fa-plus-circle" ></span>ADD</button>
                    </form>
                    <form onSubmit={this.handleSubscibe}>
                        <button className="overlay-butt" ><span className="fa fa-check-circle" ></span>SUBSCRIBE</button>
                    </form>
                </div>
                <div className="card--original_name">{this.props.showData.original_name}</div>
            </div>
        )
    }
}
const mapStatesToMatch = (storeState) => {
    return { userDetail: storeState.authState.user }
}
export default connect(mapStatesToMatch, {addToSubscribeList, addToWatchList})(HomeCards)
