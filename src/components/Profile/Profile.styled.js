import styled from 'styled-components'

export const DivEl = styled.div`

margin: 15px auto 0 auto;
width: 350px;
background-color: white;
border-radius: 7px;
border: 1px solid #c5dbd7;
:last-child{
    margin-bottom: ${prop => prop.margin};
 }

`