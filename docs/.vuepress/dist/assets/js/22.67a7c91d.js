(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{374:function(e,s,t){"use strict";t.r(s);var o=t(42),_=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"模块解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块解析"}},[e._v("#")]),e._v(" 模块解析")]),e._v(" "),t("blockquote",[t("p",[e._v("这节假设你已经了解了模块的一些基本知识 请阅读"),t("RouterLink",{attrs:{to:"/typescript/Basic/modules.html"}},[e._v("模块")]),e._v("文档了解更多信息。")],1)]),e._v(" "),t("p",[e._v("_模块解析_是指编译器在查找导入模块内容时所遵循的流程。 假设有一个导入语句"),t("code",[e._v('import { a } from "moduleA"')]),e._v("; 为了去检查任何对"),t("code",[e._v("a")]),e._v("的使用，编译器需要准确的知道它表示什么，并且需要检查它的定义"),t("code",[e._v("moduleA")]),e._v("。")]),e._v(" "),t("p",[e._v("这时候，编译器会有个疑问“"),t("code",[e._v("moduleA")]),e._v("的结构是怎样的？” 这听上去很简单，但"),t("code",[e._v("moduleA")]),e._v("可能在你写的某个"),t("code",[e._v(".ts")]),e._v("/"),t("code",[e._v(".tsx")]),e._v("文件里或者在你的代码所依赖的"),t("code",[e._v(".d.ts")]),e._v("里。")]),e._v(" "),t("p",[e._v("首先，编译器会尝试定位表示导入模块的文件。 编译器会遵循以下二种策略之一："),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#classic"}},[e._v("Classic")]),e._v("或"),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#node"}},[e._v("Node")]),e._v("。 这些策略会告诉编译器到_哪里_去查找"),t("code",[e._v("moduleA")]),e._v("。")],1),e._v(" "),t("p",[e._v("如果上面的解析失败了并且模块名是非相对的（且是在"),t("code",[e._v('"moduleA"')]),e._v("的情况下），编译器会尝试定位一个"),t("RouterLink",{attrs:{to:"/typescript/Basic/modules.html#ambient-modules"}},[e._v("外部模块声明")]),e._v("。 我们接下来会讲到非相对导入。")],1),e._v(" "),t("p",[e._v("最后，如果编译器还是不能解析这个模块，它会记录一个错误。 在这种情况下，错误可能为"),t("code",[e._v("error TS2307: Cannot find module 'moduleA'.")])]),e._v(" "),t("h2",{attrs:{id:"相对-vs-非相对模块导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对-vs-非相对模块导入"}},[e._v("#")]),e._v(" 相对 vs. 非相对模块导入")]),e._v(" "),t("p",[e._v("根据模块引用是相对的还是非相对的，模块导入会以不同的方式解析。")]),e._v(" "),t("p",[e._v("_相对导入_是以"),t("code",[e._v("/")]),e._v("，"),t("code",[e._v("./")]),e._v("或"),t("code",[e._v("../")]),e._v("开头的。 下面是一些例子：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('import Entry from "./components/Entry";')])]),e._v(" "),t("li",[t("code",[e._v('import { DefaultHeaders } from "../constants/http";')])]),e._v(" "),t("li",[t("code",[e._v('import "/mod";')])])]),e._v(" "),t("p",[e._v("所有其它形式的导入被当作_非相对_的。 下面是一些例子：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('import * as $ from "jQuery";')])]),e._v(" "),t("li",[t("code",[e._v('import { Component } from "@angular/core";')])])]),e._v(" "),t("p",[e._v("相对导入在解析时是相对于导入它的文件，并且_不能_解析为一个外部模块声明。 你应该为你自己写的模块使用相对导入，这样能确保它们在运行时的相对位置。")]),e._v(" "),t("p",[e._v("非相对模块的导入可以相对于"),t("code",[e._v("baseUrl")]),e._v("或通过下文会讲到的路径映射来进行解析。 它们还可以被解析成"),t("RouterLink",{attrs:{to:"/typescript/Basic/modules.html#ambient-modules"}},[e._v("外部模块声明")]),e._v("。 使用非相对路径来导入你的外部依赖。")],1),e._v(" "),t("h2",{attrs:{id:"模块解析策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块解析策略"}},[e._v("#")]),e._v(" 模块解析策略")]),e._v(" "),t("p",[e._v("共有两种可用的模块解析策略："),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#node"}},[e._v("Node")]),e._v("和"),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#classic"}},[e._v("Classic")]),e._v("。 你可以使用"),t("code",[e._v("--moduleResolution")]),e._v("标记来指定使用哪种模块解析策略。 若未指定，那么在使用了"),t("code",[e._v("--module AMD | System | ES2015")]),e._v("时的默认值为"),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#classic"}},[e._v("Classic")]),e._v("，其它情况时则为"),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#node"}},[e._v("Node")]),e._v("。")],1),e._v(" "),t("h3",{attrs:{id:"classic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classic"}},[e._v("#")]),e._v(" Classic")]),e._v(" "),t("p",[e._v("这种策略在以前是TypeScript默认的解析策略。 现在，它存在的理由主要是为了向后兼容。")]),e._v(" "),t("p",[e._v("相对导入的模块是相对于导入它的文件进行解析的。 因此"),t("code",[e._v("/root/src/folder/A.ts")]),e._v("文件里的"),t("code",[e._v('import { b } from "./moduleB"')]),e._v("会使用下面的查找流程：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("/root/src/folder/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/folder/moduleB.d.ts")])])]),e._v(" "),t("p",[e._v("对于非相对模块的导入，编译器则会从包含导入文件的目录开始依次向上级目录遍历，尝试定位匹配的声明文件。")]),e._v(" "),t("p",[e._v("比如：")]),e._v(" "),t("p",[e._v("有一个对"),t("code",[e._v("moduleB")]),e._v("的非相对导入"),t("code",[e._v('import { b } from "moduleB"')]),e._v("，它是在"),t("code",[e._v("/root/src/folder/A.ts")]),e._v("文件里，会以如下的方式来定位"),t("code",[e._v('"moduleB"')]),e._v("：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("/root/src/folder/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/folder/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/moduleB.d.ts")])])]),e._v(" "),t("h3",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),t("p",[e._v("这个解析策略试图在运行时模仿"),t("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),t("OutboundLink")],1),e._v("模块解析机制。 完整的Node.js解析算法可以在"),t("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_all_together",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js module documentation"),t("OutboundLink")],1),e._v("找到。")]),e._v(" "),t("h4",{attrs:{id:"node-js如何解析模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js如何解析模块"}},[e._v("#")]),e._v(" Node.js如何解析模块")]),e._v(" "),t("p",[e._v("为了理解TypeScript编译依照的解析步骤，先弄明白Node.js模块是非常重要的。 通常，在Node.js里导入是通过"),t("code",[e._v("require")]),e._v("函数调用进行的。 Node.js会根据"),t("code",[e._v("require")]),e._v("的是相对路径还是非相对路径做出不同的行为。")]),e._v(" "),t("p",[e._v("相对路径很简单。 例如，假设有一个文件路径为"),t("code",[e._v("/root/src/moduleA.js")]),e._v("，包含了一个导入"),t("code",[e._v('var x = require("./moduleB");')]),e._v(" Node.js以下面的顺序解析这个导入：")]),e._v(" "),t("ol",[t("li",[e._v("检查"),t("code",[e._v("/root/src/moduleB.js")]),e._v("文件是否存在。")]),e._v(" "),t("li",[e._v("检查"),t("code",[e._v("/root/src/moduleB")]),e._v("目录是否包含一个"),t("code",[e._v("package.json")]),e._v("文件，且"),t("code",[e._v("package.json")]),e._v("文件指定了一个"),t("code",[e._v('"main"')]),e._v("模块。 在我们的例子里，如果Node.js发现文件"),t("code",[e._v("/root/src/moduleB/package.json")]),e._v("包含了"),t("code",[e._v('{ "main": "lib/mainModule.js" }')]),e._v("，那么Node.js会引用"),t("code",[e._v("/root/src/moduleB/lib/mainModule.js")]),e._v("。")]),e._v(" "),t("li",[e._v("检查"),t("code",[e._v("/root/src/moduleB")]),e._v("目录是否包含一个"),t("code",[e._v("index.js")]),e._v('文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。')])]),e._v(" "),t("p",[e._v("你可以阅读Node.js文档了解更多详细信息："),t("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_file_modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("file modules"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_folders_as_modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("folder modules"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("但是，"),t("RouterLink",{attrs:{to:"/typescript/Basic/module-resolution.html#relative-vs-non-relative-module-imports"}},[e._v("非相对模块名")]),e._v("的解析是个完全不同的过程。 Node会在一个特殊的文件夹"),t("code",[e._v("node_modules")]),e._v("里查找你的模块。 "),t("code",[e._v("node_modules")]),e._v("可能与当前文件在同一级目录下，或者在上层目录里。 Node会向上级目录遍历，查找每个"),t("code",[e._v("node_modules")]),e._v("直到它找到要加载的模块。")],1),e._v(" "),t("p",[e._v("还是用上面例子，但假设"),t("code",[e._v("/root/src/moduleA.js")]),e._v("里使用的是非相对路径导入"),t("code",[e._v('var x = require("moduleB");')]),e._v("。 Node则会以下面的顺序去解析"),t("code",[e._v("moduleB")]),e._v("，直到有一个匹配上。")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("/root/src/node_modules/moduleB.js")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"main"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/index.js")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB.js")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"main"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/index.js")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB.js")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"main"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/index.js")])])]),e._v(" "),t("p",[e._v("注意Node.js在步骤（4）和（7）会向上跳一级目录。")]),e._v(" "),t("p",[e._v("你可以阅读Node.js文档了解更多详细信息："),t("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders",target:"_blank",rel:"noopener noreferrer"}},[e._v("loading modules from "),t("code",[e._v("node_modules")]),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"typescript如何解析模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript如何解析模块"}},[e._v("#")]),e._v(" TypeScript如何解析模块")]),e._v(" "),t("p",[e._v("TypeScript是模仿Node.js运行时的解析策略来在编译阶段定位模块定义文件。 因此，TypeScript在Node解析逻辑基础上增加了TypeScript源文件的扩展名（"),t("code",[e._v(".ts")]),e._v("，"),t("code",[e._v(".tsx")]),e._v("和"),t("code",[e._v(".d.ts")]),e._v("）。 同时，TypeScript在"),t("code",[e._v("package.json")]),e._v("里使用字段"),t("code",[e._v('"types"')]),e._v("来表示类似"),t("code",[e._v('"main"')]),e._v('的意义 - 编译器会使用它来找到要使用的"main"定义文件。')]),e._v(" "),t("p",[e._v("比如，有一个导入语句"),t("code",[e._v('import { b } from "./moduleB"')]),e._v("在"),t("code",[e._v("/root/src/moduleA.ts")]),e._v("里，会以下面的流程来定位"),t("code",[e._v('"./moduleB"')]),e._v("：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("/root/src/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"types"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB/index.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB/index.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/moduleB/index.d.ts")])])]),e._v(" "),t("p",[e._v("回想一下Node.js先查找"),t("code",[e._v("moduleB.js")]),e._v("文件，然后是合适的"),t("code",[e._v("package.json")]),e._v("，再之后是"),t("code",[e._v("index.js")]),e._v("。")]),e._v(" "),t("p",[e._v("类似地，非相对的导入会遵循Node.js的解析逻辑，首先查找文件，然后是合适的文件夹。 因此"),t("code",[e._v("/root/src/moduleA.ts")]),e._v("文件里的"),t("code",[e._v('import { b } from "moduleB"')]),e._v("会以下面的查找顺序解析：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("/root/src/node_modules/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"types"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/@types/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/index.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/index.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/src/node_modules/moduleB/index.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"types"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/@types/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/index.ts")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/index.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/root/node_modules/moduleB/index.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB.ts")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/package.json")]),e._v(" (如果指定了"),t("code",[e._v('"types"')]),e._v("属性)")]),e._v(" "),t("li",[t("code",[e._v("/node_modules/@types/moduleB.d.ts")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/index.ts")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/index.tsx")])]),e._v(" "),t("li",[t("code",[e._v("/node_modules/moduleB/index.d.ts")])])]),e._v(" "),t("p",[e._v("不要被这里步骤的数量吓到 - TypeScript只是在步骤（9）和（17）向上跳了两次目录。 这并不比Node.js里的流程复杂。")]),e._v(" "),t("h2",{attrs:{id:"附加的模块解析标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附加的模块解析标记"}},[e._v("#")]),e._v(" 附加的模块解析标记")]),e._v(" "),t("p",[e._v("有时工程源码结构与输出结构不同。 通常是要经过一系统的构建步骤最后生成输出。 它们包括将"),t("code",[e._v(".ts")]),e._v("编译成"),t("code",[e._v(".js")]),e._v("，将不同位置的依赖拷贝至一个输出位置。 最终结果就是运行时的模块名与包含它们声明的源文件里的模块名不同。 或者最终输出文件里的模块路径与编译时的源文件路径不同了。")]),e._v(" "),t("p",[e._v("TypeScript编译器有一些额外的标记用来_通知_编译器在源码编译成最终输出的过程中都发生了哪个转换。")]),e._v(" "),t("p",[e._v("有一点要特别注意的是编译器_不会_进行这些转换操作； 它只是利用这些信息来指导模块的导入。")]),e._v(" "),t("h3",{attrs:{id:"base-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[e._v("#")]),e._v(" Base URL")]),e._v(" "),t("p",[e._v("在利用AMD模块加载器的应用里使用"),t("code",[e._v("baseUrl")]),e._v("是常见做法，它要求在运行时模块都被放到了一个文件夹里。 这些模块的源码可以在不同的目录下，但是构建脚本会将它们集中到一起。")]),e._v(" "),t("p",[e._v("设置"),t("code",[e._v("baseUrl")]),e._v("来告诉编译器到哪里去查找模块。 所有非相对模块导入都会被当做相对于"),t("code",[e._v("baseUrl")]),e._v("。")]),e._v(" "),t("p",[e._v("_baseUrl_的值由以下两者之一决定：")]),e._v(" "),t("ul",[t("li",[e._v("命令行中_baseUrl_的值（如果给定的路径是相对的，那么将相对于当前路径进行计算）")]),e._v(" "),t("li",[e._v("‘tsconfig.json’里的_baseUrl_属性（如果给定的路径是相对的，那么将相对于‘tsconfig.json’路径进行计算）")])]),e._v(" "),t("p",[e._v("注意相对模块的导入不会被设置的"),t("code",[e._v("baseUrl")]),e._v("所影响，因为它们总是相对于导入它们的文件。")]),e._v(" "),t("p",[e._v("阅读更多关于"),t("code",[e._v("baseUrl")]),e._v("的信息"),t("a",{attrs:{href:"http://requirejs.org/docs/api.html#config-baseUrl",target:"_blank",rel:"noopener noreferrer"}},[e._v("RequireJS"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#baseurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SystemJS"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"路径映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径映射"}},[e._v("#")]),e._v(" 路径映射")]),e._v(" "),t("p",[e._v("有时模块不是直接放在_baseUrl_下面。 比如，充分"),t("code",[e._v('"jquery"')]),e._v("模块地导入，在运行时可能被解释为"),t("code",[e._v('"node_modules/jquery/dist/jquery.slim.min.js"')]),e._v("。 加载器使用映射配置来将模块名映射到运行时的文件，查看"),t("a",{attrs:{href:"http://requirejs.org/docs/api.html#config-paths",target:"_blank",rel:"noopener noreferrer"}},[e._v("RequireJs documentation"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#paths",target:"_blank",rel:"noopener noreferrer"}},[e._v("SystemJS documentation"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("TypeScript编译器通过使用"),t("code",[e._v("tsconfig.json")]),e._v("文件里的"),t("code",[e._v('"paths"')]),e._v("来支持这样的声明映射。 下面是一个如何指定"),t("code",[e._v("jquery")]),e._v("的"),t("code",[e._v('"paths"')]),e._v("的例子。")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"baseUrl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// This must be specified if "paths" is.')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"paths"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jquery"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"node_modules/jquery/dist/jquery"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// 此处映射是相对于"baseUrl"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("请注意"),t("code",[e._v('"paths"')]),e._v("是相对于"),t("code",[e._v('"baseUrl"')]),e._v("进行解析。 如果"),t("code",[e._v('"baseUrl"')]),e._v("被设置成了除"),t("code",[e._v('"."')]),e._v("外的其它值，比如"),t("code",[e._v("tsconfig.json")]),e._v("所在的目录，那么映射必须要做相应的改变。 如果你在上例中设置了"),t("code",[e._v('"baseUrl": "./src"')]),e._v("，那么jquery应该映射到"),t("code",[e._v('"../node_modules/jquery/dist/jquery"')]),e._v("。")]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v('"paths"')]),e._v("我们还可以指定复杂的映射，包括指定多个回退位置。 假设在一个工程配置里，有一些模块位于一处，而其它的则在另个的位置。 构建过程会将它们集中至一处。 工程结构可能如下：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("projectRoot\n├── folder1\n│   ├── file1.ts (imports 'folder1/file2' and 'folder2/file3')\n│   └── file2.ts\n├── generated\n│   ├── folder1\n│   └── folder2\n│       └── file3.ts\n└── tsconfig.json\n")])])]),t("p",[e._v("相应的"),t("code",[e._v("tsconfig.json")]),e._v("文件如下：")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"baseUrl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"paths"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"generated/*"')]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("它告诉编译器所有匹配"),t("code",[e._v('"*"')]),e._v("（所有的值）模式的模块导入会在以下两个位置查找：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v('"*"')]),e._v("： 表示名字不发生改变，所以映射为"),t("code",[e._v("<moduleName>")]),e._v(" => "),t("code",[e._v("<baseUrl>/<moduleName>")])]),e._v(" "),t("li",[t("code",[e._v('"generated/*"')]),e._v("表示模块名添加了“generated”前缀，所以映射为"),t("code",[e._v("<moduleName>")]),e._v(" => "),t("code",[e._v("<baseUrl>/generated/<moduleName>")])])]),e._v(" "),t("p",[e._v("按照这个逻辑，编译器将会如下尝试解析这两个导入：")]),e._v(" "),t("ul",[t("li",[e._v("导入'folder1/file2'\n"),t("ol",[t("li",[e._v("匹配'*'模式且通配符捕获到整个名字。")]),e._v(" "),t("li",[e._v("尝试列表里的第一个替换：'*' -> "),t("code",[e._v("folder1/file2")]),e._v("。")]),e._v(" "),t("li",[e._v("替换结果为非相对名 - 与_baseUrl_合并 -> "),t("code",[e._v("projectRoot/folder1/file2.ts")]),e._v("。")]),e._v(" "),t("li",[e._v("文件存在。完成。")])])]),e._v(" "),t("li",[e._v("导入'folder2/file3'\n"),t("ol",[t("li",[e._v("匹配'*'模式且通配符捕获到整个名字。")]),e._v(" "),t("li",[e._v("尝试列表里的第一个替换：'*' -> "),t("code",[e._v("folder2/file3")]),e._v("。")]),e._v(" "),t("li",[e._v("替换结果为非相对名 - 与_baseUrl_合并 -> "),t("code",[e._v("projectRoot/folder2/file3.ts")]),e._v("。")]),e._v(" "),t("li",[e._v("文件不存在，跳到第二个替换。")]),e._v(" "),t("li",[e._v("第二个替换：'generated/*' -> "),t("code",[e._v("generated/folder2/file3")]),e._v("。")]),e._v(" "),t("li",[e._v("替换结果为非相对名 - 与_baseUrl_合并 -> "),t("code",[e._v("projectRoot/generated/folder2/file3.ts")]),e._v("。")]),e._v(" "),t("li",[e._v("文件存在。完成。")])])])]),e._v(" "),t("h3",{attrs:{id:"利用rootdirs指定虚拟目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用rootdirs指定虚拟目录"}},[e._v("#")]),e._v(" 利用"),t("code",[e._v("rootDirs")]),e._v("指定虚拟目录")]),e._v(" "),t("p",[e._v("有时多个目录下的工程源文件在编译时会进行合并放在某个输出目录下。 这可以看做一些源目录创建了一个“虚拟”目录。")]),e._v(" "),t("p",[e._v("利用"),t("code",[e._v("rootDirs")]),e._v("，可以告诉编译器生成这个虚拟目录的_roots_； 因此编译器可以在“虚拟”目录下解析相对模块导入，就_好像_它们被合并在了一起一样。")]),e._v(" "),t("p",[e._v("比如，有下面的工程结构：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" src\n └── views\n     └── view1.ts (imports './template1')\n     └── view2.ts\n\n generated\n └── templates\n         └── views\n             └── template1.ts (imports './view2')\n")])])]),t("p",[t("code",[e._v("src/views")]),e._v("里的文件是用于控制UI的用户代码。 "),t("code",[e._v("generated/templates")]),e._v("是UI模版，在构建时通过模版生成器自动生成。 构建中的一步会将"),t("code",[e._v("/src/views")]),e._v("和"),t("code",[e._v("/generated/templates/views")]),e._v("的输出拷贝到同一个目录下。 在运行时，视图可以假设它的模版与它同在一个目录下，因此可以使用相对导入"),t("code",[e._v('"./template"')]),e._v("。")]),e._v(" "),t("p",[e._v("可以使用"),t("code",[e._v('"rootDirs"')]),e._v("来告诉编译器。 "),t("code",[e._v('"rootDirs"')]),e._v("指定了一个_roots_列表，列表里的内容会在运行时被合并。 因此，针对这个例子，"),t("code",[e._v("tsconfig.json")]),e._v("如下：")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rootDirs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/views"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"generated/templates/views"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("每当编译器在某一"),t("code",[e._v("rootDirs")]),e._v("的子目录下发现了相对模块导入，它就会尝试从每一个"),t("code",[e._v("rootDirs")]),e._v("中导入。")]),e._v(" "),t("p",[t("code",[e._v("rootDirs")]),e._v("的灵活性不仅仅局限于其指定了要在逻辑上合并的物理目录列表。它提供的数组可以包含任意数量的任何名字的目录，不论它们是否存在。这允许编译器以类型安全的方式处理复杂捆绑(bundles)和运行时的特性，比如条件引入和工程特定的加载器插件。")]),e._v(" "),t("p",[e._v("设想这样一个国际化的场景，构建工具自动插入特定的路径记号来生成针对不同区域的捆绑，比如将"),t("code",[e._v("#{locale}")]),e._v("做为相对模块路径"),t("code",[e._v("./#{locale}/messages")]),e._v("的一部分。在这个假定的设置下，工具会枚举支持的区域，将抽像的路径映射成"),t("code",[e._v("./zh/messages")]),e._v("，"),t("code",[e._v("./de/messages")]),e._v("等。")]),e._v(" "),t("p",[e._v("假设每个模块都会导出一个字符串的数组。比如"),t("code",[e._v("./zh/messages")]),e._v("可能包含：")]),e._v(" "),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"您好吗"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"很高兴认识你"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("利用"),t("code",[e._v("rootDirs")]),e._v("我们可以让编译器了解这个映射关系，从而也允许编译器能够安全地解析"),t("code",[e._v("./#{locale}/messages")]),e._v("，就算这个目录永远都不存在。比如，使用下面的"),t("code",[e._v("tsconfig.json")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rootDirs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/zh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/de"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"src/#{locale}"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("编译器现在可以将"),t("code",[e._v("import messages from './#{locale}/messages'")]),e._v("解析为"),t("code",[e._v("import messages from './zh/messages'")]),e._v("用做工具支持的目的，并允许在开发时不必了解区域信息。")]),e._v(" "),t("h2",{attrs:{id:"跟踪模块解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟踪模块解析"}},[e._v("#")]),e._v(" 跟踪模块解析")]),e._v(" "),t("p",[e._v("如之前讨论，编译器在解析模块时可能访问当前文件夹外的文件。 这会导致很难诊断模块为什么没有被解析，或解析到了错误的位置。 通过"),t("code",[e._v("--traceResolution")]),e._v("启用编译器的模块解析跟踪，它会告诉我们在模块解析过程中发生了什么。")]),e._v(" "),t("p",[e._v("假设我们有一个使用了"),t("code",[e._v("typescript")]),e._v("模块的简单应用。 "),t("code",[e._v("app.ts")]),e._v("里有一个这样的导入"),t("code",[e._v('import * as ts from "typescript"')]),e._v("。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("│   tsconfig.json\n├───node_modules\n│   └───typescript\n│       └───lib\n│               typescript.d.ts\n└───src\n        app.ts\n")])])]),t("p",[e._v("使用"),t("code",[e._v("--traceResolution")]),e._v("调用编译器。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("tsc --traceResolution\n")])])]),t("p",[e._v("输出结果如下：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("======== Resolving module 'typescript' from 'src/app.ts'. ========\nModule resolution kind is not specified, using 'NodeJs'.\nLoading module 'typescript' from 'node_modules' folder.\nFile 'src/node_modules/typescript.ts' does not exist.\nFile 'src/node_modules/typescript.tsx' does not exist.\nFile 'src/node_modules/typescript.d.ts' does not exist.\nFile 'src/node_modules/typescript/package.json' does not exist.\nFile 'node_modules/typescript.ts' does not exist.\nFile 'node_modules/typescript.tsx' does not exist.\nFile 'node_modules/typescript.d.ts' does not exist.\nFound 'package.json' at 'node_modules/typescript/package.json'.\n'package.json' has 'types' field './lib/typescript.d.ts' that references 'node_modules/typescript/lib/typescript.d.ts'.\nFile 'node_modules/typescript/lib/typescript.d.ts' exist - use it as a module resolution result.\n======== Module name 'typescript' was successfully resolved to 'node_modules/typescript/lib/typescript.d.ts'. ========\n")])])]),t("h4",{attrs:{id:"需要留意的地方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要留意的地方"}},[e._v("#")]),e._v(" 需要留意的地方")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("导入的名字及位置")]),e._v(" "),t("blockquote",[t("p",[e._v("======== Resolving module "),t("strong",[e._v("'typescript'")]),e._v(" from "),t("strong",[e._v("'src/app.ts'")]),e._v(". ========")])])]),e._v(" "),t("li",[t("p",[e._v("编译器使用的策略")]),e._v(" "),t("blockquote",[t("p",[e._v("Module resolution kind is not specified, using "),t("strong",[e._v("'NodeJs'")]),e._v(".")])])]),e._v(" "),t("li",[t("p",[e._v("从npm加载types")]),e._v(" "),t("blockquote",[t("p",[e._v("'package.json' has "),t("strong",[e._v("'types'")]),e._v(" field './lib/typescript.d.ts' that references 'node_modules/typescript/lib/typescript.d.ts'.")])])]),e._v(" "),t("li",[t("p",[e._v("最终结果")]),e._v(" "),t("blockquote",[t("p",[e._v("======== Module name 'typescript' was "),t("strong",[e._v("successfully resolved")]),e._v(" to 'node_modules/typescript/lib/typescript.d.ts'. ========")])])])]),e._v(" "),t("h2",{attrs:{id:"使用-noresolve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-noresolve"}},[e._v("#")]),e._v(" 使用"),t("code",[e._v("--noResolve")])]),e._v(" "),t("p",[e._v("正常来讲编译器会在开始编译之前解析模块导入。 每当它成功地解析了对一个文件"),t("code",[e._v("import")]),e._v("，这个文件被会加到一个文件列表里，以供编译器稍后处理。")]),e._v(" "),t("p",[t("code",[e._v("--noResolve")]),e._v("编译选项告诉编译器不要添加任何不是在命令行上传入的文件到编译列表。 编译器仍然会尝试解析模块，但是只要没有指定这个文件，那么它就不会被包含在内。")]),e._v(" "),t("p",[e._v("比如")]),e._v(" "),t("h4",{attrs:{id:"app-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-ts"}},[e._v("#")]),e._v(" app.ts")]),e._v(" "),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"moduleA"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// OK, moduleA passed on the command-line")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"moduleB"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Error TS2307: Cannot find module 'moduleB'.")]),e._v("\n")])])]),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("tsc app.ts moduleA.ts --noResolve\n")])])]),t("p",[e._v("使用"),t("code",[e._v("--noResolve")]),e._v("编译"),t("code",[e._v("app.ts")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("可能正确找到"),t("code",[e._v("moduleA")]),e._v("，因为它在命令行上指定了。")]),e._v(" "),t("li",[e._v("找不到"),t("code",[e._v("moduleB")]),e._v("，因为没有在命令行上传递。")])]),e._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),t("h3",{attrs:{id:"为什么在exclude列表里的模块还会被编译器使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么在exclude列表里的模块还会被编译器使用"}},[e._v("#")]),e._v(" 为什么在"),t("code",[e._v("exclude")]),e._v("列表里的模块还会被编译器使用")]),e._v(" "),t("p",[t("code",[e._v("tsconfig.json")]),e._v("将文件夹转变一个“工程” 如果不指定任何"),t("code",[e._v("“exclude”")]),e._v("或"),t("code",[e._v("“files”")]),e._v("，文件夹里的所有文件包括"),t("code",[e._v("tsconfig.json")]),e._v("和所有的子目录都会在编译列表里。 如果你想利用"),t("code",[e._v("“exclude”")]),e._v("排除某些文件，甚至你想指定所有要编译的文件列表，请使用"),t("code",[e._v("“files”")]),e._v("。")]),e._v(" "),t("p",[e._v("有些是被"),t("code",[e._v("tsconfig.json")]),e._v("自动加入的。 它不会涉及到上面讨论的模块解析。 如果编译器识别出一个文件是模块导入目标，它就会加到编译列表里，不管它是否被排除了。")]),e._v(" "),t("p",[e._v("因此，要从编译列表中排除一个文件，你需要在排除它的同时，还要排除所有对它进行"),t("code",[e._v("import")]),e._v("或使用了"),t("code",[e._v('/// <reference path="..." />')]),e._v("指令的文件。")])])}),[],!1,null,null,null);s.default=_.exports}}]);