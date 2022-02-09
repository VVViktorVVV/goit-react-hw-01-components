import React from "react";
import PropTypes from 'prop-types';

import StatisticsItem from '../Statistics.item/Statistics.item';


const StatisticsList = ({items}) => {
    return (
        <ul className="stat-list">
            {items.map(item => (
                    <li key={item.id} className="item">
                        <StatisticsItem
                        label={item.label}
                        percentage={item.percentage}
                        />
                    </li>
                    ))
            }
        </ul>
    )

}


StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default StatisticsList;