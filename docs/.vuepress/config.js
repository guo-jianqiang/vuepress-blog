module.exports = {
  title: 'a litter bug blog',
  description: 'Just playing around',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'github', link: 'https://github.com/vuejs/vuepress' },
    ],
    sidebar: [
      {
        title: 'Typescript入门',   // 必要的
        // path: '/typescript',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '介绍',   // 必要的
            path: '/typescript/Introduction/',    // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/typescript/Introduction/what-is-typescript.md',
              '/typescript/Introduction/get-typescript.md',
              '/typescript/Introduction/hello-typescript.md'
            ]
          },
          {
            title: '基础',   // 必要的
            path: '/typescript/Basic/',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/typescript/Basic/basic-type.md',
              '/typescript/Basic/variable-declaration.md',
              '/typescript/Basic/interfaces.md',
              '/typescript/Basic/classes.md',
              '/typescript/Basic/functions.md',
              '/typescript/Basic/literal-types.md',
              '/typescript/Basic/generics.md',
              '/typescript/Basic/enums.md',
              '/typescript/Basic/type-inference.md',
              '/typescript/Basic/type-compatibility.md',
              '/typescript/Basic/advanced-types.md',
              '/typescript/Basic/symbols.md',
              '/typescript/Basic/iterators-and-generators.md',
              '/typescript/Basic/modules.md',
              '/typescript/Basic/namespaces.md',
              '/typescript/Basic/namespaces-and-modules.md',
              '/typescript/Basic/module-resolution.md',
              '/typescript/Basic/declaration-merging.md',
              '/typescript/Basic/jsx.md',
              '/typescript/Basic/decorators.md',
              '/typescript/Basic/mixins.md',
              '/typescript/Basic/triple-slash-directives.md',
              '/typescript/Basic/type-checking-javascript-files.md'
            ]
          },
          {
            title: '工程配置',   // 必要的
            path: '/typescript/tsconfig.json/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/typescript/tsconfig.json/tsconfig.json.md',
              '/typescript/tsconfig.json/project-references.md',
              '/typescript/tsconfig.json/typings-for-npm-packages.md',
              '/typescript/tsconfig.json/compiler-options.md',
              '/typescript/tsconfig.json/configuring-watch.md',
              '/typescript/tsconfig.json/compiler-options-in-msbuild.md',
              '/typescript/tsconfig.json/integrating-with-build-tools.md',
              '/typescript/tsconfig.json/nightly-builds.md'
            ]
          },
          {
            title: 'react-typescript',
            path: '/typescript/typescript-react/',
            sidebarDepth: 2,
          }
        ]
      }
    ]
  }
}