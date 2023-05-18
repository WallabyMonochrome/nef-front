import './globals.css'

export const metadata = {
  title: 'Nefturian',
  description: 'Nefturian war',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
