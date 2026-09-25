import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
const manrope=Manrope({variable:'--font-manrope',subsets:['latin']});
export const metadata:Metadata={title:'NovaWatch | Todo tu mundo en tu muñeca',description:'Smartwatch con redes sociales, música, memoria interna, aplicaciones y pantalla táctil Full HD. Envío gratis a todo Ecuador.',openGraph:{title:'NovaWatch | Todo tu mundo en tu muñeca',description:'El smartwatch que funciona como un mini celular. Envío gratis a todo Ecuador.',images:['/smartwatch-hero.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body className={manrope.variable}>{children}</body></html>}
