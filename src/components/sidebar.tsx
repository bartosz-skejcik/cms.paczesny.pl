"use client";

import { Package2, Home, Bell, ChartAreaIcon, FolderOpenIcon, GraduationCapIcon, TestTubeDiagonalIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation";
import { links } from "@/constants/navigation";

type Props = {}

function Sidebar({ }: Props) {
  // get the path so for example / or /analytics
  const path = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${link.href == path ? 'bg-muted text-primary' : 'text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
