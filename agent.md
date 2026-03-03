# Agent Configuration - AppDev Central

## 🎨 Color Theme
Use these CSS variables or Tailwind classes for all UI elements:

- **Primary**: `#04151f` (`--primary`, `bg-primary`, `text-primary`)
- **Accent 1**: `#183A37` (`--accent-1`, `bg-accent-1`, `text-accent-1`)
- **Accent 2**: `#C44900` (`--accent-2`, `bg-accent-2`, `text-accent-2`)
- **Neutral**: `#FFFFFF` (`--neutral`, `bg-neutral`, `text-neutral`)

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
└── tests/            # Component & Integration tests
```

## 🛠️ Implementation Guidelines
1. **Styling**: Always use the defined theme colors. Avoid hardcoded hex values in components.
2. **Components**: Prioritize creating reusable components in `components/ui/`.
3. **Logic**: Keep business logic in `services/`, not in the components.
4. **Naming**: Use PascalCase for components and camelCase for hooks/utils.
