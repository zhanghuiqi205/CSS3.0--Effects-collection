- 扩展复杂的选择器：
###### Class 选择器并不是唯一可以被延伸 (extend) 的，Sass 允许延伸任何定义给单个元素的选择器，比如 .special.cool，a:hover 或者 a.user[href^="http://"] 等
```
.hoverlink{
  @extend a:hover;
}
 a:hover {
 text-decoration: underline;
}
同带 class 元素一样，这意味着，a:hover定义的样式同样也适用于.hoverlink
编译后：
a:hover, .hoverlink {  text-decoration: underline; }
```
- 多重扩展：
###### 同一个选择器可以扩展多个选择器。这意味着，它继承了被扩展选择器的所有样式。例如：

```
.error {  
    border: 1px #f00; 
    background-color: #fdd;
}
.attention {  
    font-size: 3em; 
    background-color: #ff0;
}
.seriousError { 
    @extend .error; 
    @extend .attention;  
    border-width: 3px;
}
编译后：
.error, .seriousError {
    border: 1px #f00;  
    background-color: #fdd;
}
.attention, .seriousError {
     font-size: 3em;
     background-color: #ff0; 
}
.seriousError {  border-width: 3px; }
```
- 链式扩展（Chaining Extends）
###### 一个选择器可以扩展另一个选择器，另一个选择器又扩展的第三选择器选择。

```
.error {  
    border: 1px #f00; 
    background-color: #fdd;
}
.seriousError {
 @extend .error;
 border-width: 3px;
}
.criticalError {
    @extend .seriousError;
    position: fixed;  top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
}
编译后：
.error, .seriousError, .criticalError {
  border: 1px #f00;
  background-color: #fdd; 
}
.seriousError, .criticalError {
  border-width: 3px; 
}
.criticalError {
    position: fixed; 
    top: 10%;  
    bottom: 10%;
    left: 10%;
    right: 10%;
} 
```
- @extend-Only 选择器 (@extend-Only Selectors) 
###### 有时候你只会想写一个 @extend 扩展样式类，不想直接在你的HTML中使用。在写一个 Sass 样式库时，这是特别有用，如果他们需要，在这里你可以提供 @extend 扩展样式给用户，如果他们不需要，直接被忽视。对于这种情况，如果使用普通的样式类，在你你最终生成的样式表中，会有很多额外（手册网注：无用）的CSS，并且在HTML被使用时，和其他样式类结合的时候容易造成冲突。这就是 Sass 为什么支持"占位选择器"的原因（例如，%foo）。 占位选择器看起来很像普通的 class 和 id 选择器，只是 # 或 . 被替换成了 %。他可以像 class 或者 id 选择器那样使用，而它本身的规则，不会被编译到 CSS 文件中。

```
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
} 
占位符选择器，就像class和id选择器那样可以用于扩展。
扩展选择器，将会编译成CSS，占位符选择器本身不会被编译
.notice {  @extend %extreme;} 
编译后：
#context a.notice {  color: blue;  font-weight: bold;  font-size: 2em; }
```
- 指令中的@extend (@extend in Directives)
###### 在指令中使用 @extend 时（比如在@media 中）存在一些限制：Sass 不可以将 @media 层外的CSS规则扩展给指令层内的CSS，这样会生成大量的无用代码。意思是说，如果在@media（或者其他CSS指令）中使用@extend，必须扩展给相同指令层中的选择器。
- @at-root：
###### @at-root指令导致一个或多个规则被限定输出在文档的根层级上，而不是被嵌套在其父选择器下。 它可以被用于单一或内联选择器：

