### Zqs starter

#### Project structure

```
.
├── docs
├── src
│   ├── api
│   ├── config
│   ├── plugins
│   └── index.ts
├── ecosystem.config.js
├── nodemon.json
├── package.json
├── tsconfig.json
├── tslint.json
└── yarn.lock
```

### docs
It is actually a swagger ui project. You do not need do anything with that.

### src
All your code should be placed in this directory.

#### src/api
```
.
└── sample
    ├── controller.ts
    ├── model.ts
    └── router.ts
```

It is like MVC design pattern but without 'V'. We are only produce JSON or XML outputs.

#### src/config
```
.
├── auth.ts
├── cors.ts
├── docs.ts
├── environment.ts
├── http.ts
├── index.ts
├── mongodb.ts
├── spdy.ts
└── statics.ts
```
We provide default configurations. By editing them, you will find how easy it is.

#### src/plugins
Plugins configuraions will be placed in here.

#### src/index.ts
The project's main entry. Normally, you do not need to modify it.

### ecosystem.config.js
It is for pm2 deployment.

More info here [http://pm2.keymetrics.io/docs/usage/deployment/](http://pm2.keymetrics.io/docs/usage/deployment/)

### nodemon.json
It is for local development.

More info here [https://github.com/remy/nodemon](https://github.com/remy/nodemon)

### package.json
An package.json.

### tsconfig.json
Typescript configurations.

More info here [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### tslint.json
TSLint configurations.
[https://palantir.github.io/tslint/usage/tslint-json/](https://palantir.github.io/tslint/usage/tslint-json/)

### yarn.lock
If you are not using `yarn`, just remove it.

Find yarn here [https://github.com/yarnpkg/yarn](https://github.com/yarnpkg/yarn)

