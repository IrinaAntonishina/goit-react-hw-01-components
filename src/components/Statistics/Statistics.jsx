import { DivEl } from "components/Profile/Profile.styled"
import { Item, List, Text, Title } from "./Statistics.styled"



export const Statistics = ({title, stats}) => {
    return (
        <DivEl>
{title && (
    <Title>{title}</Title>
)}
  <List>
    {stats.map(stat => (
        
        <Item key={stat.id}>
        <Text>{stat.label}</Text>
        <Text>{stat.percentage}%</Text>
      </Item>
      
    ))}
  </List>
</DivEl>
    )
}