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

## 🛠️ Implementation Guidelines
1. **Styling**: Always use the defined theme colors. Avoid hardcoded hex values in components.
2. **Components**: Prioritize creating reusable components in `components/ui/`.
3. **Logic**: Keep business logic in `services/`, not in the components.
4. **Naming**: Use PascalCase for components and camelCase for hooks/utils.
5. **Forms**: Always use `Form` and `Input` from `antd` for forms and handle their validation rules.
6. **Buttons**: Always use `Button` from `antd` instead of standard HTML `<button>` elements.
7. **Types/Interfaces**: Always ask the user for confirmation before creating new types or interfaces.
