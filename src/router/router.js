import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // 动态路由
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名路由(需要结合路由中的name，可以在router-link中:to='{ name: "parameter" }',也可以在$router.push({name: 'parameter'}))
  {
    path: '/parameter',
    name: 'parameter',
    component: () => import('@/views/parameter.vue')
  },
  // 命名试图(同级展示比如siderbar 和 页面)
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parameter.vue'),
      named_view1: () => import('@/views/named_view1.vue'),
      named_view2: () => import('@/views/named_view2.vue')
    }
  },
  // 重定向（1.字符串形式 2.方法形式）
  {
    path: '/log',
    redirect: '/about'
  },
  {
    path: '/log1',
    redirect: () => {
      return '/about'
    }
  },
  {
    path: '/log2',
    redirect: () => {
      return {
        name: 'parameter'
      }
    }
  },
  {
    path: '/log3',
    redirect: () => '/about'
  },
  // 别名
  {
    path: '/alias',
    alias: '/alias_name',
    component: () => import('@/views/alias.vue')
  },
  {
    path: '/form',
    component: () => import('@/views/form.vue')
  }
]
