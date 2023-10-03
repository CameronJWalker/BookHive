"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation';

function Navbar() {
    const router = useRouter();
    const pathname = usePathname()


    console.log(pathname);
        return (
        <nav className="h-20 mx-auto flex justify-center space-x-40 bg-honey ">
            <Link href="/books">
                {
                    pathname === "/books" 
                    ? <Image className="my-1"src="/assets/Bee2.png" height={90} width={90} alt="bee"/>
                    : <Image className="my-1"src="/assets/Bee1.png" height={90} width={80} alt="bee"/>
                }
            </Link>
            <Link href="/#">
                {
                    pathname === "/#" 
                    ? <Image className="my-1"src="/assets/Bee2.png" height={90} width={90} alt="bee"/>
                    : <Image className="my-1"src="/assets/Bee1.png" height={90} width={80} alt="bee"/>
                }
            </Link>
            <div className=" z-5">
            <Link href="/">
                <Image src="/assets/BookHive.png" alt="logo" width={140} height={140} />
            </Link>
            </div>
            <Link href="/#">
                {
                    pathname === "/#" 
                    ? <Image className="my-1"src="/assets/Bee2.1.png" height={90} width={90} alt="bee"/>
                    : <Image className="my-1"src="/assets/Bee1.2.png" height={90} width={80} alt="bee"/>
                }
            </Link>
            <Link href="/#">
                {
                    pathname === "/#" 
                    ? <Image className="my-1"src="/assets/Bee2.1.png" height={90} width={90} alt="bee"/>
                    : <Image className="my-1"src="/assets/Bee1.2.png" height={90} width={80} alt="bee"/>
                }
            </Link>
        </nav>
    )
}

export default Navbar

