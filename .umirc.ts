import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
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
