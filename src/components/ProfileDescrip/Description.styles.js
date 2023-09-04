import styled from 'styled-components'



export const Avatar = styled.img`
width: 105px;
height: 100px;
border-radius: 50%;
box-shadow: rgba(46, 47, 66, 0.08) 0px 1px 6px, rgba(46, 47, 66, 0.16) 0px 1px 1px, rgba(46, 47, 66, 0.08) 0px 2px 1px;

`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 15px 0 15px 0;
`

export const Text = styled.p`
font-weight: 400;
font-size: ${props => props.fontSize};
font-weight: ${props => props.fontWeight};
color: ${props => props.color}
`