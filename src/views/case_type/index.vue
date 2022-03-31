<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增病例</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="name" label="类型名" />
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>
</template>

<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		useRouter,
		useRoute
	} from 'vue-router'

	export default {
		name: 'admin-list',
		setup() {
			const value1 = ref(true)
			const router = useRouter()
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getAdminList()
			})
			// 获取admin列表
			const getAdminList = () => {
				state.loading = true
				axios.get('/api/back/caseTypes', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize
					}
				}).then(res => {
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = false
				})
			}

			const changePage = (val) => {
				state.currentPage = val
				getAdminList()
			}

			const handleAdd = () => {
				router.push({
					path: '/case-type-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/case-type-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/case-type-preview',
					query: {
						id
					}
				})
			}

			return {
				...toRefs(state),
				changePage,
				handleAdd,
				handleEdit,
				Plus,
			}
		}
	}
</script>

<style>
</style>
