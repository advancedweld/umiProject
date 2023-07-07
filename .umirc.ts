import { defineConfig } from 'umi'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
    /* 设置 layout: false  页面不嵌入到layout  */
    { path: '/home', component: 'home/index', layout: false },
    { path: '/*', component: '@/pages/404', layout: false },
  ],
  /* 别名配置 */
  alias: {
    foo: '/src/pages',
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': 'my-path' },
    },
  },
  title: '浙大未来实验室数智平台',
  npmClient: 'pnpm',
})
