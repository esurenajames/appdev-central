# Agent Configuration - AppDev Central

## 🎨 Color Theme
Use these CSS variables or Tailwind classes for all UI elements:

- **Primary**: `#0F2A44` (`--primary`, `bg-primary`, `text-primary`)
- **Accent 1**: `#1677ff` (`--accent-1`, `bg-accent-1`, `text-accent-1`)
- **Accent 2**: `#FF8A3D` (`--accent-2`, `bg-accent-2`, `text-accent-2`)
- **Neutral**: `#F8FAFC` (`--neutral`, `bg-neutral`, `text-neutral`)

## 📁 Directory Structure Rules
Maintain the following structure for all new files and refactors:

```text
/appdev-central
├── app/
│   ├── (auth)/        # login/, register/
│   ├── (dashboard)/   # analytics/, settings/
│   ├── api/          # Route handlers
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Atomic components (Button, Input)
│   └── shared/       # Global components (Navbar, Footer)
├── lib/              # SDK/Base configs (Firestore, Auth)
├── services/         # Logic layer (apiClient, userService)
├── hooks/            # Custom React hooks
├── contexts/         # React Contexts (AuthContext)
├── utils/            # Helpers (formatters, validators)
├── types/            # TS definitions
├── styles/           # Global styles
├── public/           # Static assets
```

## ✨ Common Components

### 1. StatusChip (Table Status)
Always use the `StatusChip` component for boolean statuses in tables (Active/Inactive).
- **Location**: `components/Table/StatusChip.tsx`
- **Props**: `status: boolean`
- **Usage**: `<StatusChip status={record.isActive} />`

### 2. UserAvatar (Profile Pictures & Initials)
Always use `UserAvatar` for any user-related profile icon. It automatically handles initials with a deterministic background color if `src` is missing.
- **Location**: `components/Avatar/UserAvatar.tsx`
- **Props**:
    - `src?: string | null`: The image URL.
    - `domainAccount?: string | null`: Used for generating initials.
    - `name?: string | null`: Fallback for initials if domainAccount is missing.
    - `size?: number`: The circle diameter. Initials' font size scales automatically.
- **Usage**: `<UserAvatar src={user.GAvatar} name={user.AccountName} size={40} />`

## 🛠️ Implementation Guidelines
1. **Styling**: Always use the defined theme colors. Avoid hardcoded hex values in components.
2. **Components**: Prioritize creating reusable components and using existing ones from `components/`.
3. **Tables**: Use `StatusChip` for boolean status flags and `UserAvatar` for user entries.
4. **Logic**: Keep business logic in `services/`, not in the components.
5. **Naming**: Use PascalCase for components and camelCase for hooks/utils.
6. **Forms**: Always use `Form` and `Input` from `antd` for forms and handle their validation rules.
7. **Buttons**: Always use `Button` from `antd` instead of standard HTML `<button>` elements.
8. **Data**: Always use the organized hooks in `hooks/` (e.g., `hooks/users/`, `hooks/dashboard/`).
9. **Types/Interfaces**: Refer to `interface/user.ts` for the correct PascalCase backend property names (AccountID, AccountName, etc.).
