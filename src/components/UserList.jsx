import { useState } from "react";
import PropTypes from "prop-types";
import User from "./User";

const UserList = ({ users }) => {
    const [showGamesPlayed, setShowGamesPlayed] = useState(true);

    const toggleGamesPlayedBtn = () => {
        setShowGamesPlayed(!showGamesPlayed);
    }

    const gamesPlayedButton = (
        <div>
            <button className="smallButton" onClick={toggleGamesPlayedBtn}>
                {showGamesPlayed ? "Hide " : "Show "}
                the Number of Games Played
            </button>
        </div>
    )

    return (
        <div className="list-users">
            <h2>Users</h2>
            {users && users.length > 0 ? gamesPlayedButton : ""}
            <ol className="user-list">
                {users.map((user) => (
                    <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
                ))}
            </ol>
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;