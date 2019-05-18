import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/organization',
    component: Layout,
    redirect: '/organization/list',
    name: 'Organization',
    meta: {
      title: 'organization',
      icon: 'international'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/organization/create'),
        name: 'CreateOrganization',
        meta: { title: 'createOrganization', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/organization/edit'),
        name: 'EditOrganization',
        meta: { title: 'editOrganization', noCache: true, activeMenu: '/organization/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/organization/list'),
        name: 'OrganizationList',
        meta: { title: 'organizationList', icon: 'list' }
      }
    ]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project/list',
    name: 'project',
    meta: {
      title: 'project',
      icon: 'news'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/project/create'),
        name: 'CreateProject',
        meta: { title: 'createProject', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/project/edit'),
        name: 'EditProject',
        meta: { title: 'editProject', noCache: true, activeMenu: '/project/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/project/list'),
        name: 'ProjectList',
        meta: { title: 'projectList', icon: 'list' }
      }
    ]
  },

  {
    path: '/interface',
    component: Layout,
    redirect: '/interface/list',
    name: 'Interface',
    meta: {
      title: 'interface',
      icon: 'news'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/interface/create'),
        name: 'CreateInterface',
        meta: { title: 'createInterface', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/interface/edit'),
        name: 'EditInterface',
        meta: { title: 'editInterface', noCache: true, activeMenu: '/interface/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/interface/list'),
        name: 'InterfaceList',
        meta: { title: 'interfaceList', icon: 'list' }
      }
    ]
  },

  {
    path: '/ppage',
    component: Layout,
    redirect: '/ppage/list',
    name: 'Ppage',
    meta: {
      title: 'ppage',
      icon: 'document'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/ppage/create'),
        name: 'CreatePpage',
        meta: { title: 'createPpage', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/ppage/edit'),
        name: 'EditPpage',
        meta: { title: 'editPpage', noCache: true, activeMenu: '/ppage/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/ppage/list'),
        name: 'PpageList',
        meta: { title: 'ppageList', icon: 'list' }
      }
    ]
  },

  {
    path: '/stream',
    component: Layout,
    redirect: '/stream/list',
    name: 'Stream',
    meta: {
      title: 'stream',
      icon: 'eye-open'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/stream/create'),
        name: 'CreateStream',
        meta: { title: 'createStream', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/stream/edit'),
        name: 'EditStream',
        meta: { title: 'editStream', noCache: true, activeMenu: '/stream/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/stream/list'),
        name: 'StreamList',
        meta: { title: 'streamList', icon: 'list' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/list',
    name: 'Setting',
    meta: {
      title: 'setting',
      icon: 'setting'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/setting/create'),
        name: 'CreateSetting',
        meta: { title: 'createSetting', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/setting/edit'),
        name: 'EditSetting',
        meta: { title: 'editSetting', noCache: true, activeMenu: '/setting/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/setting/list'),
        name: 'SettingList',
        meta: { title: 'settingList', icon: 'list' }
      }
    ]
  },

  {
    path: '/role',
    component: Layout,
    redirect: '/role/list',
    name: 'Role',
    meta: {
      title: 'role',
      icon: 'peoples'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/role/create'),
        name: 'CreateRole',
        meta: { title: 'createRole', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/role/edit'),
        name: 'EditRole',
        meta: { title: 'editRole', noCache: true, activeMenu: '/role/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/role/list'),
        name: 'RoleList',
        meta: { title: 'roleList', icon: 'list' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'User',
    meta: {
      title: 'user',
      icon: 'people'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/user/create'),
        name: 'CreateUser',
        meta: { title: 'createInterfac', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/user/edit'),
        name: 'EditUser',
        meta: { title: 'editUser', noCache: true, activeMenu: '/user/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/user/list'),
        name: 'UserList',
        meta: { title: 'userList', icon: 'list' }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
