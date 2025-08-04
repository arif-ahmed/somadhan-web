// src/app/layout.tsx

import { Providers } from './providers'
import { headers } from 'next/headers'
import { ColorModeScript } from '@chakra-ui/react'
import { themeConfig } from '../theme/config'

function getInitialColorMode(cookie: string): 'dark' | 'light' {
  const match = cookie.match(/chakra-ui-color-mode=(dark|light)/)
  return match?.[1] as 'dark' | 'light' || themeConfig.initialColorMode
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const headersList = await headers()
  const cookie = headersList.get('cookie') ?? ''
  const theme = getInitialColorMode(cookie)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`chakra-ui-${theme}`}>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
        <Providers cookies={cookie}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

