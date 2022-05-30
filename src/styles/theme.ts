export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primaryDark: '#0a0c21',
    primary: '#7380ec',
    dark: '#363949',
    toggle: '#8cc8fe',
    background: '#fcfcfc',
    backgroundVariant: '#f0f0f3',
    cardHover: '#8cc8fe',
    highlight: '#1d9bf0',
    danger: '#ff7782',
    success: '#41f1b6',
    warning: '#ffbb55',
    white: '#fff',
    infoDark: '#7d8da1',
    infoLight: '#dce1eb',
    light: 'rgba(132, 139, 200, 0.18)',
    primaryVariant: '#f0f0f3',
    darkVariant: '#677483',
    text: '#555555',
    border: '#dedede',
    socialLinks: '#363949',
    sunIcon: '#ef6c00'
  },
  darkColors: {
    background: '#181a1e',
    backgroundVariant: '#111111',
    white: '#202528',
    dark: '#edeffd',
    toggle: '#363949',
    darkVariant: '#a3bdcc',
    light: 'rgba(0, 0, 0, 0.4)',
    boxShadow: '0 2rem 3rem var(  light)',
    text: '#fff',
    border: '#353535',
    socialLinks: '#bbbbbb',
    cardHover: '#40566a',
    primaryVariant: '#24282e'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
