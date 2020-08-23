import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({
    user,
    componentProps,
    component: Component,
    path,
    ...restProps
}) => {
    return !user ?
        (<Redirect to='/login' />)
        : (
            <Route {...restProps} render={routeProps => <Component {...routeProps} {...componentProps} />} />
        )
}



export default ProtectedRoute
