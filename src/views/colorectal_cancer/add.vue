<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" size="default" label-suffix=":" :inline="true">
			<div><strong>基本信息</strong></div>
			<el-divider />
			<el-form-item label="住院号" prop="hospital_number">
				<el-input v-model="Form.hospital_number" placeholder="请输入住院号" type="text"></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="name">
				<el-input v-model="Form.name" placeholder="请输入病员姓名" type="text"></el-input>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
				<el-input v-model="Form.age" placeholder="请输入病员姓名" type="number"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-radio-group v-model="Form.sex">
					<el-radio label=1>男</el-radio>
					<el-radio label=2>女</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="民族" prop="national">
				<el-input v-model="Form.national" placeholder="请输入民族" type="text"></el-input>
			</el-form-item>
			<el-form-item label="身份证" prop="id_card">
				<el-input v-model="Form.id_card" placeholder="请输入身份证" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="患者联系电话" prop="mobile">
				<el-input v-model="Form.mobile" placeholder="请输入患者联系电话" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="住院总费用" prop="total_money">
				<el-input v-model="Form.total_money" placeholder="请输入住院总费用" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="备注" prop="remark">
				<el-input v-model="Form.remark" placeholder="请输入备注" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="家属联系方式" prop="family_contact">
				<el-input v-model="Form.family_contact" placeholder="请输入家属联系方式" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="入院日期" prop="admission_time">
				<el-date-picker v-model="Form.admission_time" type="datetime" :default-value="new Date()"
					placeholder="请输入入院日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="手术日期" prop="operative_time">
				<el-date-picker v-model="Form.operative_time" type="datetime" :default-value="new Date()"
					placeholder="请输入手术日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="出院日期" prop="discharge_time">
				<el-date-picker v-model="Form.discharge_time" type="datetime" :default-value="new Date()"
					placeholder="请输入出院日期">
				</el-date-picker>
			</el-form-item>
			<!-- <el-form-item label="总住院时间（天）" prop="total_hospital_days">
				<el-input v-model="Form.total_hospital_days" placeholder="请输入总住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术后住院时间（天）" prop="postoperation_hospital_days">
				<el-input v-model="Form.postoperation_hospital_days" placeholder="请输入术后住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item> -->
			<div><strong>术前、术前合并症及简单描述、术前肠镜</strong></div>
			<p style="color: #409eff;">1.距肛门A1</p>
			<el-form-item label="1.距肛门A1(cm)" prop="preoperative_colonoscopy_from_the_anus_a1">
				<el-input v-model="Form.preoperative_colonoscopy_from_the_anus_a1" placeholder="距肛门A1(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">2.侵犯肠腔A2</p>
			<el-form-item label="2.侵犯肠腔A2(周)" prop="preoperative_colonoscopy_infringement_of_lumen_a2">
				<el-input v-model="Form.preoperative_colonoscopy_infringement_of_lumen_a2" placeholder="侵犯肠腔A2(周)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">3.内镜是否通过A3</p>
			<el-form-item label="3.内镜是否通过A3" prop="preoperative_colonoscopy_whether_the_endoscope_passes_a3">
				<el-radio-group v-model="Form.preoperative_colonoscopy_whether_the_endoscope_passes_a3">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">4.活检结果A4</p>
			<el-form-item label="4.活检结果A4" prop="preoperative_colonoscopy_the_biopsy_results_a4">
				<el-input v-model="Form.preoperative_colonoscopy_the_biopsy_results_a4" placeholder="活检结果A4" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<div><strong>术前分期</strong></div>
			<el-divider />
			<p style="color: #409eff;">1.CT或MRI分期：</p>
			<el-form-item label="T" prop="preoperative_staging_ct_mri_t">
				<el-input v-model="Form.preoperative_staging_ct_mri_t" placeholder="T" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="侵出B1(mm)" prop="preoperative_staging_ct_mri_leaching_b1">
				<el-input v-model="Form.preoperative_staging_ct_mri_leaching_b1" placeholder="侵出B1(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最深处位于B2" prop="preoperative_staging_ct_mri_the_deepest_point_is_at_b2">
				<el-radio-group v-model="Form.preoperative_staging_ct_mri_the_deepest_point_is_at_b2">
					<el-radio label=1>前</el-radio>
					<el-radio label=2>左</el-radio>
					<el-radio label=3>右</el-radio>
					<el-radio label=4>后</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肠壁距系膜外缘B3(mm)" prop="preoperative_staging_ct_mri_intestinal_separated_edge_mesangium">
				<el-input v-model="Form.preoperative_staging_ct_mri_intestinal_separated_edge_mesangium" placeholder="肠壁距系膜外缘B3(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="T距系膜外缘B4(mm)" prop="preoperative_staging_ct_mri_intestinal_separated_edge_mesangium">
				<el-input v-model="Form.preoperative_staging_ct_mri_intestinal_separated_edge_mesangium" placeholder="T距系膜外缘B4(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="N" prop="preoperative_staging_ct_mri_n">
				<el-input v-model="Form.preoperative_staging_ct_mri_n" placeholder="N" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径Dmax(mm)" prop="preoperative_staging_ct_mri_the_largest_diameter_dmax">
				<el-input v-model="Form.preoperative_staging_ct_mri_the_largest_diameter_dmax" placeholder="最大直径Dmax(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="淋巴结数目" prop="preoperative_staging_ct_mri_number_of_lymph_nodes_no">
				<el-input v-model="Form.preoperative_staging_ct_mri_number_of_lymph_nodes_no" placeholder="淋巴结数目" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="m" prop="preoperative_staging_ct_mri_m">
				<el-input v-model="Form.preoperative_staging_ct_mri_m" placeholder="m" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径dmax2(cm)" prop="preoperative_staging_ct_mri_the_largest_diameter_dmax2">
				<el-input v-model="Form.preoperative_staging_ct_mri_the_largest_diameter_dmax2" placeholder="最大直径dmax2(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="T3直肠系膜累及深度" prop="preoperative_staging_ct_mri_t3_mesenterin_and_deep">
				<el-radio-group v-model="Form.preoperative_staging_ct_mri_t3_mesenterin_and_deep">
					<el-radio label=1>T3小于等于1/3</el-radio>
					<el-radio label=2>T3m小于等于2/3</el-radio>
					<el-radio label=3>T3o大于等于2/3</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.超声分期</p>
			<el-form-item label="超声分期T" prop="preoperative_staging_ultrasonic_t">
				<el-input v-model="Form.preoperative_staging_ultrasonic_t" placeholder="超声分期T" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="侵出(mm)" prop="preoperative_staging_ultrasonic_leaching_ultramundane">
				<el-input v-model="Form.preoperative_staging_ultrasonic_leaching_ultramundane" placeholder="侵出(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="N" prop="preoperative_staging_ultrasonic_n">
				<el-input v-model="Form.preoperative_staging_ultrasonic_n" placeholder="N" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径d1(mm)" prop="preoperative_staging_ultrasonic_the_largest_diameter_d1">
				<el-input v-model="Form.preoperative_staging_ultrasonic_the_largest_diameter_d1" placeholder="最大直径d1(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="M" prop="preoperative_staging_ultrasonic_m">
				<el-input v-model="Form.preoperative_staging_ultrasonic_m" placeholder="M" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径d2(mm)" prop="preoperative_staging_ultrasonic_the_largest_diameter_d2">
				<el-input v-model="Form.preoperative_staging_ultrasonic_the_largest_diameter_d2" placeholder="最大直径d2(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="PET-CT" prop="preoperative_staging_ultrasonic_pet_ct">
				<el-input v-model="Form.preoperative_staging_ultrasonic_pet_ct" placeholder="PET-CT" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">3.临床分期</p>
			<el-form-item label="临床分期T" prop="preoperative_staging_clinical_t">
				<el-input v-model="Form.preoperative_staging_clinical_t" placeholder="临床分期T" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="N" prop="preoperative_staging_clinical_n">
				<el-input v-model="Form.preoperative_staging_clinical_n" placeholder="N" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="M" prop="preoperative_staging_clinical_m">
				<el-radio-group v-model="Form.preoperative_staging_clinical_m">
					<el-radio label=1>肝</el-radio>
					<el-radio label=2>肝疑</el-radio>
					<el-radio label=3>肺</el-radio>
					<el-radio label=4>肺疑</el-radio>
					<el-radio label=5>骨</el-radio>
					<el-radio label=6>骨疑</el-radio>
					<el-radio label=7>腹膜</el-radio>
					<el-radio label=8>腹膜疑</el-radio>
					<el-radio label=9>淋巴结</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">4.肠道其他病灶</p>
			<el-form-item label="肠道其他病灶" prop="preoperative_staging_intestinal_tract_other">
				<el-radio-group v-model="Form.preoperative_staging_intestinal_tract_other">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>多源癌</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="部位" prop="preoperative_staging_intestinal_tract_location">
				<el-input v-model="Form.preoperative_staging_intestinal_tract_location" placeholder="部位" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="分期T" prop="preoperative_staging_intestinal_tract_staging_t">
				<el-input v-model="Form.preoperative_staging_intestinal_tract_staging_t" placeholder="分期T" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="N" prop="preoperative_staging_intestinal_tract_n">
				<el-input v-model="Form.preoperative_staging_intestinal_tract_n" placeholder="N" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="合并息肉" prop="preoperative_staging_intestinal_tract_unite">
				<el-radio-group v-model="Form.preoperative_staging_intestinal_tract_unite">
					<el-radio label=1>单个息肉</el-radio>
					<el-radio label=2>多个</el-radio>
					<el-radio label=3>fap</el-radio>
					<el-radio label=4>年幼性息肉病</el-radio>
					<el-radio label=5>PJ综合征</el-radio>
					<el-radio label=6>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">5.影像学环周切缘状况</p>
			<el-form-item label="影像学环周切缘状况" prop="preoperative_staging_imaging_circumferential_margin_situation">
				<el-radio-group v-model="Form.preoperative_staging_imaging_circumferential_margin_situation">
					<el-radio label=1>明确未累及</el-radio>
					<el-radio label=2>CRM受威胁(可疑)</el-radio>
					<el-radio label=3>明确累及</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="MDT讨论" prop="preoperative_staging_imaging_circumferential_margin_mdt_discuss">
				<el-radio-group v-model="Form.preoperative_staging_imaging_circumferential_margin_mdt_discuss">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">6.原发灶可切除性</p>
			<el-form-item label="原发灶可切除性" prop="preoperative_staging_resectable_primary_lesion">
				<el-radio-group v-model="Form.preoperative_staging_resectable_primary_lesion">
					<el-radio label=1>可切除</el-radio>
					<el-radio label=2>可转化</el-radio>
					<el-radio label=3>不可切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">7.转移灶可切除性</p>
			<el-form-item label="转移灶可切除性" prop="preoperative_staging_resectable_transition_lesion">
				<el-radio-group v-model="Form.preoperative_staging_resectable_transition_lesion">
					<el-radio label=1>可切除</el-radio>
					<el-radio label=2>可转化</el-radio>
					<el-radio label=3>不可切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">8.转移类型</p>
			<el-form-item label="转移类型" prop="preoperative_staging_transition_type">
				<el-radio-group v-model="Form.preoperative_staging_transition_type">
					<el-radio label=1>单器单灶</el-radio>
					<el-radio label=2>单器多灶</el-radio>
					<el-radio label=3>多器局限灶可切除</el-radio>
					<el-radio label=4>多器官多灶</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肝转移灶数目(枚)" prop="preoperative_staging_number_of_liver_metastases">
				<el-input v-model="Form.preoperative_staging_number_of_liver_metastases" placeholder="肝转移灶数目(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大转移灶直径(cm)" prop="preoperative_staging_number_of_liver_metastases_dg1">
				<el-input v-model="Form.preoperative_staging_number_of_liver_metastases_dg1" placeholder="最大转移灶直径(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="平均转移灶直径(cm)" prop="preoperative_staging_number_of_liver_metastases_dg2">
				<el-input v-model="Form.preoperative_staging_number_of_liver_metastases_dg2" placeholder="平均转移灶直径(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="转移灶部位" prop="preoperative_staging_number_of_liver_metastases_location1">
				<el-radio-group v-model="Form.preoperative_staging_number_of_liver_metastases_location1">
					<el-radio label=1>单肝</el-radio>
					<el-radio label=2>双肝</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肺转移灶数目(枚)" prop="preoperative_staging_number_of_lung_metastases">
				<el-input v-model="Form.preoperative_staging_number_of_lung_metastases" placeholder="肺转移灶数目(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大转移灶直径" prop="preoperative_staging_number_of_lung_metastases_df1">
				<el-input v-model="Form.preoperative_staging_number_of_lung_metastases_df1" placeholder="最大转移灶直径" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="平均转移灶直径" prop="preoperative_staging_number_of_lung_metastases_df2">
				<el-input v-model="Form.preoperative_staging_number_of_lung_metastases_df2" placeholder="平均转移灶直径" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="转移灶部位" prop="preoperative_staging_number_of_lung_metastases_location2">
				<el-radio-group v-model="Form.preoperative_staging_number_of_lung_metastases_location2">
					<el-radio label=1>单叶</el-radio>
					<el-radio label=2>单肺</el-radio>
					<el-radio label=3>双肺</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">9.MDT对转移灶处理意见</p>
			<el-form-item label="MDT对转移灶处理意见" prop="preoperative_staging_mdt_metastase_suggest1">
				<el-radio-group v-model="Form.preoperative_staging_mdt_metastase_suggest1">
					<el-radio label=1>同期手术</el-radio>
					<el-radio label=2>分期先原发</el-radio>
					<el-radio label=3>分期先转移</el-radio>
					<el-radio label=4>新辅助化疗</el-radio>
					<el-radio label=5>辅助化疗</el-radio>
					<el-radio label=6>联合放疗</el-radio>
					<el-radio label=7>靶向</el-radio>
					<el-radio label=8>姑息处理</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">10.MDT对原发灶处理意见</p>
			<el-form-item label="MDT对原发灶处理意见" prop="preoperative_staging_mdt_primary_suggest2">
				<el-radio-group v-model="Form.preoperative_staging_mdt_primary_suggest2">
					<el-radio label=1>新辅助放化疗</el-radio>
					<el-radio label=2>新辅助放疗</el-radio>
					<el-radio label=3>新辅助化疗</el-radio>
					<el-radio label=4>直接手术</el-radio>
					<el-radio label=5>不手术</el-radio>
				</el-radio-group>
			</el-form-item>
			<div><strong>新辅助化疗</strong></div>
			<el-divider />
			<p style="color: #409eff;">1.方案</p>
			<el-form-item label="方案" prop="preoperative_neoadjuvant_chemotherapy_plan_project">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_chemotherapy_plan_project">
					<el-radio label=1>FOLFOX</el-radio>
					<el-radio label=2>XELOX</el-radio>
					<el-radio label=3>FOLFIRI</el-radio>
					<el-radio label=4>FOLFOXIRI</el-radio>
					<el-radio label=5>爱必妥</el-radio>
					<el-radio label=6>贝伐</el-radio>
					<el-radio label=7>血管介入</el-radio>
					<el-radio label=8>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff">2.时间</p>
			<el-form-item label="开始时间" prop="preoperative_neoadjuvant_chemotherapy_begin">
				<el-date-picker v-model="Form.preoperative_neoadjuvant_chemotherapy_begin" type="datetime" :default-value="new Date()"
					placeholder="请输入开始时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="结束时间" prop="preoperative_neoadjuvant_chemotherapy_end">
				<el-date-picker v-model="Form.preoperative_neoadjuvant_chemotherapy_end" type="datetime" :default-value="new Date()"
					placeholder="请输入结束时间">
				</el-date-picker>
			</el-form-item>
			<p style="color: #409eff;">3.不良反应</p>
			<el-form-item label="Hb(g/L)" prop="preoperative_neoadjuvant_chemotherapy_adverse_response_hb">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_adverse_response_hb" placeholder="Hb(g/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="WBC(*109/L)" prop="preoperative_neoadjuvant_chemotherapy_adverse_response_wbc">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_adverse_response_wbc" placeholder="WBC(*109/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="粒细胞(*109/L)" prop="preoperative_neoadjuvant_chemotherapy_adverse_response_gra">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_adverse_response_gra" placeholder="粒细胞(*109/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="PLT" prop="preoperative_neoadjuvant_chemotherapy_adverse_response_plt">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_adverse_response_plt" placeholder="PLT" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肝功能" prop="preoperative_neoadjuvant_chemotherapy_liver_function">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_liver_function" placeholder="肝功能" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能" prop="preoperative_neoadjuvant_chemotherapy_kidney_function">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_kidney_function" placeholder="肾功能" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="呕吐" prop="preoperative_neoadjuvant_chemotherapy_sickness">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_sickness" placeholder="呕吐" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="preoperative_neoadjuvant_chemotherapy_diarrhoea">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_diarrhoea" placeholder="腹泻" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="preoperative_neoadjuvant_chemotherapy_astriction">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_astriction" placeholder="便秘" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="心脏毒性" prop="preoperative_neoadjuvant_chemotherapy_heart">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_heart" placeholder="心脏毒性" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="过敏反应" prop="preoperative_neoadjuvant_chemotherapy_allergy">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_allergy" placeholder="过敏反应" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="手足皮肤反应" prop="preoperative_neoadjuvant_chemotherapy_skin">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_skin" placeholder="手足皮肤反应" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="感觉神经病" prop="preoperative_neoadjuvant_chemotherapy_nerve">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_nerve" placeholder="感觉神经病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="其他" prop="preoperative_neoadjuvant_chemotherapy_other">
				<el-input v-model="Form.preoperative_neoadjuvant_chemotherapy_other" placeholder="其他" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">4.临床疗效评估</p>
			<el-form-item label="临床疗效评估" prop="preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy">
					<el-radio label=1>CR</el-radio>
					<el-radio label=2>PR</el-radio>
					<el-radio label=3>SD</el-radio>
					<el-radio label=4>PD</el-radio>
					<el-radio label=5>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">5.病理疗效评估</p>
			<el-form-item label="临床疗效评估" prop="preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy">
					<el-radio label=1>CR</el-radio>
					<el-radio label=2>PR</el-radio>
					<el-radio label=3>SD</el-radio>
					<el-radio label=4>PD</el-radio>
					<el-radio label=5>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<div><strong>新辅助放疗</strong></div>
			<el-divider />
			<p style="color: #409eff;">1.剂量分割</p>
			<el-form-item label="剂量分割" prop="preoperative_neoadjuvant_radiotherapy_dismember">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_dismember">
					<el-radio label=1>常规分割</el-radio>
					<el-radio label=2>大分割</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.放疗技术</p>
			<el-form-item label="放疗技术" prop="preoperative_neoadjuvant_radiotherapy_technology">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_technology">
					<el-radio label=1>3D-RCT</el-radio>
					<el-radio label=2>IMRT</el-radio>
					<el-radio label=3>IGRT</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">3.剂量</p>
			<el-form-item label="剂量(Gy)" prop="preoperative_neoadjuvant_radiotherapy_dose">
				<el-input v-model="Form.preoperative_neoadjuvant_radiotherapy_dose" placeholder="剂量(Gy)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">4.同步化疗方案</p>
			<el-form-item label="同步化疗方案" prop="preoperative_neoadjuvant_radiotherapy_synchro">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_synchro">
					<el-radio label=1>Xeloda</el-radio>
					<el-radio label=2>FOLFOX</el-radio>
					<el-radio label=3>XELOX</el-radio>
					<el-radio label=4>FOLFIRI</el-radio>
					<el-radio label=5>FOLFOXIRI</el-radio>
					<el-radio label=6>贝伐</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff">5.时间</p>
			<el-form-item label="开始时间" prop="preoperative_neoadjuvant_radiotherapy_begin">
				<el-date-picker v-model="Form.preoperative_neoadjuvant_radiotherapy_begin" type="datetime" :default-value="new Date()"
					placeholder="请输入开始时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="结束时间" prop="preoperative_neoadjuvant_radiotherapy_end">
				<el-date-picker v-model="Form.preoperative_neoadjuvant_radiotherapy_end" type="datetime" :default-value="new Date()"
					placeholder="请输入结束时间">
				</el-date-picker>
			</el-form-item>
			<p style="color: #409eff;">6.转移灶治疗效果</p>
			<el-form-item label="转移灶治疗效果" prop="preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect">
					<el-radio label=1>完全缓解</el-radio>
					<el-radio label=2>部分缓解</el-radio>
					<el-radio label=3>疾病稳定</el-radio>
					<el-radio label=4>疾病进展</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">7.原发灶疗效评估</p>
			<el-form-item label="原发灶疗效评估" prop="preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass">
					<el-radio label=1>CR</el-radio>
					<el-radio label=2>PR</el-radio>
					<el-radio label=3>SD</el-radio>
					<el-radio label=4>PD</el-radio>
					<el-radio label=5>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">8.原发灶病理评估</p>
			<el-form-item label="原发灶病理评估" prop="preoperative_neoadjuvant_radiotherapy_primary_pathology_ass">
				<el-radio-group v-model="Form.preoperative_neoadjuvant_radiotherapy_primary_pathology_ass">
					<el-radio label=1>CR</el-radio>
					<el-radio label=2>PR</el-radio>
					<el-radio label=3>SD</el-radio>
					<el-radio label=4>PD</el-radio>
					<el-radio label=5>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<div><strong>肠道狭窄状况评估</strong></div>
			<p style="color: #409eff;">1.肛门排气</p>
			<el-form-item label="肛门排气" prop="preoperative_assessment_intestinal_stenosis_exhaust">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_exhaust">
					<el-radio label=1>正常</el-radio>
					<el-radio label=2>排气减少</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.排便情况</p>
			<el-form-item label="排便情况" prop="preoperative_assessment_intestinal_stenosis_defecate">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_defecate">
					<el-radio label=1>排便正常</el-radio>
					<el-radio label=2>便秘与腹泻交替</el-radio>
					<el-radio label=3>便秘小于1/3日</el-radio>
					<el-radio label=4>便秘小于1/7日</el-radio>
					<el-radio label=5>便秘大于1/7日</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">3.腹胀</p>
			<el-form-item label="腹胀" prop="preoperative_assessment_intestinal_stenosis_distension">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_distension">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>明显</el-radio>
					<el-radio label=3>腹部膨隆</el-radio>
					<el-radio label=4>肠型</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">4.肠镜</p>
			<el-form-item label="肠镜" prop="preoperative_assessment_intestinal_stenosis_enteroscope">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_enteroscope">
					<el-radio label=1>顺利通过</el-radio>
					<el-radio label=2>通过阻力大</el-radio>
					<el-radio label=3>不能通过</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">5.大便形状</p>
			<el-form-item label="大便形状" prop="preoperative_assessment_intestinal_stenosis_shape">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_shape">
					<el-radio label=1>正常成型</el-radio>
					<el-radio label=2>成型变细</el-radio>
					<el-radio label=3>常有糊状便</el-radio>
					<el-radio label=4>黏液糊状便</el-radio>
					<el-radio label=5>仅黏液便或便血或很少粪渣</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">6.CT近端肠管</p>
			<el-form-item label="CT近端肠管" prop="preoperative_assessment_intestinal_stenosis_ct_proximal_bowel">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_ct_proximal_bowel">
					<el-radio label=1>空虚</el-radio>
					<el-radio label=2>干便无扩张</el-radio>
					<el-radio label=3>干便伴扩张</el-radio>
					<el-radio label=4>扩张伴积液但无肠壁肿胀增厚</el-radio>
					<el-radio label=5>扩张积液伴肠壁肿胀增厚</el-radio>
					<el-radio label=6>高度扩张积液</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="CT左结肠最大直径(cm)" prop="preoperative_assessment_intestinal_stenosis_ct_maximum_left">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_ct_maximum_left">
					<el-radio label=1>小于2.5</el-radio>
					<el-radio label=2>2.5-4</el-radio>
					<el-radio label=3>4-6</el-radio>
					<el-radio label=4>7-8</el-radio>
					<el-radio label=5>大于8</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="CT或X造影" prop="preoperative_assessment_intestinal_stenosis_ct_x_imaging">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_ct_x_imaging">
					<el-radio label=1>顺利通过</el-radio>
					<el-radio label=2>造影明显狭窄</el-radio>
					<el-radio label=3>造影不能通过</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="造影肠腔最小径cm" prop="preoperative_assessment_intestinal_stenosis_imaging_smallest">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_imaging_smallest">
					<el-radio label=1>大于2</el-radio>
					<el-radio label=2>2-1</el-radio>
					<el-radio label=3>1-0.5</el-radio>
					<el-radio label=4>小于0.5</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="药物可否缓解便秘" prop="preoperative_assessment_intestinal_stenosis_drugs_relieve">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_drugs_relieve">
					<el-radio label=1>灌肠能缓解</el-radio>
					<el-radio label=2>灌肠不能缓解</el-radio>
					<el-radio label=3>缓泻剂能缓解</el-radio>
					<el-radio label=4>缓泻剂不能缓解</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="服洗肠液" prop="preoperative_assessment_intestinal_stenosis_juice">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_juice">
					<el-radio label=1>排空好</el-radio>
					<el-radio label=2>腹痛胀可排空</el-radio>
					<el-radio label=3>部分排出</el-radio>
					<el-radio label=4>未排便或仅少量排便</el-radio>
					<el-radio label=5>急性肠梗阻</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">7.术前分组</p>
			<el-form-item label="术前分组" prop="preoperative_assessment_intestinal_stenosis_group">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_group">
					<el-radio label=1>T3浅/N0</el-radio>
					<el-radio label=2>T3深/N1</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="评分ASA" prop="preoperative_assessment_intestinal_stenosis_asa">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_asa" placeholder="评分ASA" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">8.新辅助治疗</p>
			<el-form-item label="新辅助治疗" prop="preoperative_assessment_intestinal_stenosis_new_neoadjuvant">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_new_neoadjuvant">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>短程放疗</el-radio>
					<el-radio label=3>长程放疗</el-radio>
					<el-radio label=4>放化疗</el-radio>
					<el-radio label=5>靶向</el-radio>
					<el-radio label=6>介入</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">9.出诊时深静脉血栓评分</p>
			<el-form-item label="出诊时深静脉血栓评分" prop="preoperative_assessment_intestinal_stenosis_autar">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_autar">
					<el-radio label=1>低风险小于等于10分</el-radio>
					<el-radio label=2>中风险11-14分</el-radio>
					<el-radio label=3>高风险大于等于15分</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">10.出诊时最主要化验指标</p>
			<el-form-item label="WBC(*109/L)" prop="preoperative_assessment_intestinal_stenosis_test_wbc">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_wbc" placeholder="WBC(*109/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="Hb(g/L)" prop="preoperative_assessment_intestinal_stenosis_test_hb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_hb" placeholder="Hb(g/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="ALB(g/L)" prop="preoperative_assessment_intestinal_stenosis_test_alb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_alb" placeholder="ALB(g/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="CEA(umol/L)" prop="preoperative_assessment_intestinal_stenosis_test_cea">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_cea" placeholder="CEA(umol/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="ALT" prop="preoperative_assessment_intestinal_stenosis_test_alt">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_alt" placeholder="ALT" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="TB" prop="preoperative_assessment_intestinal_stenosis_test_tb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test_tb" placeholder="TB" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">11.放化疗后主要化验指标</p>
			<el-form-item label="WBC(*109/L)" prop="preoperative_assessment_intestinal_stenosis_test1_wbc">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_wbc" placeholder="WBC(*109/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="Hb(g/L)" prop="preoperative_assessment_intestinal_stenosis_test1_hb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_hb" placeholder="Hb(g/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="ALB(g/L)" prop="preoperative_assessment_intestinal_stenosis_test1_alb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_alb" placeholder="ALB(g/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="CEA(umol/L)" prop="preoperative_assessment_intestinal_stenosis_test1_cea">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_cea" placeholder="CEA(umol/L)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="ALT" prop="preoperative_assessment_intestinal_stenosis_test1_alt">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_alt" placeholder="ALT" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="TB" prop="preoperative_assessment_intestinal_stenosis_test1_tb">
				<el-input v-model="Form.preoperative_assessment_intestinal_stenosis_test1_tb" placeholder="TB" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">12.癌家族史</p>
			<el-form-item label="癌家族史" prop="preoperative_assessment_intestinal_stenosis_cancer_family">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_cancer_family">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>1个家属</el-radio>
					<el-radio label=3>2个家属</el-radio>
					<el-radio label=4>3个以上家属</el-radio>
					<el-radio label=5>FAP家族</el-radio>
					<el-radio label=6>Lynch综合征</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">13.是否肛门测压</p>
			<el-form-item label="是否肛门测验" prop="preoperative_assessment_intestinal_stenosis_manometry">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_manometry">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">14.MDT讨论结果依从性</p>
			<el-form-item label="MDT讨论结果依从性" prop="preoperative_assessment_intestinal_stenosis_mdt_compliance">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_mdt_compliance">
					<el-radio label=1>完全依从</el-radio>
					<el-radio label=2>未完全依从</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">15.未依从原因</p>
			<el-form-item label="未依从原因" prop="preoperative_assessment_intestinal_stenosis_uncompl_reason">
				<el-radio-group v-model="Form.preoperative_assessment_intestinal_stenosis_uncompl_reason">
					<el-radio label=1>经济因素</el-radio>
					<el-radio label=2>病情进展</el-radio>
					<el-radio label=3>医疗因素</el-radio>
				</el-radio-group>
			</el-form-item>
			<div><strong>术中</strong></div>
			<p style="color: #409eff;">1.手术类型</p>
			<el-form-item label="手术类型" prop="intraoperative_operation_type">
				<el-radio-group v-model="Form.intraoperative_operation_type">
					<el-radio label=1>择期</el-radio>
					<el-radio label=2>急诊</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.直肠癌状况</p>
			<el-form-item label="直肠癌状况" prop="intraoperative_colorectal_cancer_situation">
				<el-radio-group v-model="Form.intraoperative_colorectal_cancer_situation">
					<el-radio label=1>无特殊</el-radio>
					<el-radio label=2>不全性肠梗阻</el-radio>
					<el-radio label=3>急性肠梗阻/穿孔</el-radio>
					<el-radio label=4>肠梗阻支架放置后</el-radio>
					<el-radio label=5>大出血</el-radio>
					<el-radio label=6>无梗阻但肠准备差</el-radio>
					<el-radio label=7>复发性直肠癌</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">3.原发病灶</p>
			<el-form-item label="指检-距肛门(cm)" prop="intraoperative_primary_lesion_anus">
				<el-input v-model="Form.intraoperative_primary_lesion_anus" placeholder="指检-距肛门(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肠镜-距肛门(cm)" prop="intraoperative_primary_lesion_anus1">
				<el-input v-model="Form.intraoperative_primary_lesion_anus1" placeholder="肠镜-距肛门(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">4.位置</p>
			<el-form-item label="位置" prop="intraoperative_location">
				<el-radio-group v-model="Form.intraoperative_location">
					<el-radio label=1>反折上</el-radio>
					<el-radio label=2>反折</el-radio>
					<el-radio label=3>反折下</el-radio>
					<el-radio label=4>肛管</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">5.肿瘤侵犯肠管</p>
			<el-form-item label="肿瘤侵犯肠管" prop="intraoperative_tumor_infringe_loop">
				<el-radio-group v-model="Form.intraoperative_tumor_infringe_loop">
					<el-radio label=1>小于等于1/4周</el-radio>
					<el-radio label=2>1/3周</el-radio>
					<el-radio label=3>1/2周</el-radio>
					<el-radio label=4>3/4周</el-radio>
					<el-radio label=5>一周</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">6.肿瘤大小</p>
			<el-form-item label="肿瘤大小(cm)" prop="intraoperative_tumor_size">
				<el-input v-model="Form.intraoperative_tumor_size" placeholder="肿瘤大小a*b(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">7.是否累及反折下直肠前壁</p>
			<el-form-item label="是否累及反折下直肠前壁" prop="intraoperative_antetheca">
				<el-radio-group v-model="Form.intraoperative_antetheca">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">8.肿瘤最深处位于</p>
			<el-form-item label="肿瘤最深处位于" prop="intraoperative_tumor_deepest">
				<el-radio-group v-model="Form.intraoperative_tumor_deepest">
					<el-radio label=1>前</el-radio>
					<el-radio label=2>后</el-radio>
					<el-radio label=3>左侧</el-radio>
					<el-radio label=4>左前</el-radio>
					<el-radio label=5>左后</el-radio>
					<el-radio label=6>右侧</el-radio>
					<el-radio label=7>右前</el-radio>
					<el-radio label=8>右后</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">9.大体分型</p>
			<el-form-item label="大体分型" prop="intraoperative_classification">
				<el-radio-group v-model="Form.intraoperative_classification">
					<el-radio label=1>肿块</el-radio>
					<el-radio label=2>溃疡型</el-radio>
					<el-radio label=3>侵润型</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">10.穿孔</p>
			<el-form-item label="穿孔" prop="intraoperative_perforate">
				<el-radio-group v-model="Form.intraoperative_perforate">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">11.是否侵犯肠周组织器官</p>
			<el-form-item label="是否侵犯肠周组织器官" prop="intraoperative_circumference">
				<el-radio-group v-model="Form.intraoperative_circumference">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="受侵组织器官情况" prop="intraoperative_invaded_tissues_and_organ_situation">
				<el-input v-model="Form.intraoperative_invaded_tissues_and_organ_situation" placeholder="受侵组织器官情况" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">12.远处转移</p>
			<el-form-item label="远处转移" prop="intraoperative_distance_metastasis">
				<el-radio-group v-model="Form.intraoperative_distance_metastasis">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">13.转移部位</p>
			<el-form-item label="转移部位" prop="intraoperative_metastasis_part">
				<el-radio-group v-model="Form.intraoperative_metastasis_part">
					<el-radio label=1>腹膜转移</el-radio>
					<el-radio label=2>肝转移</el-radio>
					<el-radio label=3>肺转移</el-radio>
					<el-radio label=4>骨转移</el-radio>
					<el-radio label=5>淋巴转移</el-radio>
					<el-radio label=6>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">14.根治度</p>
			<el-form-item label="根治度" prop="intraoperative_degree_cure">
				<el-radio-group v-model="Form.intraoperative_degree_cure">
					<el-radio label=1>根治术</el-radio>
					<el-radio label=2>姑息术</el-radio>
					<el-radio label=3>无法切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">15.手术方式</p>
			<el-form-item label="手术方式" prop="intraoperative_opera_way">
				<el-radio-group v-model="Form.intraoperative_opera_way">
					<el-radio label=1>开腹</el-radio>
					<el-radio label=2>腹腔镜</el-radio>
					<el-radio label=3>手辅助</el-radio>
					<el-radio label=4>腔镜中转</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="中转原因" prop="intraoperative_opera_way_reason">
				<el-input v-model="Form.intraoperative_opera_way_reason" placeholder="中转原因" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">16.切除术式</p>
			<el-form-item label="切除术式" prop="intraoperative_remove_way">
				<el-radio-group v-model="Form.intraoperative_remove_way">
					<el-radio label=1>MILES</el-radio>
					<el-radio label=2>ELAPE</el-radio>
					<el-radio label=3>Dixon</el-radio>
					<el-radio label=4>Dixon拖出DST</el-radio>
					<el-radio label=5>Hartmann</el-radio>
					<el-radio label=6>经肛局切</el-radio>
					<el-radio label=7>ISR或Parks改良</el-radio>
					<el-radio label=8>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">17.淋巴结清扫</p>
			<el-form-item label="淋巴结清扫" prop="intraoperative_lymph_node_clean">
				<el-radio-group v-model="Form.intraoperative_lymph_node_clean">
					<el-radio label=1>D1</el-radio>
					<el-radio label=2>D2</el-radio>
					<el-radio label=3>D3</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">18.侧方清扫</p>
			<el-form-item label="侧方清扫" prop="intraoperative_side_clean">
				<el-radio-group v-model="Form.intraoperative_side_clean">
					<el-radio label=1>否</el-radio>
					<el-radio label=2>左侧</el-radio>
					<el-radio label=3>右侧</el-radio>
					<el-radio label=4>双侧</el-radio>
					<el-radio label=5>超范围</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">19.吻合方式</p>
			<el-form-item label="吻合方式" prop="intraoperative_fit_way">
				<el-radio-group v-model="Form.intraoperative_fit_way">
					<el-radio label=1>端侧</el-radio>
					<el-radio label=2>端端</el-radio>
					<el-radio label=3>J-pouch</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">20.预防性造瘘</p>
			<el-form-item label="预防性造瘘" prop="intraoperative_pre_fistulation">
				<el-radio-group v-model="Form.intraoperative_pre_fistulation">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">21.重建方式</p>
			<el-form-item label="重建方式" prop="intraoperative_rebuilt_way">
				<el-radio-group v-model="Form.intraoperative_rebuilt_way">
					<el-radio label=1>结肛</el-radio>
					<el-radio label=2>结直肠</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">22.结肛吻合方法</p>
			<el-form-item label="结肛吻合方法" prop="intraoperative_anal_fit_way">
				<el-radio-group v-model="Form.intraoperative_anal_fit_way">
					<el-radio label=1>手工</el-radio>
					<el-radio label=2>器械</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">23.吻合器大小</p>
			<el-form-item label="吻合器大小" prop="intraoperative_stapling_size">
				<el-radio-group v-model="Form.intraoperative_stapling_size">
					<el-radio label=1>29mm</el-radio>
					<el-radio label=2>33mm</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">24.吻合口距肛门(cm)</p>
			<el-form-item label="吻合口距肛门(cm)" prop="intraoperative_anastomotic_distance">
				<el-input v-model="Form.intraoperative_anastomotic_distance" placeholder="吻合口距肛门(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">25.放置肛管</p>
			<el-form-item label="放置肛管" prop="intraoperative_anal_canal">
				<el-radio-group v-model="Form.intraoperative_anal_canal">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">26.游离脾曲</p>
			<el-form-item label="游离脾曲" prop="intraoperative_spleen">
				<el-radio-group v-model="Form.intraoperative_spleen">
					<el-radio label=1>完全</el-radio>
					<el-radio label=2>脾曲下</el-radio>
					<el-radio label=3>降结肠</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">27.预判CRM</p>
			<el-form-item label="预判CRM" prop="intraoperative_predict_crm">
				<el-radio-group v-model="Form.intraoperative_predict_crm">
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>不确切</el-radio>
					<el-radio label=3>阴性</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">28.系膜完整性自评</p>
			<el-form-item label="保肛手术" prop="intraoperative_self_evaluation_mesangial_integrity_anus">
				<el-radio-group v-model="Form.intraoperative_self_evaluation_mesangial_integrity_anus">
					<el-radio label=1>3a</el-radio>
					<el-radio label=2>3b</el-radio>
					<el-radio label=3>3c</el-radio>
					<el-radio label=4>2</el-radio>
					<el-radio label=5>1a</el-radio>
					<el-radio label=6>1b</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="手术Miles" prop="intraoperative_self_evaluation_mesangial_integrity_operate">
				<el-radio-group v-model="Form.intraoperative_self_evaluation_mesangial_integrity_operate">
					<el-radio label=1>A(差)</el-radio>
					<el-radio label=2>B(标准)</el-radio>
					<el-radio label=3>C(超标准)</el-radio>
					<el-radio label=4>D(柱状切除)</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">29.局部根治度</p>
			<el-form-item label="局部根治度" prop="intraoperative_part_degree_cure">
				<el-radio-group v-model="Form.intraoperative_part_degree_cure">
					<el-radio label=1>R0</el-radio>
					<el-radio label=2>R1</el-radio>
					<el-radio label=3>R2</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">30.癌残留部位</p>
			<el-form-item label="癌残留部位" prop="intraoperative_cancer_residual_part">
				<el-input v-model="Form.intraoperative_cancer_residual_part" placeholder="癌残留部位" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">31.联合脏器切除</p>
			<el-form-item label="联合脏器切除" prop="intraoperative_unit_viscera_remove">
				<el-radio-group v-model="Form.intraoperative_unit_viscera_remove">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>右</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="切除器官" prop="intraoperative_remove_organ">
				<el-input v-model="Form.intraoperative_remove_organ" placeholder="切除器官" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="切除原因" prop="intraoperative_remove_reason">
				<el-input v-model="Form.intraoperative_remove_reason" placeholder="切除原因" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="离体前远切缘(cm)" prop="intraoperative_distal_incisor_margin_from_anterior">
				<el-input v-model="Form.intraoperative_distal_incisor_margin_from_anterior" placeholder="离体前远切缘(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="离体前近切缘(cm)" prop="intraoperative_proximal_to_the_anterior_margin_of_the_body">
				<el-input v-model="Form.intraoperative_proximal_to_the_anterior_margin_of_the_body" placeholder="离体前近切缘(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="淋巴结清出总数(枚)" prop="intraoperative_lymph_node_clear_out_num">
				<el-input v-model="Form.intraoperative_lymph_node_clear_out_num" placeholder="淋巴结清出总数(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤10cm以内LN(枚)" prop="intraoperative_ln_within_10cm_of_the_tumor">
				<el-input v-model="Form.intraoperative_ln_within_10cm_of_the_tumor" placeholder="距肿瘤10cm以内LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤10-15cmLN(枚)" prop="intraoperative_ln_within_10_15cm_of_the_tumor">
				<el-input v-model="Form.intraoperative_ln_within_10_15cm_of_the_tumor" placeholder="距肿瘤10-15cmLN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="15cm以上LN(枚)" prop="intraoperative_ln_within_above_15cm_of_the_tumor">
				<el-input v-model="Form.intraoperative_ln_within_above_15cm_of_the_tumor" placeholder="15cm以上LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="中央组LN(枚)" prop="intraoperative_central_group_ln">
				<el-input v-model="Form.intraoperative_central_group_ln" placeholder="中央组LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="左侧侧方淋巴结(枚)" prop="intraoperative_lymph_node_left">
				<el-input v-model="Form.intraoperative_lymph_node_left" placeholder="左侧侧方淋巴结(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="右侧侧方淋巴结(枚)" prop="intraoperative_lymph_node_right">
				<el-input v-model="Form.intraoperative_lymph_node_right" placeholder="右侧侧方淋巴结(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">32.完全TME时</p>
			<el-form-item label="盆壁有无系膜组织残留" prop="intraoperative_completely_tme_residual_basin_wall_tissue">
				<el-radio-group v-model="Form.intraoperative_completely_tme_residual_basin_wall_tissue">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="残留" prop="intraoperative_completely_tme_residual_basin_wall_tissue_spec">
				<el-radio-group v-model="Form.intraoperative_completely_tme_residual_basin_wall_tissue_spec">
					<el-radio label=1>点状系膜残留，最大系膜残留小于1*1cm</el-radio>
					<el-radio label=2>薄片状系膜残留(面积大于1*1，厚度小于0.5cm)</el-radio>
					<el-radio label=3>明显系膜残留(残留面积大于1*1cm，且厚度大于0.5cm)</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="残留部位" prop="intraoperative_completely_tme_residual_basin_wall_tissue_loca">
				<el-radio-group v-model="Form.intraoperative_completely_tme_residual_basin_wall_tissue_loca">
					<el-radio label=1>盆前壁</el-radio>
					<el-radio label=2>盆左侧壁</el-radio>
					<el-radio label=3>盆右侧壁</el-radio>
					<el-radio label=4>盆底肌表面</el-radio>
					<el-radio label=5>骨盆出口</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">33.盆腔明显出血部位</p>
			<el-form-item label="盆腔明显出血部位" prop="intraoperative_pelvic_area_of_obvious_bleeding">
				<el-radio-group v-model="Form.intraoperative_pelvic_area_of_obvious_bleeding">
					<el-radio label=1>左NVB</el-radio>
					<el-radio label=2>右NVB</el-radio>
					<el-radio label=3>左SV尾部</el-radio>
					<el-radio label=4>右SV尾部</el-radio>
					<el-radio label=5>左盆丛</el-radio>
					<el-radio label=6>右盆丛</el-radio>
					<el-radio label=7>SV-P交界</el-radio>
					<el-radio label=8>会阴体</el-radio>
					<el-radio label=9>骶前</el-radio>
					<el-radio label=10>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">34.盆神经受损</p>
			<el-form-item label="盆神经受损" prop="intraoperative_pelvic_nerve_damage">
				<el-radio-group v-model="Form.intraoperative_pelvic_nerve_damage">
					<el-radio label=1>左NVB</el-radio>
					<el-radio label=2>右NVB</el-radio>
					<el-radio label=3>左盆丛</el-radio>
					<el-radio label=4>右盆丛</el-radio>
					<el-radio label=5>交通支</el-radio>
					<el-radio label=6>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">35.止血方法</p>
			<el-form-item label="止血方法" prop="intraoperative_hemostatic_method">
				<el-radio-group v-model="Form.intraoperative_hemostatic_method">
					<el-radio label=1>超声刀</el-radio>
					<el-radio label=2>电凝</el-radio>
					<el-radio label=3>缝扎</el-radio>
					<el-radio label=4>压迫</el-radio>
					<el-radio label=5>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">36.手术时间min</p>
			<el-form-item label="手术时间min" prop="intraoperative_operation_time_min">
				<el-input v-model="Form.intraoperative_operation_time_min" placeholder="手术时间min" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">37.切口长度min</p>
			<el-form-item label="切口长度min" prop="intraoperative_length_of_the_incision">
				<el-input v-model="Form.intraoperative_length_of_the_incision" placeholder="切口长度min" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">38.术中出血量ml</p>
			<el-form-item label="术中出血量ml" prop="intraoperative_bleeding">
				<el-input v-model="Form.intraoperative_bleeding" placeholder="术中出血量ml" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">39.输血</p>
			<el-form-item label="术中输血" prop="intraoperative_blood_transfusion">
				<el-radio-group v-model="Form.intraoperative_blood_transfusion">
					<el-radio label=1>有</el-radio>
					<el-radio label=2>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术中输血原因" prop="intraoperative_blood_transfusion_reason">
				<el-radio-group v-model="Form.intraoperative_blood_transfusion_reason">
					<el-radio label=1>出血</el-radio>
					<el-radio label=2>术前贫血</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="输血成分" prop="intraoperative_composition_blood_transfusion">
				<el-radio-group v-model="Form.intraoperative_composition_blood_transfusion">
					<el-radio label=1>血浆</el-radio>
					<el-radio label=2>红晕</el-radio>
					<el-radio label=3>全血</el-radio>
					<el-radio label=4>血小板</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="量(ml)" prop="intraoperative_blood_transfusion_volume">
				<el-input v-model="Form.intraoperative_blood_transfusion_volume" placeholder="量(ml)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">40.术中腹腔化疗</p>
			<el-form-item label="术中腹腔化疗" prop="intraoperative_intraperitoneal_chemotherapy">
				<el-radio-group v-model="Form.intraoperative_intraperitoneal_chemotherapy">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="药物名称" prop="intraoperative_intraperitoneal_chemotherapy_drug_name">
				<el-input v-model="Form.intraoperative_intraperitoneal_chemotherapy_drug_name" placeholder="药物名称" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="用药剂量" prop="intraoperative_intraperitoneal_chemotherapy_dose">
				<el-input v-model="Form.intraoperative_intraperitoneal_chemotherapy_dose" placeholder="用药剂量" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">41.术中并发症</p>
			<el-form-item label="术中并发症" prop="intraoperative_complication">
				<el-radio-group v-model="Form.intraoperative_complication">
					<el-radio label=1>有</el-radio>
					<el-radio label=2>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="并发症描述" prop="intraoperative_complication_describe">
				<el-input v-model="Form.intraoperative_complication_describe" placeholder="并发症描述" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<div><strong>肝脏手术情况</strong></div>
			<p style="color: #409eff;">1.肝脏手术时间</p>
			<el-form-item label="肝脏手术时间" prop="liver_surgery_time_choose">
				<el-radio-group v-model="Form.liver_surgery_time_choose">
					<el-radio label=1>同时性</el-radio>
					<el-radio label=2>同时性(术后6月)</el-radio>
					<el-radio label=3>异时性</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.转移情况</p>
			<el-form-item label="转移情况" prop="liver_surgery_tran">
				<el-radio-group v-model="Form.liver_surgery_tran">
					<el-radio label=1>0组(可切)</el-radio>
					<el-radio label=2>1组(转化)</el-radio>
					<el-radio label=3>2</el-radio>
					<el-radio label=4>3</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">3.诊断时间</p>
			<el-form-item label="距初诊(月)" prop="liver_surgery_diagnosis_from_first">
				<el-input v-model="Form.liver_surgery_diagnosis_from_first" placeholder="距初诊(月)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距初手术(月)" prop="liver_surgery_diagnosis_from_first_surgery">
				<el-input v-model="Form.liver_surgery_diagnosis_from_first_surgery" placeholder="距初手术(月)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距辅助化疗(月)" prop="liver_surgery_diagnosis_from_neo">
				<el-input v-model="Form.liver_surgery_diagnosis_from_neo" placeholder="距辅助化疗(月)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">4.肝术前治疗</p>
			<el-form-item label="肝术前治疗" prop="liver_surgery_treat">
				<el-radio-group v-model="Form.liver_surgery_treat">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>化疗</el-radio>
					<el-radio label=3>射频</el-radio>
					<el-radio label=4>TACE或HAI</el-radio>
					<el-radio label=5>微波</el-radio>
					<el-radio label=6>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">5.肝外病灶</p>
			<el-form-item label="肝外病灶" prop="liver_surgery_gw">
				<el-radio-group v-model="Form.liver_surgery_gw">
					<el-radio label=1>原发性</el-radio>
					<el-radio label=2>肠周LN</el-radio>
					<el-radio label=3>远处LN</el-radio>
					<el-radio label=4>肺</el-radio>
					<el-radio label=5>骨</el-radio>
					<el-radio label=6>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">6.可切除性</p>
			<el-form-item label="可切除性" prop="liver_surgery_possible">
				<el-radio-group v-model="Form.liver_surgery_possible">
					<el-radio label=1>可切除</el-radio>
					<el-radio label=2>可根治放疗</el-radio>
					<el-radio label=3>不可切</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">7.是否PET</p>
			<el-form-item label="是否PET" prop="liver_surgery_pet">
				<el-radio-group v-model="Form.liver_surgery_pet">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">8.分级</p>
			<el-form-item label="分级" prop="liver_surgery_child">
				<el-radio-group v-model="Form.liver_surgery_child">
					<el-radio label=1>A</el-radio>
					<el-radio label=2>B</el-radio>
					<el-radio label=3>C</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="吲哚氰绿实验(%)" prop="liver_surgery_indole_cyanide_green_test">
				<el-input v-model="Form.liver_surgery_indole_cyanide_green_test" placeholder="吲哚氰绿实验(%)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">9.肝脏背景</p>
			<el-form-item label="肝脏背景" prop="liver_surgery_background">
				<el-radio-group v-model="Form.liver_surgery_background">
					<el-radio label=1>无</el-radio>
					<el-radio label=2>乙肝</el-radio>
					<el-radio label=3>丙肝</el-radio>
					<el-radio label=4>肝炎性肝硬化</el-radio>
					<el-radio label=5>酒精肝硬化</el-radio>
					<el-radio label=6>脂肪肝</el-radio>
					<el-radio label=7>化疗</el-radio>
					<el-radio label=8>肝手术</el-radio>
					<el-radio label=9>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">10.术前瘤转移</p>
			<el-form-item label="转移瘤数(个)" prop="liver_surgery_metastaticl">
				<el-input v-model="Form.liver_surgery_metastaticl" placeholder="转移瘤数(个)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径(mm)" prop="liver_surgery_metastaticl_max">
				<el-input v-model="Form.liver_surgery_metastaticl_max" placeholder="最大直径(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="最大直径和大于等于1cm者(mm)" prop="liver_surgery_metastaticl_max_and_1_cm">
				<el-input v-model="Form.liver_surgery_metastaticl_max_and_1_cm" placeholder="最大直径和大于等于1cm者(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">11.病灶部位</p>
			<el-form-item label="病灶部位" prop="liver_surgery_lesion">
				<el-radio-group v-model="Form.liver_surgery_lesion">
					<el-radio label=1>1</el-radio>
					<el-radio label=2>2</el-radio>
					<el-radio label=3>3</el-radio>
					<el-radio label=4>4</el-radio>
					<el-radio label=5>5</el-radio>
					<el-radio label=6>6</el-radio>
					<el-radio label=7>7</el-radio>
					<el-radio label=8>8</el-radio>
					<el-radio label=9>尾叶</el-radio>
					<el-radio label=10>门脉旁 肝V旁</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">12.肝切除</p>
			<el-form-item label="肝切除" prop="liver_surgery_resection">
				<el-radio-group v-model="Form.liver_surgery_resection">
					<el-radio label=1>同期</el-radio>
					<el-radio label=2>分期</el-radio>
					<el-radio label=3>分次</el-radio>
					<el-radio label=4>再次</el-radio>
					<el-radio label=5>未手术</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">13.手术方式</p>
			<el-form-item label="手术方式" prop="liver_surgery_operate_type">
				<el-radio-group v-model="Form.liver_surgery_operate_type">
					<el-radio label=1>半肝切除</el-radio>
					<el-radio label=2>肝叶或段切除</el-radio>
					<el-radio label=3>肿瘤挖出</el-radio>
					<el-radio label=4>射频</el-radio>
					<el-radio label=5>酒精消融</el-radio>
					<el-radio label=6>门静脉栓塞</el-radio>
					<el-radio label=7>微波</el-radio>
					<el-radio label=8>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">14.术中发现病灶</p>
			<el-form-item label="术中发现病灶数(枚)" prop="liver_surgery_num_of_lesion">
				<el-input v-model="Form.liver_surgery_num_of_lesion" placeholder="术中发现病灶数(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="切除病灶数(枚)" prop="liver_surgery_removal_lesion">
				<el-input v-model="Form.liver_surgery_removal_lesion" placeholder="切除病灶数(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="消融病灶(枚)" prop="liver_surgery_ablation_lesion">
				<el-input v-model="Form.liver_surgery_ablation_lesion" placeholder="消融病灶(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="切除病灶最大直径no4(枚)" prop="liver_surgery_removal_lesion_max_diameter">
				<el-input v-model="Form.liver_surgery_removal_lesion_max_diameter" placeholder="切除病灶最大直径no4(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="切除病灶直径和>=cmno5(枚)" prop="liver_surgery_removal_lesion_over_cmno5">
				<el-input v-model="Form.liver_surgery_removal_lesion_over_cmno5" placeholder="切除病灶直径和>=cmno5(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="遗漏病灶(枚)" prop="liver_surgery_missing_lesion">
				<el-input v-model="Form.liver_surgery_missing_lesion" placeholder="遗漏病灶(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">15.遗漏病灶部位</p>
			<el-form-item label="遗漏病灶部位" prop="liver_surgery_missing_lesion_location">
				<el-radio-group v-model="Form.liver_surgery_missing_lesion_location">
					<el-radio label=1>1</el-radio>
					<el-radio label=2>2</el-radio>
					<el-radio label=3>3</el-radio>
					<el-radio label=4>4</el-radio>
					<el-radio label=5>5</el-radio>
					<el-radio label=6>6</el-radio>
					<el-radio label=7>7</el-radio>
					<el-radio label=8>8</el-radio>
					<el-radio label=9>尾叶</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">16.肝脏手术名称</p>
			<el-form-item label="肝脏手术名称" prop="liver_surgery_name">
				<el-input v-model="Form.liver_surgery_name" placeholder="肝脏手术名称" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<div><strong>术后情况</strong></div>
			<p style="color: #409eff;">1.肛门排气</p>
			<el-form-item label="肛门排气(h)" prop="postoperative_anus_exhaust">
				<el-input v-model="Form.postoperative_anus_exhaust" placeholder="肛门排气(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">2.拔出胃管</p>
			<el-form-item label="拔出胃管(h)" prop="postoperative_pull_out_tube">
				<el-input v-model="Form.postoperative_pull_out_tube" placeholder="拔出胃管(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">3.是否到SICU</p>
			<el-form-item label="是否到SICU" prop="postoperative_sicu">
				<el-radio-group v-model="Form.postoperative_sicu">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">4.SICU观察时间</p>
			<el-form-item label="SICU观察时间(h)" prop="postoperative_sicu_observation">
				<el-input v-model="Form.postoperative_sicu_observation" placeholder="SICU观察时间(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">5.进食流质</p>
			<el-form-item label="进食流质(h)" prop="postoperative_eating_liquid">
				<el-input v-model="Form.postoperative_eating_liquid" placeholder="进食流质(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">6.进食软质</p>
			<el-form-item label="进食软质(h)" prop="postoperative_eating_pap">
				<el-input v-model="Form.postoperative_eating_pap" placeholder="进食软质(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">7.呼吸机支持</p>
			<el-form-item label="呼吸机支持" prop="postoperative_ventilator_support">
				<el-radio-group v-model="Form.postoperative_ventilator_support">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">8.呼吸机支持时间</p>
			<el-form-item label="呼吸机支持时间(h)" prop="postoperative_ventilator_support_time_hour">
				<el-input v-model="Form.postoperative_ventilator_support_time_hour" placeholder="呼吸机支持时间(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">9.吸氧时间</p>
			<el-form-item label="吸氧时间(h)" prop="postoperative_oxygen_time_hour">
				<el-input v-model="Form.postoperative_oxygen_time_hour" placeholder="吸氧时间(h)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">10.总住院天数</p>
			<el-form-item label="总住院天数(天)" prop="postoperative_total_length_stay">
				<el-input v-model="Form.postoperative_total_length_stay" placeholder="总住院天数(天)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">11.术后住院天数</p>
			<el-form-item label="术后住院天数(天)" prop="postoperative_length_stay">
				<el-input v-model="Form.postoperative_length_stay" placeholder="术后住院天数(天)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">12.并发症具体描述</p>
			<el-form-item label="并发症具体描述" prop="postoperative_complication_describe">
				<el-input v-model="Form.postoperative_complication_describe" placeholder="并发症具体描述" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">13.术后并发症</p>
			<el-form-item label="术后并发症" prop="postoperative_complication">
				<el-radio-group v-model="Form.postoperative_complication">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">14.术后并发症具体</p>
			<el-form-item label="术后并发症具体" prop="postoperative_complication_specific">
				<el-checkbox-group v-model="Form.postoperative_complication_specific">
					<el-checkbox label=0 name="postoperative_complication_specific">吻合口瘘</el-checkbox>
					<el-checkbox label=1 name="postoperative_complication_specific">腹腔出血</el-checkbox>
					<el-checkbox label=2 name="postoperative_complication_specific">肠内出血</el-checkbox>
					<el-checkbox label=3 name="postoperative_complication_specific">肠坏死</el-checkbox>
					<el-checkbox label=4 name="postoperative_complication_specific">姨瘘/胆漏</el-checkbox>
					<el-checkbox label=5 name="postoperative_complication_specific">肝脓肿</el-checkbox>
					<el-checkbox label=6 name="postoperative_complication_specific">肝脏血肿</el-checkbox>
					<el-checkbox label=7 name="postoperative_complication_specific">乳糜瘘</el-checkbox>
					<el-checkbox label=8 name="postoperative_complication_specific">腹腔残余感染(脓肿)</el-checkbox>
					<el-checkbox label=9 name="postoperative_complication_specific">炎性肠梗阻/机械性肠梗阻</el-checkbox>
					<el-checkbox label=10 name="postoperative_complication_specific">切口感染</el-checkbox>
					<el-checkbox label=11 name="postoperative_complication_specific">切口裂开</el-checkbox>
					<el-checkbox label=12 name="postoperative_complication_specific">切口疝</el-checkbox>
					<el-checkbox label=13 name="postoperative_complication_specific">肺部感染</el-checkbox>
					<el-checkbox label=14 name="postoperative_complication_specific">泌尿系感染</el-checkbox>
					<el-checkbox label=15 name="postoperative_complication_specific">静脉血栓/肺栓塞</el-checkbox>
					<el-checkbox label=16 name="postoperative_complication_specific">心脏并发症/脑并发症</el-checkbox>
					<el-checkbox label=17 name="postoperative_complication_specific">尿潴流</el-checkbox>
					<el-checkbox label=18 name="postoperative_complication_specific">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<p style="color: #409eff;">15.出院时深静脉血栓评分</p>
			<el-form-item label="出院时深静脉血栓评分" prop="postoperative_discharge_thrombosis_score">
				<el-radio-group v-model="Form.postoperative_discharge_thrombosis_score">
					<el-radio label=1>低风险小于等于10分</el-radio>
					<el-radio label=2>中风险11-14分</el-radio>
					<el-radio label=3>高风险大于等于15分</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">16.围手术期死亡</p>
			<el-form-item label="围手术期死亡" prop="postoperative_perioperative_death">
				<el-radio-group v-model="Form.postoperative_perioperative_death">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">17.死亡原因</p>
			<el-form-item label="死亡原因" prop="postoperative_death_reason">
				<el-input v-model="Form.postoperative_death_reason" placeholder="死亡原因" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">18.出院后发生的并发症</p>
			<el-form-item label="出院后发生的并发症" prop="postoperative_out_hospital_complication">
				<el-input v-model="Form.postoperative_out_hospital_complication" placeholder="出院后发生的并发症" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">19.是否再次手术</p>
			<el-form-item label="是否再次手术" prop="postoperative_surgery_again">
				<el-radio-group v-model="Form.postoperative_surgery_again">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">20.再手术原因</p>
			<el-form-item label="再手术原因" prop="postoperative_surgery_again_reason">
				<el-input v-model="Form.postoperative_surgery_again_reason" placeholder="再手术原因" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<div><strong>病理报告</strong></div>
			<p style="color: #409eff;">1.病理类型</p>
			<el-form-item label="病理类型" prop="pathological_report_type">
				<el-radio-group v-model="Form.pathological_report_type">
					<el-radio label=1>腺癌</el-radio>
					<el-radio label=2>淋巴癌</el-radio>
					<el-radio label=3>间质肿瘤</el-radio>
					<el-radio label=4>其他肿瘤</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">2.组织类型</p>
			<el-form-item label="组织类型" prop="pathological_report_type_1">
				<el-radio-group v-model="Form.pathological_report_type_1">
					<el-radio label=1>乳头状腺癌</el-radio>
					<el-radio label=2>管状腺癌</el-radio>
					<el-radio label=3>黏液腺癌</el-radio>
					<el-radio label=4>印戒细胞癌</el-radio>
					<el-radio label=5>未分化癌</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">3.病理肿瘤大小</p>
			<el-form-item label="病理肿瘤大小(x*x*x cm)" prop="pathological_report_tumor_size">
				<el-input v-model="Form.pathological_report_tumor_size" placeholder="病理肿瘤大小(x*x*x cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">4.最大径</p>
			<el-form-item label="最大径(cm)" prop="pathological_report_max_diameter">
				<el-input v-model="Form.pathological_report_max_diameter" placeholder="最大径(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">5.肿瘤浸润深度</p>
			<el-form-item label="肿瘤浸润深度" prop="pathological_report_tumor_deep">
				<el-radio-group v-model="Form.pathological_report_tumor_deep">
					<el-radio label=1>pTis</el-radio>
					<el-radio label=2>pT1</el-radio>
					<el-radio label=3>pT2</el-radio>
					<el-radio label=4>pT3</el-radio>
					<el-radio label=5>T4a</el-radio>
					<el-radio label=5>T4b</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">6.分化等级</p>
			<el-form-item label="分化等级" prop="pathological_report_rank">
				<el-radio-group v-model="Form.pathological_report_rank">
					<el-radio label=1>Gx</el-radio>
					<el-radio label=2>G1</el-radio>
					<el-radio label=3>G2</el-radio>
					<el-radio label=4>G3</el-radio>
					<el-radio label=5>G4(含印戒及粘液癌)</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">7.pT3肿瘤侵出肌层距离</p>
			<el-form-item label="pT3肿瘤侵出肌层距离(mm)" prop="pathological_report_pt3_distance">
				<el-input v-model="Form.pathological_report_pt3_distance" placeholder="pT3肿瘤侵出肌层距离(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">8.距环周切缘</p>
			<el-form-item label="距环周切缘(mm)" prop="pathological_report_circumferential_cut_edge_distance">
				<el-input v-model="Form.pathological_report_circumferential_cut_edge_distance" placeholder="距环周切缘(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">9.新辅助治疗的病理疗效</p>
			<el-form-item label="新辅助治疗的病理疗效" prop="pathological_report_new_pathology">
				<el-radio-group v-model="Form.pathological_report_new_pathology">
					<el-radio label=1>无新辅助治疗</el-radio>
					<el-radio label=2>无癌细胞残留或仅有黏液</el-radio>
					<el-radio label=3>少有肿瘤残留</el-radio>
					<el-radio label=4>无明显消退</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">10.病检</p>
			<el-form-item label="病检LN(枚)" prop="pathological_report_check_ln">
				<el-input v-model="Form.pathological_report_check_ln" placeholder="病检LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤小于10cm检测LN(枚)" prop="pathological_report_check_less_10_ln">
				<el-input v-model="Form.pathological_report_check_less_10_ln" placeholder="距肿瘤小于10cm检测LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤小于10-15cm检测LN(枚)" prop="pathological_report_check_less_10_15_ln">
				<el-input v-model="Form.pathological_report_check_less_10_15_ln" placeholder="距肿瘤小于10-15cm检测LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="大于15cm检测LN(枚)" prop="pathological_report_check_more_15_ln">
				<el-input v-model="Form.pathological_report_check_more_15_ln" placeholder="大于15cm检测LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="中央组检测LN(枚)" prop="pathological_report_central_group_test_check_ln">
				<el-input v-model="Form.pathological_report_central_group_test_check_ln" placeholder="中央组检测LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">11.病检阳性</p>
			<el-form-item label="病检阳性LN(枚)" prop="pathological_report_check_positive_ln">
				<el-input v-model="Form.pathological_report_check_positive_ln" placeholder="病检阳性LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤小于10cm阳性LN(枚)" prop="pathological_report_check_positive_less_10_ln">
				<el-input v-model="Form.pathological_report_check_positive_less_10_ln" placeholder="距肿瘤小于10cm阳性LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="距肿瘤小于10-15cm阳性LN(枚)" prop="pathological_report_check_positive_less_10_15_ln">
				<el-input v-model="Form.pathological_report_check_positive_less_10_15_ln" placeholder="距肿瘤小于10-15cm阳性LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="大于15cm阳性LN(枚)" prop="pathological_report_check_positive_more_15_ln">
				<el-input v-model="Form.pathological_report_check_positive_more_15_ln" placeholder="大于15cm阳性LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="中央组阳性LN(枚)" prop="pathological_report_central_group_test_check_positive_ln">
				<el-input v-model="Form.pathological_report_central_group_test_check_positive_ln" placeholder="中央组阳性LN(枚)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">12.分期</p>
			<el-form-item label="分期" prop="pathological_report_aging_n">
				<el-radio-group v-model="Form.pathological_report_aging_n">
					<el-radio label=1>N0</el-radio>
					<el-radio label=2>N1a</el-radio>
					<el-radio label=3>N1b</el-radio>
					<el-radio label=4>N1c</el-radio>
					<el-radio label=5>N2a</el-radio>
					<el-radio label=6>N2b</el-radio>
					<el-radio label=7>Nx</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">13.远处转移</p>
			<el-form-item label="远处转移" prop="pathological_report_metastatic">
				<el-radio-group v-model="Form.pathological_report_metastatic">
					<el-radio label=1>Mx</el-radio>
					<el-radio label=2>M0</el-radio>
					<el-radio label=3>M1a</el-radio>
					<el-radio label=4>M1b</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">14.具体部位</p>
			<el-form-item label="具体部位" prop="pathological_report_location">
				<el-input v-model="Form.pathological_report_location" placeholder="具体部位" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">15.近切缘</p>
			<el-form-item label="近切缘" prop="pathological_report_near">
				<el-radio-group v-model="Form.pathological_report_near">
					<el-radio label=1>阴性</el-radio>
					<el-radio label=2>癌残留</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">16.远切缘</p>
			<el-form-item label="远切缘" prop="pathological_report_far">
				<el-radio-group v-model="Form.pathological_report_far">
					<el-radio label=1>阴性</el-radio>
					<el-radio label=2>癌残留</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">17.侵袭淋巴管</p>
			<el-form-item label="侵袭淋巴管" prop="pathological_report_invasion_lymphatics">
				<el-radio-group v-model="Form.pathological_report_invasion_lymphatics">
					<el-radio label=1>有</el-radio>
					<el-radio label=2>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">18.侵袭静脉</p>
			<el-form-item label="侵袭静脉" prop="pathological_report_invasion_vein">
				<el-radio-group v-model="Form.pathological_report_invasion_vein">
					<el-radio label=1>有</el-radio>
					<el-radio label=2>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">19.侵袭神经</p>
			<el-form-item label="侵袭神经" prop="pathological_report_invasion_neural">
				<el-radio-group v-model="Form.pathological_report_invasion_neural">
					<el-radio label=1>有</el-radio>
					<el-radio label=2>无</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">20.癌旁黏膜病变</p>
			<el-form-item label="癌旁黏膜病变" prop="pathological_report_paracancer_mucosal_lesion">
				<el-radio-group v-model="Form.pathological_report_paracancer_mucosal_lesion">
					<el-radio label=1>无腺癌</el-radio>
					<el-radio label=2>腺瘤</el-radio>
					<el-radio label=3>FAP</el-radio>
					<el-radio label=4>UC</el-radio>
					<el-radio label=5>CD</el-radio>
					<el-radio label=6>憩室炎</el-radio>
					<el-radio label=7>同时性多源癌</el-radio>
					<el-radio label=8>血吸虫病</el-radio>
					<el-radio label=9>其他癌旁病便</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">21.病理系膜完整度</p>
			<el-form-item label="病理系膜完整度" prop="pathological_report_paracancer_mesangial_integrity">
				<el-radio-group v-model="Form.pathological_report_paracancer_mesangial_integrity">
					<el-radio label=1>3a</el-radio>
					<el-radio label=2>3b</el-radio>
					<el-radio label=3>3c</el-radio>
					<el-radio label=4>2</el-radio>
					<el-radio label=5>1a</el-radio>
					<el-radio label=6>1b</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">22.病理</p>
			<el-form-item label="病理" prop="pathological_report_miles">
				<el-radio-group v-model="Form.pathological_report_miles">
					<el-radio label=1>差</el-radio>
					<el-radio label=2>标准</el-radio>
					<el-radio label=3>超标准</el-radio>
					<el-radio label=4>柱状切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">23.分期</p>
			<el-form-item label="分期" prop="pathological_report_ptnm">
				<el-radio-group v-model="Form.pathological_report_ptnm">
					<el-radio label=1>0</el-radio>
					<el-radio label=2>1</el-radio>
					<el-radio label=3>2A</el-radio>
					<el-radio label=4>2B</el-radio>
					<el-radio label=5>2C</el-radio>
					<el-radio label=6>3A</el-radio>
					<el-radio label=7>3B</el-radio>
					<el-radio label=8>3C</el-radio>
					<el-radio label=9>4A</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">24.CRM</p>
			<el-form-item label="CRM" prop="pathological_report_crm">
				<el-radio-group v-model="Form.pathological_report_crm">
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>阴性</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">25.肿瘤侵出肌层</p>
			<el-form-item label="肿瘤侵出肌层(mm)" prop="pathological_report_tumor_invade_muscular_layer">
				<el-input v-model="Form.pathological_report_tumor_invade_muscular_layer" placeholder="肿瘤侵出肌层(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">26.肿瘤距切缘最近</p>
			<el-form-item label="肿瘤距切缘最近(mm)" prop="pathological_report_tumor_cut_edge_near">
				<el-input v-model="Form.pathological_report_tumor_cut_edge_near" placeholder="肿瘤距切缘最近(mm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<p style="color: #409eff;">27.pT3肿瘤累及系膜深度</p>
			<el-form-item label="pT3肿瘤累及系膜深度" prop="pathological_report_pt3_tumor_involves_mesangium_deep">
				<el-radio-group v-model="Form.pathological_report_pt3_tumor_involves_mesangium_deep">
					<el-radio label=1>小于1/3</el-radio>
					<el-radio label=2>1/3</el-radio>
					<el-radio label=3>2/3</el-radio>
					<el-radio label=4>大于2/3</el-radio>
				</el-radio-group>
			</el-form-item>
			<p style="color: #409eff;">28.术后肝脏病理评分</p>
			<el-form-item label="术后肝脏病理评分Ishak" prop="pathological_report_liver_pathological_score">
				<el-input v-model="Form.pathological_report_liver_pathological_score" placeholder="术后肝脏病理评分Ishak" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="评分DILI-PSS" prop="pathological_report_dili_pss">
				<el-input v-model="Form.pathological_report_dili_pss" placeholder="评分DILI-PSS" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="具体描述" prop="pathological_report_describe">
				<el-input v-model="Form.pathological_report_describe" placeholder="具体描述" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<div><strong>病例信息</strong></div>
			<p style="color: #409eff;">1.病例信息</p>
			<el-form-item label="病历信息录入者" prop="inputting_medical_records">
				<el-input v-model="Form.inputting_medical_records" placeholder="病历信息录入者" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="病历录入是否完整" prop="is_the_record_entry_complete">
				<el-input v-model="Form.is_the_record_entry_complete" placeholder="病历录入是否完整" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="病历信息核查者" prop="medical_records_information_checker">
				<el-input v-model="Form.medical_records_information_checker" placeholder="病历信息核查者" :rows="2"
					type="text"></el-input>
			</el-form-item>
			<div><strong>其他</strong></div>
			<p style="color: #409eff;">1.其他</p>
			<el-form-item label="图片" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="3"
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
							<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
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
				<el-upload ref="videoRef" :headers="{ Authorization: token }" :action="uploadImgServer"
					:on-remove="handleVideoRemove" :on-success="handleVideoSuccess" :auto-upload="true"
					:data="{ basket: 'video' }" :limit="1" multiple :file-list="Form.videoFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
			</el-form-item>
			<el-form-item label="附件" prop='attachment'>
				<el-upload ref="attachmentRef" :headers="{ Authorization: token }" :action="uploadImgServer"
					:on-remove="handleAttachmentRemove" :on-success="handleAttachmentSuccess" :auto-upload="true"
					:data="{ basket: 'attachment' }" :limit="3" multiple :file-list="Form.attachmentFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
			</el-form-item>
			<!-- <el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item> -->
		</el-form>
		<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
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
					img: '',
					hospital_number: '',
					name: '',
					age: '',
					sex: '1',
					national: '',
					id_card: '',
					mobile: '',
					total_money: '',
					remark: '',
					family_contact: '',
					admission_time: '',
					operative_time: '',
					discharge_time: '',
					total_hospital_days: '',
					postoperation_hospital_days: '',
					// 术前
					// 术前合并症及简单描述
					// 术前肠镜{A}
					preoperative_colonoscopy_from_the_anus_a1: '',
					preoperative_colonoscopy_infringement_of_lumen_a2: '',
					preoperative_colonoscopy_whether_the_endoscope_passes_a3: '',
					preoperative_colonoscopy_the_biopsy_results_a4: '',
					// 术前分期{B}
					preoperative_staging_ct_mri_t: '',
					preoperative_staging_ct_mri_leaching_b1: '',
					preoperative_staging_ct_mri_the_deepest_point_is_at_b2: '0',
					preoperative_staging_ct_mri_intestinal_separated_edge_mesangium: '',
					preoperative_staging_ct_mri_t_from_outer_edge_mesangium_b4: '',
					preoperative_staging_ct_mri_n: '',
					preoperative_staging_ct_mri_the_largest_diameter_dmax: '',
					preoperative_staging_ct_mri_number_of_lymph_nodes_no: '',
					preoperative_staging_ct_mri_m: '',
					preoperative_staging_ct_mri_the_largest_diameter_dmax2: '',
					preoperative_staging_ct_mri_t3_mesenterin_and_deep: '0',
					preoperative_staging_ultrasonic_t: '',
					preoperative_staging_ultrasonic_leaching_ultramundane: '',
					preoperative_staging_ultrasonic_n: '',
					preoperative_staging_ultrasonic_the_largest_diameter_d1: '',
					preoperative_staging_ultrasonic_m: '',
					preoperative_staging_ultrasonic_the_largest_diameter_d2: '',
					preoperative_staging_ultrasonic_pet_ct: '',
					preoperative_staging_clinical_t: '',
					preoperative_staging_clinical_n: '',
					preoperative_staging_clinical_m: '0',
					preoperative_staging_intestinal_tract_other: '',
					preoperative_staging_intestinal_tract_location: '',
					preoperative_staging_intestinal_tract_staging_t: '',
					preoperative_staging_intestinal_tract_n: '',
					preoperative_staging_intestinal_tract_unite: '0',
					preoperative_staging_imaging_circumferential_margin_situation: '0',
					preoperative_staging_imaging_circumferential_margin_mdt_discuss: '0',
					preoperative_staging_resectable_primary_lesion: '0',
					preoperative_staging_resectable_transition_lesion: '0',
					preoperative_staging_transition_type: '0',
					preoperative_staging_number_of_liver_metastases: '',
					preoperative_staging_number_of_liver_metastases_dg1: '',
					preoperative_staging_number_of_liver_metastases_dg2: '',
					preoperative_staging_number_of_liver_metastases_location1: '0',
					preoperative_staging_number_of_lung_metastases: '',
					preoperative_staging_number_of_lung_metastases_df1: '',
					preoperative_staging_number_of_lung_metastases_df2: '',
					preoperative_staging_number_of_lung_metastases_location2: '0',
					preoperative_staging_mdt_metastase_suggest1: '0',
					preoperative_staging_mdt_primary_suggest2: '0',
					// 新辅助化疗
					preoperative_neoadjuvant_chemotherapy_plan_project: '0',
					preoperative_neoadjuvant_chemotherapy_begin: '',
					preoperative_neoadjuvant_chemotherapy_end: '',
					preoperative_neoadjuvant_chemotherapy_adverse_response_hb: '',
					preoperative_neoadjuvant_chemotherapy_adverse_response_wbc: '',
					preoperative_neoadjuvant_chemotherapy_adverse_response_gra: '',
					preoperative_neoadjuvant_chemotherapy_adverse_response_plt: '',
					preoperative_neoadjuvant_chemotherapy_liver_function: '',
					preoperative_neoadjuvant_chemotherapy_kidney_function: '',
					preoperative_neoadjuvant_chemotherapy_sickness: '',
					preoperative_neoadjuvant_chemotherapy_diarrhoea: '',
					preoperative_neoadjuvant_chemotherapy_astriction: '',
					preoperative_neoadjuvant_chemotherapy_heart: '',
					preoperative_neoadjuvant_chemotherapy_allergy: '',
					preoperative_neoadjuvant_chemotherapy_skin: '',
					preoperative_neoadjuvant_chemotherapy_nerve: '',
					preoperative_neoadjuvant_chemotherapy_other: '',
					preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy: '0',
					preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy: '0',
					// 新辅助放疗
					preoperative_neoadjuvant_radiotherapy_dismember: '0',
					preoperative_neoadjuvant_radiotherapy_technology: '0',
					preoperative_neoadjuvant_radiotherapy_dose: '',
					preoperative_neoadjuvant_radiotherapy_synchro: '0',
					preoperative_neoadjuvant_radiotherapy_begin: '',
					preoperative_neoadjuvant_radiotherapy_end: '',
					preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect: '0',
					preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass: '0',
					preoperative_neoadjuvant_radiotherapy_primary_pathology_ass: '0',
					// 肠道狭窄状况评估
					preoperative_assessment_intestinal_stenosis_exhaust: '0',
					preoperative_assessment_intestinal_stenosis_defecate: '0',
					preoperative_assessment_intestinal_stenosis_distension: '0',
					preoperative_assessment_intestinal_stenosis_enteroscope: '0',
					preoperative_assessment_intestinal_stenosis_shape: '0',
					preoperative_assessment_intestinal_stenosis_ct_proximal_bowel: '0',
					preoperative_assessment_intestinal_stenosis_ct_maximum_left: '0',
					preoperative_assessment_intestinal_stenosis_ct_x_imaging: '0',
					preoperative_assessment_intestinal_stenosis_imaging_smallest: '0',
					preoperative_assessment_intestinal_stenosis_drugs_relieve: '0',
					preoperative_assessment_intestinal_stenosis_juice: '0',
					preoperative_assessment_intestinal_stenosis_group: '0',
					preoperative_assessment_intestinal_stenosis_asa: '',
					preoperative_assessment_intestinal_stenosis_new_neoadjuvant: '0',
					preoperative_assessment_intestinal_stenosis_autar: '0',
					preoperative_assessment_intestinal_stenosis_test_wbc: '',
					preoperative_assessment_intestinal_stenosis_test_hb: '',
					preoperative_assessment_intestinal_stenosis_test_alb: '',
					preoperative_assessment_intestinal_stenosis_test_cea: '',
					preoperative_assessment_intestinal_stenosis_test_alt: '',
					preoperative_assessment_intestinal_stenosis_test_tb: '',
					preoperative_assessment_intestinal_stenosis_test1_wbc: '',
					preoperative_assessment_intestinal_stenosis_test1_hb: '',
					preoperative_assessment_intestinal_stenosis_test1_alb: '',
					preoperative_assessment_intestinal_stenosis_test1_cea: '',
					preoperative_assessment_intestinal_stenosis_test1_alt: '',
					preoperative_assessment_intestinal_stenosis_test1_tb: '',
					preoperative_assessment_intestinal_stenosis_cancer_family: '0',
					preoperative_assessment_intestinal_stenosis_manometry: '0',
					preoperative_assessment_intestinal_stenosis_mdt_compliance: '0',
					preoperative_assessment_intestinal_stenosis_uncompl_reason: '0',
					// 术中
					intraoperative_operation_type: '0',
					intraoperative_colorectal_cancer_situation: '0',
					intraoperative_primary_lesion_anus: '',
					intraoperative_primary_lesion_anus1: '',
					intraoperative_location: '0',
					intraoperative_tumor_infringe_loop: '0',
					intraoperative_tumor_size: '',
					intraoperative_antetheca: '0',
					intraoperative_tumor_deepest: '0',
					intraoperative_classification: '0',
					intraoperative_perforate: '0',
					intraoperative_circumference: '0',
					intraoperative_invaded_tissues_and_organ_situation: '',
					intraoperative_distance_metastasis: '0',
					intraoperative_metastasis_part: '0',
					intraoperative_degree_cure: '0',
					intraoperative_opera_way: '0',
					intraoperative_opera_way_reason: '',
					intraoperative_remove_way: '0',
					intraoperative_lymph_node_clean: '0',
					intraoperative_side_clean: '0',
					intraoperative_fit_way: '0',
					intraoperative_pre_fistulation: '0',
					intraoperative_rebuilt_way: '0',
					intraoperative_anal_fit_way: '0',
					intraoperative_stapling_size: '0',
					intraoperative_anastomotic_distance: '',
					intraoperative_anal_canal: '0',
					intraoperative_spleen: '0',
					intraoperative_predict_crm: '0',
					intraoperative_self_evaluation_mesangial_integrity_anus: '0',
					intraoperative_self_evaluation_mesangial_integrity_operate: '0',
					intraoperative_part_degree_cure: '0',
					intraoperative_cancer_residual_part: '',
					intraoperative_unit_viscera_remove: '0',
					intraoperative_remove_organ: '',
					intraoperative_remove_reason: '',
					intraoperative_distal_incisor_margin_from_anterior: '',
					intraoperative_proximal_to_the_anterior_margin_of_the_body: '',
					intraoperative_lymph_node_clear_out_num: '',
					intraoperative_ln_within_10cm_of_the_tumor: '',
					intraoperative_ln_within_10_15cm_of_the_tumor: '',
					intraoperative_ln_within_above_15cm_of_the_tumor: '',
					intraoperative_central_group_ln: '',
					intraoperative_lymph_node_left: '',
					intraoperative_lymph_node_right: '',
					intraoperative_completely_tme_residual_basin_wall_tissue: '0',
					intraoperative_completely_tme_residual_basin_wall_tissue_spec: '0',
					intraoperative_completely_tme_residual_basin_wall_tissue_loca: '0',
					intraoperative_pelvic_area_of_obvious_bleeding: '0',
					intraoperative_pelvic_nerve_damage: '0',
					intraoperative_hemostatic_method: '0',
					intraoperative_operation_time_min: '',
					intraoperative_length_of_the_incision: '',
					intraoperative_bleeding: '',
					intraoperative_blood_transfusion: '0',
					intraoperative_blood_transfusion_reason: '0',
					intraoperative_composition_blood_transfusion: '0',
					intraoperative_blood_transfusion_volume: '',
					intraoperative_intraperitoneal_chemotherapy: '0',
					intraoperative_intraperitoneal_chemotherapy_drug_name: '',
					intraoperative_intraperitoneal_chemotherapy_dose: '',
					intraoperative_complication: '0',
					intraoperative_complication_describe: '',
					// 肝脏手术情况
					liver_surgery_time_choose: '0',
					liver_surgery_tran: '0',
					liver_surgery_diagnosis_from_first: '',
					liver_surgery_diagnosis_from_first_surgery: '',
					liver_surgery_diagnosis_from_neo: '',
					liver_surgery_treat: '0',
					liver_surgery_gw: '0',
					liver_surgery_possible: '0',
					liver_surgery_pet: '0',
					liver_surgery_child: '0',
					liver_surgery_indole_cyanide_green_test: '',
					liver_surgery_background: '0',
					liver_surgery_metastaticl: '',
					liver_surgery_metastaticl_max: '',
					liver_surgery_metastaticl_max_and_1_cm: '',
					liver_surgery_lesion: '0',
					liver_surgery_resection: '0',
					liver_surgery_operate_type: '0',
					liver_surgery_num_of_lesion: '',
					liver_surgery_removal_lesion: '',
					liver_surgery_ablation_lesion: '',
					liver_surgery_removal_lesion_max_diameter: '',
					liver_surgery_removal_lesion_over_cmno5: '',
					liver_surgery_missing_lesion: '',
					liver_surgery_missing_lesion_location: '0',
					liver_surgery_name: '',
					// 术后情况
					postoperative_anus_exhaust: '',
					postoperative_pull_out_tube: '',
					postoperative_sicu: '0',
					postoperative_sicu_observation: '',
					postoperative_eating_liquid: '',
					postoperative_eating_pap: '',
					postoperative_ventilator_support: '0',
					postoperative_ventilator_support_time_hour: '',
					postoperative_oxygen_time_hour: '',
					postoperative_total_length_stay: '',
					postoperative_length_stay: '',
					postoperative_complication_describe: '',
					postoperative_complication: '0',
					postoperative_complication_specific: [],
					postoperative_discharge_thrombosis_score: '0',
					postoperative_perioperative_death: '0',
					postoperative_death_reason: '',
					postoperative_out_hospital_complication: '',
					postoperative_surgery_again: '0',
					postoperative_surgery_again_reason: '',
					// 病理报告
					pathological_report_type: '0',
					pathological_report_type_1: '0',
					pathological_report_tumor_size: '',
					pathological_report_max_diameter: '',
					pathological_report_tumor_deep: '0',
					pathological_report_rank: '0',
					pathological_report_pt3_distance: '',
					pathological_report_circumferential_cut_edge_distance: '',
					pathological_report_new_pathology: '0',
					pathological_report_check_ln: '',
					pathological_report_check_less_10_ln: '',
					pathological_report_check_less_10_15_ln: '',
					pathological_report_check_more_15_ln: '',
					pathological_report_central_group_test_check_ln: '',
					pathological_report_check_positive_ln: '',
					pathological_report_check_positive_less_10_ln: '',
					pathological_report_check_positive_less_10_15_ln: '',
					pathological_report_check_positive_more_15_ln: '',
					pathological_report_central_group_test_check_positive_ln: '',
					pathological_report_aging_n: '0',
					pathological_report_metastatic: '0',
					pathological_report_location: '',
					pathological_report_near: '0',
					pathological_report_far: '0',
					pathological_report_invasion_lymphatics: '0',
					pathological_report_invasion_vein: '0',
					pathological_report_invasion_neural: '0',
					pathological_report_paracancer_mucosal_lesion: '0',
					pathological_report_paracancer_mesangial_integrity: '0',
					pathological_report_miles: '0',
					pathological_report_ptnm: '0',
					pathological_report_crm: '0',
					pathological_report_tumor_invade_muscular_layer: '',
					pathological_report_tumor_cut_edge_near: '',
					pathological_report_pt3_tumor_involves_mesangium_deep: '0',
					pathological_report_liver_pathological_score: '',
					pathological_report_dili_pss: '',
					pathological_report_describe: '',
					// 病理录入者
					inputting_medical_records: '',
					is_the_record_entry_complete: '',
					medical_records_information_checker: '',

					disabled: true,
					fileList: [],
					attachmentFileList: [],
					videoFileList: [],
				},
				rules: {
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
					national: [{
						required: true,
						message: '民族必须',
						trigger: ['change'],
					}],
					id_card: [{
						required: true,
						message: '身份证必须',
						trigger: ['change'],
					}],
					mobile: [{
						required: true,
						message: '联系电话必须',
						trigger: ['change'],
					}]
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/back/ColorectalCancers/${id}`).then(res => {
						state.Form = {
							attachment: res.data.attachment_id,
							attachmentFileList: res.data.attachment,
							video: res.data.video_id,
							videoFileList: res.data.video,
							img: res.data.img_id,
							fileList: res.data.img,
							hospital_number: res.data.hospital_number,
							name: res.data.name,
							age: res.data.age,
							sex: String(res.data.sex),
							national: res.data.national,
							id_card: res.data.id_card,
							mobile: res.data.mobile,
							total_money: res.data.total_money,
							remark: res.data.remark,
							family_contact: res.data.family_contact,
							admission_time: res.data.admission_time == '1970-01-01 08:00:00' ? '' : res
								.data.admission_time,
							operative_time: res.data.operative_time == '1970-01-01 08:00:00' ? '' : res
								.data.operative_time,
							discharge_time: res.data.discharge_time == '1970-01-01 08:00:00' ? '' : res
								.data.discharge_time,
							// total_hospital_days: res.data.total_hospital_days,
							// postoperation_hospital_days: res.data.postoperation_hospital_days,
							// 术前
							// 术前肠镜
							preoperative_colonoscopy_from_the_anus_a1: res.data.preoperative_colonoscopy_from_the_anus_a1,
							preoperative_colonoscopy_infringement_of_lumen_a2: res.data.preoperative_colonoscopy_infringement_of_lumen_a2,
							preoperative_colonoscopy_whether_the_endoscope_passes_a3: res.data.preoperative_colonoscopy_whether_the_endoscope_passes_a3,
							preoperative_colonoscopy_the_biopsy_results_a4: res.data.preoperative_colonoscopy_the_biopsy_results_a4,
							// 术前分期
							preoperative_staging_ct_mri_t: res.data.preoperative_staging_ct_mri_t,
							preoperative_staging_ct_mri_leaching_b1: res.data.preoperative_staging_ct_mri_leaching_b1,
							preoperative_staging_ct_mri_the_deepest_point_is_at_b2: String(res.data.preoperative_staging_ct_mri_the_deepest_point_is_at_b2),
							preoperative_staging_ct_mri_intestinal_separated_edge_mesangium: res.data.preoperative_staging_ct_mri_intestinal_separated_edge_mesangium,
							preoperative_staging_ct_mri_t_from_outer_edge_mesangium_b4: res.data.preoperative_staging_ct_mri_t_from_outer_edge_mesangium_b4,
							preoperative_staging_ct_mri_n: res.data.preoperative_staging_ct_mri_n,
							preoperative_staging_ct_mri_the_largest_diameter_dmax: res.data.preoperative_staging_ct_mri_the_largest_diameter_dmax,
							preoperative_staging_ct_mri_number_of_lymph_nodes_no: res.data.preoperative_staging_ct_mri_number_of_lymph_nodes_no,
							preoperative_staging_ct_mri_m: res.data.preoperative_staging_ct_mri_m,
							preoperative_staging_ct_mri_the_largest_diameter_dmax2: res.data.preoperative_staging_ct_mri_the_largest_diameter_dmax2,
							preoperative_staging_ct_mri_t3_mesenterin_and_deep: String(res.data.preoperative_staging_ct_mri_t3_mesenterin_and_deep),
							preoperative_staging_ultrasonic_t: res.data.preoperative_staging_ultrasonic_t,
							preoperative_staging_ultrasonic_leaching_ultramundane: res.data.preoperative_staging_ultrasonic_leaching_ultramundane,
							preoperative_staging_ultrasonic_n: res.data.preoperative_staging_ultrasonic_n,
							preoperative_staging_ultrasonic_the_largest_diameter_d1: res.data.preoperative_staging_ultrasonic_the_largest_diameter_d1,
							preoperative_staging_ultrasonic_m: res.data.preoperative_staging_ultrasonic_m,
							preoperative_staging_ultrasonic_the_largest_diameter_d2: res.data.preoperative_staging_ultrasonic_the_largest_diameter_d2,
							preoperative_staging_ultrasonic_pet_ct: res.data.preoperative_staging_ultrasonic_pet_ct,
							preoperative_staging_clinical_t: res.data.preoperative_staging_clinical_t,
							preoperative_staging_clinical_n: res.data.preoperative_staging_clinical_n,
							preoperative_staging_clinical_m: String(res.data.preoperative_staging_clinical_m),
							preoperative_staging_intestinal_tract_other: String(res.data.preoperative_staging_intestinal_tract_other),
							preoperative_staging_intestinal_tract_location: String(res.data.preoperative_staging_intestinal_tract_location),
							preoperative_staging_intestinal_tract_staging_t: String(res.data.preoperative_staging_intestinal_tract_staging_t),
							preoperative_staging_intestinal_tract_n: res.data.preoperative_staging_intestinal_tract_n,
							preoperative_staging_intestinal_tract_unite: String(res.data.preoperative_staging_intestinal_tract_unite),
							preoperative_staging_imaging_circumferential_margin_situation: String(res.data.preoperative_staging_imaging_circumferential_margin_situation),
							preoperative_staging_imaging_circumferential_margin_mdt_discuss: String(res.data.preoperative_staging_imaging_circumferential_margin_mdt_discuss),
							preoperative_staging_resectable_primary_lesion: String(res.data.preoperative_staging_resectable_primary_lesion),
							preoperative_staging_resectable_transition_lesion: String(res.data.preoperative_staging_resectable_transition_lesion),
							preoperative_staging_transition_type: String(res.data.preoperative_staging_transition_type),
							preoperative_staging_number_of_liver_metastases: res.data.preoperative_staging_number_of_liver_metastases,
							preoperative_staging_number_of_liver_metastases_dg1: res.data.preoperative_staging_number_of_liver_metastases_dg1,
							preoperative_staging_number_of_liver_metastases_dg2: res.data.preoperative_staging_number_of_liver_metastases_dg2,
							preoperative_staging_number_of_liver_metastases_location1: String(res.data.preoperative_staging_number_of_liver_metastases_location1),
							preoperative_staging_number_of_lung_metastases: res.data.preoperative_staging_number_of_lung_metastases,
							preoperative_staging_number_of_lung_metastases_df1: res.data.preoperative_staging_number_of_lung_metastases_df1,
							preoperative_staging_number_of_lung_metastases_df2: res.data.preoperative_staging_number_of_lung_metastases_df2,
							preoperative_staging_number_of_lung_metastases_location2: String(res.data.preoperative_staging_number_of_lung_metastases_location2),
							preoperative_staging_mdt_metastase_suggest1: String(res.data.preoperative_staging_mdt_metastase_suggest1),
							preoperative_staging_mdt_primary_suggest2: String(res.data.preoperative_staging_mdt_primary_suggest2),
							// 新辅助化疗
							preoperative_neoadjuvant_chemotherapy_plan_project: String(res.data.preoperative_neoadjuvant_chemotherapy_plan_project),
							preoperative_neoadjuvant_chemotherapy_begin: res.data.preoperative_neoadjuvant_chemotherapy_begin,
							preoperative_neoadjuvant_chemotherapy_end: res.data.preoperative_neoadjuvant_chemotherapy_end,
							preoperative_neoadjuvant_chemotherapy_adverse_response_hb: res.data.preoperative_neoadjuvant_chemotherapy_adverse_response_hb,
							preoperative_neoadjuvant_chemotherapy_adverse_response_wbc: res.data.preoperative_neoadjuvant_chemotherapy_adverse_response_wbc,
							preoperative_neoadjuvant_chemotherapy_adverse_response_gra: res.data.preoperative_neoadjuvant_chemotherapy_adverse_response_gra,
							preoperative_neoadjuvant_chemotherapy_adverse_response_plt: res.data.preoperative_neoadjuvant_chemotherapy_adverse_response_plt,
							preoperative_neoadjuvant_chemotherapy_liver_function: res.data.preoperative_neoadjuvant_chemotherapy_liver_function,
							preoperative_neoadjuvant_chemotherapy_kidney_function: res.data.preoperative_neoadjuvant_chemotherapy_kidney_function,
							preoperative_neoadjuvant_chemotherapy_sickness: res.data.preoperative_neoadjuvant_chemotherapy_sickness,
							preoperative_neoadjuvant_chemotherapy_diarrhoea: res.data.preoperative_neoadjuvant_chemotherapy_diarrhoea,
							preoperative_neoadjuvant_chemotherapy_astriction: res.data.preoperative_neoadjuvant_chemotherapy_astriction,
							preoperative_neoadjuvant_chemotherapy_heart: res.data.preoperative_neoadjuvant_chemotherapy_heart,
							preoperative_neoadjuvant_chemotherapy_allergy: res.data.preoperative_neoadjuvant_chemotherapy_allergy,
							preoperative_neoadjuvant_chemotherapy_skin: res.data.preoperative_neoadjuvant_chemotherapy_skin,
							preoperative_neoadjuvant_chemotherapy_nerve: res.data.preoperative_neoadjuvant_chemotherapy_nerve,
							preoperative_neoadjuvant_chemotherapy_other: res.data.preoperative_neoadjuvant_chemotherapy_other,
							preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy: String(res.data.preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy),
							preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy: String(res.data.preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy),
							// 新辅助放疗
							preoperative_neoadjuvant_radiotherapy_dismember: String(res.data.preoperative_neoadjuvant_radiotherapy_dismember),
							preoperative_neoadjuvant_radiotherapy_technology: String(res.data.preoperative_neoadjuvant_radiotherapy_technology),
							preoperative_neoadjuvant_radiotherapy_dose: res.data.preoperative_neoadjuvant_radiotherapy_dose,
							preoperative_neoadjuvant_radiotherapy_synchro: String(res.data.preoperative_neoadjuvant_radiotherapy_synchro),
							preoperative_neoadjuvant_radiotherapy_begin: res.data.preoperative_neoadjuvant_radiotherapy_begin,
							preoperative_neoadjuvant_radiotherapy_end: res.data.preoperative_neoadjuvant_radiotherapy_end,
							preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect: String(res.data.preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect),
							preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass: String(res.data.preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass),
							preoperative_neoadjuvant_radiotherapy_primary_pathology_ass: String(res.data.preoperative_neoadjuvant_radiotherapy_primary_pathology_ass),
							// 肠道狭窄状况评估
							preoperative_assessment_intestinal_stenosis_exhaust: String(res.data.preoperative_assessment_intestinal_stenosis_exhaust),
							preoperative_assessment_intestinal_stenosis_defecate: String(res.data.preoperative_assessment_intestinal_stenosis_defecate),
							preoperative_assessment_intestinal_stenosis_distension: String(res.data.preoperative_assessment_intestinal_stenosis_distension),
							preoperative_assessment_intestinal_stenosis_enteroscope: String(res.data.preoperative_assessment_intestinal_stenosis_enteroscope),
							preoperative_assessment_intestinal_stenosis_shape: String(res.data.preoperative_assessment_intestinal_stenosis_shape),
							preoperative_assessment_intestinal_stenosis_ct_proximal_bowel: String(res.data.preoperative_assessment_intestinal_stenosis_ct_proximal_bowel),
							preoperative_assessment_intestinal_stenosis_ct_maximum_left: String(res.data.preoperative_assessment_intestinal_stenosis_ct_maximum_left),
							preoperative_assessment_intestinal_stenosis_ct_x_imaging: String(res.data.preoperative_assessment_intestinal_stenosis_ct_x_imaging),
							preoperative_assessment_intestinal_stenosis_imaging_smallest: String(res.data.preoperative_assessment_intestinal_stenosis_imaging_smallest),
							preoperative_assessment_intestinal_stenosis_drugs_relieve: String(res.data.preoperative_assessment_intestinal_stenosis_drugs_relieve),
							preoperative_assessment_intestinal_stenosis_juice: String(res.data.preoperative_assessment_intestinal_stenosis_juice),
							preoperative_assessment_intestinal_stenosis_group: String(res.data.preoperative_assessment_intestinal_stenosis_group),
							preoperative_assessment_intestinal_stenosis_asa: res.data.preoperative_assessment_intestinal_stenosis_asa,
							preoperative_assessment_intestinal_stenosis_new_neoadjuvant: String(res.data.preoperative_assessment_intestinal_stenosis_new_neoadjuvant),
							preoperative_assessment_intestinal_stenosis_autar: String(res.data.preoperative_assessment_intestinal_stenosis_autar),
							preoperative_assessment_intestinal_stenosis_test_wbc: res.data.preoperative_assessment_intestinal_stenosis_test_wbc,
							preoperative_assessment_intestinal_stenosis_test_hb: res.data.preoperative_assessment_intestinal_stenosis_test_hb,
							preoperative_assessment_intestinal_stenosis_test_alb: res.data.preoperative_assessment_intestinal_stenosis_test_alb,
							preoperative_assessment_intestinal_stenosis_test_cea: res.data.preoperative_assessment_intestinal_stenosis_test_cea,
							preoperative_assessment_intestinal_stenosis_test_alt: res.data.preoperative_assessment_intestinal_stenosis_test_alt,
							preoperative_assessment_intestinal_stenosis_test_tb: res.data.preoperative_assessment_intestinal_stenosis_test_tb,
							preoperative_assessment_intestinal_stenosis_test1_wbc: res.data.preoperative_assessment_intestinal_stenosis_test1_wbc,
							preoperative_assessment_intestinal_stenosis_test1_hb: res.data.preoperative_assessment_intestinal_stenosis_test1_hb,
							preoperative_assessment_intestinal_stenosis_test1_alb: res.data.preoperative_assessment_intestinal_stenosis_test1_alb,
							preoperative_assessment_intestinal_stenosis_test1_cea: res.data.preoperative_assessment_intestinal_stenosis_test1_cea,
							preoperative_assessment_intestinal_stenosis_test1_alt: res.data.preoperative_assessment_intestinal_stenosis_test1_alt,
							preoperative_assessment_intestinal_stenosis_test1_tb: res.data.preoperative_assessment_intestinal_stenosis_test1_tb,
							preoperative_assessment_intestinal_stenosis_cancer_family: String(res.data.preoperative_assessment_intestinal_stenosis_cancer_family),
							preoperative_assessment_intestinal_stenosis_manometry: String(res.data.preoperative_assessment_intestinal_stenosis_manometry),
							preoperative_assessment_intestinal_stenosis_mdt_compliance: String(res.data.preoperative_assessment_intestinal_stenosis_mdt_compliance),
							preoperative_assessment_intestinal_stenosis_uncompl_reason: String(res.data.preoperative_assessment_intestinal_stenosis_uncompl_reason),
							// 术中
							intraoperative_operation_type: String(res.data.intraoperative_operation_type),
							intraoperative_colorectal_cancer_situation: String(res.data.intraoperative_colorectal_cancer_situation),
							intraoperative_primary_lesion_anus: res.data.intraoperative_primary_lesion_anus,
							intraoperative_primary_lesion_anus1: res.data.intraoperative_primary_lesion_anus1,
							intraoperative_location: String(res.data.intraoperative_location),
							intraoperative_tumor_infringe_loop: String(res.data.intraoperative_tumor_infringe_loop),
							intraoperative_tumor_size: res.data.intraoperative_tumor_size,
							intraoperative_antetheca: String(res.data.intraoperative_antetheca),
							intraoperative_tumor_deepest: String(res.data.intraoperative_tumor_deepest),
							intraoperative_classification: String(res.data.intraoperative_classification),
							intraoperative_perforate: String(res.data.intraoperative_perforate),
							intraoperative_circumference: String(res.data.intraoperative_circumference),
							intraoperative_invaded_tissues_and_organ_situation: res.data.intraoperative_invaded_tissues_and_organ_situation,
							intraoperative_distance_metastasis: String(res.data.intraoperative_distance_metastasis),
							intraoperative_metastasis_part: String(res.data.intraoperative_metastasis_part),
							intraoperative_degree_cure: String(res.data.intraoperative_degree_cure),
							intraoperative_opera_way: String(res.data.intraoperative_opera_way),
							intraoperative_opera_way_reason: res.data.intraoperative_opera_way_reason,
							intraoperative_remove_way: String(res.data.intraoperative_remove_way),
							intraoperative_lymph_node_clean: String(res.data.intraoperative_lymph_node_clean),
							intraoperative_side_clean: String(res.data.intraoperative_side_clean),
							intraoperative_fit_way: String(res.data.intraoperative_fit_way),
							intraoperative_pre_fistulation: String(res.data.intraoperative_pre_fistulation),
							intraoperative_rebuilt_way: String(res.data.intraoperative_rebuilt_way),
							intraoperative_anal_fit_way: String(res.data.intraoperative_anal_fit_way),
							intraoperative_stapling_size: String(res.data.intraoperative_stapling_size),
							intraoperative_anastomotic_distance: res.data.intraoperative_anastomotic_distance,
							intraoperative_anal_canal: String(res.data.intraoperative_anal_canal),
							intraoperative_spleen: String(res.data.intraoperative_spleen),
							intraoperative_predict_crm: String(res.data.intraoperative_predict_crm),
							intraoperative_self_evaluation_mesangial_integrity_anus: String(res.data.intraoperative_self_evaluation_mesangial_integrity_anus),
							intraoperative_self_evaluation_mesangial_integrity_operate: String(res.data.intraoperative_self_evaluation_mesangial_integrity_operate),
							intraoperative_part_degree_cure: String(res.data.intraoperative_part_degree_cure),
							intraoperative_cancer_residual_part: res.data.intraoperative_cancer_residual_part,
							intraoperative_unit_viscera_remove: String(res.data.intraoperative_unit_viscera_remove),
							intraoperative_remove_organ: res.data.intraoperative_remove_organ,
							intraoperative_remove_reason: res.data.intraoperative_remove_reason,
							intraoperative_distal_incisor_margin_from_anterior: res.data.intraoperative_distal_incisor_margin_from_anterior,
							intraoperative_proximal_to_the_anterior_margin_of_the_body: res.data.intraoperative_proximal_to_the_anterior_margin_of_the_body,
							intraoperative_lymph_node_clear_out_num: res.data.intraoperative_lymph_node_clear_out_num,
							intraoperative_ln_within_10cm_of_the_tumor: res.data.intraoperative_ln_within_10cm_of_the_tumor,
							intraoperative_ln_within_10_15cm_of_the_tumor: res.data.intraoperative_ln_within_10_15cm_of_the_tumor,
							intraoperative_ln_within_above_15cm_of_the_tumor: res.data.intraoperative_ln_within_above_15cm_of_the_tumor,
							intraoperative_central_group_ln: res.data.intraoperative_central_group_ln,
							intraoperative_lymph_node_left: res.data.intraoperative_lymph_node_left,
							intraoperative_lymph_node_right: res.data.intraoperative_lymph_node_right,
							intraoperative_completely_tme_residual_basin_wall_tissue: String(res.data.intraoperative_completely_tme_residual_basin_wall_tissue),
							intraoperative_completely_tme_residual_basin_wall_tissue_spec: String(res.data.intraoperative_completely_tme_residual_basin_wall_tissue_spec),
							intraoperative_completely_tme_residual_basin_wall_tissue_loca: String(res.data.intraoperative_completely_tme_residual_basin_wall_tissue_loca),
							intraoperative_pelvic_area_of_obvious_bleeding: String(res.data.intraoperative_pelvic_area_of_obvious_bleeding),
							intraoperative_pelvic_nerve_damage: String(res.data.intraoperative_pelvic_nerve_damage),
							intraoperative_hemostatic_method: String(res.data.intraoperative_hemostatic_method),
							intraoperative_operation_time_min: res.data.intraoperative_operation_time_min,
							intraoperative_length_of_the_incision: res.data.intraoperative_length_of_the_incision,
							intraoperative_bleeding: res.data.intraoperative_bleeding,
							intraoperative_blood_transfusion: String(res.data.intraoperative_blood_transfusion),
							intraoperative_blood_transfusion_reason: String(res.data.intraoperative_blood_transfusion_reason),
							intraoperative_composition_blood_transfusion: String(res.data.intraoperative_composition_blood_transfusion),
							intraoperative_blood_transfusion_volume: res.data.intraoperative_blood_transfusion_volume,
							intraoperative_intraperitoneal_chemotherapy: String(res.data.intraoperative_intraperitoneal_chemotherapy),
							intraoperative_intraperitoneal_chemotherapy_drug_name: res.data.intraoperative_intraperitoneal_chemotherapy_drug_name,
							intraoperative_intraperitoneal_chemotherapy_dose: res.data.intraoperative_intraperitoneal_chemotherapy_dose,
							intraoperative_complication: String(res.data.intraoperative_complication),
							intraoperative_complication_describe: res.data.intraoperative_complication_describe,
							// 肝脏手术情况
							liver_surgery_time_choose: String(res.data.liver_surgery_time_choose),
							liver_surgery_tran: String(res.data.liver_surgery_tran),
							liver_surgery_diagnosis_from_first: res.data.liver_surgery_diagnosis_from_first,
							liver_surgery_diagnosis_from_first_surgery: res.data.liver_surgery_diagnosis_from_first_surgery,
							liver_surgery_diagnosis_from_neo: res.data.liver_surgery_diagnosis_from_neo,
							liver_surgery_treat: String(res.data.liver_surgery_treat),
							liver_surgery_gw: String(res.data.liver_surgery_gw),
							liver_surgery_possible: String(res.data.liver_surgery_possible),
							liver_surgery_pet: String(res.data.liver_surgery_pet),
							liver_surgery_child: String(res.data.liver_surgery_child),
							liver_surgery_indole_cyanide_green_test: res.data.liver_surgery_indole_cyanide_green_test,
							liver_surgery_background: String(res.data.liver_surgery_background),
							liver_surgery_metastaticl: res.data.liver_surgery_metastaticl,
							liver_surgery_metastaticl_max: res.data.liver_surgery_metastaticl_max,
							liver_surgery_metastaticl_max_and_1_cm: res.data.liver_surgery_metastaticl_max_and_1_cm,
							liver_surgery_lesion: String(res.data.liver_surgery_lesion),
							liver_surgery_resection: String(res.data.liver_surgery_resection),
							liver_surgery_operate_type: String(res.data.liver_surgery_operate_type),
							liver_surgery_num_of_lesion: res.data.liver_surgery_num_of_lesion,
							liver_surgery_removal_lesion: res.data.liver_surgery_removal_lesion,
							liver_surgery_ablation_lesion: res.data.liver_surgery_ablation_lesion,
							liver_surgery_removal_lesion_max_diameter: res.data.liver_surgery_removal_lesion_max_diameter,
							liver_surgery_removal_lesion_over_cmno5: res.data.liver_surgery_removal_lesion_over_cmno5,
							liver_surgery_missing_lesion: res.data.liver_surgery_missing_lesion,
							liver_surgery_missing_lesion_location: String(res.data.liver_surgery_missing_lesion_location),
							liver_surgery_name: res.data.liver_surgery_name,
							// 术后情况
							postoperative_anus_exhaust: res.data.postoperative_anus_exhaust,
							postoperative_pull_out_tube: res.data.postoperative_pull_out_tube,
							postoperative_sicu: String(res.data.postoperative_sicu),
							postoperative_sicu_observation: res.data.postoperative_sicu_observation,
							postoperative_eating_liquid: res.data.postoperative_eating_liquid,
							postoperative_eating_pap: res.data.postoperative_eating_pap,
							postoperative_ventilator_support: String(res.data.postoperative_ventilator_support),
							postoperative_ventilator_support_time_hour: res.data.postoperative_ventilator_support_time_hour,
							postoperative_oxygen_time_hour: res.data.postoperative_oxygen_time_hour,
							postoperative_total_length_stay: res.data.postoperative_total_length_stay,
							postoperative_length_stay: res.data.postoperative_length_stay,
							postoperative_complication_describe: res.data.postoperative_complication_describe,
							postoperative_complication: String(res.data.postoperative_complication),
							postoperative_complication_specific: res.data.postoperative_complication_specific,
							postoperative_discharge_thrombosis_score: String(res.data.postoperative_discharge_thrombosis_score),
							postoperative_perioperative_death: String(res.data.postoperative_perioperative_death),
							postoperative_death_reason: res.data.postoperative_death_reason,
							postoperative_out_hospital_complication: res.data.postoperative_out_hospital_complication,
							postoperative_surgery_again: String(res.data.postoperative_surgery_again),
							postoperative_surgery_again_reason: res.data.postoperative_surgery_again_reason,
							// 病理报告
							pathological_report_type: String(res.data.pathological_report_type),
							pathological_report_type_1: String(res.data.pathological_report_type_1),
							pathological_report_tumor_size: res.data.pathological_report_tumor_size,
							pathological_report_max_diameter: res.data.pathological_report_max_diameter,
							pathological_report_tumor_deep: String(res.data.pathological_report_tumor_deep),
							pathological_report_rank: String(res.data.pathological_report_rank),
							pathological_report_pt3_distance: res.data.pathological_report_pt3_distance,
							pathological_report_circumferential_cut_edge_distance: res.data.pathological_report_circumferential_cut_edge_distance,
							pathological_report_new_pathology: String(res.data.pathological_report_new_pathology),
							pathological_report_check_ln: res.data.pathological_report_check_ln,
							pathological_report_check_less_10_ln: res.data.pathological_report_check_less_10_ln,
							pathological_report_check_less_10_15_ln: res.data.pathological_report_check_less_10_15_ln,
							pathological_report_check_more_15_ln: res.data.pathological_report_check_more_15_ln,
							pathological_report_central_group_test_check_ln: res.data.pathological_report_central_group_test_check_ln,
							pathological_report_check_positive_ln: res.data.pathological_report_check_positive_ln,
							pathological_report_check_positive_less_10_ln: res.data.pathological_report_check_positive_less_10_ln,
							pathological_report_check_positive_less_10_15_ln: res.data.pathological_report_check_positive_less_10_15_ln,
							pathological_report_check_positive_more_15_ln: res.data.pathological_report_check_positive_more_15_ln,
							pathological_report_central_group_test_check_positive_ln: res.data.pathological_report_central_group_test_check_positive_ln,
							pathological_report_aging_n: String(res.data.pathological_report_aging_n),
							pathological_report_metastatic: String(res.data.pathological_report_metastatic),
							pathological_report_location: res.data.pathological_report_location,
							pathological_report_near: String(res.data.pathological_report_near),
							pathological_report_far: String(res.data.pathological_report_far),
							pathological_report_invasion_lymphatics: String(res.data.pathological_report_invasion_lymphatics),
							pathological_report_invasion_vein: String(res.data.pathological_report_invasion_vein),
							pathological_report_invasion_neural: String(res.data.pathological_report_invasion_neural),
							pathological_report_paracancer_mucosal_lesion: String(res.data.pathological_report_paracancer_mucosal_lesion),
							pathological_report_paracancer_mesangial_integrity: String(res.data.pathological_report_paracancer_mesangial_integrity),
							pathological_report_miles: String(res.data.pathological_report_miles),
							pathological_report_ptnm: String(res.data.pathological_report_ptnm),
							pathological_report_crm: String(res.data.pathological_report_crm),
							pathological_report_tumor_invade_muscular_layer: res.data.pathological_report_tumor_invade_muscular_layer,
							pathological_report_tumor_cut_edge_near: res.data.pathological_report_tumor_cut_edge_near,
							pathological_report_pt3_tumor_involves_mesangium_deep: String(res.data.pathological_report_pt3_tumor_involves_mesangium_deep),
							pathological_report_liver_pathological_score: res.data.pathological_report_liver_pathological_score,
							pathological_report_dili_pss: res.data.pathological_report_dili_pss,
							pathological_report_describe: res.data.pathological_report_describe,
							// 病理录入者
							inputting_medical_records: res.data.inputting_medical_records,
							is_the_record_entry_complete: res.data.is_the_record_entry_complete,
							medical_records_information_checker: res.data.medical_records_information_checker,
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
							attachment: state.Form.attachment,
							video: state.Form.video,
							img: state.Form.img,
							hospital_number: state.Form.hospital_number,
							name: state.Form.name,
							age: state.Form.age,
							sex: state.Form.sex,
							national: state.Form.national,
							id_card: state.Form.id_card,
							mobile: state.Form.mobile,
							total_money: state.Form.total_money,
							remark: state.Form.remark,
							family_contact: state.Form.family_contact,
							admission_time: state.Form.admission_time,
							operative_time: state.Form.operative_time,
							discharge_time: state.Form.discharge_time,
							total_hospital_days: state.Form.total_hospital_days,
							postoperation_hospital_days: state.Form.postoperation_hospital_days,
							// 术前
							// 术前肠镜
							preoperative_colonoscopy_from_the_anus_a1: state.Form.preoperative_colonoscopy_from_the_anus_a1,
							preoperative_colonoscopy_infringement_of_lumen_a2: state.Form.preoperative_colonoscopy_infringement_of_lumen_a2,
							preoperative_colonoscopy_whether_the_endoscope_passes_a3: state.Form.preoperative_colonoscopy_whether_the_endoscope_passes_a3,
							preoperative_colonoscopy_the_biopsy_results_a4: state.Form.preoperative_colonoscopy_the_biopsy_results_a4,
							// 术前分期
							preoperative_staging_ct_mri_t: state.Form.preoperative_staging_ct_mri_t,
							preoperative_staging_ct_mri_leaching_b1: state.Form.preoperative_staging_ct_mri_leaching_b1,
							preoperative_staging_ct_mri_the_deepest_point_is_at_b2: String(state.Form.preoperative_staging_ct_mri_the_deepest_point_is_at_b2),
							preoperative_staging_ct_mri_intestinal_separated_edge_mesangium: state.Form.preoperative_staging_ct_mri_intestinal_separated_edge_mesangium,
							preoperative_staging_ct_mri_t_from_outer_edge_mesangium_b4: state.Form.preoperative_staging_ct_mri_t_from_outer_edge_mesangium_b4,
							preoperative_staging_ct_mri_n: state.Form.preoperative_staging_ct_mri_n,
							preoperative_staging_ct_mri_the_largest_diameter_dmax: state.Form.preoperative_staging_ct_mri_the_largest_diameter_dmax,
							preoperative_staging_ct_mri_number_of_lymph_nodes_no: state.Form.preoperative_staging_ct_mri_number_of_lymph_nodes_no,
							preoperative_staging_ct_mri_m: state.Form.preoperative_staging_ct_mri_m,
							preoperative_staging_ct_mri_the_largest_diameter_dmax2: state.Form.preoperative_staging_ct_mri_the_largest_diameter_dmax2,
							preoperative_staging_ct_mri_t3_mesenterin_and_deep: String(state.Form.preoperative_staging_ct_mri_t3_mesenterin_and_deep),
							preoperative_staging_ultrasonic_t: state.Form.preoperative_staging_ultrasonic_t,
							preoperative_staging_ultrasonic_leaching_ultramundane: state.Form.preoperative_staging_ultrasonic_leaching_ultramundane,
							preoperative_staging_ultrasonic_n: state.Form.preoperative_staging_ultrasonic_n,
							preoperative_staging_ultrasonic_the_largest_diameter_d1: state.Form.preoperative_staging_ultrasonic_the_largest_diameter_d1,
							preoperative_staging_ultrasonic_m: state.Form.preoperative_staging_ultrasonic_m,
							preoperative_staging_ultrasonic_the_largest_diameter_d2: state.Form.preoperative_staging_ultrasonic_the_largest_diameter_d2,
							preoperative_staging_ultrasonic_pet_ct: state.Form.preoperative_staging_ultrasonic_pet_ct,
							preoperative_staging_clinical_t: state.Form.preoperative_staging_clinical_t,
							preoperative_staging_clinical_n: state.Form.preoperative_staging_clinical_n,
							preoperative_staging_clinical_m: String(state.Form.preoperative_staging_clinical_m),
							preoperative_staging_intestinal_tract_other: String(state.Form.preoperative_staging_intestinal_tract_other),
							preoperative_staging_intestinal_tract_location: String(state.Form.preoperative_staging_intestinal_tract_location),
							preoperative_staging_intestinal_tract_staging_t: String(state.Form.preoperative_staging_intestinal_tract_staging_t),
							preoperative_staging_intestinal_tract_n: state.Form.preoperative_staging_intestinal_tract_n,
							preoperative_staging_intestinal_tract_unite: String(state.Form.preoperative_staging_intestinal_tract_unite),
							preoperative_staging_imaging_circumferential_margin_situation: String(state.Form.preoperative_staging_imaging_circumferential_margin_situation),
							preoperative_staging_imaging_circumferential_margin_mdt_discuss: String(state.Form.preoperative_staging_imaging_circumferential_margin_mdt_discuss),
							preoperative_staging_resectable_primary_lesion: String(state.Form.preoperative_staging_resectable_primary_lesion),
							preoperative_staging_resectable_transition_lesion: String(state.Form.preoperative_staging_resectable_transition_lesion),
							preoperative_staging_transition_type: String(state.Form.preoperative_staging_transition_type),
							preoperative_staging_number_of_liver_metastases: state.Form.preoperative_staging_number_of_liver_metastases,
							preoperative_staging_number_of_liver_metastases_dg1: state.Form.preoperative_staging_number_of_liver_metastases_dg1,
							preoperative_staging_number_of_liver_metastases_dg2: state.Form.preoperative_staging_number_of_liver_metastases_dg2,
							preoperative_staging_number_of_liver_metastases_location1: String(state.Form.preoperative_staging_number_of_liver_metastases_location1),
							preoperative_staging_number_of_lung_metastases: state.Form.preoperative_staging_number_of_lung_metastases,
							preoperative_staging_number_of_lung_metastases_df1: state.Form.preoperative_staging_number_of_lung_metastases_df1,
							preoperative_staging_number_of_lung_metastases_df2: state.Form.preoperative_staging_number_of_lung_metastases_df2,
							preoperative_staging_number_of_lung_metastases_location2: String(state.Form.preoperative_staging_number_of_lung_metastases_location2),
							preoperative_staging_mdt_metastase_suggest1: String(state.Form.preoperative_staging_mdt_metastase_suggest1),
							preoperative_staging_mdt_primary_suggest2: String(state.Form.preoperative_staging_mdt_primary_suggest2),
							// 新辅助化疗
							preoperative_neoadjuvant_chemotherapy_plan_project: String(state.Form.preoperative_neoadjuvant_chemotherapy_plan_project),
							preoperative_neoadjuvant_chemotherapy_begin: state.Form.preoperative_neoadjuvant_chemotherapy_begin,
							preoperative_neoadjuvant_chemotherapy_end: state.Form.preoperative_neoadjuvant_chemotherapy_end,
							preoperative_neoadjuvant_chemotherapy_adverse_response_hb: state.Form.preoperative_neoadjuvant_chemotherapy_adverse_response_hb,
							preoperative_neoadjuvant_chemotherapy_adverse_response_wbc: state.Form.preoperative_neoadjuvant_chemotherapy_adverse_response_wbc,
							preoperative_neoadjuvant_chemotherapy_adverse_response_gra: state.Form.preoperative_neoadjuvant_chemotherapy_adverse_response_gra,
							preoperative_neoadjuvant_chemotherapy_adverse_response_plt: state.Form.preoperative_neoadjuvant_chemotherapy_adverse_response_plt,
							preoperative_neoadjuvant_chemotherapy_liver_function: state.Form.preoperative_neoadjuvant_chemotherapy_liver_function,
							preoperative_neoadjuvant_chemotherapy_kidney_function: state.Form.preoperative_neoadjuvant_chemotherapy_kidney_function,
							preoperative_neoadjuvant_chemotherapy_sickness: state.Form.preoperative_neoadjuvant_chemotherapy_sickness,
							preoperative_neoadjuvant_chemotherapy_diarrhoea: state.Form.preoperative_neoadjuvant_chemotherapy_diarrhoea,
							preoperative_neoadjuvant_chemotherapy_astriction: state.Form.preoperative_neoadjuvant_chemotherapy_astriction,
							preoperative_neoadjuvant_chemotherapy_heart: state.Form.preoperative_neoadjuvant_chemotherapy_heart,
							preoperative_neoadjuvant_chemotherapy_allergy: state.Form.preoperative_neoadjuvant_chemotherapy_allergy,
							preoperative_neoadjuvant_chemotherapy_skin: state.Form.preoperative_neoadjuvant_chemotherapy_skin,
							preoperative_neoadjuvant_chemotherapy_nerve: state.Form.preoperative_neoadjuvant_chemotherapy_nerve,
							preoperative_neoadjuvant_chemotherapy_other: state.Form.preoperative_neoadjuvant_chemotherapy_other,
							preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy: String(state.Form.preoperative_neoadjuvant_chemotherapy_eva_clinical_efficacy),
							preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy: String(state.Form.preoperative_neoadjuvant_chemotherapy_eva_pathological_efficacy),
							// 新辅助放疗
							preoperative_neoadjuvant_radiotherapy_dismember: String(state.Form.preoperative_neoadjuvant_radiotherapy_dismember),
							preoperative_neoadjuvant_radiotherapy_technology: String(state.Form.preoperative_neoadjuvant_radiotherapy_technology),
							preoperative_neoadjuvant_radiotherapy_dose: state.Form.preoperative_neoadjuvant_radiotherapy_dose,
							preoperative_neoadjuvant_radiotherapy_synchro: String(state.Form.preoperative_neoadjuvant_radiotherapy_synchro),
							preoperative_neoadjuvant_radiotherapy_begin: state.Form.preoperative_neoadjuvant_radiotherapy_begin,
							preoperative_neoadjuvant_radiotherapy_end: state.Form.preoperative_neoadjuvant_radiotherapy_end,
							preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect: String(state.Form.preoperative_neoadjuvant_radiotherapy_metastatic_therapy_effect),
							preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass: String(state.Form.preoperative_neoadjuvant_radiotherapy_curative_primary_les_ass),
							preoperative_neoadjuvant_radiotherapy_primary_pathology_ass: String(state.Form.preoperative_neoadjuvant_radiotherapy_primary_pathology_ass),
							// 肠道狭窄状况评估
							preoperative_assessment_intestinal_stenosis_exhaust: String(state.Form.preoperative_assessment_intestinal_stenosis_exhaust),
							preoperative_assessment_intestinal_stenosis_defecate: String(state.Form.preoperative_assessment_intestinal_stenosis_defecate),
							preoperative_assessment_intestinal_stenosis_distension: String(state.Form.preoperative_assessment_intestinal_stenosis_distension),
							preoperative_assessment_intestinal_stenosis_enteroscope: String(state.Form.preoperative_assessment_intestinal_stenosis_enteroscope),
							preoperative_assessment_intestinal_stenosis_shape: String(state.Form.preoperative_assessment_intestinal_stenosis_shape),
							preoperative_assessment_intestinal_stenosis_ct_proximal_bowel: String(state.Form.preoperative_assessment_intestinal_stenosis_ct_proximal_bowel),
							preoperative_assessment_intestinal_stenosis_ct_maximum_left: String(state.Form.preoperative_assessment_intestinal_stenosis_ct_maximum_left),
							preoperative_assessment_intestinal_stenosis_ct_x_imaging: String(state.Form.preoperative_assessment_intestinal_stenosis_ct_x_imaging),
							preoperative_assessment_intestinal_stenosis_imaging_smallest: String(state.Form.preoperative_assessment_intestinal_stenosis_imaging_smallest),
							preoperative_assessment_intestinal_stenosis_drugs_relieve: String(state.Form.preoperative_assessment_intestinal_stenosis_drugs_relieve),
							preoperative_assessment_intestinal_stenosis_juice: String(state.Form.preoperative_assessment_intestinal_stenosis_juice),
							preoperative_assessment_intestinal_stenosis_group: String(state.Form.preoperative_assessment_intestinal_stenosis_group),
							preoperative_assessment_intestinal_stenosis_asa: state.Form.preoperative_assessment_intestinal_stenosis_asa,
							preoperative_assessment_intestinal_stenosis_new_neoadjuvant: String(state.Form.preoperative_assessment_intestinal_stenosis_new_neoadjuvant),
							preoperative_assessment_intestinal_stenosis_autar: String(state.Form.preoperative_assessment_intestinal_stenosis_autar),
							preoperative_assessment_intestinal_stenosis_test_wbc: state.Form.preoperative_assessment_intestinal_stenosis_test_wbc,
							preoperative_assessment_intestinal_stenosis_test_hb: state.Form.preoperative_assessment_intestinal_stenosis_test_hb,
							preoperative_assessment_intestinal_stenosis_test_alb: state.Form.preoperative_assessment_intestinal_stenosis_test_alb,
							preoperative_assessment_intestinal_stenosis_test_cea: state.Form.preoperative_assessment_intestinal_stenosis_test_cea,
							preoperative_assessment_intestinal_stenosis_test_alt: state.Form.preoperative_assessment_intestinal_stenosis_test_alt,
							preoperative_assessment_intestinal_stenosis_test_tb: state.Form.preoperative_assessment_intestinal_stenosis_test_tb,
							preoperative_assessment_intestinal_stenosis_test1_wbc: state.Form.preoperative_assessment_intestinal_stenosis_test1_wbc,
							preoperative_assessment_intestinal_stenosis_test1_hb: state.Form.preoperative_assessment_intestinal_stenosis_test1_hb,
							preoperative_assessment_intestinal_stenosis_test1_alb: state.Form.preoperative_assessment_intestinal_stenosis_test1_alb,
							preoperative_assessment_intestinal_stenosis_test1_cea: state.Form.preoperative_assessment_intestinal_stenosis_test1_cea,
							preoperative_assessment_intestinal_stenosis_test1_alt: state.Form.preoperative_assessment_intestinal_stenosis_test1_alt,
							preoperative_assessment_intestinal_stenosis_test1_tb: state.Form.preoperative_assessment_intestinal_stenosis_test1_tb,
							preoperative_assessment_intestinal_stenosis_cancer_family: String(state.Form.preoperative_assessment_intestinal_stenosis_cancer_family),
							preoperative_assessment_intestinal_stenosis_manometry: String(state.Form.preoperative_assessment_intestinal_stenosis_manometry),
							preoperative_assessment_intestinal_stenosis_mdt_compliance: String(state.Form.preoperative_assessment_intestinal_stenosis_mdt_compliance),
							preoperative_assessment_intestinal_stenosis_uncompl_reason: String(state.Form.preoperative_assessment_intestinal_stenosis_uncompl_reason),
							// 术中
							intraoperative_operation_type: String(state.Form.intraoperative_operation_type),
							intraoperative_colorectal_cancer_situation: String(state.Form.intraoperative_colorectal_cancer_situation),
							intraoperative_primary_lesion_anus: state.Form.intraoperative_primary_lesion_anus,
							intraoperative_primary_lesion_anus1: state.Form.intraoperative_primary_lesion_anus1,
							intraoperative_location: String(state.Form.intraoperative_location),
							intraoperative_tumor_infringe_loop: String(state.Form.intraoperative_tumor_infringe_loop),
							intraoperative_tumor_size: state.Form.intraoperative_tumor_size,
							intraoperative_antetheca: String(state.Form.intraoperative_antetheca),
							intraoperative_tumor_deepest: String(state.Form.intraoperative_tumor_deepest),
							intraoperative_classification: String(state.Form.intraoperative_classification),
							intraoperative_perforate: String(state.Form.intraoperative_perforate),
							intraoperative_circumference: String(state.Form.intraoperative_circumference),
							intraoperative_invaded_tissues_and_organ_situation: state.Form.intraoperative_invaded_tissues_and_organ_situation,
							intraoperative_distance_metastasis: String(state.Form.intraoperative_distance_metastasis),
							intraoperative_metastasis_part: String(state.Form.intraoperative_metastasis_part),
							intraoperative_degree_cure: String(state.Form.intraoperative_degree_cure),
							intraoperative_opera_way: String(state.Form.intraoperative_opera_way),
							intraoperative_opera_way_reason: state.Form.intraoperative_opera_way_reason,
							intraoperative_remove_way: String(state.Form.intraoperative_remove_way),
							intraoperative_lymph_node_clean: String(state.Form.intraoperative_lymph_node_clean),
							intraoperative_side_clean: String(state.Form.intraoperative_side_clean),
							intraoperative_fit_way: String(state.Form.intraoperative_fit_way),
							intraoperative_pre_fistulation: String(state.Form.intraoperative_pre_fistulation),
							intraoperative_rebuilt_way: String(state.Form.intraoperative_rebuilt_way),
							intraoperative_anal_fit_way: String(state.Form.intraoperative_anal_fit_way),
							intraoperative_stapling_size: String(state.Form.intraoperative_stapling_size),
							intraoperative_anastomotic_distance: state.Form.intraoperative_anastomotic_distance,
							intraoperative_anal_canal: String(state.Form.intraoperative_anal_canal),
							intraoperative_spleen: String(state.Form.intraoperative_spleen),
							intraoperative_predict_crm: String(state.Form.intraoperative_predict_crm),
							intraoperative_self_evaluation_mesangial_integrity_anus: String(state.Form.intraoperative_self_evaluation_mesangial_integrity_anus),
							intraoperative_self_evaluation_mesangial_integrity_operate: String(state.Form.intraoperative_self_evaluation_mesangial_integrity_operate),
							intraoperative_part_degree_cure: String(state.Form.intraoperative_part_degree_cure),
							intraoperative_cancer_residual_part: state.Form.intraoperative_cancer_residual_part,
							intraoperative_unit_viscera_remove: String(state.Form.intraoperative_unit_viscera_remove),
							intraoperative_remove_organ: state.Form.intraoperative_remove_organ,
							intraoperative_remove_reason: state.Form.intraoperative_remove_reason,
							intraoperative_distal_incisor_margin_from_anterior: state.Form.intraoperative_distal_incisor_margin_from_anterior,
							intraoperative_proximal_to_the_anterior_margin_of_the_body: state.Form.intraoperative_proximal_to_the_anterior_margin_of_the_body,
							intraoperative_lymph_node_clear_out_num: state.Form.intraoperative_lymph_node_clear_out_num,
							intraoperative_ln_within_10cm_of_the_tumor: state.Form.intraoperative_ln_within_10cm_of_the_tumor,
							intraoperative_ln_within_10_15cm_of_the_tumor: state.Form.intraoperative_ln_within_10_15cm_of_the_tumor,
							intraoperative_ln_within_above_15cm_of_the_tumor: state.Form.intraoperative_ln_within_above_15cm_of_the_tumor,
							intraoperative_central_group_ln: state.Form.intraoperative_central_group_ln,
							intraoperative_lymph_node_left: state.Form.intraoperative_lymph_node_left,
							intraoperative_lymph_node_right: state.Form.intraoperative_lymph_node_right,
							intraoperative_completely_tme_residual_basin_wall_tissue: String(state.Form.intraoperative_completely_tme_residual_basin_wall_tissue),
							intraoperative_completely_tme_residual_basin_wall_tissue_spec: String(state.Form.intraoperative_completely_tme_residual_basin_wall_tissue_spec),
							intraoperative_completely_tme_residual_basin_wall_tissue_loca: String(state.Form.intraoperative_completely_tme_residual_basin_wall_tissue_loca),
							intraoperative_pelvic_area_of_obvious_bleeding: String(state.Form.intraoperative_pelvic_area_of_obvious_bleeding),
							intraoperative_pelvic_nerve_damage: String(state.Form.intraoperative_pelvic_nerve_damage),
							intraoperative_hemostatic_method: String(state.Form.intraoperative_hemostatic_method),
							intraoperative_operation_time_min: state.Form.intraoperative_operation_time_min,
							intraoperative_length_of_the_incision: state.Form.intraoperative_length_of_the_incision,
							intraoperative_bleeding: state.Form.intraoperative_bleeding,
							intraoperative_blood_transfusion: String(state.Form.intraoperative_blood_transfusion),
							intraoperative_blood_transfusion_reason: String(state.Form.intraoperative_blood_transfusion_reason),
							intraoperative_composition_blood_transfusion: String(state.Form.intraoperative_composition_blood_transfusion),
							intraoperative_blood_transfusion_volume: state.Form.intraoperative_blood_transfusion_volume,
							intraoperative_intraperitoneal_chemotherapy: String(state.Form.intraoperative_intraperitoneal_chemotherapy),
							intraoperative_intraperitoneal_chemotherapy_drug_name: state.Form.intraoperative_intraperitoneal_chemotherapy_drug_name,
							intraoperative_intraperitoneal_chemotherapy_dose: state.Form.intraoperative_intraperitoneal_chemotherapy_dose,
							intraoperative_complication: String(state.Form.intraoperative_complication),
							intraoperative_complication_describe: state.Form.intraoperative_complication_describe,
							// 肝脏手术情况
							liver_surgery_time_choose: String(state.Form.liver_surgery_time_choose),
							liver_surgery_tran: String(state.Form.liver_surgery_tran),
							liver_surgery_diagnosis_from_first: state.Form.liver_surgery_diagnosis_from_first,
							liver_surgery_diagnosis_from_first_surgery: state.Form.liver_surgery_diagnosis_from_first_surgery,
							liver_surgery_diagnosis_from_neo: state.Form.liver_surgery_diagnosis_from_neo,
							liver_surgery_treat: String(state.Form.liver_surgery_treat),
							liver_surgery_gw: String(state.Form.liver_surgery_gw),
							liver_surgery_possible: String(state.Form.liver_surgery_possible),
							liver_surgery_pet: String(state.Form.liver_surgery_pet),
							liver_surgery_child: String(state.Form.liver_surgery_child),
							liver_surgery_indole_cyanide_green_test: state.Form.liver_surgery_indole_cyanide_green_test,
							liver_surgery_background: String(state.Form.liver_surgery_background),
							liver_surgery_metastaticl: state.Form.liver_surgery_metastaticl,
							liver_surgery_metastaticl_max: state.Form.liver_surgery_metastaticl_max,
							liver_surgery_metastaticl_max_and_1_cm: state.Form.liver_surgery_metastaticl_max_and_1_cm,
							liver_surgery_lesion: String(state.Form.liver_surgery_lesion),
							liver_surgery_resection: String(state.Form.liver_surgery_resection),
							liver_surgery_operate_type: String(state.Form.liver_surgery_operate_type),
							liver_surgery_num_of_lesion: state.Form.liver_surgery_num_of_lesion,
							liver_surgery_removal_lesion: state.Form.liver_surgery_removal_lesion,
							liver_surgery_ablation_lesion: state.Form.liver_surgery_ablation_lesion,
							liver_surgery_removal_lesion_max_diameter: state.Form.liver_surgery_removal_lesion_max_diameter,
							liver_surgery_missing_lesion: state.Form.liver_surgery_missing_lesion,
							liver_surgery_missing_lesion_location: String(state.Form.liver_surgery_missing_lesion_location),
							liver_surgery_name: state.Form.liver_surgery_name,
							// 术后情况
							postoperative_anus_exhaust: state.Form.postoperative_anus_exhaust,
							postoperative_pull_out_tube: state.Form.postoperative_pull_out_tube,
							postoperative_sicu: String(state.Form.postoperative_sicu),
							postoperative_sicu_observation: state.Form.postoperative_sicu_observation,
							postoperative_eating_liquid: state.Form.postoperative_eating_liquid,
							postoperative_ventilator_support: String(state.Form.postoperative_ventilator_support),
							postoperative_ventilator_support_time_hour: state.Form.postoperative_ventilator_support_time_hour,
							postoperative_oxygen_time_hour: state.Form.postoperative_oxygen_time_hour,
							postoperative_total_length_stay: state.Form.postoperative_total_length_stay,
							postoperative_complication_describe: state.Form.postoperative_complication_describe,
							postoperative_complication: String(state.Form.postoperative_complication),
							postoperative_complication_specific: state.Form.postoperative_complication_specific,
							postoperative_discharge_thrombosis_score: String(state.Form.postoperative_discharge_thrombosis_score),
							postoperative_perioperative_death: String(state.Form.postoperative_perioperative_death),
							postoperative_death_reason: state.Form.postoperative_death_reason,
							postoperative_out_hospital_complication: state.Form.postoperative_out_hospital_complication,
							postoperative_surgery_again: String(state.Form.postoperative_surgery_again),
							postoperative_surgery_again_reason: state.Form.postoperative_surgery_again_reason,
							// 病理报告
							pathological_report_type: String(state.Form.pathological_report_type),
							pathological_report_type_1: String(state.Form.pathological_report_type_1),
							pathological_report_tumor_size: state.Form.pathological_report_tumor_size,
							pathological_report_max_diameter: state.Form.pathological_report_max_diameter,
							pathological_report_tumor_deep: String(state.Form.pathological_report_tumor_deep),
							pathological_report_rank: String(state.Form.pathological_report_rank),
							pathological_report_pt3_distance: state.Form.pathological_report_pt3_distance,
							pathological_report_circumferential_cut_edge_distance: state.Form.pathological_report_circumferential_cut_edge_distance,
							pathological_report_new_pathology: String(state.Form.pathological_report_new_pathology),
							pathological_report_check_ln: state.Form.pathological_report_check_ln,
							pathological_report_check_less_10_ln: state.Form.pathological_report_check_less_10_ln,
							pathological_report_check_less_10_15_ln: state.Form.pathological_report_check_less_10_15_ln,
							pathological_report_check_more_15_ln: state.Form.pathological_report_check_more_15_ln,
							pathological_report_central_group_test_check_ln: state.Form.pathological_report_central_group_test_check_ln,
							pathological_report_check_positive_ln: state.Form.pathological_report_check_positive_ln,
							pathological_report_check_positive_less_10_ln: state.Form.pathological_report_check_positive_less_10_ln,
							pathological_report_check_positive_less_10_15_ln: state.Form.pathological_report_check_positive_less_10_15_ln,
							pathological_report_check_positive_more_15_ln: state.Form.pathological_report_check_positive_more_15_ln,
							pathological_report_central_group_test_check_positive_ln: state.Form.pathological_report_central_group_test_check_positive_ln,
							pathological_report_aging_n: String(state.Form.pathological_report_aging_n),
							pathological_report_metastatic: String(state.Form.pathological_report_metastatic),
							pathological_report_location: state.Form.pathological_report_location,
							pathological_report_near: String(state.Form.pathological_report_near),
							pathological_report_far: String(state.Form.pathological_report_far),
							pathological_report_invasion_lymphatics: String(state.Form.pathological_report_invasion_lymphatics),
							pathological_report_invasion_vein: String(state.Form.pathological_report_invasion_vein),
							pathological_report_invasion_neural: String(state.Form.pathological_report_invasion_neural),
							pathological_report_paracancer_mucosal_lesion: String(state.Form.pathological_report_paracancer_mucosal_lesion),
							pathological_report_paracancer_mesangial_integrity: String(state.Form.pathological_report_paracancer_mesangial_integrity),
							pathological_report_miles: String(state.Form.pathological_report_miles),
							pathological_report_ptnm: String(state.Form.pathological_report_ptnm),
							pathological_report_crm: String(state.Form.pathological_report_crm),
							pathological_report_tumor_invade_muscular_layer: state.Form.pathological_report_tumor_invade_muscular_layer,
							pathological_report_tumor_cut_edge_near: state.Form.pathological_report_tumor_cut_edge_near,
							pathological_report_pt3_tumor_involves_mesangium_deep: String(state.Form.pathological_report_pt3_tumor_involves_mesangium_deep),
							pathological_report_liver_pathological_score: state.Form.pathological_report_liver_pathological_score,
							pathological_report_dili_pss: state.Form.pathological_report_dili_pss,
							pathological_report_describe: state.Form.pathological_report_describe,
							// 病理录入者
							inputting_medical_records: state.Form.inputting_medical_records,
							is_the_record_entry_complete: state.Form.is_the_record_entry_complete,
							medical_records_information_checker: state.Form.medical_records_information_checker,
						}

						let url = '/api/back/ColorectalCancers'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/ColorectalCancers/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/colorectal-cancer-index',
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
				if (state.Form.img) {
					state.Form.img = state.Form.img + ',' + val.data.id
				} else {
					state.Form.img = val.data.id
				}
			}

			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.Form.img = ''
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
