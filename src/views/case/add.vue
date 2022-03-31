<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="姓名" prop="name">
				<el-input v-model="Form.name" placeholder="请输入病员姓名" type="text"></el-input>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input v-model="Form.age" placeholder="请输入病员姓名" type="number"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-radio-group v-model="Form.sex">
					<el-radio label=1>女</el-radio>
					<el-radio label=0>男</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="病例类型" prop="type_id">
				<el-select v-model="Form.type_id" placeholder="请选择病例类型">
					<el-option v-for="item in Form.list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="病例部位" prop="part">
				<el-input v-model="Form.part" placeholder="请输入病例部位" type="text"></el-input>
			</el-form-item>
			<el-form-item label="摘要" prop="abstract">
				<el-input v-model="Form.abstract" placeholder="请输入摘要" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="临床诊断" prop="diagnosis">
				<el-input v-model="Form.diagnosis" placeholder="请输入诊断" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="诊断结果" prop="diagnosis_result">
				<el-input v-model="Form.diagnosis_result" placeholder="请输入诊断结果" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="大体所见" prop="general_seen">
				<el-input v-model="Form.general_seen" placeholder="请输入大体所见" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="图片" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1"
					list-type="picture-card" thumbnail-mode=true :headers="{ Authorization: token }"
					:before-upload="handleBeforeUpload" :on-success="handleUrlSuccess" :on-error="handleUrlError"
					:auto-upload="true" :file-list="Form.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" v-if="Form.img_url" :src="Form.img_url"
								alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="Form.disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="视频" prop='video'>
				<el-upload ref="videoRef" :headers="{ Authorization: token }" :action="uploadImgServer" :on-remove="handleVideoRemove" :on-success="handleVideoSuccess" :auto-upload="true" :data="{ basket: 'video' }" :limit="1" multiple :file-list="Form.videoFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
			</el-form-item>
			<el-form-item label="附件" prop='attachment'>
				<el-upload ref="attachmentRef" :headers="{ Authorization: token }" :action="uploadImgServer" :on-remove="handleAttachmentRemove" :on-success="handleAttachmentSuccess" :auto-upload="true" :data="{ basket: 'attachment' }" :limit="3" multiple :file-list="Form.attachmentFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
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
			const attachmentRef = ref(null)
			const videoRef = ref(null)
			const Ref = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + sessionGet('token') || '',
				id: id,
				Form: {
					attachment: '',
					video: '',
					img_url: '',
					img: '',
					name: '',
					age: '',
					sex: '0',
					abstract: '',
					diagnosis: '',
					diagnosis_result: '',
					general_seen: '',
					type_id: '',
					part: '',
					disabled: true,
					fileList: [],
					attachmentFileList: [],
					videoFileList: [],
					list: []
				},
				rules: {
					img: [{
						required: false,
						message: '图片必须',
						trigger: ['change'],
					}],
					video: [{
						required: false,
						message: '视频必须',
						trigger: ['change'],
					}], 
					attachment: [{
						required: false,
						message: '附件必须',
						trigger: ['change'],
					}],
					name: [{
						required: true,
						message: '姓名必须',
						trigger: ['change'],
					}],
					age: [{
						required: true,
						message: '年龄必须',
						trigger: ['change'],
					}],
					sex: [{
						required: true,
						message: '性别必须',
						trigger: ['change'],
					}],
					abstract: [{
						required: true,
						message: '摘要必须',
						trigger: ['change'],
					}],
					type_id: [{
						required: true,
						message: '病例类型必须',
						trigger: ['change'],
					}],
					part: [{
						required: true,
						message: '病例部位必须',
						trigger: ['change'],
					}],
				},
			})

			onMounted(() => {
				get_case_type_list()
				
				if (id) {
					axios.get(`/api/back/cases/${id}`).then(res => {
						state.Form = {
							attachment: res.data.attachment_id,
							attachmentFileList: res.data.attachment,
							video: res.data.video_id,
							videoFileList: res.data.video,
							img_url: res.data.img_url || '',
							img: res.data.img_id,
							name: res.data.name,
							age: res.data.age,
							sex: String(res.data.sex),
							abstract: res.data.abstract,
							diagnosis: res.data.diagnosis,
							diagnosis_result: res.data.diagnosis_result,
							general_seen: res.data.general_seen,
							type_id: res.data.type_id,
							part: res.data.part,
							fileList: [{url: res.data.img_url}],
							disabled: true
						}
					})
				}
			})
			
			const get_case_type_list = async () => {
				const case_type_list = await axios.get('/api/back/caseTypes')
				state.Form.list = case_type_list.data
			}

			onBeforeUnmount(() => {

			})

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							attachment: state.Form.attachment,
							video: state.Form.video,
							img: state.Form.img,
							name: state.Form.name,
							age: state.Form.age,
							sex: state.Form.sex,
							abstract: state.Form.abstract,
							diagnosis: state.Form.diagnosis,
							diagnosis_result: state.Form.diagnosis_result,
							general_seen: state.Form.general_seen,
							type_id: state.Form.type_id,
							part: state.Form.part,
						}

						let url = '/api/back/cases'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/cases/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/case-index',
							})
						})
					}
				})
			}

			const handleBeforeUpload = (file) => {
				const sufix = file.name.split('.')[1] || ''
				if (!['jpg', 'jpeg', 'png', 'gif'].includes(sufix)) {
					ElMessage.error('请上传 jpg、jpeg、png、gif 格式的图片')
					return false
				}
			}

			const handleUrlSuccess = (val) => {
				ElMessage.success('上传成功')
				state.Form.img_url = val.data.src || ''
				state.Form.img = val.data.id || ''
			}

			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.Form.img = ''
				state.Form.img_url = ''
				state.Form.fileList = []
			}
			
			const handleAttachmentSuccess = (val) => {
				ElMessage.success('上传成功')
				// state.Form.attachmentFileList.push({name: val.data.src, url: val.data.src})
				if (state.Form.attachment) {
					state.Form.attachment = state.Form.attachment + ',' + val.data.id
				} else {
					state.Form.attachment = val.data.id
				}
			}

			const handleAttachmentRemove = (val) => {
				attachmentRef.value.clearFiles()
				state.Form.attachment = ''
				state.Form.attachmentFileList = []
			}
			
			const handleVideoSuccess = (val) => {
				ElMessage.success('上传成功')
				// state.Form.videoFileList.push({name: val.data.src, url: val.data.src})
				state.Form.video = val.data.id
			}
			
			const handleVideoRemove = (val) => {
				videoRef.value.clearFiles()
				state.Form.video = ''
				state.Form.videoFileList = []
			}

			return {
				...toRefs(state),
				videoRef,
				attachmentRef,
				uploadRef,
				Ref,
				submitAdd,
				uploadImgServer,
				handleBeforeUpload,
				handleUrlSuccess,
				handleUrlError,
				handleRemove,
				handleAttachmentSuccess,
				handleAttachmentRemove,
				handleVideoSuccess,
				handleVideoRemove,
			}
		}
	}
</script>

<style>
</style>
