import React from "react";
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css'

import TransactionItem from "../TransactionItem/TransactionItem";


const TransactionHistori = ({items}) => {
    return (
        <table className={s.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id} className={s.line}>
                        <TransactionItem
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

TransactionHistori.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default TransactionHistori;