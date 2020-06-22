import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <div>
            <li className="minus">
          {transaction.text} <span>{transaction.amount}</span>
          <button className="delete-btn">x</button>
        </li>
        </div>
    )
}
