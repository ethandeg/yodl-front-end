import { useEffect, useState } from "react"
import axios from "axios"
import UserBasic from "./UserBasic"
const Admin = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const res = await axios.get(`http://localhost:3000/users`)
            setUsers(res.data)
        }
        getUsers()
    }, [])
    return (
        <>
            {users.length
                ?
                <>
                    <div className="container">
                        <h1 className="title has-text-success-dark">Admin Module</h1>
                    </div>
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tfoot>
                            {users.map(user => (
                                <UserBasic user={user} key={user.id} />
                            ))}
                        </tfoot>
                    </table>
                </>
                :

                <h1>Loading....</h1>}

        </>
    )
}


export default Admin