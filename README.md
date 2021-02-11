# use-detect-offline

> Custom React Hook that detects where you are online or offline in a PWA

[![NPM](https://img.shields.io/npm/v/use-detect-offline.svg)](https://www.npmjs.com/package/use-detect-offline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A custom React Hook that will detect in a browser whether you are offline or online, and whether this has changed.

## Install

```bash
npm install use-detect-offline
```

## Usage

```jsx
import React from 'react'
import useDetectOffline from 'use-detect-offline'

export default function Component () {
  const {offline} = useDetectOffline()


  return <p>Current status: {offline ? 'offline' : 'online'4}</p>
}
```

## License

MIT © [brianbancroft](https://github.com/brianbancroft)
