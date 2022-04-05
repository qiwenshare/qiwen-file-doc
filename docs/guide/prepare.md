# 环境准备

## 清单

源码的编译和运行需要依赖以下开发环境，下面所列的版本号仅供参考
|开发环境|版本|说明|
|-|-|-|
|JDK|8.0+|后台 Java 运行环境|
|MySQL|8.0+|环境使用的数据库为MySQL，且数据库版本不低于 8.0|
|Node.js|v12.13.1|前台使用 Node.js 环境开发及运行|
|Maven|Latest version|后台代码编译管理|


## 数据库配置

### 创建数据库

以 HeidiSQL 数据库管理工具为例：

<img :src="$withBase('/img/guide/deploying/database1.png')" alt="创建数据库1">

创建数据库，填写数据库名称，并设置字符校对规则为：`utf8mb4_general_ci`
<img :src="$withBase('/img/guide/deploying/database2.png')" alt="创建数据库2">

::: tip 关于数据库脚本

**DDL脚本**：为了便于管理，本项目的建表使用JPA模型映射技术，因此数据库配置完成后，启动项目即可，系统会自动完成整个建表过程。

**DML脚本**：项目初始化数据脚本存放在静态目录下：`/resource/import.sql`，项目启动后需要执行该初始化脚本，如果没有执行，则会报错，参见：[常见问题2](/question/#_2-脚本未初始化-请在数据库执行数据初始化脚本-存放路径-resources-import-sql)

:::
### 数据库配置

参见：[配置-数据库配置](/config/#数据库配置)