# 生产部署

## 后台

在上一节，已经使用后台代码编译出来了 release 包，该发布包是独立的，可以将它拷贝到任何具有 Java 环境的地方进行执行，release/bin 目录下有多个脚本文件，作用如下：

| 名称         | 描述             |
| ------------ | ---------------- |
| restart.sh   | linux 重启脚本   |
| start.sh     | linux 启动脚本   |
| stop.sh      | linux 停止脚本   |
| winstart.bat | windows 启动脚本 |


#### Windows 环境启动及停止

在 Windows 下点击 winstart.bat 之后会出现 Spring Boot 的启动黑窗口，这个窗口不能关闭，关闭就意味着程序结束，当出现如下字样，说明后台已经启动成功：

```bash
Tomcat started on port(s): 8081 (http) with context path ''
Started FileApplication in 13.429 seconds (JVM running for 14.517)
```

#### Linux 环境启动及停止

```bash
# 进入到 `bin` 目录下
cd ./release/bin

# 脚本赋执行权限
chmod 777 *.sh

# 执行启动脚本
./start.sh

# 执行停止脚本
./stop.sh

# 执行重启脚本
./restart.sh
```

## 前端

#### 打包

在前端项目根目录下执行如下命令打包：

```bash
npm run build
```

#### Nginx 配置

打包后根目录下会生成文件夹 dist，将 dist 文件夹下的文件放置于 nginx/html 目录下，并配置 nginx/conf/nginx.conf，具体配置如下：

```bash
 server {
        listen       80;
		server_name localhost;   #将localhost修改为您证书绑定的域名，例如：www.example.com。

        location / {
            root   html;
            index  index.html index.htm;
			try_files	$uri $uri/ /index.html; #可以防止页面刷新404
        }

		location /api/{
			#proxy_set_hearder host                $host;
			#proxy_set_header X-forwarded-for $proxy_add_x_forwarded_for;
			#proxy_set_header X-real-ip           $remote_addr;

			# 配置此处用于获取客户端的真实IP
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_pass	http://localhost:8080/;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

修改完后重启 Nginx 服务器。

## 浏览器访问

在浏览器地址栏输入 URL 即可访问