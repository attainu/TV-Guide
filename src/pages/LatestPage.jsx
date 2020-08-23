import React from 'react'
import LatestShows from '../components/LatestShows'
import HomeCards from '../components/HomeCards'
import './../css/Schedule.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Paginate from '../components/Paginate'
function LatestPage(props) {
    var currentIndex = null;
    if (props.match.params.pageno !== null && props.match.params.pageno !== undefined) {
        currentIndex = parseInt(props.match.params.pageno)
    }
    else {

        currentIndex = 1;
    }
    console.log(currentIndex)
    const handleFirst = () => {
        if (props.match.params.pageno) {
            props.history.push('/latest')
        }
    }
    const handlePrev = () => {
        if (currentIndex === 2) {
            props.history.push(`/latest`)
        }
        else if (currentIndex > 2) {
            let prev = currentIndex - 1;
            props.history.push(`/latest/${prev}`)
        }
    }
    const handleNxt = () => {
        if (currentIndex <= 6) {
            let nxt = currentIndex + 1;
            props.history.push(`/latest/${nxt}`)
        }
    }

    const handleLast = () => {
        props.history.push('/latest/106')

    }
    return (<LatestShows
        render={({
            results }
        ) =>
            <div className="container">
                <div className="pageHeader" style={{ margin: "10px 0" }}>
                    <div className="pageHeaderInfo">
                        <h4>Latest</h4>
                    </div>
                    <div className="pageHeaderInfo" style={{ border: "0px" }}>

                    </div>
                </div>
                <div className="cards">

                    {results.map((ep) =>
                        <HomeCards key={ep.id} showData={ep} />
                    )}
                </div>
                <div className="pagination">
                    <div className="first page" onClick={handleFirst}><span className="fa fa-backward"></span></div>
                    <div className="previousPage page" onClick={handlePrev}><span className="fa fa-angle-left"></span></div>
                    <Paginate name="latest" number={props.match.params} />
                    <div className="nextPage page" onClick={handleNxt}><span className="fa fa-angle-right"></span></div>
                    <div className="last page" onClick={handleLast}><span className="fa fa-forward"></span></div>
                </div>
            </div>
        }
    />
    )
}

export default LatestPage
