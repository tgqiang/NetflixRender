/*
 TODOS:
 1. users:
 - Define UsersLayout.vue (done)
 - Define Users.vue (done)
 - Define User.vue (done)

 2. home:
 - Define HomeLayout.vue (WIP)

 3. Styling
 - Define stylings for 'users'
 - Define stylings for 'home'
 */

const routes = [
  /*
   * For non-lazy-loading version:
   * 1. import <page_module> from 'pages/<page>'
   * 2. component: <page_module>
   * --> Modify the `component` property to use an object instead of a function
   */
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/users',
    component: () => import('layouts/UsersLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') }
    ]
  },
  /*
  {
    path: '/home',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') }
    ]
  },
  */
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
