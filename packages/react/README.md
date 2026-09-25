# iconaut-react

1048 Iconaut icons as React components. One shape per icon; line, solid and duotone
are derived from that same shape by the build, so the three styles can never drift apart —
and neither can these components, which are generated from the very SVGs the Figma plugin
inserts.

```bash
npm i iconaut-react
```

```jsx
import { Rocket, RocketSolid, RocketDuo } from "iconaut-react";

<Rocket />                    // the 24px fit
<Rocket size={16} />          // the REAL 16px fit, not the 24px drawing scaled down
<Rocket size={18} />          // nearest fit (16) rendered at 18px
<Rocket strokeWidth={1.25} /> // override the fit's optical stroke
<Rocket className="text-blue-500" />
```

## A real drawing at every size

Most icon libraries ship one drawing and scale it, so a 16px icon is a 24px icon with
detail too fine to read. Iconaut authors **native fits**: each of
16 / 20 / 24 has its own stroke token and, at 16px, a simplified *compact* drawing
that drops repeated or secondary detail rather than letting it turn to mud.

| `size` | tier | stroke |
|---|---|---|
| 16 | compact | 1.25 |
| 20 | default | 1.5 |
| 24 | default | 1.75 |

Pass any other number and the nearest fit renders at that pixel size.

## Duotone

`*Duo` components render two layers: `.secondary` (a 25% tint of the icon's primary
plane) under `.primary` (the line). Target either with CSS:

```jsx
<RocketDuo className="[&_.secondary]:fill-blue-500/20 [&_.primary]:stroke-blue-600" />
```

## Colour

Everything is `currentColor`, so icons inherit whatever text colour is in scope.

## Licence

MIT. These are the 1048 free Iconaut icons: use them in personal and commercial
work, modify them, ship them. The specialised Pro packs are not in this package and are
licensed separately — see <https://iconaut.design/terms>.

Source: <https://github.com/iconaut-design/icons> · Browse: <https://iconaut.design/icons>

---
Generated from the Iconaut source of truth by `scripts/gen-react.mjs --tier free`. Do not hand-edit.
