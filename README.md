

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

* bp2 we start to remove files that are not used.
* bp1 pare down to just the raw essentials along with some react-vis
