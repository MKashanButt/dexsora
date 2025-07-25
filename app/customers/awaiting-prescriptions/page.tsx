"use client";

import { DataTable } from "@/components/awaiting-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AppLayout from "@/layouts/app-layout";
import { navigation } from "@/lib/utils";

export default function Page() {
  const breadcrumbs = (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Squad Medical Supplies</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/awaiting-prescriptions">
            Awaiting Prescriptions
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <DataTable nav={navigation.navMain} />
    </AppLayout>
  );
}
