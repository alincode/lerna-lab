# Lerna Lab

### 初始化

```
npm i -g lerna

lerna init
```

### 建立模組

lerna create <name> [loc]

```
lerna create @alincode/app-api-server -y
lerna create @alincode/app-iso -y
lerna create @alincode/app-ui -y
```

### 查看模組列表

lerna list

```
lerna notice cli v3.16.4
@alincode/app-api-server
@alincode/app-iso
@alincode/app-ui
lerna success found 3 packages
```

### 安裝相依模組至模組內

在所有模塊裡安裝 `@alincode/app-iso` 依賴

```
lerna add @alincode/app-iso
```

或

```
lerna add @alincode/app-iso --scope @alincode/app-api-server
lerna add @alincode/app-iso --scope @alincode/app-ui
```

### link 本地 packages 和安裝相依模組

```
lerna bootstrap
```

### lerna.json

fixed 模式

```json

{
  "npmClient": "yarn",
  "useWorkspaces": true,
  "packages": ["packages/*"],
  "version": "0.0.0"
}
```

independent 模式

```json
{
  "packages": ["packages/*"],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

### packages.json

```json
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^3.16.4"
  },
  "scripts": {
    "start": "lerna bootstrap"
  }
}
```