'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataItem {
  id: string
}

interface DataTableProps<TData extends DataItem, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData extends DataItem, TValue>({
  columns,
  data,
  onRemoveTask,
  onEditTask,
}: DataTableProps<TData, TValue> & {
  onRemoveTask: (id: string) => void
  onEditTask: (id: string) => void
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const rows = table.getRowModel().rows
  const selectedRows = table.getSelectedRowModel().rows

  const onClickDeleteButton = async () => {
    for (const row of selectedRows) {
      await onRemoveTask(row.original.id)
    }
    table.reset()
  }

  const onClickEditButton = async () => {
    if (selectedRows.length > 1) return
    await onEditTask(selectedRows[0].original.id)
  }

  return (
    <main className="flex flex-col gap-4">
      <section className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows?.length ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <div className="flex gap-2 items-center">
        {selectedRows.length === 1 && (
          <Button
            onClick={onClickEditButton}
            variant="default"
          >
            Edit
          </Button>
        )}
        {selectedRows.length >= 1 && (
          <Button
            onClick={onClickDeleteButton}
            variant="destructive"
          >
            Delete
          </Button>
        )}
      </div>
    </main>
  )
}
