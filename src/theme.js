const breakpoints = ['40em', '52em', '64em'];

const colors = {
  text: '#040425',
  white: '#fff',
  gray: '#ecedec',
};

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// typographic scale
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

// for any scale, either array or objects will work
const lineHeights = [1, 1.125, 1.25, 1.5, 1.75];

const heights = [10, 20];

const fontWeights = {
  normal: 500,
  bold: 700,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

const fonts = {
  sans: 'IBM Plex Sans, sans-serif',
  rubik: 'Rubik-Boldm, sans-serif',
  mono: 'Menlo, monospace',
};

// border-radius
const radii = [0, 2, 4, 8];

const borders = [0, '1px solid', '2px solid'];

const shadows = [`0 1px 2px 0 ${colors.text}`, `0 1px 4px 0 ${colors.text}`];

const theme = {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  lineHeights,
  heights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
};

export default theme;
