# vue3-ts-cms_pro

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### 项目规范

#### 配置.editorconfig

```editorconfig
# https://editorconfig.org
root = true
[*]
charset = utf-8
indent_style = space # 缩进风格 tab / space
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型 lf / cr /crlf
insert_final_newline = true # 始终在末尾插入一个空行
trim_trailing_whitespace = true # 去除行首任意空白字符

[*.md]
max_line_length = off
insert_final_newline = false
trim_trailing_whitespace = false
```

#### 配置 prettier

```
yarn add prettier -D
```

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "semi": false,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none"
}
```

```
yarn prettier
```

#### git husky 和 eslint

拦截 pre-commit hook

```
npx husky-init && npm install
```

#### commitizen

```
yarn add commitizen -D
```

初始化 cz-conventional-changelog

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

```
npx cz
```

#### commitlint

拦截 commit-msg ,验证 commit message

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli
yarn add @commitlint/config-conventional @commitlint/cli -D
```

commitlint.config.js

```js
module.exports = {
  extends: ['@commitlint/config-conventionnal']
}
```

使用 husky 生成 commit-msg 文件

```
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
