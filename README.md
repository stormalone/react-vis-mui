

The following 2 files must be modified to remove references to **src**

```
.babelrc
docs/webpackBaseConfig.js
```

Also update **dependencies** in package.json with this line

```
"dependencies": {
  "material-ui": "next",
```

Then bring up the doc with this command.

```
alias mui='npm run docs:dev'
```
