// imports
import { Urbanist } from '@next/font/google';
//
import Glassmorphism from '../common/components/Glassmorphism'
import SideMenu from '../common/widgets/SideMenu';
import '../shared/styles/globals.css'

// font
const urbanist = Urbanist({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html className={urbanist.className} >
      <head>
        <title> Home : Next 13 blog </title>
      </head>

      <body className='text-base text-white bg-slate-900' >
  
        <Glassmorphism />
        <SideMenu/>

        {children}
      
      </body>
    </html>
  )
}
