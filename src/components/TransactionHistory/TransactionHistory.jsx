import { DivEl } from "components/Profile/Profile.styled"
import { Table, Td, Th, Tr } from "./TransactionHistory.styled"


export const TransactionHistory = ({transactions}) => {
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
    {transactions.map((item, idx) => (
        <tr key={item.id}>
            
                {idx%2===0 
               ? <><Td color={'fff'}>{item.type}</Td>
                <Td color={'fff'}>{item.amount}</Td>
                <Td color={'fff'}>{item.currency}</Td></> 
                : <><Td color={'ced9d1'}>{item.type}</Td>
                <Td color={'ced9d1'}>{item.amount}</Td>
                <Td color={'ced9d1'}>{item.currency}</Td></> 
           }
        
        
      </tr>
    ))}
  </tbody>
</Table> 
</DivEl>
    )
}