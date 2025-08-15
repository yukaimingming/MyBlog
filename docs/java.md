---
outline: deep
---

# 🚀`JAVA` 基础知识(还不会 JAVA 的赶紧去恶补)🎉

## 🛠️ 搭建 `java` 开发环境

### 1.安装 JDK

因为 `Java` 程序必须运行在 `JVM` 之上，所以，我们第一件事情就是安装 JDK。
直接到 `oracle`官网上面下载：(https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)

`windows`:下载`Windows x64/Windows x86`

`macos`:M 芯片电脑下载`arm64`，`intel下载x64/ x86`请根据自身电脑版本下载即可，下载 23 或者 1.8 都可以。

## 🛠️ 设置环境变量

安装完 `JDK` 后，需要设置一个 JAVA_HOME 的环境变量，它指向 JDK 的安装目录。在 Windows 下，
它是安装目录，类似：
`C:\Program Files\Java\jdk-23`

验证方式：如 macos 在终端输入 `java -version` 出现如下版本说明安装完成（windows 下 cmd 也是一样命令）
kelefiey@KelefiedeMacBook-Pro ~ % `java -version`
`openjdk version "21.0.8" 2025-07-15 LTS`
`OpenJDK Runtime Environment (build 21.0.8+12-LTS)`
`OpenJDK 64-Bit Server VM (build 21.0.8+12-LTS, mixed mode, sharing)`

## 第一个 Java 程序

我们来编写第一个 Java 程序。
打开文本编辑器，输入以下代码：

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

在一个 Java 程序中，你总能找到一个类似：

```java
public class Hello {
 ...
}
```

的定义，这个定义被称为`class（类）`，这里的类名是`Hello` ，大小写敏感， `class` 用来定义一
个类， `public` 表示这个类是公开的， `public` 、 `class` 都是`Java`的关键字，必须小写，
`Hello` 是类的名字，按照习惯，首字母 `H` 要大写。而花括号 `{}` 中间则是类的定义。

## 📝 Java 程序基本结构

我们先剖析一个完整的 `Java` 程序，它的基本结构是什么：

```java
/**
 * * 可以用来自动创建文档的注释
*/
public class Hello {
    public static void main(String[] args) {
        // 向屏幕输出文本:
        System.out.println("Hello, world!");
        /* 多行注释开始
        注释内容
        注释结束 */
    }
} // class定义结束
```

因为`Java`是面向对象的语言，一个程序的基本单位就是 `class` ， `class` 是关键字，这里定义的
`class` 名字就是 `Hello` ：

```java
public class Hello { // 类名是Hello
// ...
} // class定义结束
```

::: tip
📝 类名要求：
类名必须以英文字母开头，后接字母，数字和下划线的组合
习惯以大写字母开头
要注意遵守命名习惯，好的类命名：
Hello
NoteBook
VRPlayer
不好的类命名：
hello
Good123
Note_Book
\_World
:::
