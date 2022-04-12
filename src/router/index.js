import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
    {
      path: '/',
      redirect: '/introduce'
    },
	// dashboard
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import('../views/Introduce.vue')
    },
	// 系统管理
	{
		path: '/admin',
		name: 'admin',
		component: () => import('../views/admin/index.vue')
	},
	{
		path: '/admin-add',
		name: 'admin_add',
		component: () => import('../views/admin/add.vue')
	},
	{
		path: '/admin-changepwd',
		name: 'change_pwd',
		component: () => import('../views/admin/changepwd.vue')
	},
	{
		path: '/menu',
		name: 'menu',
		component: () => import('../views/menu/index.vue')
	},
	{
		path: '/menu-add',
		name: 'menu_add',
		component: () => import('../views/menu/add.vue')
	},
	// 角色管理
	{
		path: '/role',
		name: 'role',
		component: () => import('../views/role/index.vue'),
	},
	{
		path: '/role-add',
		name: 'role_add',
		component: () => import('../views/role/add.vue'),
	},
	// 更新记录
	{
		path: '/update_log',
		name: 'update_log',
		component: () => import('../views/update_log.vue')
	},
	
	// 病例管理
	{
		path: '/case-index',
		name: 'case_index',
		component: () => import('../views/case/index.vue')
	},
	{
		path: '/case-add',
		name: 'case_add',
		component: () => import('../views/case/add.vue')
	},
	{
		path: '/case-preview',
		name: 'case_preview',
		component: () => import('../views/case/preview.vue')
	},
	
	// 病例类型
	{
		path: '/case-type-index',
		name: 'case_type_index',
		component: () => import('../views/case_type/index.vue')
	},
	{
		path: '/case-type-add',
		name: 'case_type_add',
		component: () => import('../views/case_type/add.vue')
	},
	
	// 胃ca
	{
		path: '/stomachca-index',
		name: 'stomachca_index',
		component: () => import('../views/stomach_ca/index.vue')
	},
	
	// 胃ca 随访
	{
		path: '/stomachca-follow-up-index',
		name: 'stomachca_follow_up_index',
		component: () => import('../views/stomach_ca_follow_up/index.vue')
	},
	{
		path: '/stomachca-follow-up-add',
		name: 'stomachca_follow_up_add',
		component: () => import('../views/stomach_ca_follow_up/add.vue')
	},
  ]
})

export default router