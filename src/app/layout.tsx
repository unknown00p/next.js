export default function RootLayout ({children}: {children:React.ReactNode}){
    return <html lang="en">
        <body>
            <header>this is header</header>
            {children}
            <footer>this is footer</footer>
        </body>
    </html>
}