import React from "react";
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';


const FriendList = ({ items }) => {
    return (
        <ul className="friend-list">
            {items.map(item => (
                <li key={item.id} className="item">
                    <FriendListItem
                        avatar={item.avatar}
                        isOnline={item.isOnline}
                        name={item.name}
                    />
                </li>
            ))
            }
        </ul>

    )
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        }),
    ),
};

export default FriendList;