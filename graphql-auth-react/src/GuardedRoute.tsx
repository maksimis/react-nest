import {Redirect, Route} from "react-router";

const GuardedRoute = ({ component : Component, auth, ...rest }: any) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default GuardedRoute;