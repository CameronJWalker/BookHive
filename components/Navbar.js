import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return (
        <nav class="h-20 mx-auto flex justify-center space-x-40 bg-honey ">
            <Link href="/">
                <Image class="my-1"src="/assets/Bee1.png" height={90} width={90}/>
            </Link>
            <Link href="/">
                <Image class="my-1"src="/assets/Bee1.png" height={90} width={90}/>
            </Link>
            <div class=" z-5">
                <Image src="/assets/BookHive.png" alt="logo" width={140} height={140}/>
            </div>
            <Link href="/">
                <Image class="my-1"src="/assets/Bee1.2.png" height={90} width={90}/>
            </Link>
            <Link href="/">
                <Image class="my-1"src="/assets/Bee1.2.png" height={90} width={90}/>
            </Link>
        </nav>
    )
}

export default Navbar

