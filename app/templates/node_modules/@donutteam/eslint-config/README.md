# Donut Team ESLint Config
This is an ESLint config that makes a few basic extensions to `eslint:recommended` that make your code actually readable.

Rationale for each decision can be found within [index.js](https://github.com/donutteam/eslint-config/blob/main/index.js).

This configuration can be used for Node.js *or* Browser targetting code. It also opts into [Mocha](https://mochajs.org/) globals for tests.

## Installation
Since this is just a linter config, you probably want to install it with `--save-dev`:

```
npm install --save-dev @donutteam/eslint-config
```

## Usage
Simply extend the config within your ESLint config. Here's an example using an `.eslintrc.cjs` file:

```js
module.exports =
{
	extends:
	[
		"@donutteam/eslint-config",
	],
};
```

## License
[MIT](https://github.com/donutteam/eslint-config/blob/main/LICENSE.md)