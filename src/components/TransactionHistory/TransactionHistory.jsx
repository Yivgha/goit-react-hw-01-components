import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableRow,
  TitleTb,
  HeadTb,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <TableRow>
          <TitleTb> TYPE</TitleTb>
          <TitleTb>AMOUNT</TitleTb>
          <TitleTb>CURRENCY</TitleTb>
        </TableRow>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <HeadTb> {type}</HeadTb>
            <HeadTb>{amount}</HeadTb>
            <HeadTb>{currency}</HeadTb>
          </TableRow>
        ))}
      </thead>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};