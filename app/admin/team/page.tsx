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
import { Edit, Plus, Trash2 } from 'lucide-react';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const revalidate = 0;

export default async function TeamContent() {
  const supabase = await createClient();
  
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("order_index");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Team Members</h1>
        <Button asChild>
          <Link href="/admin/team/new">
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Link>
        </Button>
      </div>

      <div className="rounded-md border border-gray-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="text-gray-700">Member</TableHead>
              <TableHead className="text-gray-700">Role</TableHead>
              <TableHead className="text-gray-700">Order</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
              <TableHead className="text-right text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members?.map((member) => (
              <TableRow key={member.id} className="hover:bg-gray-50">
                <TableCell className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.image_url || ""} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-900">{member.name}</span>
                </TableCell>
                <TableCell className="text-gray-700">{member.role}</TableCell>
                <TableCell className="text-gray-700">{member.order_index}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    member.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {member.is_published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" asChild className="hover:bg-gray-100">
                      <Link href={`/admin/team/${member.id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {(!members || members.length === 0) && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-600 h-24">
                  No team members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