```
.parent {
    ... 
    @at-root .child { ... }
}
编译后：
.parent { ... }
.child { ... }
```
- @at-root (without: ...) 和 @at-root (with: ...)（@at-root (without: ...) and `@at-root (with: ...) ）
###### 默认情况下，@at-root只是排除了选择器。然而，它也可以使用@at-root将选择器移动到嵌套指令（比如@media）之外
- @debug
###### @debug指令打印SassScript表达式的值到标准的错误输出流。这对于调试具有复杂SassScript 表达式的Sass文件非常有用的
- @warn

```
@warn指令打印SassScript表达式的值到标准的错误输出流。
这对于警告用户弃用库 或 修复 mixin 轻微的错误是非常有用的。
@warn和@debug之间有两个主要区别： 
1.您可以使用--quiet命令行选项或:quiet Sass选项关闭警告。 
2.样式表跟踪将与消息一起被打印出来，这样，用户可以看到他们的样式在哪里引起了警告。
```
- @error 
###### @error指令抛出一个SassScript表达式的值作为一个致命的错误，其中包括一个不错的堆栈跟踪。这对于验证混入（mixin）和函数的参数很有用。

```
@mixin adjust-location($x, $y) {
  @if unitless($x) {
        @error "$x may not be unitless, was #{$x}.";
      }
      @if unitless($y) {
    @error "$y may not be unitless, was #{$y}.";
     }
    position: relative; left: $x; top: $y;
} 
```
- 控制指令和表达式：
###### SassScript支持一些基本控制指令和表达式，比如仅在在某些条件下包含样式，或者包括相同的样式几次变化。
###### 注意： 控制指令是一项高级功能，日常编写过程中并不常用到，主要在 mixins（混合）指令中使用，尤其是像Compass这样的库。
- [x] if()
  - 内置的if()函数可让您在一个条件处理分支并返回两种可能结果。它可以在任何脚本上下文中使用。if函数只判断相对应的一个参数并且返回 -- 这使您可以引用已经定义的或者可以计算的变量，否则将导致错误（例如，除以零）。 
    ```
    1.if(true, 1px, 2px) => 1px2.if(false, 1px, 2px) => 2px 
    ```
- [x] @if
  - @if 指令需要一个SassScript表达和嵌套在它下面要使用的样式，如果表达式返回值不为 false 或者 null ，那么后面花括号中的内容就会返回：
     
    ```
    p {
      @if 1 + 1 == 2 { border: 1px solid;  }
      @if 5 < 3      { border: 2px dotted; }
      @if null       { border: 3px double; }
    } 
    编译后：
    p {  border: 1px solid; } 
    @if 语句后面可以跟多个@else if语句和一个 @else 语句。
    如果@if语句失败，Sass 将逐条尝试@else if语句，
    直到有一个成功，或如果全部失败，那么会执行@else语句。
    ```
- [x] @for 
  - @for指令重复输出一组样式。对于每次重复，计数器变量用于调整输出结果。该指令有两种形式：@for $var from <start> through <end> 和 @for $var from <start> to <end>。注意关键字through 和 to的区别。$var可以是任何变量名，比如$i;<start> 和 <end>是应该返回整数的SassScript表达式。当<start>比<end>大的时候，计数器将递减，而不是增量。 @for语句将设置$var为指定的范围内每个连续的数值，并且每一次输出的嵌套样式中使用$var的值。对于from ... through的形式，范围包括<start>和<end>的值，但from ... to的形式从<start>开始运行，但不包括<end>的值。使用through语法，
  
    ```
    @for $i from 1 through 3 {
          .item-#{$i} { width: 2em * $i; }
    }
    编译后：
    .item-1 {
      width: 2em; 
    }
    .item-2 {
      width: 4em; 
    }
    .item-3 {
      width: 6em; 
    }
    ```
- [x] @each 
  - @each指令通常格式是@each $var in <list or map>。$var可以是任何变量名，像$length 或者 $name，和<list or map>是一个返回列表（list）或 map 的 SassScript 表达式。 @each 规则将$var设置为列表（list）或 map 中的每个项目，输出样式中包含使用$var的值。 例如：
  
    ```
    @each $animal in puma, sea-slug, egret, salamander {
        .#{$animal}-icon {
           background-image: url('/images/#{$animal}.png'); 
          }
    }
    编译后：
    .puma-icon {
     background-image: url('/images/puma.png'); 
        
    }
    .sea-slug-icon {
      background-image: url('/images/sea-slug.png'); 
         
     }
    .egret-icon {
       background-image: url('/images/egret.png');
      }
     .salamander-icon {
      background-image: url('/images/salamander.png');
     } 
    ```
- [x] 多重赋值（Multiple Assignment）：
  - @each指令也可以使用多个变量，格式为@each $var1,$var2, ... in <list>。如果<list>是列表（list）中的列表，子列表中的每个元素被分配给各自的变量。例如：
  
    ```
    @each $animal, $color, $cursor in 
    (puma, black, default),
    (sea-slug, blue, pointer),
    (egret, white, move) {
    
      .#{$animal}-icon {
            background-image: url('/images/#{$animal}.png');
            border: 2px solid $color;
            cursor: $cursor;
      }
    } 
    编译后：
     .puma-icon {
        background-image: url('/images/puma.png');
        border: 2px solid black;
        cursor: default;
        }
      .sea-slug-icon {
        background-image: url('/images/sea-slug.png');
        border: 2px solid blue;
        cursor: pointer; 
      }
     .egret-icon {
       background-image: url('/images/egret.png');
       border: 2px solid white;
       cursor: move; 
      }
      
    ```
- 混入指令 (Mixin Directives)：
###### 混入(mixin)允许您定义可以在整个样式表中重复使用的样式，而避免了使用无语意的类（class），比如.float-left。混入(mixin)还可以包含所有的CSS规则，以及任何其他在Sass文档中被允许使用的东西。他们甚至可以带arguments，引入变量，只需少量的混入(mixin)代码就能输出多样化的样式。
###### 引用混合样式:@include （Including a Mixin: @include） 使用 @include 指令可以将混入（mixin）引入到文档中。这需要一个混入的名称和可选的参数传递给它，并包括由混入定义的当前规则的样。

```
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}
@include silly-links;
编译后：
a {  color: blue;  background-color: red; }
参数 (Arguments) 
混入（mixin）可以用 SassScript 值作为参数，
给定的参数被包括在混入（mixin）中并且作为为变量提供给混入（mixin）。 

