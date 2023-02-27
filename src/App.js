import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  HoldingContainer,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  Button,
  TextArea,
  UnorderedList,
  ListItem,
} from './StyledComponents'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    fontStyles: {
      isBoldActive: false,
      isItalicActive: false,
      isUnderlineActive: false,
    },
  }

  toggleBold = () => {
    const {fontStyles} = this.state
    const {isBoldActive} = fontStyles
    this.setState({fontStyles: {...fontStyles, isBoldActive: !isBoldActive}})
  }

  toggleItalic = () => {
    const {fontStyles} = this.state
    const {isItalicActive} = fontStyles
    this.setState({
      fontStyles: {...fontStyles, isItalicActive: !isItalicActive},
    })
  }

  toggleUnderline = () => {
    const {fontStyles} = this.state
    const {isUnderlineActive} = fontStyles
    this.setState({
      fontStyles: {...fontStyles, isUnderlineActive: !isUnderlineActive},
    })
  }

  render() {
    const {fontStyles} = this.state
    const {isBoldActive, isItalicActive, isUnderlineActive} = fontStyles
    console.log(fontStyles)
    return (
      <MainContainer>
        <HoldingContainer>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <UnorderedList>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.toggleBold}
                  type="button"
                  isActive={isBoldActive}
                >
                  <VscBold size={20} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.toggleItalic}
                  type="button"
                  isActive={isItalicActive}
                >
                  <GoItalic size={20} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.toggleUnderline}
                  type="button"
                  isActive={isUnderlineActive}
                >
                  <AiOutlineUnderline size={20} />
                </Button>
              </ListItem>
            </UnorderedList>

            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
            />
          </RightContainer>
        </HoldingContainer>
      </MainContainer>
    )
  }
}

export default App
