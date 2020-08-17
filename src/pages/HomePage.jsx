import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowSlider from '../components/ShowSlider'
import LatestHome from '../components/LatestHome'

export class HomePage extends Component {
    render() {
        return (
            <>
            <ShowSlider />
            <LatestHome num={4} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
