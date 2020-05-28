---
title: "前端阅读：CSS Display 属性新规范"
date: 2019-07-17
tags:
  - css
keywords:
  - css
  - display
---

这里说的是，在 [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) 的规范中，使用了两个基本量来描述元素的显示类型（display type）。相对于以往使用单值来描述，或许含义更加清晰，容易被开发者理解。

原文：[Digging Into The Display Property: The Two Values Of Display](https://www.smashingmagazine.com/2019/04/display-two-value/)

## 两个基本量

这两个基本量分别是

```
<display-outside>  = block | inline | run-in
<display-inside>   = flow | flow-root | table | flex | grid | ruby
```

写出来就像下面：

```css
display: block flow;
display: inline table;
display: flex run-in;
```

规范中给出的解释如下：

> The display property defines an element’s **display type**, which consists of the two basic qualities of how an element generates boxes:
> - the **inner display type**, which defines (if it is a non-replaced element) the kind of formatting context it generates, dictating how its descendant boxes are laid out. (The inner display of a replaced element is outside the scope of CSS.)
> - the **outer display type**, which dictates how the principal box itself participates in flow layout.

一个对外，一个对内，意思是：

- `<display-outside>` 值表示元素盒子对外表现为什么类型，它决定元素所在布局流中的表现，是 block （块级）还是 inline （行内级别）的。
- `<display-inside>` 值表示元素盒子对内表现为什么容器，它决定子元素的布局方式，是 flow （常规流布局）、flow-root （生成BFC）、flex（遵循 flex 布局模型）还是 grid（遵循 grid 模型）。

## 单值到双值的对应

过去我们熟悉的单值写法

```css
display: block;
display: inline;
display: inline-block;
display: flex;
```

都有对应的双值写法：

| 单值 | 双值 |	描述 |
| --- | --- | --- |
| block |	block flow | 块级盒子，内部常规流布局 |
| flow-root |	block flow-root |	块级盒子，并且生成 BFC |
| inline | inline flow | 行内级盒子，内部常规流布局 |
| inline-block | inline flow-root | 行内级盒子，并且生成 BFC |
| list-item | block flow | 列表项盒子，内部常规流布局 |
| flex | block flex | 块级盒子，内部 flex 布局 |
| inline-flex |	inline flex |	行内级盒子，内部 flex 布局 |
| grid | block grid | 块级盒子，内部 grid 布局 |
| inline-grid | inline grid | 行内级盒子，内部 grid 布局 |
| table | block table | 块级盒子，内部 table 布局 |
| inline-table | inline table | 行内级盒子，内部 table 布局 |

这样的双值写法是否让你对元素的布局设定理解起来更清晰呢？

## 参考资料

- [Digging Into The Display Property: The Two Values Of Display](https://www.smashingmagazine.com/2019/04/display-two-value/)
- [display - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)
- [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/)
