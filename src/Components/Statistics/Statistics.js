import React from "react";
import PropTypes from 'prop-types';

import s from './Statistics.module.css'



const StatisticsSecition = ({ title, children }) => {
    return (
        <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    {children}
</section>
    )
};

StatisticsSecition.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticsSecition;

