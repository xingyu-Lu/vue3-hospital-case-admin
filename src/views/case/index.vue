<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增病例</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="name" label="姓名" />
			<el-table-column prop="age" label="年龄" />
			<el-table-column prop="sex" label="性别">
				<template #default="scope">
					<span v-if="scope.row.sex == 0">男</span>
					<span v-else="scope.row.sex == 1">女</span>
				</template>
			</el-table-column>
			<el-table-column prop="abstract" label="病史摘要" />
			<el-table-column prop="type" label="病例类型" />
			<el-table-column prop="part" label="病例部位" />
			<el-table-column prop="diagnosis" label="临床诊断" />
			<el-table-column prop="diagnosis_result" label="诊断结果" />
			<el-table-column prop="general_seen" label="大体所见" />
			<el-table-column label="图片">
				<template #default="scope">
					<el-image v-if="scope.row.img_url" :key="scope.row.id" :src="scope.row.img_url" :lazy="true" :initial-index="1">
					</el-image>
					<span v-else>无</span>
				</template>
			</el-table-column>
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<!-- <el-switch :v-model="scope.row.status == 1 ? ture : false" active-value="1" inactive-value="0" /> -->
					<span style="color: #67C23A;" v-if="scope.row.status == 1">正常</span>
					<span style="color: #E6A23C;" v-else>弃用</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handlePreview(scope.row.id)">预览</a>
					<a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.id)">修改</a>
					<a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">弃用</a>
					<a style="cursor: pointer; margin-right: 10px" v-else @click="handleStatus(scope.row.id, 1)">启用</a>
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
				axios.get('/api/back/cases', {
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
					path: '/case-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/case-add',
					query: {
						id
					}
				})
			}
			
			const handlePreview = (id) => {
				router.push({
					path: '/case-preview',
					query: {
						id
					}
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/back/cases/status', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('修改成功')
					getAdminList()
				})
			}

			return {
				...toRefs(state),
				changePage,
				handleAdd,
				handleEdit,
				handlePreview,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style>
</style>
