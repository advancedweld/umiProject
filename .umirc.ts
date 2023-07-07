import { defineConfig } from 'umi'
import path from 'path'

export default defineConfig({
  title: '浙大未来实验室数智平台',
  plugins: [
    '@umijs/plugins/dist/react-query',
    // '@umijs/plugins/dist/request',
    // '@umijs/plugins/dist/useRequest',
  ],
  reactQuery: {},
  routes: [
    { path: '/', redirect: '/home' },

    // { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    /* 设置 layout: false  页面不嵌入到layout  */
    { path: '/home', component: 'home/index' },
    { path: '/*', component: '@/pages/404', layout: false },
  ],
  /* 别名配置 */
  alias: {
    store: path.join(__dirname, './src/store'),
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': 'my-path' },
    },
  },
  npmClient: 'pnpm',
})

// antd: {
//   // configProvider
//   configProvider: {},
//   // themes
//   dark: true,
//   compact: true,
//   // babel-plugin-import
//   import: true,
//   // less or css, default less
//   style: 'less',
//   // shortcut of `configProvider.theme`
//   // use to configure theme token, antd v5 only
//   theme: {},
//   // antd <App /> valid for version 5.1.0 or higher, default: undefined
//   appConfig: {},
//   // Transform DayJS to MomentJS
//   momentPicker: true,
//   // Add StyleProvider for legacy browsers
//   styleProvider: {
//     hashPriority: 'high',
//     legacyTransformer: true,
//   },
// },
