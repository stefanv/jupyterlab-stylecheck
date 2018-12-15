# stylecheck

Check notebook style


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install stylecheck
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
yarn install
yarn run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
yarn run build
jupyter lab build
```
