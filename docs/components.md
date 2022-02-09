# Components

Use Atomic design and Mui to simplify components and improve development efficiency.

## Atomic Design

By isolating reusable functions, you can avoid deep nesting and improve development efficiency through loosely coupled and high cohesion.
Templates have been removed because they are often incorporated directly into pages.

* atoms: Minimum granularity components. No state, no logic.
* molecules: Components composed of multiple atoms and molecules. No state, no logic.
* organisms: Components composed of multiple atoms, molecules and organisms.
* pages: Components composed of multiple organisms. Have no css other than grid.

If the component has domain knowledge, separate the directories.

[Atomic Design](https://atomicdesign.bradfrost.com/)

## Mui

Simultaneous implementation of functions and styles is possible.
Components are wrapped in order to be flexible to changes in the library.

[Mui](https://mui.com/)

## Storybook

It can be used to test the appearance as well as to assist in UI design.

[Storybook](https://storybook.js.org/)