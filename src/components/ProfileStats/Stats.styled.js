import styled from 'styled-components'

export const List = styled.ul`
display: flex;
background-color: #e4f5f2;
border-top: 1px solid #c5dbd7;

`

export const Item = styled.li`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 6px;
width: 81px;
height: 60px;
border-right: ${props => props.border};
border-left: ${props => props.border};
`

export const Text = styled.span`
font-size: 10px;
font-weight: 500;
color: #b3afaf;
`

export const Stat = styled.span`
font-size: 13px;
font-weight: 700;
`