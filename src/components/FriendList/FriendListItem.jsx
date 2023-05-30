import PropTypes from "prop-types";
import style from 'components/FriendList/friendList.module.css';

export const FriendListItem = ({ friends }) => {
    return(
    <div className={style.item}>
        <span className={friends.isOnline ? style.online : style.offline} />
        <img className={style.avatar} src={friends.avatar} alt="User avatar" width="48" />
        <p className={style.name}>{friends.name}</p>
    </div>
   )
}

FriendListItem.protoTypes = {
    friends: PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  };