# Dapur Dashboard

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- Kitchen inventory dashboard page with warm color tones
- Sidebar navigation (Dashboard, Inventaris, Resep, Pemasok, Pengaturan)
- Header with kitchen name and user avatar
- Grid of kitchen inventory items with large icons/images
- Each item card shows: icon/image, name, category, quantity, and status pill
- Filter/search bar for items
- Recent stock updates panel
- Status indicators: Tersedia, Stok Rendah, Kritis

### Modify
- None

### Remove
- None

## Implementation Plan
1. Generate Motoko backend with inventory item data model and CRUD operations
2. Build React frontend with warm design matching the design preview
3. Sidebar navigation with icons and active state
4. Header bar with kitchen branding
5. Inventory grid with large item cards
6. Search and filter functionality
7. Status pills color-coded by stock level
8. Recent updates panel
