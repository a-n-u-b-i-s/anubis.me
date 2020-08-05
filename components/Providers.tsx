import { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme } from './Theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.font.typeface};
    font-weight: ${props => props.theme.font.weight};
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    width: 100vw;
    height: 100vh;
  }
`

export default ({ children }) => {
  const { value } = useDarkMode(true)

  const theme = value ? darkTheme : lightTheme

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const body =
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {children}
    </ThemeProvider>

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}
