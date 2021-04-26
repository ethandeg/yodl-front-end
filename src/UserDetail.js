import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
const UserDetail = ({users}) => {
    const {id} = useParams()
    //filter users in state looking for user
    const [user, setUser] = useState(users.find(u => u.id === id))
    useEffect(() => {
        if(!user){
            async function getOneUser(){
                const res = await axios.get(`http://localhost:3000/users/${id}`)
                setUser(res.data)
            }
            getOneUser()
        }
        return
    },[id])
    console.log(user)
    //if not found, ping the server for the user information
    return(
        <>
        {user ?
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{user.firstName} {user.lastName}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                    <strong>{user.email}</strong> {user.state}
                    </div>
                </div>
            </div>
         :
         <h1>Loading...</h1>
         }
        </>
    )
}

export default UserDetail