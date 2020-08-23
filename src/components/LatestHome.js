import React from 'react'
import LatestShows from './LatestShows'
import "./../css/Cards.css";
import HomeCards from './HomeCards';
import { Link } from 'react-router-dom';
import './../css/Schedule.css'

const LatestHome = (...props) => {
    return (<LatestShows
        render={({
            results }
        ) =>
            <div className="container" >
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Latest</h4>
                    </div>
                    <div className="pageHeaderInfo read_more_butt">
                        <Link to="/latest">Read More....</Link>
                    </div>
                </div>
                <div className="cards">

                    {results.map((ep) =>
                        <HomeCards showData={ep} />
                    ).slice(0, props[0].num)}
                </div>
            </div>
        }
    />
    )
}

export default LatestHome




