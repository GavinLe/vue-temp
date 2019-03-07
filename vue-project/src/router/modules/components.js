/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  name: 'ComponentDemo',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    // {
    //   path: 'markdown',
    //   component: () => import('@/views/demo/components/markdown'),
    //   name: 'MarkdownDemo',
    //   meta: { title: 'markdown' }
    // }
  ]
}

export default componentsRouter
