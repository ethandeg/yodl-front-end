import { useState } from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
const UserRegistrationForm = ({addUser}) => {
    const history = useHistory()
    const INITIAL_STATE = { email: '', firstName: "", lastName: "", password: "" }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        addUser(formData)
        setFormData(INITIAL_STATE)
        history.push('/admin')
    }
    return (
        <form className="box" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Email:</label>
                <div className="control">
                    <input className="input" type="email" name="email" value={formData.email} placeholder="e.g. alex@example.com" id="email" onChange={handleChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">First Name:</label>
                <div className="control">
                    <input className="input" type="input" name="firstName" placeholder="Alex" value={formData.firstName} id="firstName" onChange={handleChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">Last Name:</label>
                <div className="control">
                    <input className="input" type="input" name="lastName" placeholder="Smith" value={formData.lastName} id="lastName" onChange={handleChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">Password:</label>
                <div className="control">
                    <input className="input" type="password" name="password" placeholder="**********" value={formData.password} id="password" onChange={handleChange} />
                </div>
            </div>

            <button className="button is-primary">Register</button>
        </form>
    )

}

export default UserRegistrationForm