import {Link} from "react-router-dom"
const UserBasic = ({ user }) => {
    return (
        <tr>
            <td><Link to={`/users/${user.id}`}>{user.email}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.state}</td>
        </tr>
    )

}

export default UserBasic