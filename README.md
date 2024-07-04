
## 1.安装根目录和所有子项目的依赖

```bash
pnpm install
```

## 2.安装特定子项目的依赖

```bash
cd packages/vue
pnpm install
```

## 3.在根目录添加共用依赖

```bash
pnpm add <package_name> -w
```

## 4.在特定子项目中添加依赖

```bash
pnpm add <package_name>
```
# 5.子项目互相作为依赖

```bash
pnpm add `packages中的包名` --filter <项目>
```
项目技术栈
YEditor-Vue: vue3 + typescript + vite + pnpm + monorepo + eslint
YEditor-React: react + typescript + vite + pnpm + monorepo + eslint