import { DivEl } from 'components/Profile/Profile.styled';
import { Table, Td, Th, Tr, Trbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <DivEl>
      <Table>
        <thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </thead>

        <tbody>
          {transactions.map(item => (
            <Trbody key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Trbody>
          ))}
        </tbody>
      </Table>
    </DivEl>
  );
};
