###### 工作中使用预处理工具可以使自己的工作更加可控和自动化。我所在的公司早期就已经全部使用预处理工具，从早期的less到现在的Sass。因为工作中我主要使用的是SCSS(Sass的一种格式)。那么我们闲话少说，直接开始进入干货的部分。

```
sequenceDiagram
Sass->>CSS: 优雅，强大，自动合成
Sass->>CSS: 方便维护和管理
```

```
gantt
dateFormat YYYY-MM-DD
section S1
变量，插值: 2014-01-01, 9d
section S2
嵌套，控制语句: 2014-01-11, 9d
section S3
mixin混入命令，函数化: 2014-01-02, 9d

```
###### 使用预处理器，你就会深深被他的统一管理变量，深层次嵌套和控制，函数化的处理等特点深深吸引。
- 安装：
###### 这个Sass是基于ruby的。你需要安装ruby。很多的IDE都有对应的配置规则。随着构建自动化的程度越来越高，所以安装越来越不负责。大家可以安装好ruby，然后自己去配置自己的IDE,这里我主要把它的规则和使用讲清楚，安装大家可以百度或者查看api。如果大家懒得去配置，只想自己学习一下，那么可以使用Koala这个软件。很方便的编译。
- 特色：
  - [x] 完全兼容 CSS3
  - [x] 在 CSS 语言的基础上增加变量(variables)、嵌套 (nesting)、混合 (mixins) 等功能 
  - [x] 通过函数进行颜色值与属性值的运算。
  - [x] 提供 控制指令等高级功能 
  - [x] 自定义输出格式
- 语法：
###### Sass 有两种语法格式。首先是SCSS(SassyCSS),也是本参考资料示例所使用的格式,这种格式仅在CSS3语法的基础上进行扩展，这意味着每个CSS样式表是一个同等的SCSS文件。此外，SCSS 也支持大多数 CSS hacks 写法 以及浏览器专属前缀语法 (vendor-specific syntax)，例如，IE 古老的 filter 语法。 这种语法的样式表文件需要以.scss作为拓展名。另一种，也是最早的语法，被称为缩进语法 (IndentedSass)，或者通常说的"Sass"，它提供了一种更加简介的方式来书写CSS。它使用缩进而不是花括号来表示选择器的嵌套，用换行而不是分号来分隔属性，一些人认为这样做比 SCSS 更容易阅读，书写也更快速。 缩排语法具有 Sass 的所有特色功能， 虽然有些语法上稍有差异； 具体差异在缩进语法参考中都有描述。 使用此种语法的样式表文件需要以 .sass 作为扩展名。
- 配置项：
###### 所有相关的选项也可通过标记在sass和scss命令行可执行文件中使用。可用选项有：

    选项的命令 | 描述
    ---|---
 :style   | 设置输出CSS的代码风格，可以查看输出的代码风格。 有四种输出模式。后面再给大家叙述。
 :syntax  | 输入文件的语法，:sass 表示缩进语法，:scss表示CSS扩展语法。只有在你自己构造Sass::Engine 实例的情况下有用；当你使用      Sass::Plugin时，它会自动设置正确的值。默认设置为 :sass 。
:cache  | 解析 Sass 时是否应该缓存，允许更快的编译速度。默认设置为 true 。
:read_cache  | 如果设置了这个选项，而没有设置:cache选项，那么缓存存在就只读 Sass 缓存，如果没有没有缓存，那就不会编译。
:cache_store  | 如果该选项设置为 Sass::CacheStores::Base 的子类的实例，该缓存存储将被用于存储和检索缓存编译结果。默认设置为Sass::CacheStores::Filesystem，初始化使用:cache_location 选项。
:css_location | CSS文件输出的路径，当:template_location选项为一个散列（hash）时，这个选项将被忽略。默认设置为"./public/stylesheets"。该选项只有在Rack，Ruby on Rails，或Merb中有意义。

