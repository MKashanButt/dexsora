import { DataTable } from "@/components/data-table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import AppLayout from "@/layouts/app-layout";

export default function Page(){
  const breadcrumbs = (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">
              Squad Medical Supplies
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/inquiries">Inquiries</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
  )
  return(
    <AppLayout breadcrumbs={breadcrumbs}>
      <DataTable/>
    </AppLayout>
  )
}