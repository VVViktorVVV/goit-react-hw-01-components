import React from "react";
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline }) => {
    return (
    <>
            <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
    </>
)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;