"use client";

import { ChevronRight, File, Folder, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
    tree?: any[]; // <-- important
  }[];
}) {
  return (
    <SidebarContent>
      <SidebarGroupContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((company, index) => (
              <Collapsible
                key={company.title}
                asChild
                defaultOpen={company.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={company.title}>
                      {company.icon && <company.icon />}
                      <span>{company.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {company.tree?.map((section, idx) => (
                        <Tree key={idx} item={section} />
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarGroupContent>
    </SidebarContent>
  );
}

function Tree({ item }: { item: string | any[] }) {
  const [name, children] = Array.isArray(item) ? item : [item];

  // If it's a single-level leaf node (a page link, not a folder)
  if (!Array.isArray(children)) {
    return (
      <SidebarMenuButton asChild>
        <a href={children?.url || "#"} className="flex items-center gap-2">
          <File className="w-4 h-4" />
          {name.title ?? name}
        </a>
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={false}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map((child: any, idx: number) => (
              <Tree
                key={idx}
                item={child.title ? [child.title, child] : child}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
