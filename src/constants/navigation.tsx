import { ChartAreaIcon, FolderOpenIcon, GraduationCapIcon, Home, TestTubeDiagonalIcon } from "lucide-react";

export const links = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <ChartAreaIcon className="h-4 w-4" />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FolderOpenIcon className="h-4 w-4" />,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: <GraduationCapIcon className="h-4 w-4" />,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: <TestTubeDiagonalIcon className="h-4 w-4" />,
  }
]

