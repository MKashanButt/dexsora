"use client";

import { useEffect, useState } from "react";
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
  tree?: any[];
};

type CollapsibleStates = Record<string, boolean>;

export function NavMain({ items }: { items: NavItem[] }) {
  const storageKey = "nav-collapsible-open-states";

  const getInitialState = () => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        return JSON.parse(stored) as CollapsibleStates;
      } catch {
        return {};
      }
    }

    return items.reduce((acc, item) => {
      acc[item.title] = !!item.isActive;
      return acc;
    }, {} as CollapsibleStates);
  };

  const [openStates, setOpenStates] = useState<CollapsibleStates>({});

  useEffect(() => {
    setOpenStates(getInitialState());
  }, []);

  useEffect(() => {
    if (Object.keys(openStates).length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(openStates));
    }
  }, [openStates]);

  const toggleOpen = (key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SidebarContent>
      <SidebarGroupContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((company) => {
              const key = company.title;
              return (
                <Collapsible
                  key={key}
                  asChild
                  open={openStates[key]}
                  onOpenChange={() => toggleOpen(key)}
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
                          <Tree
                            key={idx}
                            item={section}
                            parentKey={company.title}
                            openStates={openStates}
                            toggleOpen={toggleOpen}
                          />
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarGroupContent>
    </SidebarContent>
  );
}

function Tree({
  item,
  parentKey,
  openStates,
  toggleOpen,
}: {
  item: string | any[];
  parentKey: string;
  openStates: CollapsibleStates;
  toggleOpen: (key: string) => void;
}) {
  const [name, children] = Array.isArray(item) ? item : [item];
  const isNested = Array.isArray(children);
  const key = `${parentKey}/${
    typeof name === "string" ? name : name.title ?? "unknown"
  }`;

  if (!isNested) {
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
        open={!!openStates[key]}
        onOpenChange={() => toggleOpen(key)}
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
            {children.map((child: any, idx: number) => {
              const childItem = child.title ? [child.title, child] : child;
              return (
                <Tree
                  key={idx}
                  item={childItem}
                  parentKey={key}
                  openStates={openStates}
                  toggleOpen={toggleOpen}
                />
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
