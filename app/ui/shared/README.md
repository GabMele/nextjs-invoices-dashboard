# Shared UI Components

This directory contains reusable UI components for the invoices dashboard application. All components are documented with TypeScript interfaces and JSDoc comments.

## Component Structure

```
shared/
├── index.ts          # Main export file
├── avatar.tsx        # User avatar component
├── card.tsx          # Card layout components
├── table.tsx         # Responsive table component
├── user-info.tsx     # User info display component
├── buttons.tsx       # Action button components
├── pagination.tsx    # Pagination component
└── README.md         # This documentation
```

## Components

### Avatar

Displays user profile images with fallback to icon when no image is available.

```tsx
import { Avatar } from '@/app/ui/shared';

<Avatar 
  src={user.imageUrl} 
  alt={`${user.name}'s profile picture`}
  size="md"
/>
```

**Props:**
- `src?: string | null` - Image URL
- `alt: string` - Alt text for accessibility
- `size?: 'sm' | 'md' | 'lg'` - Size variant (default: 'md')
- `className?: string` - Additional CSS classes

### Card Components

Flexible card layout system for consistent styling.

```tsx
import { Card, CardHeader, CardContent, CardSection } from '@/app/ui/shared';

<Card>
  <CardHeader>
    <UserInfo name="John Doe" email="john@example.com" />
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
</Card>
```

**Components:**
- `Card` - Base card wrapper
- `CardHeader` - Header section with bottom border
- `CardContent` - Content section
- `CardSection` - Section with optional border

### Table

Responsive table component with mobile card support.

```tsx
import { Table, TableColumn } from '@/app/ui/shared';

const columns: TableColumn<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { 
    key: 'status', 
    header: 'Status',
    render: (value) => <StatusBadge status={value} />
  }
];

<Table 
  data={users}
  columns={columns}
  actions={(user) => (
    <>
      <UpdateButton id={user.id} />
      <DeleteButton id={user.id} />
    </>
  )}
  mobileCard={(user) => (
    <UserCard user={user} />
  )}
/>
```

**Props:**
- `data: T[]` - Array of items to display
- `columns: TableColumn<T>[]` - Column definitions
- `actions?: (item: T) => ReactNode` - Action buttons for each row
- `mobileCard?: (item: T) => ReactNode` - Mobile card renderer
- `className?: string` - Additional CSS classes

### UserInfo

Combines avatar with user name and email display.

```tsx
import { UserInfo } from '@/app/ui/shared';

<UserInfo 
  name="John Doe"
  email="john@example.com"
  imageUrl="https://example.com/avatar.jpg"
  size="md"
/>
```

**Props:**
- `name: string` - User's display name
- `email?: string` - User's email address
- `imageUrl?: string | null` - Profile image URL
- `size?: 'sm' | 'md' | 'lg'` - Avatar size (default: 'md')
- `className?: string` - Additional CSS classes

### Buttons

Reusable button components for common actions.

```tsx
import { 
  CreateButton, 
  UpdateButton, 
  DeleteButton 
} from '@/app/ui/shared';

<CreateButton href="/dashboard/invoices/create" label="Create Invoice" />
<UpdateButton href="/dashboard/invoices" id={invoice.id} />
<DeleteButton id={invoice.id} onDelete={deleteInvoice} />
```

**Components:**
- `CreateButton` - Primary action button with plus icon
- `UpdateButton` - Edit button with pencil icon
- `DeleteButton` - Delete button with trash icon

### Pagination

Client-side pagination component with URL state management.

```tsx
import Pagination from '@/app/ui/shared/pagination';

<Pagination totalPages={10} />
```

**Props:**
- `totalPages: number` - Total number of pages

## Usage Guidelines

1. **Import from index**: Always import components from the main index file for cleaner imports
2. **TypeScript support**: All components have full TypeScript support with proper interfaces
3. **Responsive design**: Components are designed to work on both mobile and desktop
4. **Consistent styling**: Use these components to maintain design consistency
5. **Accessibility**: Components include proper ARIA labels and semantic HTML

## Migration Guide

To migrate existing components:

1. Replace inline avatar code with `<Avatar>` component
2. Convert table layouts to use `<Table>` component
3. Use `<Card>` components for mobile layouts
4. Consolidate button styles using shared button components
5. Replace user info displays with `<UserInfo>` component

## Contributing

When adding new components:

1. Follow the existing file naming convention (kebab-case)
2. Add TypeScript interfaces for props
3. Include JSDoc comments for documentation
4. Export from the main `index.ts` file
5. Update this README with usage examples
