<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="术后随访日期" prop="followed_up_after_operation_date_time">
				<el-date-picker v-model="Form.followed_up_after_operation_date_time" type="datetime"
					placeholder="术后随访日期">
				</el-date-picker>
			</el-form-item>
			
			<el-form-item label="身高cm" prop="height">
				<el-input v-model="Form.height" placeholder="请输入身高cm" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="weight">
				<el-input v-model="Form.weight" placeholder="请输入体重kg" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="waistline">
				<el-input v-model="Form.waistline" placeholder="请输入腰围" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="bmi">
				<el-input v-model="Form.bmi" placeholder="请输入bmi" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="rbc">
				<el-input v-model="Form.rbc" placeholder="请输入rbc" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="hemoglobin">
				<el-input v-model="Form.hemoglobin" placeholder="请输入血红蛋白(g/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="alanine_aminotransferase">
				<el-input v-model="Form.alanine_aminotransferase" placeholder="请输入谷丙转氨酶alt(u/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="aspartate_aminotransferase">
				<el-input v-model="Form.aspartate_aminotransferase" placeholder="请输入谷草转氨酶ast(u/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil(mmol/l)" prop="total_bilirubin">
				<el-input v-model="Form.total_bilirubin" placeholder="请输入总胆红素tbil(mmol/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="total_protein">
				<el-input v-model="Form.total_protein" placeholder="请输入总蛋白tp(g/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="albumin">
				<el-input v-model="Form.albumin" placeholder="请输入白蛋白(alb)(g/l)" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="glu" prop="glu">
				<el-input v-model="Form.glu" placeholder="请输入glu" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="urea" prop="urea">
				<el-input v-model="Form.urea" placeholder="请输入urea" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="crea" prop="crea">
				<el-input v-model="Form.crea" placeholder="请输入crea" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="d_d_2" prop="d_d_2">
				<el-input v-model="Form.d_d_2" placeholder="请输入d_d_2" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="basal_metabolic_rate">
				<el-input v-model="Form.basal_metabolic_rate" placeholder="请输入基础代谢率" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="folic_acid">
				<el-input v-model="Form.folic_acid" placeholder="请输入叶酸" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="renal_dysfunction">
				<el-input v-model="Form.renal_dysfunction" placeholder="请输入肾功能异常" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="deformation_arthritis">
				<el-input v-model="Form.deformation_arthritis" placeholder="请输入变形性关节炎" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="male_sexual_dysfunction">
				<el-input v-model="Form.male_sexual_dysfunction" placeholder="请输入男性性功能异常" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="polycystic_ovary_syndrome">
				<el-input v-model="Form.polycystic_ovary_syndrome" placeholder="请输入多囊卵巢综合征" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="osahs">
				<el-input v-model="Form.osahs" placeholder="请输入osahs" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="nash" prop="nash">
				<el-input v-model="Form.nash" placeholder="请输入nash" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="insulin_resistance">
				<el-input v-model="Form.insulin_resistance" placeholder="请输入胰岛素抵抗" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="abnormal_glucose_metabolism">
				<el-input v-model="Form.abnormal_glucose_metabolism" placeholder="请输入糖代谢异常" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="type_2_diabetes">
				<el-input v-model="Form.type_2_diabetes" placeholder="请输入2型糖尿病" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="reflux_esophagitis">
				<el-input v-model="Form.reflux_esophagitis" placeholder="请输入反流性食管炎" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="acanthosis_nigricans">
				<el-input v-model="Form.acanthosis_nigricans" placeholder="请输入黑棘皮病" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="metabolic_syndrome">
				<el-input v-model="Form.metabolic_syndrome" placeholder="请输入代谢综合征" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="脱发" prop="hair_loss">
				<el-input v-model="Form.hair_loss" placeholder="请输入脱发" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="diarrhea">
				<el-input v-model="Form.diarrhea" placeholder="请输入腹泻" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="constipation">
				<el-input v-model="Form.constipation" placeholder="请输入便秘" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胆囊结石" prop="gallbladder_stones">
				<el-input v-model="Form.gallbladder_stones" placeholder="请输入胆囊结石" :rows="2" type="textarea"></el-input>
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
				weight_loss_id,
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					followed_up_after_operation_date_time: '',
					height: '',
					weight: '',
					waistline: '',
					bmi: '',
					rbc: '',
					hemoglobin: '',
					alanine_aminotransferase: '',
					aspartate_aminotransferase: '',
					total_bilirubin: '',
					total_protein: '',
					albumin: '',
					glu: '',
					urea: '',
					crea: '',
					d_d_2: '',
					basal_metabolic_rate: '',
					folic_acid: '',
					renal_dysfunction: '',
					deformation_arthritis: '',
					male_sexual_dysfunction: '',
					polycystic_ovary_syndrome: '',
					osahs: '',
					nash: '',
					insulin_resistance: '',
					abnormal_glucose_metabolism: '',
					type_2_diabetes: '',
					reflux_esophagitis: '',
					acanthosis_nigricans: '',
					metabolic_syndrome: '',
					hair_loss: '',
					diarrhea: '',
					constipation: '',
					gallbladder_stones: '',
					
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
					follow_up_principal: [{
						required: true,
						message: '随访负责人必须',
						trigger: ['change'],
					}]
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/WeightLossFollowUps/${id}`).then(res => {
						state.Form = {
							followed_up_after_operation_date_time: res.data.followed_up_after_operation_date_time == '1970-01-01 08:00:00' ? '' : res.data.followed_up_after_operation_date_time,
							
							height: res.data.height,
							weight: res.data.weight,
							waistline: res.data.waistline,
							bmi: res.data.bmi,
							rbc: res.data.rbc,
							hemoglobin: res.data.hemoglobin,
							alanine_aminotransferase: res.data.alanine_aminotransferase,
							aspartate_aminotransferase: res.data.aspartate_aminotransferase,
							total_bilirubin: res.data.total_bilirubin,
							total_protein: res.data.total_protein,
							albumin: res.data.albumin,
							glu: res.data.glu,
							urea: res.data.urea,
							crea: res.data.crea,
							d_d_2: res.data.d_d_2,
							basal_metabolic_rate: res.data.basal_metabolic_rate,
							folic_acid: res.data.folic_acid,
							renal_dysfunction: res.data.renal_dysfunction,
							deformation_arthritis: res.data.deformation_arthritis,
							male_sexual_dysfunction: res.data.male_sexual_dysfunction,
							polycystic_ovary_syndrome: res.data.polycystic_ovary_syndrome,
							osahs: res.data.osahs,
							nash: res.data.nash,
							insulin_resistance: res.data.insulin_resistance,
							abnormal_glucose_metabolism: res.data.abnormal_glucose_metabolism,
							type_2_diabetes: res.data.type_2_diabetes,
							reflux_esophagitis: res.data.reflux_esophagitis,
							acanthosis_nigricans: res.data.acanthosis_nigricans,
							metabolic_syndrome: res.data.metabolic_syndrome,
							hair_loss: res.data.hair_loss,
							diarrhea: res.data.diarrhea,
							constipation: res.data.constipation,
							gallbladder_stones: res.data.gallbladder_stones,
							
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
							weight_loss_id: weight_loss_id,
							followed_up_after_operation_date_time: state.Form.followed_up_after_operation_date_time,
							
							height: state.Form.height,
							weight: state.Form.weight,
							waistline: state.Form.waistline,
							bmi: state.Form.bmi,
							rbc: state.Form.rbc,
							hemoglobin: state.Form.hemoglobin,
							alanine_aminotransferase: state.Form.alanine_aminotransferase,
							aspartate_aminotransferase: state.Form.aspartate_aminotransferase,
							total_bilirubin: state.Form.total_bilirubin,
							total_protein: state.Form.total_protein,
							albumin: state.Form.albumin,
							glu: state.Form.glu,
							urea: state.Form.urea,
							crea: state.Form.crea,
							d_d_2: state.Form.d_d_2,
							basal_metabolic_rate: state.Form.basal_metabolic_rate,
							folic_acid: state.Form.folic_acid,
							renal_dysfunction: state.Form.renal_dysfunction,
							deformation_arthritis: state.Form.deformation_arthritis,
							male_sexual_dysfunction: state.Form.male_sexual_dysfunction,
							polycystic_ovary_syndrome: state.Form.polycystic_ovary_syndrome,
							osahs: state.Form.osahs,
							nash: state.Form.nash,
							insulin_resistance: state.Form.insulin_resistance,
							abnormal_glucose_metabolism: state.Form.abnormal_glucose_metabolism,
							type_2_diabetes: state.Form.type_2_diabetes,
							reflux_esophagitis: state.Form.reflux_esophagitis,
							acanthosis_nigricans: state.Form.acanthosis_nigricans,
							metabolic_syndrome: state.Form.metabolic_syndrome,
							hair_loss: state.Form.hair_loss,
							diarrhea: state.Form.diarrhea,
							constipation: state.Form.constipation,
							gallbladder_stones: state.Form.gallbladder_stones,
							
							follow_up_principal: state.Form.follow_up_principal,
							follow_up_note: state.Form.follow_up_note,
							follow_up_information_record: state.Form.follow_up_information_record,
						}

						let url = '/api/back/WeightLossFollowUps'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/WeightLossFollowUps/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/weight-loss-follow-up-index',
								query: {
									weight_loss_id: weight_loss_id
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
