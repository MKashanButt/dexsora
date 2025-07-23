"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
  Database,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { CommandMenu } from "./command-menu"
import { SearchForm } from "./search-form"

const data = {
  user: {
    name: "Admin",
    email: "admin@squad.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Squad Medical Supplies",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        {
          title: "Inquiries",
          url: "inquiries",
        },
        {
          title: "Processing",
          url: "#",
        },
      ],
    },
    {
      title: "Reshape Medical Equipments",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Inquiries",
          url: "#",
        },
        {
          title: "Processing",
          url: "#",
        },
      ],
    },
    {
      title: "Bargain Medical Supply",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Inquiries",
          url: "#",
        },
        {
          title: "Processing",
          url: "#",
        },
      ],
    },
    {
      title: "S8 Medical Equipment",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Inquiries",
          url: "#",
        },
        {
          title: "Processing",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <CommandMenu/>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
