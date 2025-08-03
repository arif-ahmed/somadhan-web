import { Providers } from './providers'
import Header from '../components/Header'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '../theme/config'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
