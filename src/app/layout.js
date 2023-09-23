import './globals.css'
import NavigationBar from '@/components/Navigation.jsx'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-midnight-purple'>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}
