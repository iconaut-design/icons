---
name: iconaut-icons
description: "Add UI icons to a web or React Native project with the free, MIT-licensed Iconaut set (1,263 icons in line, solid and duotone, drawn natively at 16, 20 and 24px). Use whenever the task needs an icon in code: a button, nav item, menu, empty state, status badge, form field, toolbar or shadcn/ui component, or the user asks for an SVG icon, an icon import, or to replace lucide/heroicons with Iconaut. Uses the Iconaut MCP server to look icons up instead of guessing names."
---

# Iconaut icons

Iconaut is a free icon set (MIT) for product UI. The `@iconaut/mcp` server searches it and
returns exact SVG, imports and install commands, so you never have to guess an icon name.

## Set up the MCP server (once)

If the `search_icons` and `get_icon` tools aren't available, ask the user to add the server:

```bash
claude mcp add iconaut -- npx -y @iconaut/mcp
```

Cursor, Windsurf, Claude Desktop and other clients:

```json
{ "mcpServers": { "iconaut": { "command": "npx", "args": ["-y", "@iconaut/mcp"] } } }
```

It runs locally from bundled data: no network, account or API key.

## Workflow

1. **Search, don't guess.** Call `search_icons` with what the icon means ("delete",
   "notification", "arrow left"), not the name you expect. Guessed names often don't exist,
   and the same meaning may be named differently than in lucide or heroicons.
2. **Pick by meaning and category.** Results list each icon's category, the styles it comes
   in and its React component names. If nothing fits, try a synonym, or call
   `list_categories` and then `search_icons` with an empty query and a `category`.
3. **Get it at the size it's shown at.** Call `get_icon` with `name`, `style` and `size`.
   The response holds the SVG, the React import, the shadcn/ui command and a CDN URL. Use
   what it returns verbatim.

## Size: ask for the real one

16, 20 and 24 are native sizes, each with its own stroke weight. 16 also gets a simplified
drawing with less detail. Don't fetch 24 and scale it down to 16: request `size: 16`.

| Rendered at | Request | Typical use |
|---|---|---|
| 14 to 17px | 16 | inline with body text, shadcn/ui buttons, inputs, menus, badges |
| 18 to 21px | 20 | sidebar and nav items, list rows, toolbars |
| 22px and up | 24 | headers, empty states, standalone icon buttons |

Other values return the nearest native drawing; set the rendered width and height yourself.

## Style

- **line** (default): most UI.
- **solid**: selected or active states (the active tab, a toggled favorite), and small
  sizes where a filled shape reads better.
- **duo**: a 25% tint under the line, for feature cards, empty states and illustrations.
  Not every icon has duo (marks like arrows and checks don't); `search_icons` shows which
  styles each icon has.

Keep one style per context. Pairing `line` for inactive with `solid` for active is the
intended use; mixing styles at random in one toolbar is not.

## Use it in the project

Check `package.json` and match what's already there.

**React** (`iconaut-react`): components are PascalCase with a style suffix
(`Rocket`, `RocketSolid`, `RocketDuo`).

```jsx
import { Rocket } from "iconaut-react";
<Rocket size={20} className="text-muted-foreground" />
```

`size` picks the native drawing, `strokeWidth` overrides the stroke, `className` styles it.

**shadcn/ui**: either swap the lucide import in a component for the drop-in names,
which use the 16px drawing shadcn sizes icons to:

```jsx
import { ChevronDownIcon } from "iconaut-react/shadcn";
```

or copy a single icon into the project with the command `get_icon` returns
(`npx shadcn@latest add @iconaut/<name>`).

**React Native** (`@iconaut/react-native`, needs `react-native-svg`): import each icon
from its own path, because Metro bundles the whole set for a named import from the root.

```jsx
import Rocket from "@iconaut/react-native/rocket";
<Rocket size={20} color={colors.text} />
```

**Plain HTML, Vue, Svelte or anything else**: paste the SVG from `get_icon` inline, or
reference the CDN URL in an `<img>`.

## Color and accessibility

- Everything uses `currentColor`, so icons inherit the surrounding text color. Set color
  through text color (`text-red-600`, `color:`), not by editing the SVG.
- Duo exposes `.secondary` (the tint) and `.primary` (the line), so each can be styled
  with CSS: `className="[&_.secondary]:fill-blue-500/20 [&_.primary]:stroke-blue-600"`.
- A decorative icon next to a text label gets `aria-hidden="true"`. An icon-only button
  needs an accessible name on the button (`aria-label="Delete"`).

## Don't

- Don't invent icon names or component names. Look them up.
- Don't mix Iconaut with another icon library in the same UI unless the user asks; the
  stroke weights and corner styles won't match.
- Don't hand-edit icon paths. If an icon is missing or wrong, tell the user, and point them
  to https://github.com/iconaut-design/icons/issues.

Browse the set: https://iconaut.design/icons
