# eslint-plugin-template-no-unused-data

未在template使用的数据则不需要在data中定义

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-template-no-unused-data`:

```sh
npm install eslint-plugin-template-no-unused-data --save-dev
```

## Usage

Add `template-no-unused-data` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "template-no-unused-data"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "template-no-unused-data/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


