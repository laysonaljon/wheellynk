import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Wheellynk',
  description: 'Next Generation Car Sharing App',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
