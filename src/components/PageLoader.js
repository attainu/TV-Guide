import Loader from 'react-loader-spinner'
import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class PageLoader extends Component {
   //other logic
   render() {
      return (
         <div style={{ height: "80vh", minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Loader
               type="Bars"
               color="#FFFF00"
               height={100}
               width={100}
            />
         </div>
      );
   }
}
export default PageLoader