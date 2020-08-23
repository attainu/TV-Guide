import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Paginate extends Component {
    handlePageno = (pnum) => {
        this.props.history.push(`/${this.props.name}/${pnum}`)

    }
    render() {
        var arra = []
        var currentPage = null;
        if (this.props.number.pageno !== null && this.props.number.pageno !== undefined) {
            currentPage = this.props.number.pageno
        }
        else {
            currentPage = 1;
        }
        var diif = null;
        if (currentPage % 5 == 0) {
            diif = 5;
        }
        else {
            diif = currentPage % 5;
        }
        var first = currentPage - diif + 1;
        var last = first + 5;
        for (var i = first; i < last; i++) {
            var classStatus = null;

            if (i == currentPage) {
                classStatus = "active"

            }
            else {
                classStatus = "inactive"
            }

            arra.push({ pn: i, status: classStatus })
        }

        return (
            <>
                {arra.map(ep =>
                    <div key={ep.pn} className={`page ${ep.status}`} onClick={() => this.handlePageno(ep.pn)}>
                        {ep.pn}
                    </div>
                )}
            </>
        )
    }
}
export default withRouter(Paginate)