<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<!-- <div class="header"> -->
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增病例</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="hospital_number" label="住院号" />
			<el-table-column prop="name" label="姓名" />
			<el-table-column prop="age" label="年龄" />
			<el-table-column prop="sex" label="性别">
				<template #default="scope">
					<span v-if="scope.row.sex == 1">男</span>
					<span v-else="scope.row.sex == 2">女</span>
				</template>
			</el-table-column>
			<el-table-column prop="national" label="民族" />
			<el-table-column prop="id_card" label="身份证号" />
			<el-table-column prop="mobile" label="患者联系电话" />
			<el-table-column prop="total_money" label="住院总费用" />
			<el-table-column prop="family_contact" label="家属联系方式" />
			<el-table-column prop="admission_time" label="入院日期">
				<template #default="scope">
					<span v-if="scope.row.admission_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.admission_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="operative_time" label="手术日期">
				<template #default="scope">
					<span v-if="scope.row.operative_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.operative_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="discharge_time" label="出院日期">
				<template #default="scope">
					<span v-if="scope.row.discharge_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.discharge_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="total_hospital_days" label="总住院天数" />
			<el-table-column prop="postoperation_hospital_days" label="术后住院天数" />
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="100">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px" @click="handleFollowUp(scope.row.id)">随访</a>
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
				getStomachCaList()
			})
			// 获取admin列表
			const getStomachCaList = () => {
				state.loading = true
				axios.get('/api/back/stomachCas', {
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
				getStomachCaList()
			}

			const handleAdd = () => {
				router.push({
					path: '/stomachca-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/stomachca-add',
					query: {
						id
					}
				})
			}
			
			const handleFollowUp = (id) => {
				router.push({
					path: '/stomachca-follow-up-index',
					query: {
						stomach_ca_id: id
					}
				})
			}

			return {
				...toRefs(state),
				changePage,
				handleAdd,
				handleEdit,
				handleFollowUp,
				Plus,
			}
		}
	}
</script>

<style>
</style>
