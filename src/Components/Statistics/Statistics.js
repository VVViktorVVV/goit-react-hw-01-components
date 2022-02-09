import React from "react";
import PropTypes from 'prop-types';



const StatisticsSecition = ({ title, children }) => {
    return (
<section className="statistics">
    {title && <h2>{title}</h2>}
    {children}
</section>
    )
};

StatisticsSecition.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticsSecition;

