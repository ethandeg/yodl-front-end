import Navbar from "./Navbar"
import Routes from "./Routes"
import {useState} from "react"
import axios from 'axios';

function App() {
  //move [users, setUsers] here
  const [users, setUsers] = useState([])
  //create an add function
  const addUser = async(userData) =>{
    const res = await axios.post("http://localhost:3000/users" ,userData)
  }
  //and get function
  const getUsers = async() => {
    const res = await axios.get("http://localhost:3000/users")
    setUsers(res.data)
  }
  // and update function,
  //drill it down to routes => then neccessary places
  return (
    <>
    <Navbar />
      <section className="hero is-primary">
        <div className="container">
          <div className="hero-body">
            <p className="title">
              Welcome!
          </p>
          </div>
        </div>
      </section>
    <Routes addUser={addUser} getUsers={getUsers} users={users}/>
    </>
  );
}

export default App;
