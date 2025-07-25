import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  Car,
  Chrome,
  Database,
  Facebook,
  Instagram,
  Scroll,
  Store,
  Users,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = {
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