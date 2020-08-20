import React from 'react'
import HomeCards from '../components/HomeCards'
import './../css/Schedule.css'
import SearchShows from '../components/SearchShows'
function SearchPage() {
    return(<SearchShows
        render={({
            results }
        ) =>
            <div className="container" >
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Search</h4>
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

export default SearchPage
