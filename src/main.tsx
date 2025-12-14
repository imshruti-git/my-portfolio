import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App.tsx'
import {theme} from '@configs/ui/theme'
import Home from './containers/Home/Home.tsx'
import GlobalStyles from './configs/ui/global-styles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
