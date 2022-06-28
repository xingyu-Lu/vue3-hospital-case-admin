<template>
	<el-card style="min-height: 100%;">
		<template #header>
			
			<!-- <div style="display: flex; justify-content: space-between;"> -->
				<h3 style="text-align: center;">{{ colorectalCancer.name }}</h3>
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增随访</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="weight_loss_id" label="减重 id" />
			<el-table-column prop="followed_up_after_operation_date_time" label="术后随访日期时间">
				<template #default="scope">
					<span v-if="scope.row.followed_up_after_operation_date_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.followed_up_after_operation_date_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="height" label="身高cm" />
			<el-table-column prop="weight" label="体重km" />
			<el-table-column prop="waistline" label="腰围" />
			<el-table-column prop="bmi" label="bmi" />
			<el-table-column prop="rbc" label="rbc" />
			<el-table-column prop="hemoglobin" label="血红蛋白(g/l)" />
			<el-table-column prop="alanine_aminotransferase" label="谷丙转氨酶alt(u/l)" />
			<el-table-column prop="follow_up_principal" label="随访负责人" />
			<el-table-column prop="follow_up_note" label="随访备注" />
			<el-table-column prop="follow_up_information_record" label="随访信息记录" />
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
			const route = useRoute()
			const router = useRouter()
			const {
				weight_loss_id,
			} = route.query
			const state = reactive({
				colorectalCancer: '',
				loading: false,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getColorectalCancer()
				getColorectalCancerFollowUpList()
			})
			const getColorectalCancer = () => {
				axios.get(`/api/back/WeightLosss/${weight_loss_id}`).then(res => {
					state.colorectalCancer = res.data
				})
			}
			
			// 获取admin列表
			const getColorectalCancerFollowUpList = () => {
				state.loading = true
				axios.get('/api/back/WeightLossFollowUps', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						weight_loss_id: weight_loss_id
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
				getColorectalCancerFollowUpList()
			}

			const handleAdd = () => {
				router.push({
					path: '/weight-loss-follow-up-add',
					query: {
						weight_loss_id: weight_loss_id
					}
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/weight-loss-follow-up-add',
					query: {
						weight_loss_id: weight_loss_id,
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
