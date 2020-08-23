import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSchedule } from '../redux/actions/scheduleActions'
import { Chart } from "react-google-charts";
import MultDigit from '../functions/MultDigit';
import './../css/Schedule.css'
import PageLoader from '../components/PageLoader';

class SchedulePage extends Component {
    state = {
        time: new Date().toLocaleTimeString()
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        var d = new Date();
        var mnth = MultDigit(d.getMonth(), 2);
        var dt = MultDigit(d.getDate(), 2);
        var today = `${d.getFullYear()}-0${mnth}-${dt}`
        console.log(today)
        this.props.fetchSchedule(today);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return this.props.scheduleInfo
            ?//(<pre>{JSON.stringify(this.props.scheduleInfo.arr)}</pre>)
            (
                <div style={{ width: "80%", height: "90vh", margin: "10px auto 70px auto" }}>
                    <div className="pageHeader" style={{ margin: "10px 0" }}>
                        <div className="pageHeaderInfo">
                            <h4>Schedule</h4>
                        </div>
                        <div className="pageHeaderInfo" style={{ paddingRight: "0px", paddingLeft: "10%" }}>
                            <p style={{ width: "160px" }}><strong>Date: </strong>{this.state.time}</p>
                        </div>
                    </div>
                    <div style={{ width: "100%", margin: "0px auto 15px", padding: "10px 15px", background: "white", overflow: "scroll", color: "yellow" }}>
                        <Chart
                            width={'125%'}
                            height={'500px'}
                            chartType="Timeline"
                            loader={<PageLoader />}
                            data={
                                this.props.scheduleInfo.arr
                            }
                            options={{
                                axes: {
                                    y: {
                                        0: { side: 'top' }
                                    }
                                },
                                timeline: {
                                    colorByRowLabel: true,
                                    rowLabelStyle: { fontName: 'Helvetica', fontSize: 14, color: '#899' }
                                },
                                backgroundColor: '#fff'

                            }}
                            rootProps={{ 'data-testid': '5' }}
                        />
                    </div>
                </div>)
            : <PageLoader />;
    }
}

const mapStateToProps = scheduleList => {
    return { scheduleInfo: scheduleList.scheduleState.schedule }
}

export default connect(mapStateToProps, { fetchSchedule })(SchedulePage)
