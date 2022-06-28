<template>
	<h1 style="color: #F56C6C;">胃ca今日待随访人数：{{state.stomach_ca_follow_day_num}}人</h1>
	<h1 style="color: #F56C6C;">间质瘤今日待随访人数：{{state.stromal_tumor_follow_day_num}}人</h1>
	<h1 style="color: #F56C6C;">直肠癌今日待随访人数：{{state.colorectal_cancer_follow_day_num}}人</h1>
	<h1 style="color: #F56C6C;">减重今日待随访人数：{{state.weight_loss_follow_day_num}}人</h1>
	
	<!-- 病例折线图 -->
	<h1 style="text-align: center; margin-bottom: 40px;">{{ state.case_head }}</h1>
	<div id="zoom"></div>
	
	<!-- 随访折线图 -->
	<h1 style="text-align: center; margin-bottom: 40px;">{{ state.follow_head }}</h1>
	<div id="zoom_follow"></div>
</template>

<script setup>
	import {
		onMounted,
		onUnmounted,
		ref,
		reactive,
	} from 'vue'
	import axios from '@/utils/axios'
	import * as echarts from 'echarts';
	
	let myChart = null
	let myChartFollow = null
	
	const state = reactive({
		stomach_ca_follow_day_num: 0,
		stromal_tumor_follow_day_num: 0,
		colorectal_cancer_follow_day_num: 0,
		weight_loss_follow_day_num: 0,
		// 病例图标配置项和数据
		case_head: '',
		option: {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				data: ['Email', 'Direct']
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				// top: 'center',
				feature: {
					// mark: {
					// 	show: true
					// },
					// dataView: {
					// 	show: true,
					// 	readOnly: false
					// },
					// magicType: {
					// 	show: true,
					// 	type: ['line', 'bar', 'stack']
					// },
					// restore: {
					// 	show: true
					// },
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				// boundaryGap: false,
				data: [
					'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
				]
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: 'Email',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			},]
		},
		// 随访图标配置项和数据
		follow_head: '',
		follow_option: {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				data: ['Email', 'Direct']
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				// top: 'center',
				feature: {
					// mark: {
					// 	show: true
					// },
					// dataView: {
					// 	show: true,
					// 	readOnly: false
					// },
					// magicType: {
					// 	show: true,
					// 	type: ['line', 'bar', 'stack']
					// },
					// restore: {
					// 	show: true
					// },
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				// boundaryGap: false,
				data: [
					'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
				]
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: 'Email',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			}, {
				name: 'Direct',
				type: 'line',
				// stack: 'Total',
				label: {
					show: true,
					position: 'top'
				},
				smooth: true,
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [130, 142, 151, 114, 40, 280, 290]
			},]
		},
	})
	
	onMounted(async () => {		
		// 基于准备好的dom，初始化echarts实例
		myChart = echarts.init(document.getElementById('zoom'))
		myChartFollow = echarts.init(document.getElementById('zoom_follow'))
		// myChart.setOption(state.option)
		getCaseData()
		
		await axios.get('/api/back/stomachCas/followDayNum').then(res => {
			state.stomach_ca_follow_day_num = res.data.follow_day_num
		})
		
		await axios.get('/api/back/StromalTumors/followDayNum').then(res => {
			state.stromal_tumor_follow_day_num = res.data.follow_day_num
		})
		
		await axios.get('/api/back/ColorectalCancers/followDayNum').then(res => {
			state.colorectal_cancer_follow_day_num = res.data.follow_day_num
		})
		
		await axios.get('/api/back/WeightLosss/followDayNum').then(res => {
			state.weight_loss_follow_day_num = res.data.follow_day_num
		})
		
		
		let follow_string = "<h1 style='color: #F56C6C;'>胃ca今日待随访人数：" + state.stomach_ca_follow_day_num + "人</h1><br>" + 
							"<h1 style='color: #F56C6C;'>间质瘤今日待随访人数：" + state.stromal_tumor_follow_day_num + "人</h1><br>" + 
							"<h1 style='color: #F56C6C;'>直肠癌今日待随访人数：" + state.colorectal_cancer_follow_day_num + "人</h1><br>" + 
							"<h1 style='color: #F56C6C;'>减重今日待随访人数：" + state.weight_loss_follow_day_num + "人</h1><br>"
		ElMessageBox.alert(follow_string, '今日待随访人数', {
		    confirmButtonText: '确定',
			dangerouslyUseHTMLString: true,
			center: true
		})
	})
	
	onUnmounted(() => {
		myChart.dispose()
		myChartFollow.dispose()
	})
	
	const getCaseData = () => {
		axios.get('/api/back/dashboards', {
			params: {
				// office_name: state.office_name,
				// charge_subclass: state.charge_subclass,
				// date: state.date,
			}
		}).then(res => {
			state.case_head = res.data.case_line_chart.case_head
			state.follow_head = res.data.follow_line_chart.follow_head
			// 病例
			myChart.dispose()
			myChart = echarts.init(document.getElementById('zoom'))
			state.option.legend.data = res.data.case_line_chart.case_legend_data
			state.option.xAxis[0].data = res.data.case_line_chart.case_date
			// 胃ca
			state.option.series[0].name = res.data.case_line_chart.stomach_ca.series_name
			state.option.series[0].data = res.data.case_line_chart.stomach_ca.series_data
			// 间质瘤
			state.option.series[1].name = res.data.case_line_chart.stromal_tumor_line_chart.series_name
			state.option.series[1].data = res.data.case_line_chart.stromal_tumor_line_chart.series_data
			// 直肠癌
			state.option.series[2].name = res.data.case_line_chart.colorectal_cancer_line_chart.series_name
			state.option.series[2].data = res.data.case_line_chart.colorectal_cancer_line_chart.series_data
			// 减重
			state.option.series[3].name = res.data.case_line_chart.weight_loss_line_chart.series_name
			state.option.series[3].data = res.data.case_line_chart.weight_loss_line_chart.series_data
			
			// 随访
			myChartFollow.dispose()
			myChartFollow = echarts.init(document.getElementById('zoom_follow'))
			state.follow_option.legend.data = res.data.follow_line_chart.follow_legend_data
			state.follow_option.xAxis[0].data = res.data.follow_line_chart.follow_date
			// 胃ca
			state.follow_option.series[0].name = res.data.follow_line_chart.stomach_ca_follow_line_chart.series_name
			state.follow_option.series[0].data = res.data.follow_line_chart.stomach_ca_follow_line_chart.series_data
			// 间质瘤
			state.follow_option.series[1].name = res.data.follow_line_chart.stromal_tumor_follow_line_chart.series_name
			state.follow_option.series[1].data = res.data.follow_line_chart.stromal_tumor_follow_line_chart.series_data
			// 直肠癌
			state.follow_option.series[2].name = res.data.follow_line_chart.colorectal_cancer_follow_line_chart.series_name
			state.follow_option.series[2].data = res.data.follow_line_chart.colorectal_cancer_follow_line_chart.series_data
			// 减重
			state.follow_option.series[3].name = res.data.follow_line_chart.weight_loss_follow_line_chart.series_name
			state.follow_option.series[3].data = res.data.follow_line_chart.weight_loss_follow_line_chart.series_data
			
			myChart.setOption(state.option)
			myChartFollow.setOption(state.follow_option)
		})
	}
</script>

<style scoped>
	#zoom {
		min-height: 600px;
		margin-bottom: 20px;
	}
	
	#zoom_follow {
		min-height: 600px;
		margin-bottom: 20px;
	}
</style>