import React from "react";
import PropTypes from 'prop-types';

import s from './Statistics.list.module.css'

import StatisticsItem from '../Statistics.item/Statistics.item';


const StatisticsList = ({items}) => {
    return (
        <ul className={s.list}>
            {items.map(item => (
                <li key={item.id} className={s.item} style={{ backgroundColor: `rgb(0 164 0)` }}>
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