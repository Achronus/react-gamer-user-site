import person from "../icons/person.svg";
import PropTypes from "prop-types";

const User = ({ user, showGamesPlayed }) => {
    return (
        <li className="user-list-item">
            <div className="user-avatar" style={{
                backgroundImage: `url(${person})`
            }}></div>
            <div className="user-details">
                <p style={{fontWeight: 'bold'}}>{user.username}</p>
                <p>Number of Games Played: {showGamesPlayed ? user.numGamesPlayed : "*"}</p>
            </div>
        </li>
    );
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired
}

export default User;
