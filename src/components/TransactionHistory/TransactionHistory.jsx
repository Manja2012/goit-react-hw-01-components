import PropTypes from "prop-types";
import style from 'components/TransactionHistory/transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return(
      <table className={style.transactionHistory}>
        <thead className={style.tableHead}>
          <tr className={style.tableRowHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
 {items.map(({ type, amount, currency, id }) => (
        <tbody key={id}>
          <tr className={style.tableRow} >
            <td className={style.tableData}>{type}</td>
            <td className={style.tableData}>{amount}</td>
            <td className={style.tableData}>{currency}</td>
          </tr>
        </tbody> ))}
    </table>
   )
}

TransactionHistory.protoType= {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}