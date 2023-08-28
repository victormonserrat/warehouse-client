import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import swrConfig from '~/infrastructure/config/swr'
import GlobalStyle from '~/infrastructure/styles/global'
import theme from '~/infrastructure/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={swrConfig}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </SWRConfig>
)

export default App
