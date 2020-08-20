import React from 'react'
import LatestShows from '../components/LatestShows'
import HomeCards from '../components/HomeCards'
import './../css/Schedule.css'
function LatestPage() {
    return(<LatestShows 
        render={({
            results }
        ) =>
            <div className="container">
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Latest</h4>
                    </div>
                    <div className="pageHeaderInfo" style={{border:"0px"}}>
                        
                    </div>
                </div>
                <div className="cards">

                    {results.map((ep) =>
                        <HomeCards key={ep.id} showData={ep} />
                    )}
                </div>
            </div>
        }
    />
    )
}

export default LatestPage