###### 它的配置项大家可以按照自己需要什么去查看api就好了。没必要去记这些。需要什么就去配置什么就好了。
- 语法选择：
###### Sass命令行工具将使用文件扩展名以确定你使用的是哪种语法，但并不总是一个文件名。sass命令行程序默认为缩进语法，但如果输入应该被解析为SCSS语法，你可以传递--scss选项给她。此外，你可以使用scss命令行程序，它和sass程序完全一样，但是他的默认语法为SCSS。
- 编码格式：
###### 在 Ruby 1.9 及以上环境中运行 Sass 时，Sass 对文件的编码格式比较敏感，首先会根据 CSS spec 判断样式文件的编码格式， 如果失败则检测 Ruby 字符串编码。也就是说，Sass 首先检查 Unicode 字节顺序标记，然后是 @charset 声明，最后是 Ruby 字符串编码，假如都没有检测到，默认使用 UTF-8 编码。要明确指定样式表的编码，与 CSS 相同，使用@charset声明。在样式文件的起始位置（前面没有任何空白与注释）插入 @charset "encoding-name";， Sass 将会按照给定的编码格式编译文件。注意，无论你使用哪种编码，它必须可以转换为 Unicode 字符集。默认情况下，Sass 总会以UTF-8编码输出 CSS 文件。当且仅当输出文件包含非ASCII字符时，才会在输出文件中添加 @charset 声明，在压缩模式中，而在压缩模式下 (compressed mode) 使用 UTF-8字节顺序标记代替 @charset 声明语句。
- CSS的扩展：
  1. 嵌套规则：
  Sass 允许将一个 CSS 样式嵌套进另一个样式中，内层样式仅适用于外层样式的选择器范围内，例如：

        ```
        #main p {  
            color: #00ff00;
            width: 97%;
                .redbox {    
                background-color: #ff0000;
                color: #000000;
                }
        }
        编译后：
        #main p { color: #00ff00;  width: 97%; } 
        #main p .redbox {   background-color: #ff0000;color: #000000; }
        这有助于避免父选择器重复，相对于复杂的CSS布局中多层嵌套的选择器 要简单得多。
        引用父选择器:& (特别常用的一个字符)
        有些时候需要直接使用嵌套外层的父选择器，这个就很有用了，例如，你可能喜欢给选择器指定 hover样式，或者当body元素具有某个样式时，在这些情况下，你可以 & 字符来明确地表示插入指定父选择器。 例如：
        a { 
            font-weight: bold; 
            text-decoration: none;  
              &:hover { text-decoration: underline; } 
              body.firefox & { font-weight: normal; }
        } 
        编译后：
        a {  font-weight: bold;  text-decoration: none; }
        a:hover { text-decoration: underline; }
        body.firefox a {font-weight: normal; } 
        &将替换为呈现在CSS文件中的父选择器。
        这意味着，如果你有一个多层嵌套的规则，父选择器将在被&替换之前完全分解。
        & 必须出现在的选择器的开头位置，但可以跟随后缀，将被添加到父选择的后面。
        父选择器 & 被作为一个后缀的时候，Sass 将抛出一个错误。
        嵌套的规则不仅仅可以嵌套选择器，也可以嵌套样式，例如:
        .funky { 
            font: {    
                family: fantasy;  
                size: 30em;
                weight: bold; 
            }
        }
        编译后：
        .funky {font-family: fantasy; font-size: 30em; font-weight: bold; } 
        占位符选择器：%foo
        Sass 支持一种特殊类型的选择器,叫做"占位符选择器" (placeholder selector)。
        这些看起来像 class 和 id 选择器，除了# 或.用%替换。
        他们需要在@extend 指令中使用;后面我们讲解
        
        ```
    1. 注释：/* */和 //
###### Sass 支持标准的CSS多行注释以/* */以及单行注释 //。在尽可能的情况下，多行注释会被保留在输出的CSS中，而单行注释会被删除。

- SassScript(==重点就是这部分内容==)
###### 除了普通的CSS属性的语法，Sass 支持一些扩展，名为SassScript。SassScript允许属性使用变量，算术和额外功能。SassScript可以在任何属性值被使用。 SassScript也可以用来生成选择器和属性名称，当编写mixins时非常有用。这是通过 interpolation（插值） 完成。
  1. 变量: $：
  
