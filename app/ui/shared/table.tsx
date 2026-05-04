import { ReactNode } from 'react';

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: T[keyof T], item: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  actions?: (item: T) => ReactNode;
  mobileCard?: (item: T) => ReactNode;
  className?: string;
}

/**
 * Responsive table component with mobile card support
 * 
 * @param data - Array of items to display
 * @param columns - Column definitions
 * @param actions - Optional action buttons for each row
 * @param mobileCard - Optional mobile card renderer
 * @param className - Additional CSS classes
 */
export function Table<T extends { id: string | number }>({
  data,
  columns,
  actions,
  mobileCard,
  className = '',
}: TableProps<T>) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              {/* Mobile View */}
              <div className="md:hidden">
                {data?.map((item) => 
                  mobileCard ? mobileCard(item) : null
                )}
              </div>
              
              {/* Desktop Table */}
              <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={String(column.key)}
                        scope="col"
                        className={`px-3 py-5 font-medium ${
                          column.key === columns[0].key ? 'sm:pl-6' : ''
                        } ${
                          column.key === columns[columns.length - 1].key ? 'px-4' : ''
                        }`}
                      >
                        {column.header}
                      </th>
                    ))}
                    {actions && (
                      <th scope="col" className="relative py-3 pl-6 pr-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      {columns.map((column) => (
                        <td
                          key={String(column.key)}
                          className={`whitespace-nowrap p-3 ${
                            column.key === columns[0].key ? 'pl-6 pr-3' : ''
                          }`}
                        >
                          {column.render 
                            ? column.render(item[column.key], item)
                            : String(item[column.key])
                          }
                        </td>
                      ))}
                      {actions && (
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                          <div className="flex justify-end gap-3">
                            {actions(item)}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
