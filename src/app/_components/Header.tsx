import Link from 'next/link'

import { Menu, Trophy } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Header = () => {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Cadastrar meu time', href: '/form' },
  ]

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <h1 className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Fut71
        </h1>
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {page.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <h1 className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Fut71
            </h1>
            {pages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
