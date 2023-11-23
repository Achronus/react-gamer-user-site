import PropTypes from "prop-types";
import { useState } from "react";


const AddUser = ({ users, onAddUser }) => {
    const [userExists, setUserExists] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: ""
    });

    const checkUserExists = (currUsername) => {
        for (let user of users) {
            if (user.username === currUsername) {
                return true;
            }
        }
        return false;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userAlreadyExists = checkUserExists(user.username);

        if (!userAlreadyExists) {
            onAddUser(user);
        }

        setUserExists(userAlreadyExists);
    }

    const isDisabled = () => {
        return user.firstName === "" || user.lastName === "" || user.username === "";
    }

    return (
        <div className="create-user-form">
            <h2>New User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleInputChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleInputChange} />
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleInputChange} />
                <button disabled={isDisabled()}>Add</button>
            </form>
            {userExists ? (
                <p className="error">You cannot add a user that already exists.</p>
            ) : ( "" )}
        </div>
    );
}

AddUser.propTypes = {
    users: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired
}

export default AddUser;