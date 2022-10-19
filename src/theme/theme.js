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
      main: '#0047ff',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      // contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    success: {
      main: '#0047ff',
      // light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.success.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
      // contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    warning: {
      main: '#1C1E83',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
      contrastText: '#ffffff',
    },
    error: {
      main: '#d41f1c',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
      // contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    text: {
      primary: '#000',
      // secondary: ({ colors }) => lighten(colors.tonalOffset, colors.text.primary),
    },
    border: {
      dark: 'rgba(0,0,0, 0.1)',
      light: '#ffffff',
    },
    responses: {
      success: {
        // color: ({ colors }) => colors.success.main,
        // backgroundColor: ({ colors }) => transparentize(0.93, colors.success.main),
        // tabTextColor: ({ colors }) => colors.responses.success.color,
      },
      error: {
        // color: ({ colors }) => colors.error.main,
        // backgroundColor: ({ colors }) => transparentize(0.93, colors.error.main),
        // tabTextColor: ({ colors }) => colors.responses.error.color,
      },
      redirect: {
        // color: ({ colors }) => colors.warning.main,
        // backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
        // tabTextColor: ({ colors }) => colors.responses.redirect.color,
      },
      info: {
        color: '#87ceeb',
        // backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
        // tabTextColor: ({ colors }) => colors.responses.info.color,
      },
    },
    http: {
      get: '#0047FF',
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
    // linesColor: theme =>
    //   lighten(
    //     theme.colors.tonalOffset,
    //     desaturate(theme.colors.tonalOffset, theme.colors.primary.main),
    //   ),
    defaultDetailsWidth: '75%',
    // typeNameColor: theme => theme.colors.text.secondary,
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: '#fafafa',
    arrow: {
      size: '1.1em',
      // color: theme => theme.colors.text.secondary,
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
      // fontFamily: 'Helvetica',
      fontWeight: '600',
      lineHeight: '1.6em',
    },
    code: {
      fontSize: '13px',
      fontFamily: 'Courier, monospace',
      // lineHeight: ({ typography }) => typography.lineHeight,
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#0047ff',
      backgroundColor: 'rgba(38, 50, 56, 0.05)',
      wrap: false,
    },
    links: {
      color: '#477bff',
      // color: ({ colors }) => colors.primary.main,
      // visited: ({ typography }) => typography.links.color,
      // hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  sidebar: {
    width: '260px',
    backgroundColor: '#fafafa',
    borderRadius: '20px',
    textColor: '#333333',
    // activeTextColor: (theme) =>
    //   theme.sidebar.textColor !== defaultTheme.sidebar.textColor
    // in question here, default: defaultTheme.sidebar!.textcolor
    //     ? theme.sidebar.textColor
    //     : theme.colors.primary.main,
    groupItems: {
      textTransform: 'uppercase',
    },
    level1Items: {
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
      // color: theme => theme.sidebar.textColor,
    },
  },
  logo: {
    // maxHeight: ({ sidebar }) => sidebar.width,
    // maxWidth: ({ sidebar }) => sidebar.width,
    gutter: '2px',
  },
  rightPanel: {
    // backgroundColor: '#263238',
    backgroundColor: '#1C1E83',
    width: '40%',
    textColor: '#ffffff',
  },
  codeBlock: {
    // backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  },
};

export default theme;
