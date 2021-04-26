import {Route, Switch} from "react-router-dom"
import UserBasic from "./UserBasic"
import UserRegistrationForm from "./UserRegistrationForm"
import Admin from "./Admin"
import UserDetail from "./UserDetail"

const Routes = ({addUser, getUsers, users}) => {
    return (
        <Switch>
            <Route exact path = "/users/new"> <UserRegistrationForm addUser={addUser}/> </Route>
            <Route exact path = "/users/:id"> <UserDetail users={users}/></Route>
            <Route exact path = "/admin"> <Admin getUsers={getUsers} users={users}/></Route>
        </Switch>
    )
}

export default Routes