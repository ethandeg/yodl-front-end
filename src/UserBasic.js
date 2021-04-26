const UserBasic = ({ user }) => {
    return (
        <tr>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.state}</td>
        </tr>
    )

}

export default UserBasic