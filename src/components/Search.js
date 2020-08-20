import React from 'react'
import './../css/Search.css'
function Search() {
    function handleSearch(event) {
        
      }
    return (
        <div class="intut-outer-wrapper">
            <div class="input-inner-wrapper">
                <input type="search" name="search" onChange={()=>handleSearch} placeholder="type series name, keywords..."/><span class="fas fa-search"></span>
            </div>
        </div>
    )
}

export default Search
