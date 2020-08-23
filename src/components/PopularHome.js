import React from 'react'
import PopularShows from './PopularShows'
import "./../css/Cards.css";
import HomeCards from './HomeCards';
import { Link } from 'react-router-dom';
import './../css/Schedule.css'

const PopularHome = (...props) => {
    return (<PopularShows
        render={({
            results }
        ) =>
            <div className="container" >
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Popular</h4>
                    </div>
                    <div className="pageHeaderInfo read_more_butt">
                        <Link to="/popular">Read More....</Link>
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

export default PopularHome




