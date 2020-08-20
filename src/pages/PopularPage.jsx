import React from 'react'
import HomeCards from '../components/HomeCards'
import './../css/Schedule.css'
import PopularShows from '../components/PopularShows'
function PopularPage() {
    return(<PopularShows
        render={({
            results }
        ) =>
            <div className="container" >
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Popular</h4>
                    </div>
                    <div className="pageHeaderInfo" style={{border:"0px"}}>
                        
                    </div>
                </div>
                <div className="cards">

                    {results.map((ep) =>
                        <HomeCards showData={ep} />
                    )}
                </div>
            </div>
        }
    />
    )
}

export default PopularPage
