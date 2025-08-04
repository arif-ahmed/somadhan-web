// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, cookieStorageManagerSSR } from '@chakra-ui/react'
import theme from '../theme'

export function Providers({ 
  children,
  cookies
}: { 
  children: React.ReactNode,
  cookies: string
}) {
  const colorModeManager = cookieStorageManagerSSR(cookies)

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