当定义一个混入（mixin）的时候，参数被作为变量名，
写到混入（mixin）名字后面的括号内，多个参数可以用逗号分隔。
然后，当调用混入的时候，值通过对应的参数顺序被传递。
@mixin sexy-border($color, $width) {
     border: {
        color: $color;
        width: $width;
        style: dashed;
      }
}
p { @include sexy-border(blue, 1in); } 
编译后：
p {
  border-color: blue;
  border-width: 1in;
  border-style: dashed;
}
混入（mixin）也可以使用普通的变量赋值语法为参数指定默认值。
然后，当调用混入的时候，如果没有给参数赋值，则自动会使用默认值代替。
关键字参数 (Keyword Arguments) 
混入（mixin）在引入（@include指令）的时候也可以使用明确的关键字参数。

可变参数 (Variable Arguments) 
有时，不能确定一个混入（mixin）或者一个函数（function）使用多少个参数。
例如，用于创建盒子阴影（box-shadow）的一个混入（mixin）可以采取任何数量的box-shadow作为参数。
对于这些情况，Sass支持"可变参数",
参数在声明混入（mixin）或函数（function）结束的地方，所有剩余的参数打包成一个列表（list）。
参数看起来就像普通参数一样，但后面跟随着...
@mixin box-shadow($shadows...) {
      -moz-box-shadow: $shadows;
      -webkit-box-shadow: $shadows;
      box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
编译后：
    .shadows {
      -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
      -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
      box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    } 
    
同样的混入（mixin）可以在.sass 简写语法
（@mixin 可以用 = 表示，而 @include 可以用 + 表示）来完成。
```
- 变量的作用域和内容块（Variable Scope and Content Blocks）：
###### 传递给混入（mixin）的内容块在其被定义的作用域中进行运算，而不是混入（mixin）的作用域。这意味着混入（mixin）的局部变量不能传递给样式块使用，并且变量将解析为全局值：

```
$color: white;
@mixin colors($color: blue) {
      background-color: $color;
      @content;
      border-color: $color;
}
.colors {
  @include colors { color: $color; }
}
编译后：
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```
- 函数指令：
###### Sass 支持自定义函数，并能在任何值或脚本上下文中使用。例如：

```
$grid-width: 40px;    
$gutter-width: 10px;
    @function grid-width($n) {
       @return $n * $grid-width + ($n - 1) * $gutter-width;
    }
#sidebar { width: grid-width(5); }
编译后：
#sidebar { width: 240px; }
正如你看到的，函数可以访问任何全局定义的变量，以及接受参数，
就像一个混入（mixin）。函数可以包含语句，并且你必须调用@return来设置函数的返回值。 
与混入（mixin）一样，你可以使用关键字参数来调用Sass定义的函数。
建议您在函数前加上前缀，以避免命名冲突，
其他人阅读样式表的时候也会知道它们不是 Sass 或者 CSS 的自带功能
```
- 输出格式 (Output Style)
###### 虽然Sass 默认的 CSS 输出格式非常好，并且能反映文档的结构，但是由于每个人的喜好和需求各不相同，因此Sass 支持其他几种格式。 
###### Sass 提供了四种输出格式，可以通过:style 选项 选项设定，或者在命令行中使用 --style 选项。 
###### Sass 允许您通过设置:style 选项 或使用 --style 命令行标志，在四种不同的输出格式之间进行选择。

输出的格式 | 含义
---|---
:nested  | 每个属性都独占用一行，但缩排不是固定的。每个规则是基于它的何嵌套深度缩进。
:expanded  | 手写的CSS样式，每个属性和规则都独占用一行
:compact  | compact（紧凑）格式比起nested（嵌套）或expanded（扩展）格式占据更小的空间。
:compressed   | compressed（压缩）格式占用尽可能小的空间，在该文件的末尾会有一个换行

- 扩展 Sass (Extending Sass) 
###### 对于独特的需求，Sass为用户提供了多项高级定制功能。使用这些功能需要对Ruby有深刻的理解
- 自定义 Sass 函数 (Defining Custom Sass Functions)
###### 用户通过 Ruby API 可以自定义 Sass 函数，更多信息请查看源代码文档。
##### 到这里，我们就把所有的Sass的基础知识讲解到这里。希望大家和我一样，在项目中使用这项小技术，让你的css更方便管理。



