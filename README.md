# TYPE SCRIPT

## Installation

1. Install Nodejs: https://nodejs.org/en/
2. Install TypeScript: `npm -g install typescript`

## Setup

1. Initialise npm: `npm init`
2. Install lite-server: `npm i --save-dev lite-server`
3. Configure TypeScript compiler: `tsc --init`

## Compile TypeScript

1. a. Compile all TypeScript files: `tsc`
   b. Run compliler in watch mode: `tsc -w`

## Module Loader

[SystemJS GitHub Page](https://github.com/systemjs/systemjs)

1. Install specific version of SystemJS: `npm i --save systemjs@0.21.5`

## Type Definitions

1. Install library's type definition: `npm i --save-dev @types/<library name>`
   eg. jQuery: `npm i --save-dev @types/jquery`

## Workflow

1. If tsconfig.json File Not In Root Folder: `tsc -p config/tsconfig.json`
2. Using TypeScript with Gulp: `npm i --save-dev gulp gulp-typescript`
