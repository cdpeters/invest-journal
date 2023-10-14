'use client'

import ThemeProvider  from './themeProvider';

export default function Providers({children}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}


