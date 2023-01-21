# Webpack configuration on TS.

My short instruction and boilerplate to setup webpack configuration by using TypeScript as config file language.

## Install Webpack

Install webpack as usually:
`yarn add webpack webpack-cli -D`
`npm install webpack webpack-cli --save-dev`

## Install packages to compile TS configuration

Install TS packages and types:
`npm install typescript ts-node @types/node @types/webpack --save-dev`
`yarn add typescript ts-node @types/node @types/webpack -D`

Install [Babel](https://babeljs.io) packages for transpile:
`npm install @babel/core @babel/preset-env @babel/preset-typescript @babel/register --save-dev`
`yarn add @babel/core @babel/preset-env @babel/preset-typescript @babel/register -D`

Check [documentation](https://webpack.js.org/configuration/configuration-languages/) to see all options of setup

## Configuration tsconfig.json

Append configuration for ts-node to tsconfig.json:
```
{
    "ts-node": {
        "compilerOptions": {
            "esm": true,
            "module": "CommonJS",
        }
    }
}
```

Check [documentation](https://webpack.js.org/configuration/configuration-languages/) to see all options of configuration

## Example of command to run webpack

```
"scripts": {
  "start": "webpack serve --config webpack/webpack.dev.ts",
  "build": "webpack --config webpack/webpack.prod.ts"
},
```

## Done

You can write your configuration
Don't forget to set type:
```
// webpack.*.ts
import {Configuration} from 'webpack'; // Import type

const configuration: Configuration = { // Set type
    mode: 'development',
};

export default configuration;
```

## P.S. If you use Webpack Dev Server

Firstly, install types:
`npm install @types/webpack-dev-server --save-dev`
`yarn add @types/webpack-dev-server @babel/register -D`

Secondly, update configuration file where you use Dev Server, just add import:

```
// webpack.*.ts
import {Configuration} from 'webpack';
import 'webpack-dev-server'; // <-- Here

const configuration: Configuration = {
    mode: 'development',
    devServer: {
        static: './dist',
    },
};

export default configuration;
```
