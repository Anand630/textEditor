import styled from 'styled-components'
// import {bold, italic, underline} from 'colorette'

export const MainContainer = styled.div`
  background-color: #334155;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HoldingContainer = styled.div`
  background-color: #1b1c22;

  padding: 20px;
  border-radius: 8px;
  margin: 0 10%;
  height: 70vh;
  display: flex;
  width: 60vw;
`
export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 65%;
  margin: auto;
`
export const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: Roboto;
  color: #ffffff;
  font-weight: 500;
`
export const RightContainer = styled.div`
  width: 50%;
  border: 1px solid #334155;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
export const UnorderedList = styled.ul`
  display: flex;
  padding: 4px 8px;
  border-bottom: 1px solid #334155;
  list-style: none;
  padding-left: 0;
`

export const ListItem = styled.li`
  margin-right: 8px;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};

  cursor: pointer;
  border: none;
  outline: none;
`

export const TextArea = styled.textarea`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: ${props => (props.isBoldActive ? `bold` : `normal`)};
  font-style: ${props => (props.isItalicActive ? `italic` : `normal`)};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
