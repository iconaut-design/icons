# Contributing

**This repository is generated.** The icons are authored in a private source repository, where
one file describes every drawing and a build emits the SVGs, the metadata and the
`iconaut-react` package from it. Everything you see here is that output, republished on each
release — so a pull request that edits a file in this repository would be overwritten by the
next one, however good the change is.

That is not a brush-off. Here is what does work.

## Request an icon

[Open an issue](https://github.com/iconaut-design/icons/issues) with what you need and, if you can, where you would use it.
Concrete use cases are what decide priority: "a filter icon with a badge, for a table toolbar"
is far more actionable than "filter variants".

## Report a drawing that is wrong

Also an issue, and a genuinely valuable one: a hairline that greys out at 12px, a solid whose
silhouette drifts from its line, a duotone tint in the wrong plane. A screenshot at the size
you are using beats a description.

## Propose geometry

Say so in the issue first. Every drawing has to clear the kit's own audits before it can
ship — the shared 24px grid, the per-size stroke, the interior counters, the solid's
silhouette against the line's, the duotone's tint against both — and those run against the
source, not against a file here. If you want to draw something, ask and you will get the
rules it has to pass.

## Fixes to this repository's own files

README wording, a broken link, a packaging problem with `iconaut-react`: open an issue and it
gets fixed upstream, where the generator writes it.
