const theme = {
  colors: {
    // BLACK & WHITE & TRANSPARENT
    black: '#000000',
    white: '#FFFFFF',
    grey: '#C2C2C2',
    transparent: 'transparent',
    // NEUTRAL
    neutralColor900: '#262A2E',
    neutralColor700: '#2e3136',
    neutralColor500: '#2E3438',
    neutralColor300: '#7d7d7d',
    neutralColor100: '#ababab',
    // PRIMARY

    primaryColor900: '#00335a',
    primaryColor700: '#005fa4',
    primaryColor500: '#00aaff',
    primaryColor300: '#74c7ff',
    primaryColor100: '#d7efff',
    // SECONDARY
    secondaryColor900: '#2d353e',
    secondaryColor700: '#4e6783',
    secondaryColor500: '#89befa',
    secondaryColor300: '#aacbf8',
    secondaryColor100: '#cbe0fc',
    // WHITE ALPHAS
    whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
    whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
    whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
    whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
    whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
    whiteAlpha40: 'rgba(255, 255, 255, 0.4)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    whiteAlpha01: 'rgba(255, 255, 255, 0.01)',
    // BLACK ALPHAS
    blackAlpha90: 'rgba(0, 0, 0, 0.9)',
    blackAlpha80: 'rgba(0, 0, 0, 0.8)',
    blackAlpha70: 'rgba(0, 0, 0, 0.7)',
    blackAlpha60: 'rgba(0, 0, 0, 0.6)',
    blackAlpha50: 'rgba(0, 0, 0, 0.5)',
    blackAlpha40: 'rgba(0, 0, 0, 0.4)',
    blackAlpha30: 'rgba(0, 0, 0, 0.3)',
    blackAlpha20: 'rgba(0, 0, 0, 0.2)',
    blackAlpha10: 'rgba(0, 0, 0, 0.1)',
    // ACCENTS
    // -- ERROR
    errorColor900: '#420418',
    errorColor700: '#920b35',
    errorColor500: '#DE0D4F',
    errorColor300: '#f04b69',
    errorColor100: '#f4a8c0',
    // -- WARNING
    warningColor900: '#3c280f',
    warningColor700: '#b37237',
    warningColor500: '#FF9900',
    warningColor300: '#ffc373',
    warningColor100: '#ffefe7',
    // -- CAREFUL
    carefulColor900: '#291f08',
    carefulColor700: '#51470a',
    carefulColor500: '#FFDC1E',
    carefulColor300: '#fff663',
    carefulColor100: '#fff3aa',
    // -- SUCCESS
    successColor900: '#00693e',
    successColor700: '#28846e',
    successColor500: '#47C2A5',
    successColor300: '#9EFACA',
    successColor100: '#b4ffe6',
  },
  gradient: {
    cardBackground: 'linear-gradient(120deg,#4B5766 0,#3B444F 100%)',
  },
  shadow: {
    main: '4px 4px 15px 0px #293038;',
  },
  sizes: {
    h1: '1.7rem',
    h2: '1.3rem',
    h3: '1.2rem',
    h4: '1rem',
    h5: '0.9rem',
    h6: '0.8rem',
    p: '0.7rem',
    body: '14px',
    span: '1rem',
  },
  fonts: {
    primary: 'Work Sans, sans-serif',
    monospaced: "'Fira Code', monospace",
    secondary: 'sans-serif',
  },
}

const defaultTheme = {
  ...theme,
}

export default defaultTheme
