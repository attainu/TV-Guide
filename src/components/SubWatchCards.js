import React, { Component } from 'react'
import './../css/Cards.css'
import PageLoader from './PageLoader'
import { withRouter } from 'react-router-dom'
import db from '../functions/firestoreConfig'

class SubWatchCards extends Component {

    handleDel = (nsg) => {
        const userId = JSON.parse(localStorage.getItem('user')).uid
        console.log(userId, nsg.id, this.props.history.location.pathname)
        switch (this.props.history.location.pathname) {
            case "/watch":
                db.collection("watchlist").where("uid", "==", userId).where("id", "==", nsg.id).get().then(function (querySnapshot) {
                    var batch = db.batch();
                    querySnapshot.forEach(function (doc) {
                        batch.delete(doc.ref);
                    });
                    return batch.commit();
                }).then(function () {

                });

                break;
            case "/subscribe":
                db.collection("subscribelist").where("uid", "==", userId).where("id", "==", nsg.id).get().then(function (querySnapshot) {
                    var batch = db.batch();
                    querySnapshot.forEach(function (doc) {
                        batch.delete(doc.ref);
                    });
                    return batch.commit();
                }).then(function () {

                });

                break;

            default:
                break;
        }
    }
    render() {
        console.log(this.props.results)
        return this.props.results ? (
            <div className="subwatch-cards">
                {this.props.results.map((ep) =>
                    <div className="subwatch-card">
                        <div className="subwatch-card--poster_path" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${ep.poster_path})` }}></div>
                        <div className="subwatch-card--original_name"><strong>{ep.original_name}</strong>
                            <p>{ep.overview}</p>
                            <div className="delete-butt" onClick={() => this.handleDel(ep)}>Delete</div>
                        </div>
                    </div>
                )}
            </div>
        ) : <PageLoader />
    }
}

export default withRouter(SubWatchCards)
