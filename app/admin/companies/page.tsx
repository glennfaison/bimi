import { createClient } from "@/lib/supabase/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from 'lucide-react';
import Link from "next/link";
import DeleteCompanyButton from "./DeleteCompanyButton";

export const revalidate = 0;

export default async function CompaniesContent() {
  const supabase = await createClient();
  
  const { data: cards } = await supabase
    .from("cards")
    .select("*")
    .order("category")
    .order("order_index");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Companies & Partners</h1>
        <Button asChild>
          <Link href="/admin/companies/new">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </Button>
      </div>

      <div className="rounded-md border border-gray-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="text-gray-700">Name</TableHead>
              <TableHead className="text-gray-700">Category</TableHead>
              <TableHead className="text-gray-700">Order</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
              <TableHead className="text-right text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cards?.map((card) => (
              <TableRow key={card.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{card.title}</TableCell>
                <TableCell className="capitalize text-gray-700">{card.category}</TableCell>
                <TableCell className="text-gray-700">{card.order_index}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    card.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {card.is_published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild className="hover:bg-gray-100">
                    <Link href={`/admin/companies/${card.id}`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <DeleteCompanyButton companyId={card.id} />
                </TableCell>
              </TableRow>
            ))}
            {(!cards || cards.length === 0) && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-600 h-24">
                  No companies or partners found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
