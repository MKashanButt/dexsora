"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Database,
  Store,
  Users,
  Facebook,
  Instagram,
  Chrome,
  Car,
  Scroll,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { CommandMenu } from "./command-menu";
import { SearchForm } from "./search-form";

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
      isActive: false,
      tree: [
        [
          "Customers",
          [
            { title: "Inquiries", url: "/customers/inquiries" },
            {
              title: "Awaiting Prescriptions",
              url: "/customers/awaiting-prescriptions",
            },
            { title: "Shipments", url: "/customers/shipments" },
            { title: "Billed To Insurance", url: "/customers/billed" },
            { title: "Paid By Insurance", url: "/customers/paid" },
            { title: "Online Purchase", url: "/customers/online-purchase" },
            { title: "Denials", url: "/customers/denials" },
          ],
        ],
        [
          "Recurring Patients",
          [
            { title: "CGM Supplies", url: "/patients/cgm-supplies" },
            {
              title: "Catheters Supplies",
              url: "/patients/catheters-supplies",
            },
            { title: "BGM Supplies", url: "/patients/bgm-supplies" },
            { title: "Wheelchair Rental", url: "/patients/wheelchair-rental" },
          ],
        ],
      ],
    },
    {
      title: "My Adds",
      url: "#",
      icon: Store,
      isActive: false,
      tree: [
        { title: "Facebook", url: "/ads/facebook", icon: Facebook },
        { title: "Instagram", url: "/ads/instagram", icon: Instagram },
        { title: "Google", url: "/ads/google", icon: Chrome },
        { title: "Uber", url: "/ads/uber", icon: Car },
        { title: "Pamphlet", url: "/ads/pamphlet", icon: Scroll },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      isActive: false,
      tree: [
        { title: "Assign User", url: "/users/assign" },
        { title: "Remove User", url: "/users/remove" },
        { title: "My Users", url: "/users/mine" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <CommandMenu />
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
  );
}
