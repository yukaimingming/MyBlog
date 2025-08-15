---
outline: deep
---

# 🚀Spring Framework 中文文档 🌐

## 📝 Web Servlet

这部分文档包括对基于 `Servlet API` 构建并部署到 `Servlet` 容器的 `Servlet` 栈中的
Web 应用程序的支持. 各个章节包括 `Spring MVC`,视图技术, 跨域支持 和 `WebSocket` 支持.
对于响应式栈的 `Web` 应用程序,请参阅 `Web on Reactive Stack`.

### 📝 Spring Web MVC

`Spring Web MVC` 是构建在 `Servlet API` 上的原始 Web 框架,从一开始就包含在 Spring
Framework 中. 正式名称 `"Spring Web MVC"` 来自其源模块(spring-webmvc)的名称
,但它通常被称为 `"Spring MVC"`..
与 `Spring Web MVC` 一样,`Spring Framework 5.0` 引入了一个响应式栈 Web 框架
,其名称 "Spring WebFlux", 也基于其源模块(spring-webflux). 本节介绍 Spring
Web MVC. 下一节将介绍 `Spring WebFlux. .`
有关基本信息以及与 `Servlet` 容器和 `Jakarta EE` 版本范围的兼容性,请参阅 Spring
Framework Wiki.

### 📝 额...概念太多了....自己看去吧...

### 📝 spring boot web 例子

1.下面这个是 `spring web` 程序启动入口

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
```

```md
暂时就先写这么多吧..持续更新中
```

## More
