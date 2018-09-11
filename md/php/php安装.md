## Nginx 安装 Php 任何版本

**简单安装(yum 方式)**

**添加 epel 源**

```
rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY*
rpm -Uvh http://mirrors.rit.edu/fedora/epel//7/x86_64/e/epel-release-7-9.noarch.rpm
```

**添加 remi 源**

```
rpm -Uvh http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

**安装并更新软件**
**安装 yum-config-manager 实用程序**

```
yum -y install yum-utils
```

**更新系统当前软件版本**

```
yum -y update
```

**更新完成后，就可以安装所需要的 PHP 版本了。**

**安装 PHP**
**以上准备工作完成后，就可以安装所需的 PHP 版本了。**
**对于 PHP5.4**
安装前可尝试 yum search php54 搜索可安装的软件包。

```
yum -y install php
```

对于 PHP7.0
安装前可尝试 yum search php70 搜索可安装的软件包。

```
yum-config-manager --enable remi-php70
yum -y install php php-opcache
```

对于 PHP7.1
安装前可尝试 yum search php71 搜索可安装的软件包。

```
yum-config-manager --enable remi-php71
yum -y install php php-opcache
```

完成后还需要添加 PHP 常用扩展：

```
yum -y install php-mysql php-gd php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-soap curl curl-devel
```

对于 Nginx
安装前可尝试 yum search nginx 搜索可安装的软件包。

```
yum -y install nginx nginx-mod-http-perl nginx-mod-stream nginx-filesystem nginx-mod-mail nginx-mod-http-image-filter nginx-all-modules nginx-mod-http-geoip nginx-mod-http-xslt-filter
```

安装完成后配置 PHP 及 Nginx 并启动用以测试 phpinfo 页面，这时候应该能正常显示。
