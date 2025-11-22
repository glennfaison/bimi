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
import Image from "next/image";

export const revalidate = 0;

export default async function PillarsPage() {
  const supabase = await createClient();
  
  const { data: pillars } = await supabase
    .from("pillars")
    .select("*")
    .order("order_index");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Pillars of Inspiration</h1>
        <Button asChild>
          <Link href="/admin/pillars/new">
            <Plus className="mr-2 h-4 w-4" /> Add Pillar
          </Link>
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Person</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pillars?.map((pillar) => (
              <TableRow key={pillar.id}>
                <TableCell className="flex items-center gap-3">
                  {pillar.image_url && (
                    <div className="relative w-10 h-10 rounded overflow-hidden">
                      <Image 
                        src={pillar.image_url} 
                        alt={pillar.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="font-medium">{pillar.name}</span>
                </TableCell>
                <TableCell>{pillar.country}</TableCell>
                <TableCell>{pillar.order_index}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    pillar.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {pillar.is_published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/pillars/${pillar.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
