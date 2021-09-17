# Webpack5 + TypeScript 4 实现贪吃蛇

## 特性

- [x] Webpack5
- [x] TypeScript 4
- [x] Babel
- [x] Less+Postcss
- [x] Jest
- [x] Eslint

## 怎么运行？

#### 安装依赖:

``` shell
yarn install 
```

#### 启动服务器:
``` shell
yarn start
```
#### 游戏规则：
 1. 使用“方向键”控制行进方向
 2. 十分即升一级， 升级时会加快行进速度，最多10级
 3. 一次只会出现一个食物，出现的位置随机。
 3. 蛇穿墙，咬到自己，即游戏停止
 4. 不能直接回头，例如，正在向左行进，按右键即为无效操作
 5. 未对蛇的身躯长度做限制

## 其他

#### 打包一个版本，对输出不压缩:

``` shell
yarn build
```

#### 打包一个版本，对输出压缩处理:

``` shell
yarn build.prod
```

#### 运行单元测试:
``` shell
yarn test
```
