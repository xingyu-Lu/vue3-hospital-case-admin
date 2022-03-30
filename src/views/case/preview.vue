<template>
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" @click="handleBack">返回</el-button>
		</template>

		<el-descriptions class="margin-top" :title="data.type" :column="1" :border="true">
			<el-descriptions-item label="姓名">{{ data.name }}</el-descriptions-item>
			<el-descriptions-item label="年龄">{{ data.age }}</el-descriptions-item>
			<el-descriptions-item label="性别">{{ data.sex == 0 ? '男' : '女' }}</el-descriptions-item>
			<el-descriptions-item label="部位">{{ data.part }}</el-descriptions-item>
			<el-descriptions-item label="摘要">{{ data.abstract }}</el-descriptions-item>
			<el-descriptions-item label="临床诊断">{{ data.diagnosis }}</el-descriptions-item>
			<el-descriptions-item label="诊断结果">{{ data.diagnosis_result }}</el-descriptions-item>
			<el-descriptions-item label="大体所见">{{ data.general_seen }}</el-descriptions-item>
			<el-descriptions-item label="图片">
				<el-image v-if="data.img_url" :src="data.img_url" :lazy="true" :initial-index="1">
				</el-image>
				<span v-else>无</span>
			</el-descriptions-item>
			<el-descriptions-item label="附件">
				<span v-for="(item, index) in data.attachment">
					<a :href="item.url" target="_blank">{{ item.url }}</a>
				</span>
			</el-descriptions-item>
			<el-descriptions-item label="视频">
				<span v-for="(item, index) in data.video">
					<video width="1000" controls>
					  <source :src="item.url">
					</video>
					<!-- <a :href="item.url" target="_blank">{{ item.url }}</a> -->
				</span>
			</el-descriptions-item>
		</el-descriptions>

	</el-card>
</template>

<script>
	import {
		reactive,
		ref,
		toRefs,
		onMounted
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'

	export default {
		name: 'preview_news',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				data: {
					name: '',
					age: '',
					sex: '',
					abstract: '',
					type: '',
					part: '',
					diagnosis: '',
					diagnosis_result: '',
					general_seen: '',
					img_url: '',
					video: [],
					attachment: []
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/cases/${id}`).then(res => {
						state.data = {
							name: res.data.name,
							age: res.data.age,
							sex: res.data.sex,
							abstract: res.data.abstract,
							diagnosis: res.data.diagnosis,
							diagnosis_result: res.data.diagnosis_result,
							general_seen: res.data.general_seen,
							type: res.data.type,
							part: res.data.part,
							img_url: res.data.img_url,
							video: res.data.video,
							attachment: res.data.attachment,
						}
					})
				}
			})

			const handleBack = () => {
				router.push({
					path: '/case-index',
				})
			}

			return {
				...toRefs(state),
				handleBack,
			}
		}
	}
</script>

<style scoped>
	/* table 样式 */
	:deep() table {
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}

	:deep() table td,
	:deep() table th {
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		padding: 3px 5px;
	}

	:deep() table th {
		border-bottom: 2px solid #ccc;
		text-align: center;
		background-color: #f1f1f1
	}

	/* blockquote 样式 */
	:deep() blockquote {
		display: block;
		border-left: 8px solid #d0e5f2;
		padding: 5px 10px;
		margin: 10px 0;
		line-height: 1.4;
		font-size: 100%;
		background-color: #f1f1f1;
	}

	/* code 样式 */
	:deep() code {
		display: inline-block;
		background-color: #f1f1f1;
		border-radius: 3px;
		padding: 3px 5px;
		margin: 0 3px;
	}

	:deep() pre code {
		display: block;
	}

	/* ul ol 样式 */
	:deep() ul,
	ol {
		margin: 10px 0 10px 20px;
	}
</style>
