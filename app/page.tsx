'use client'
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">

    <main className="flex p-24 flex-col gap-8">
      <ModeToggle />
      <section className=" flex flex-col items-center text-center">
        <h1 className=" font-bold text-xl my-7">Shadcn is awesome</h1>
        <p className=" text-sm text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis assumenda corporis ullam autem magni aliquid excepturi! Quam sapiente facere nisi atque vitae sed, consectetur praesentium ipsum veritatis aperiam eveniet sunt cupiditate et fugit tempora.
        </p>
       </section>
      <div className="flex gap-6 items-center justify-center">
        <Button variant={"secondary"}>Learn More</Button>
        <Button>Enroll More</Button>
      </div>
    </main>
    </ThemeProvider>
  )
}
