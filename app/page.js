import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <UserButton  
        afterSignOutUrl="/"
        appearance={{
          elements: {
            background: "bg-honey"
          },
        }} 
      />
    </main>
  )
}
