import React, { Component } from 'react'
import ShowSlider from '../components/ShowSlider'
import LatestHome from '../components/LatestHome'
import PopularHome from '../components/PopularHome'

export class HomePage extends Component {
    render() {
        return (
            <>
            <ShowSlider />
            <LatestHome num={4} />
            <PopularHome num={4} />
            </>
        )
    }
}

export default HomePage
