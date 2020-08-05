const light = {
  color: {
    text: '#000',
    background: '#fff',
    primary: '#fff',
    accent: '#000',
    buttonText: '#000',
  },
  lightModeDisplay: 'flex',
  darkModeDisplay: 'none'
}

const dark = {
  color: {
    text: '#fff',
    background: '#000',
    primary: '#000',
    accent: '#fff',
    buttonText: '#fff',
  },
  lightModeDisplay: 'none',
  darkModeDisplay: 'flex'
}

const defaultTheme = {
  font: {
    typeface: "'Nunito Sans', sans-serif",
    weight: 200
  }
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
