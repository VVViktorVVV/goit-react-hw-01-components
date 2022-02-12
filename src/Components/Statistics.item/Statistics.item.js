import React from "react";
import PropTypes from 'prop-types';

import s from './Statistics.item.module.css'

const StatisticsItem = ({ label, percentage }) => {
    return (

    <>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}</span>
    </>

)
};
 
StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;