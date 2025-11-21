"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Users, Shield, Key, Folder, CheckSquare, Home } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Roles",
    url: "/dashboard/roles",
    icon: Shield,
  },
  {
    title: "Permissions",
    url: "/dashboard/permissions",
    icon: Key,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: Folder,
  },
  {
    title: "Tasks",
    url: "/dashboard/tasks",
    icon: CheckSquare,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}