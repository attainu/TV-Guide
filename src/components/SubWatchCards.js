import React, { Component } from 'react'
import './../css/Cards.css'
import PageLoader from './PageLoader'

class SubWatchCards extends Component {
    render() {
        console.log(this.props.results)
        return this.props.results ? (
            <div className="subwatch-cards">
                {this.props.results.map((ep)=>
                    <div className="subwatch-card">
                        <div className="subwatch-card--poster_path" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${ep.poster_path})` }}></div>
                        <div className="subwatch-card--original_name"><strong>{ep.original_name}</strong>
                        <p>{ep.overview}</p>
                        </div>
                    </div>
                )}
            </div>
        ):<PageLoader />
    }
}

export default SubWatchCards
