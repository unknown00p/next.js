export const metadata = {
    title: "blogs for devlopers",
    description: "a blog article written by to notch devlopers can be found here"
}

export default function BlogLayout ({children}: {children:React.ReactNode}){
    return <html lang="en">
        <body className="bg-black text-white h-full w-full">
            <header>this is header</header>
            {children}
            <footer>this is footer</footer>
        </body>
    </html>
}