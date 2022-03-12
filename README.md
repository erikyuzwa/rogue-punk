# @erikyuzwa/rogue-punk

## Overview

> :construction: This software is pre 1.0. As such, some functionality is missing and/or subject to API breakage.

RoguePunk is a game engine for 2D web technology games, written in [TypeScript](https://www.typescriptlang.org).

Back in the day I was super into Flash and FlashPunk, so this is loosely inspired by its greatness.

## Installation

- Use as a dependency of your project:
```
  npm install --save-dev @erikyuzwa/rogue-punk
```

## Basic Idea

- Create a `class` and extend it from `Engine`:
```
import {Engine} from "@erikyuzwa/rogue-punk";

class MyEngine extends Engine {
    constructor(){
        super();
    }
}

window.onload = (() => {
    const engine = new MyEngine();
});

```



## Features

* TODO

## Games Made with Rogue-Punk

* My 7DRL 2022 entry
* *TODO: contact me!*

## License

MIT License

Copyright (c) 2022 Erik Yuzwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

