import styled from 'styled-components'

export const Table = styled.table`
width: 100%;
`

export const Tr = styled.tr`
background-color: #71bec9;
:first-child{border-top-left-radius: 7px;}
:last-child{border-top-right-radius: 7px;}
`


export const Th = styled.th`
text-transform: uppercase;
width: calc(100%/3);
color: white;
font-weight: 400;
font-size:13px;
padding: 10px;

`

export const Td = styled.td`
font-size: 13px;
text-align: center;
padding: 5px;
background-color: #${prop => prop.color};
`
