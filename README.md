# Webpack configuration on TS.

My short instruction and boilerplate to setup webpack configuration by using TypeScript as config file language.

## Install Webpack

Install webpack as usually:
```
# If you use yarn:
yarn add webpack webpack-cli -D
```
```
# If you use npm:
npm install webpack webpack-cli --save-dev
```

## Install packages to compile TS configuration

Install TS packages and types:
```
# If you use yarn:
yarn add typescript ts-node @types/node @types/webpack -D
```
```
# If you use npm:
npm install typescript ts-node @types/node @types/webpack --save-dev
```
Install [Babel](https://babeljs.io) packages:
```
# If you use yarn:
yarn add @babel/core @babel/preset-env @babel/preset-typescript @babel/register -D
```
```
# If you use npm:
npm install @babel/core @babel/preset-env @babel/preset-typescript @babel/register --save-dev
```
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
```
# If you use yarn:
yarn add @types/webpack-dev-server @babel/register -D
```
```
# If you use npm:
npm install @types/webpack-dev-server --save-dev
```
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
