const theme = {
  spacing: {
    unit: 5,
  },
  breakpoints: {
    small: '50rem',
    medium: '75rem',
    large: '105rem',
  },
  colors: {
    tonalOffset: 0.2,
    primary: {
      main: '#50A1D8',
      dark: 'black',
    },
    success: {
      main: '#0047ff',
    },
    warning: {
      main: '#1C1E83',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d41f1c',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    text: {
      primary: '#000',
      secondary: 'black',
    },
    border: {
      dark: 'rgba(0,0,0, 0.1)',
      light: '#ffffff',
    },
    responses: {
      success: {
      },
      error: {
      },
      redirect: {
      },
      info: {
        color: '#87ceeb',
      },
    },
    http: {
      get: '#93C854',
      post: '#186FAF',
      put: '#1C1E83',
      options: '#947014',
      patch: '#D9E6EC',
      delete: '#0F1C39',
      basic: '#707070',
      link: '#07818F',
      head: '#A23DAD',
    },
  },
  schema: {
    defaultDetailsWidth: '75%',
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: '#fafafa',
    arrow: {
      size: '1.1em',
    },
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: 'Helvetica',
    smoothing: 'antialiased',
    optimizeSpeed: true,
    headings: {
      fontWeight: '600',
      lineHeight: '1.6em',
      color: 'black',
    },
    code: {
      fontSize: '13px',
      fontFamily: 'Courier, monospace',
      color: '#0047ff',
      backgroundColor: 'rgba(38, 50, 56, 0.05)',
      wrap: false,
    },
    links: {
      color: '#477bff',
    },
  },
  sidebar: {
    width: '260px',
    backgroundColor: '#fafafa',
    borderRadius: '20px',
    textColor: '#333333',
    groupItems: {
      textTransform: 'uppercase',
    },
    level1Items: {
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
    },
  },
  logo: {
    maxHeight: ({ sidebar }) => sidebar.width,
    maxWidth: ({ sidebar }) => sidebar.width,
    gutter: '2px',
  },
  rightPanel: {
    backgroundColor: '#50A1D8',
    width: '40%',
    textColor: '#ffffff',
  },
  codeBlock: {
  },
};

export default theme;
