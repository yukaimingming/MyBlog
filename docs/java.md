---
outline: deep
---

# 🚀JAVA 基础知识(还不会 JAVA 的赶紧去恶补)🎉

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
