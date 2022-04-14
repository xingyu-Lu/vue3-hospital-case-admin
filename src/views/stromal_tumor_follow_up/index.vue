<template>
	<el-card style="min-height: 100%;">
		<template #header>
			
			<!-- <div style="display: flex; justify-content: space-between;"> -->
				<h3 style="text-align: center;">{{ stomachCa.name }}</h3>
				<el-button type="primary" :icon="Plus" @click="handleAdd">新增随访</el-button>
			<!-- </div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="stromal_tumor_id" label="间质瘤 id" />
			<el-table-column prop="dead_time" label="死亡日期时间">
				<template #default="scope">
					<span v-if="scope.row.dead_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.dead_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="survival_month" label="生存月份" />
			<el-table-column prop="followed_up_after_operation_date_time" label="术后随访日期时间">
				<template #default="scope">
					<span v-if="scope.row.followed_up_after_operation_date_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.followed_up_after_operation_date_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="results_were_followed_up_after_operation" label="术后随访结果" />
			<el-table-column prop="long_term_complications_and_management_methods" label="远期并发症及处理方式" />
			<el-table-column prop="whether_new_hair_gallbladder_stone" label="是否新发胆囊结石">
				<template #default="scope">
					<span v-if="scope.row.whether_new_hair_gallbladder_stone == 0">否</span>
					<span v-else-if="scope.row.whether_new_hair_gallbladder_stone == 1">是</span>
					<span v-else="scope.row.whether_new_hair_gallbladder_stone == 2">既往合并胆囊结石</span>
				</template>
			</el-table-column>
			<el-table-column prop="gallstone_discovery_time" label="胆囊结石发现时间">
				<template #default="scope">
					<span v-if="scope.row.gallstone_discovery_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.gallstone_discovery_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="treatment_of_gallstones" label="胆囊结石处理方式">
				<template #default="scope">
					<span v-if="scope.row.treatment_of_gallstones == 0">无</span>
					<span v-else-if="scope.row.treatment_of_gallstones == 1">保守</span>
					<span v-else="scope.row.treatment_of_gallstones == 2">手术</span>
				</template>
			</el-table-column>
			<el-table-column prop="local_recurrence_time" label="局部复发时间">
				<template #default="scope">
					<span v-if="scope.row.local_recurrence_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.local_recurrence_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="distant_transfer_time" label="远处转移时间">
				<template #default="scope">
					<span v-if="scope.row.distant_transfer_time == '1970-01-01 08:00:00'"></span>
					<span v-else>{{ scope.row.distant_transfer_time }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="distant_metastatic_site" label="远处转移部位（非肿瘤死亡原因）" />
			<el-table-column prop="whether_chemotherapy" label="是否化疗">
				<template #default="scope">
					<span v-if="scope.row.whether_chemotherapy == 0">无</span>
					<span v-else-if="scope.row.whether_chemotherapy == 1">有</span>
					<span v-else="scope.row.whether_chemotherapy == 2">新辅助</span>
				</template>
			</el-table-column>
			<el-table-column prop="chemotherapy_way" label="化疗途径">
				<template #default="scope">
					<span v-if="scope.row.chemotherapy_way == 0">无</span>
					<span v-else-if="scope.row.chemotherapy_way == 1">口服</span>
					<span v-else="scope.row.chemotherapy_way == 2">静脉</span>
				</template>
			</el-table-column>
			<el-table-column prop="chemotherapy_regimens" label="化疗方案" />
			<el-table-column prop="chemotherapy_regimen_rate" label="化疗疗程/次" />
			<el-table-column prop="chemotherapy_month" label="化疗时间" />
			<el-table-column prop="special_information_record" label="特殊信息记录" />
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
				stromal_tumor_id,
			} = route.query
			const state = reactive({
				stomachCa: '',
				loading: false,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getStromalTumor()
				getStromalTumorFollowUpList()
			})
			const getStromalTumor = () => {
				axios.get(`/api/back/StromalTumors/${stromal_tumor_id}`).then(res => {
					state.stomachCa = res.data
				})
			}
			
			// 获取admin列表
			const getStromalTumorFollowUpList = () => {
				state.loading = true
				axios.get('/api/back/StromalTumorFollowUps', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						stromal_tumor_id: stromal_tumor_id
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
				getStromalTumorFollowUpList()
			}

			const handleAdd = () => {
				router.push({
					path: '/stromal-tumor-follow-up-add',
					query: {
						stromal_tumor_id: stromal_tumor_id
					}
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/stromal-tumor-follow-up-add',
					query: {
						stromal_tumor_id: stromal_tumor_id,
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
