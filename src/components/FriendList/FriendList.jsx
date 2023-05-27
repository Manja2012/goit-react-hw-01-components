import PropTypes from "prop-types";
import style from 'components/FriendList/friendList.module.css';

export const FriendList = ({ friends }) => {
    return(
    <section>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={style.item} key={id}>
            <span className={`status ${isOnline ? 'online' : 'offline'}`}>◉</span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
          </li>
        ))}
      </ul>
  </section>
   )
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };