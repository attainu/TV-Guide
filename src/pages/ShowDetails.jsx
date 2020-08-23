import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShowDetails } from "./../redux/actions/showActions";
import { withRouter } from 'react-router-dom';
import './../css/ShowDetails.css'
import './../css/Cards.css'
import PageLoader from '../components/PageLoader';
class ShowDetails extends Component {
    componentDidMount() {
        const tid = this.props.match.params.tvId
        this.props.getShowDetails(tid)
    }
    render() {
        return this.props.showItem ? (

            <div className="show_profile_container">
                <div className="show_profile_wrapper show_profile">
                    <div className="show_profile_header">
                        <div className="show_profile_card">
                            <div className="show_profile_card--background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.showItem.data.backdrop_path})` }}>
                                <div className="show_profile_card_info">
                                    <div className="show_profile_card_info--poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.showItem.data.poster_path})` }}></div>
                                    <div className="show_profile_card_info_box">
                                        <div className="show_profile_card_info_box--innerbox show_profile_card_info_box--header">

                                            <h1>{this.props.showItem.data.original_name}</h1>
                                            <div>
                                                {this.props.showItem.data.genres.map(ep => <span key={ep.id}>{ep.name}</span>
                                                )}
                                            </div>
                                            <div className="overview">{this.props.showItem.data.overview}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="show_profile_body">
                        <div className="show_profile_body_section">
                            <div className="show_profile_body_section--title">
                                <h1>Cast</h1>
                            </div>
                            <div className="show_profile_body_section--list">
                                {this.props.showItem.data.credits ? this.props.showItem.data.credits.cast.map(ep =>
                                    <div className="show_profile_body_section_items show_profile_body_section--cast">
                                        <div className="show_profile_body_section--cast_profile_pic" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${ep.profile_path ? ep.profile_path : '/6tnJO7Qo21ezcqz1ZBY8ex11Ru7.jpg'})` }}></div>
                                        <div className="show_profile_body_section--cast_character">{ep.character}</div>
                                        <div className="show_profile_body_section--cast_name">{ep.name}</div>
                                    </div>
                                ) : <h6>Sorry! :( Data Not Available</h6>}

                            </div>
                        </div>
                    </div>

                    <div className="show_profile_body show_profile_body_second">
                        <div className="show_profile_body_section">
                            <div className="show_profile_body_section--title">
                                <h1>Seasons & Episodes</h1>
                            </div>
                            <div className="show_profile_body_section--list_other">
                                <div className="subwatch-cards" style={{ border: "0px" }}>
                                    {this.props.showItem.data.seasons.map((ep) =>
                                        <div className="subwatch-card">
                                            <div className="subwatch-card--poster_path" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${ep.poster_path})` }}></div>
                                            <div className="subwatch-card--original_name"><strong>{ep.name}</strong>
                                                <p>{ep.overview}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="show_profile_body show_profile_body_second">
                        <div className="show_profile_body_section">
                            <div className="show_profile_body_section--title">
                                <h1>Videos</h1>
                            </div>
                            <div className="show_profile_body_section--list_other">
                                <div className="subwatch-cards" style={{ border: "0px" }}>
                                    {/* console.log(this.props.showItem.data.videos.results) */}
                                    {this.props.showItem.data.videos !== null ? this.props.showItem.data.videos.results.map((ep) =>
                                        <div className="subwatch-card" style={{ height: "auto", padding: "0" }}>

                                            <iframe className="subwatch-card--videos"
                                                src={`https://www.youtube-nocookie.com/embed/${ep.key}?theme=dark&color=yellow&rel=0`}
                                                title={ep.name}></iframe>
                                            <h6>{ep.name}</h6>
                                        </div>
                                    ) : <h6>Not Available</h6>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : <PageLoader />
    }
}

const mapStateToProps = (storeState) => {

    return { showItem: storeState.showState.showDetails }
}


export default withRouter(connect(mapStateToProps, { getShowDetails })(ShowDetails))
