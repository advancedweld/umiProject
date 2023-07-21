import { defineConfig } from 'umi'
import path from 'path'

export default defineConfig({
  title: '浙大未来实验室数智平台',
  plugins: [
    '@umijs/plugins/dist/react-query',
    // '@umijs/plugins/dist/request',
    // '@umijs/plugins/dist/useRequest',
  ],
  reactQuery: {
    devtool: false,
  },
  routes: [
    { path: '/', redirect: '/home' },
    /* 设置 layout: false  页面不嵌入到layout  */
    { path: '/home', component: 'home/index' },
    { path: '/about', component: 'about/index' },
    { path: '/news', component: 'news/index' },
    { path: '/news-detail/:newsId', component: 'news-detail/index' },
    { path: '/data-cluster', component: 'data-cluster/index' },
    { path: '/intelligent-app', component: 'intelligent-app/index' },
    { path: '/*', component: '@/pages/404' },
  ],
  /* 别名配置 */
  alias: {
    store: path.join(__dirname, './src/store'),
  },
  proxy: {
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com/',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api': '/my-path' },
    // },
  },
  npmClient: 'pnpm',
})