```
使用SassScript最直截了当的方法是使用变量。变量以美元符号开始，赋值像设置CSS属性那样：
#main { width: $width;}；
变量仅在它定义的选择器嵌套层级的范围内可用不在任何嵌套选择器内定义的变量则在可任何地方使用。定义变量的时候可以后面带上!global标志，在这种情况下，变量在任何地方可见。

```
2. 支持的数据类型：
    - [x] 数字 (例如： 1.2, 13, 10px)
    - [x] 文本字符串，带引号字符串和不带引号字符串(例如："foo", 'bar', baz)
    - [x] 颜色 (例如：blue, #04a3f9, rgba(255, 0, 0, 0.5))
    - [x] 布尔值 (例如： true, false)
    - [x] 空值 (例如： null) 
    - [x] 值列表 (list)，用空格或逗号分隔 (例如： 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
    - [x] maps ，从一个值映射到另一个 (例如： (key1: value1, key2: value2)) 
1. 函数 (Functions)：SassScript定义了一些有用的函数， 这些函数可以像普通 CSS 函数语法一样调用：

```
p { color: hsl(0, 100%, 50%);} 
编译后的：
p { color: #ff0000; }
需要了解有哪些实用函数,可以查看api.
```
4. 插值：#{}（Interpolation: #{}）

```
还可以通过 #{} 插值语法在选择器和属性名中使用 SassScript 变量：
$name: foo;
$attr: border;
p.#{$name} { #{$attr}-color: blue;}
编译后：
p.foo { border-color: blue; }
```
5. SassScript中的&：

```
就像当它在选择器中使用一样，SassScript中的&指向当前父选择器。
如果没有父选择器，&的值将是空。这意味着你可以在一个mixin中使用它来检测父选择是否存在：
@mixin does-parent-exist {
 @if & {    
    &:hover {     
        color: red;   
            
        }
    } 
  @else
    {   
        a {
        color: red;
        }
    }
}

变量默认: !default;
如果分配给变量的值后面添加了!default标志 ，这意味着该变量如果已经赋值.
那么它不会被重新赋值，但是，如果它尚未赋值，那么它会被赋予新的给定值.
```
6.@规则 和 指令:

```
@import:
Sass 扩展了 CSS @import规则，允许其导入 SCSS 或 Sass 文件。被导入的全部SCSS 或 Sass文件将一起合并到同一个 CSS 文件中。此外，被导入文件中所定义的任何变量或混入（mixins）都可以在主文件
Sass 支持在一个 @import 规则中同时导入多个文件.
导入规则中可能含有#{} 插值，但存在一定的限制。不能通过变量动态导入Sass文件；#{}插值仅适用于CSS导入规则。 因此，它仅适用于url() 导入。 
例如：
$family: unquote("Droid+Sans");   
@import url("http://fonts.googleapis.com/css?family=#{$family}");
编译后：
@import url("http://fonts.googleapis.com/css?family=Droid+Sans"); 

@media：
Sass 中 @media 指令的行为和纯 CSS 中一样，只是增加了一点额外的功能：它们可以嵌套在CSS规则。
如果一个@media 指令出现在CSS规则中，它将被冒泡到样式表的顶层，并且包含规则内所有的选择器。
这使得很容易地添加特定media样式，而不需要重复使用选择器，或打乱样式表书写流。例如：
.sidebar {
    width: 300px;  
    @media screen and (orientation: landscape){
        width: 500px;
            
    }
}
编译后：
.sidebar {  width: 300px; }
@media screen and (orientation: landscape) {
   .sidebar {   width: 500px; } 
} 

@media的查询（queries）也可以相互嵌套。
这些查询（queries）在编译时，将会使用 and 操作符号结合。


@media 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值： 
最后，@media 查询（queries）可以包含 SassScript 表达式（包括变量 variables，函数 functions 和操作符operators）代替特征名称和特征值。
例如：
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;
@media #{$media} and ($feature: $value) {  
.sidebar {    width: 500px;}
}
编译后：
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {  
   .sidebar {    width: 500px; } 
}

@extend：
设计一个页面时常常遇到这种情况：当一个样式类（class）含有另一个类的所有样式，并且它自己的特定样式。
处理这种最常见的方法是在HTML同时使用一个通用样式类和特殊样式类。例如，假设我们设计需要一个普通错误的样式和一个严重错误的样式。
我们可以类似这样写：
<div class=/"error seriousError"> 
Oh no! You've been hacked!
</div>

样式如下：
.error {  
    border: 1px #f00; 
    background-color: #fdd;
}
.seriousError {  border-width: 3px;}
不幸的是，这意味着，我们必须时刻记住使用.seriousError的时候需要搭配使用.error。 
这对于维护来说是一个负担，甚至导致棘手的错误，并且导致无语意的样式。
@extend 指令避免这些问题，告诉 Sass 一个选择器的样式应该继承另一选择器。 例如：
.error {
   border: 1px #f00;
     background-color: #fdd;
    
}

.seriousError {
     @extend .error;
     border-width: 3px;
}
编译后：
.error,.seriousError {
     border: 1px #f00;
     background-color: #fdd;  
}

.seriousError {
     border-width: 3px;
}
这意味着.error说定义的所有样式也适用于.seriousError，
除了.seriousError的特定样式。相当于，每个带有.seriousError类的元素也带有.error类。 
当合并选择器时，@extend 会很聪明地避免不必要的重复

```
###### 下一节我们讲述如何使用@extend进行扩展选择器，以及控制语句，混入指令和函数，并给大家介绍一下四种输出格式。















