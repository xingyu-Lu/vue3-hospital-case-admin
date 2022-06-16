<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<h1 style="color: #F56C6C;">今日待随访人数{{follow_day_num}}人</h1>
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增病例</el-button>
			<div>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入病例名字" v-model="name" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入病例住院号" v-model="hospital_number" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入病例身份证号" v-model="id_card" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
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
			<el-table-column prop="is_follow" label="是否随访">
				<template #default="scope">
					<span v-if="scope.row.is_follow == 0">否</span>
					<span v-else="scope.row.is_follow == 1">是</span>
				</template>
			</el-table-column>
			<el-table-column prop="follow_day_num" label="距离随访天数">
				<template #default="scope">
					<span style="color: #F56C6C;" v-if="scope.row.follow_day_num <= 3">{{scope.row.follow_day_num}}</span>
					<span v-else>{{scope.row.follow_day_num}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="follow_time" label="随访时间">
				<template #default="scope">
					<span v-if="scope.row.follow_time == '1970-01-01 08:00:00'"></span>
					<span v-else-if="scope.row.is_follow == 1">{{ scope.row.follow_time }}</span>
					<span v-else></span>
				</template>
			</el-table-column>
			<el-table-column prop="follow_content" label="随访内容">
				<template #default="scope">
					<span v-if="scope.row.is_follow == 1">{{ scope.row.follow_content }}</span>
					<span v-else></span>
				</template>
			</el-table-column>
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
		toRefs,
		h
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
				follow_day_num: 0,
				name: '',
				id_card: '',
				hospital_number: '',
				loading: false,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getFollowDayNum()
				getStromalTumorList()
			})
			// 获取今日待随访人数
			const getFollowDayNum = () => {
				axios.get('/api/back/StromalTumors/followDayNum').then(res => {
					state.follow_day_num = res.data.follow_day_num
					ElNotification({
					    title: '间质瘤',
					    message: h('i', { style: 'color: #F56C6C' }, '今日待随访人数' + state.follow_day_num + '人'),
					    type: 'warning',
						// duration: 0,
					})
				})
			}
			
			// 获取admin列表
			const getStromalTumorList = () => {
				state.loading = true
				axios.get('/api/back/StromalTumors', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						name: state.name,
						hospital_number: state.hospital_number,
						id_card: state.id_card,
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
				getStromalTumorList()
			}

			const handleAdd = () => {
				router.push({
					path: '/stromal-tumor-add'
				})
			}

			const handleEdit = (id) => {
				router.push({
					path: '/stromal-tumor-add',
					query: {
						id
					}
				})
			}
			
			const handleFollowUp = (id) => {
				router.push({
					path: '/stromal-tumor-follow-up-index',
					query: {
						stromal_tumor_id: id
					}
				})
			}
			
			const handleOption = () => {
				state.currentPage = 1
				getStromalTumorList()
			}

			return {
				...toRefs(state),
				changePage,
				handleAdd,
				handleEdit,
				handleFollowUp,
				handleOption,
				Plus,
			}
		}
	}
</script>

<style>
</style>
