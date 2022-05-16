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
	{
		path: '/stomachca-add',
		name: 'stomachca_add',
		component: () => import('../views/stomach_ca/add.vue')
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
	
	// 间质瘤
	{
		path: '/stromal-tumor-index',
		name: 'stromal_tumor_index',
		component: () => import('../views/stromal_tumor/index.vue')
	},
	{
		path: '/stromal-tumor-add',
		name: 'stromal_tumor_add',
		component: () => import('../views/stromal_tumor/add.vue')
	},
	
	// 间质瘤 随访
	{
		path: '/stromal-tumor-follow-up-index',
		name: 'stromal_tumor_follow_up_index',
		component: () => import('../views/stromal_tumor_follow_up/index.vue')
	},
	{
		path: '/stromal-tumor-follow-up-add',
		name: 'stromal_tumor_follow_up_add',
		component: () => import('../views/stromal_tumor_follow_up/add.vue')
	},
	
	// 直肠癌
	{
		path: '/colorectal-cancer-index',
		name: 'colorectal_cancer_index',
		component: () => import('../views/colorectal_cancer/index.vue')
	},
	{
		path: '/colorectal-cancer-add',
		name: 'colorectal_cancer_add',
		component: () => import('../views/colorectal_cancer/add.vue')
	},
	
	// 直肠癌 随访
	{
		path: '/colorectal-cancer-follow-up-index',
		name: 'colorectal_cancer_follow_up_index',
		component: () => import('../views/colorectal_cancer_follow_up/index.vue')
	},
	{
		path: '/colorectal-cancer-follow-up-add',
		name: 'colorectal_cancer_follow_up_add',
		component: () => import('../views/colorectal_cancer_follow_up/add.vue')
	},
	
	// 减重
	{
		path: '/weight-loss-index',
		name: 'weight_loss_index',
		component: () => import('../views/weight_loss/index.vue')
	},
	{
		path: '/weight-loss-add',
		name: 'weight_loss_add',
		component: () => import('../views/weight_loss/add.vue')
	},
	
	// 减重 随访
	{
		path: '/weight-loss-follow-up-index',
		name: 'weight_loss_follow_up_index',
		component: () => import('../views/weight_loss_follow_up/index.vue')
	},
	{
		path: '/weight-loss-follow-up-add',
		name: 'weight_loss_follow_up_add',
		component: () => import('../views/weight_loss_follow_up/add.vue')
	},
  ]
})

export default router