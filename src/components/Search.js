import React from 'react'
import './../css/Search.css'
import { delay } from 'lodash'
import { withRouter } from 'react-router-dom'
function Search(props) {
    
    function handleSearch(event) {
        console.log(event.target.value)
        event.persist()
     delay((kw)=>{ 
        props.history.push(`/search/${event.target.value.replace(/ /g,"%20")}`)
     },3000,event.target.value) 
      }
    return (
        <div className="intut-outer-wrapper">
            <div className="input-inner-wrapper">
                <input type="search" name="search" onKeyDown={handleSearch} placeholder="type series name, keywords..."/><span className="fas fa-search"></span>
            </div>
        </div>
    )
}

export default withRouter(Search)
