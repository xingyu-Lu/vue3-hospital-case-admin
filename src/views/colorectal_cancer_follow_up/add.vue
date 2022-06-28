<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="死亡日期" prop="dead_time">
				<el-date-picker v-model="Form.dead_time" type="datetime"
					placeholder="死亡日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="生存月份" prop="survival_month">
				<el-input v-model="Form.survival_month" placeholder="请输入生存月份" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后随访日期" prop="followed_up_after_operation_date_time">
				<el-date-picker v-model="Form.followed_up_after_operation_date_time" type="datetime"
					placeholder="术后随访日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="随访结果" prop="results_were_followed_up_after_operation">
				<el-input v-model="Form.results_were_followed_up_after_operation" placeholder="请输入随访结果" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="远期并发症及处理方式" prop="long_term_complications_and_management_methods">
				<el-input v-model="Form.long_term_complications_and_management_methods" placeholder="请输入远期并发症及处理方式" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="是否新发胆囊结石" prop="whether_new_hair_gallbladder_stone">
				<el-radio-group v-model="Form.whether_new_hair_gallbladder_stone">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
					<el-radio label=2>既往合并胆囊结石</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="胆囊结石发现时间" prop="gallstone_discovery_time">
				<el-date-picker v-model="Form.gallstone_discovery_time" type="datetime"
					placeholder="胆囊结石发现时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="胆囊结石处理方式" prop="treatment_of_gallstones">
				<el-radio-group v-model="Form.treatment_of_gallstones">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>手术</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="局部复发时间" prop="local_recurrence_time">
				<el-date-picker v-model="Form.local_recurrence_time" type="datetime"
					placeholder="局部复发时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="远处转移时间" prop="distant_transfer_time">
				<el-date-picker v-model="Form.distant_transfer_time" type="datetime"
					placeholder="远处转移时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="远处转移部位（非肿瘤死亡原因）" prop="distant_metastatic_site">
				<el-input v-model="Form.distant_metastatic_site" placeholder="请输入远处转移部位（非肿瘤死亡原因）" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="是否化疗" prop="whether_chemotherapy">
				<el-radio-group v-model="Form.whether_chemotherapy">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>有</el-radio>
					<el-radio label=2>新辅助</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="化疗途径" prop="chemotherapy_way">
				<el-radio-group v-model="Form.chemotherapy_way">
					<el-radio label=1>口服</el-radio>
					<el-radio label=2>静脉</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="化疗方案" prop="chemotherapy_regimens">
				<el-input v-model="Form.chemotherapy_regimens" placeholder="请输入化疗方案" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="化疗疗程/次" prop="chemotherapy_regimen_rate">
				<el-input v-model="Form.chemotherapy_regimen_rate" placeholder="请输入化疗疗程/次" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="化疗时间（月）" prop="chemotherapy_month">
				<el-input v-model="Form.chemotherapy_month" placeholder="请输入化疗时间（月）" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="特殊信息记录" prop="special_information_record">
				<el-input v-model="Form.special_information_record" placeholder="请输入特殊信息记录" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="随访负责人" prop="follow_up_principal">
				<el-input v-model="Form.follow_up_principal" placeholder="请输入随访负责人" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="随访备注" prop="follow_up_note">
				<el-input v-model="Form.follow_up_note" placeholder="请输入随访备注" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="随访信息记录" prop="follow_up_information_record">
				<el-input v-model="Form.follow_up_information_record" placeholder="请输入随访信息记录" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		Plus,
		Delete,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
		onBeforeUnmount
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		sessionGet,
		uploadImgServer,
		uploadImgsServer
	} from '@/utils'

	export default {
		name: 'news_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const Ref = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				colorectal_cancer_id,
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					dead_time: '',
					survival_month: '',
					followed_up_after_operation_date_time: '',
					results_were_followed_up_after_operation: '',
					long_term_complications_and_management_methods: '',
					whether_new_hair_gallbladder_stone: '0',
					gallstone_discovery_time: '',
					treatment_of_gallstones: '0',
					local_recurrence_time: '',
					distant_transfer_time: '',
					distant_metastatic_site: '',
					whether_chemotherapy: '0',
					chemotherapy_way: '0',
					chemotherapy_regimens: '',
					chemotherapy_regimen_rate: '',
					chemotherapy_month: '',
					special_information_record: '',
					follow_up_principal: '',
					follow_up_note: '',
					follow_up_information_record: ''
				},
				rules: {
					followed_up_after_operation_date_time: [{
						required: true,
						message: '术后随访日期必须',
						trigger: ['change'],
					}],
					results_were_followed_up_after_operation: [{
						required: true,
						message: '术后随访结果必须',
						trigger: ['change'],
					}],
					follow_up_principal: [{
						required: true,
						message: '随访负责人必须',
						trigger: ['change'],
					}]
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/ColorectalCancerFollowUps/${id}`).then(res => {
						state.Form = {
							dead_time: res.data.dead_time == '1970-01-01 08:00:00' ? '' : res.data.dead_time,
							survival_month: res.data.survival_month,
							followed_up_after_operation_date_time: res.data.followed_up_after_operation_date_time == '1970-01-01 08:00:00' ? '' : res.data.followed_up_after_operation_date_time,
							results_were_followed_up_after_operation: res.data.results_were_followed_up_after_operation,
							long_term_complications_and_management_methods: res.data.long_term_complications_and_management_methods,
							whether_new_hair_gallbladder_stone: String(res.data.whether_new_hair_gallbladder_stone),
							gallstone_discovery_time: res.data.gallstone_discovery_time == '1970-01-01 08:00:00' ? '' : res.data.gallstone_discovery_time,
							treatment_of_gallstones: String(res.data.treatment_of_gallstones),
							local_recurrence_time: res.data.local_recurrence_time == '1970-01-01 08:00:00' ? '' : res.data.local_recurrence_time,
							distant_transfer_time: res.data.distant_transfer_time == '1970-01-01 08:00:00' ? '' : res.data.distant_transfer_time,
							distant_metastatic_site: res.data.distant_metastatic_site,
							whether_chemotherapy: String(res.data.whether_chemotherapy),
							chemotherapy_way: String(res.data.chemotherapy_way),
							chemotherapy_regimens: res.data.chemotherapy_regimens,
							chemotherapy_regimen_rate: res.data.chemotherapy_regimen_rate,
							chemotherapy_month: res.data.chemotherapy_month,
							special_information_record: res.data.special_information_record,
							follow_up_principal: res.data.follow_up_principal,
							follow_up_note: res.data.follow_up_note,
							follow_up_information_record: res.data.follow_up_information_record,
						}
					})
				}
			})

			onBeforeUnmount(() => {

			})

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							colorectal_cancer_id: colorectal_cancer_id,
							dead_time: state.Form.dead_time,
							survival_month: state.Form.survival_month,
							followed_up_after_operation_date_time: state.Form.followed_up_after_operation_date_time,
							results_were_followed_up_after_operation: state.Form.results_were_followed_up_after_operation,
							long_term_complications_and_management_methods: state.Form.long_term_complications_and_management_methods,
							whether_new_hair_gallbladder_stone: state.Form.whether_new_hair_gallbladder_stone,
							gallstone_discovery_time: state.Form.gallstone_discovery_time,
							treatment_of_gallstones: state.Form.treatment_of_gallstones,
							local_recurrence_time: state.Form.local_recurrence_time,
							distant_transfer_time: state.Form.distant_transfer_time,
							distant_metastatic_site: state.Form.distant_metastatic_site,
							whether_chemotherapy: state.Form.whether_chemotherapy,
							chemotherapy_way: state.Form.chemotherapy_way,
							chemotherapy_regimens: state.Form.chemotherapy_regimens,
							chemotherapy_regimen_rate: state.Form.chemotherapy_regimen_rate,
							chemotherapy_month: state.Form.chemotherapy_month,
							special_information_record: state.Form.special_information_record,
							follow_up_principal: state.Form.follow_up_principal,
							follow_up_note: state.Form.follow_up_note,
							follow_up_information_record: state.Form.follow_up_information_record,
						}

						let url = '/api/back/ColorectalCancerFollowUps'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/ColorectalCancerFollowUps/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/colorectal-cancer-follow-up-index',
								query: {
									colorectal_cancer_id: colorectal_cancer_id
								}
							})
						})
					}
				})
			}

			return {
				...toRefs(state),
				Ref,
				submitAdd
			}
		}
	}
</script>

<style>
</style>
