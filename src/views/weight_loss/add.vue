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
			<el-form-item label="nsr2002评分" prop="nrs2002_score">
				<el-input v-model="Form.nrs2002_score" placeholder="nsr2002评分" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="asa分级" prop="asa_grade">
				<el-input v-model="Form.asa_grade" placeholder="asa分级" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- <el-form-item label="总住院时间（天）" prop="total_hospital_days">
				<el-input v-model="Form.total_hospital_days" placeholder="请输入总住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术后住院时间（天）" prop="postoperation_hospital_days">
				<el-input v-model="Form.postoperation_hospital_days" placeholder="请输入术后住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item> -->
			
			<div><strong>术前</strong></div>
			<el-divider />
			<el-form-item style="color: #409eff;" label="身高(cm)" prop="preoperative_height">
				<el-input v-model="Form.preoperative_height" placeholder="身高(cm)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="体重(kg)" prop="preoperative_weight">
				<el-input v-model="Form.preoperative_weight" placeholder="体重(kg)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="preoperative_waistline">
				<el-input v-model="Form.preoperative_waistline" placeholder="腰围" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="preoperative_bmi">
				<el-input v-model="Form.preoperative_bmi" placeholder="bmi" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="preoperative_rbc">
				<el-input v-model="Form.preoperative_rbc" placeholder="rbc" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="preoperative_hemoglobin">
				<el-input v-model="Form.preoperative_hemoglobin" placeholder="血红蛋白(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="preoperative_alanine_aminotransferase">
				<el-input v-model="Form.preoperative_alanine_aminotransferase" placeholder="谷丙转氨酶alt(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="preoperative_aspartate_aminotransferase">
				<el-input v-model="Form.preoperative_aspartate_aminotransferase" placeholder="谷草转氨酶ast(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="preoperative_total_protein">
				<el-input v-model="Form.preoperative_total_protein" placeholder="总蛋白tp(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="preoperative_albumin">
				<el-input v-model="Form.preoperative_albumin" placeholder="白蛋白(alb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="前白蛋白(palb)(g/l)" prop="preoperative_prealbumin">
				<el-input v-model="Form.preoperative_prealbumin" placeholder="前白蛋白(palb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="微量元素" prop="preoperative_trace_elements">
				<el-input v-model="Form.preoperative_trace_elements" placeholder="微量元素" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="glu" prop="preoperative_glu">
				<el-input v-model="Form.preoperative_glu" placeholder="glu" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="尿酸" prop="preoperative_uric_acid">
				<el-input v-model="Form.preoperative_uric_acid" placeholder="尿酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="hdl-ch" prop="preoperative_hdl_ch">
				<el-input v-model="Form.preoperative_hdl_ch" placeholder="hdl-ch" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="tg" prop="preoperative_tg">
				<el-input v-model="Form.preoperative_tg" placeholder="tg" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bun" prop="preoperative_bun">
				<el-input v-model="Form.preoperative_bun" placeholder="bun" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="crea" prop="preoperative_crea">
				<el-input v-model="Form.preoperative_crea" placeholder="crea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="d-dimer" prop="preoperative_d_dimer">
				<el-input v-model="Form.preoperative_d_dimer" placeholder="d-dimer" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="vitb12" prop="preoperative_vitb12">
				<el-input v-model="Form.preoperative_vitb12" placeholder="vitb12" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="preoperative_basal_metabolic_rate">
				<el-input v-model="Form.preoperative_basal_metabolic_rate" placeholder="基础代谢率" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="preoperative_folic_acid">
				<el-input v-model="Form.preoperative_folic_acid" placeholder="叶酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="preoperative_renal_dysfunction">
				<el-input v-model="Form.preoperative_renal_dysfunction" placeholder="肾功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="preoperative_deformation_arthritis">
				<el-input v-model="Form.preoperative_deformation_arthritis" placeholder="变形性关节炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="preoperative_male_sexual_dysfunction">
				<el-input v-model="Form.preoperative_male_sexual_dysfunction" placeholder="男性性功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="preoperative_polycystic_ovary_syndrome">
				<el-input v-model="Form.preoperative_polycystic_ovary_syndrome" placeholder="多囊卵巢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="preoperative_osahs">
				<el-input v-model="Form.preoperative_osahs" placeholder="osahs" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="nash" prop="preoperative_nash">
				<el-input v-model="Form.preoperative_nash" placeholder="nash" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="preoperative_insulin_resistance">
				<el-input v-model="Form.preoperative_insulin_resistance" placeholder="胰岛素抵抗" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="preoperative_abnormal_glucose_metabolism">
				<el-input v-model="Form.preoperative_abnormal_glucose_metabolism" placeholder="糖代谢异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="preoperative_type_2_diabetes">
				<el-input v-model="Form.preoperative_type_2_diabetes" placeholder="2型糖尿病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="preoperative_reflux_esophagitis">
				<el-input v-model="Form.preoperative_reflux_esophagitis" placeholder="反流性食管炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="痛风" prop="preoperative_gout">
				<el-input v-model="Form.preoperative_gout" placeholder="痛风" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="preoperative_acanthosis_nigricans">
				<el-input v-model="Form.preoperative_acanthosis_nigricans" placeholder="黑棘皮病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="preoperative_metabolic_syndrome">
				<el-input v-model="Form.preoperative_metabolic_syndrome" placeholder="代谢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- 术后第一月 -->
			<div><strong>术后一月</strong></div>
			<el-divider />
			<el-form-item label="身高cm" prop="postoperative_one_month_height">
				<el-input v-model="Form.postoperative_one_month_height" placeholder="身高cm" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="postoperative_one_month_weight">
				<el-input v-model="Form.postoperative_one_month_weight" placeholder="体重kg" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="postoperative_one_month_waistline">
				<el-input v-model="Form.postoperative_one_month_waistline" placeholder="腰围" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="postoperative_one_month_bmi">
				<el-input v-model="Form.postoperative_one_month_bmi" placeholder="bmi" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="postoperative_one_month_rbc">
				<el-input v-model="Form.postoperative_one_month_rbc" placeholder="rbc" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="postoperative_one_month_hemoglobin">
				<el-input v-model="Form.postoperative_one_month_hemoglobin" placeholder="血红蛋白(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="postoperative_one_month_alanine_aminotransferase">
				<el-input v-model="Form.postoperative_one_month_alanine_aminotransferase" placeholder="谷丙转氨酶alt(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="postoperative_one_month_aspartate_aminotransferase">
				<el-input v-model="Form.postoperative_one_month_aspartate_aminotransferase" placeholder="谷草转氨酶ast(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil(mmol/l)" prop="postoperative_one_month_total_bilirubin">
				<el-input v-model="Form.postoperative_one_month_total_bilirubin" placeholder="总胆红素tbil(mmol/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="postoperative_one_month_total_protein">
				<el-input v-model="Form.postoperative_one_month_total_protein" placeholder="总蛋白tp(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="postoperative_one_month_albumin">
				<el-input v-model="Form.postoperative_one_month_albumin" placeholder="白蛋白(alb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="glu" prop="postoperative_one_month_glu">
				<el-input v-model="Form.postoperative_one_month_glu" placeholder="glu" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="urea" prop="postoperative_one_month_urea">
				<el-input v-model="Form.postoperative_one_month_urea" placeholder="urea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="crea" prop="postoperative_one_month_crea">
				<el-input v-model="Form.postoperative_one_month_crea" placeholder="crea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="d-d-2" prop="postoperative_one_month_d_d_2">
				<el-input v-model="Form.postoperative_one_month_d_d_2" placeholder="d-d-2" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="postoperative_one_month_basal_metabolic_rate">
				<el-input v-model="Form.postoperative_one_month_basal_metabolic_rate" placeholder="基础代谢率" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="postoperative_one_month_folic_acid">
				<el-input v-model="Form.postoperative_one_month_folic_acid" placeholder="叶酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="postoperative_one_month_renal_dysfunction">
				<el-input v-model="Form.postoperative_one_month_renal_dysfunction" placeholder="肾功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="postoperative_one_month_deformation_arthritis">
				<el-input v-model="Form.postoperative_one_month_deformation_arthritis" placeholder="变形性关节炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="postoperative_one_month_male_sexual_dysfunction">
				<el-input v-model="Form.postoperative_one_month_male_sexual_dysfunction" placeholder="男性性功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="postoperative_one_month_polycystic_ovary_syndrome">
				<el-input v-model="Form.postoperative_one_month_polycystic_ovary_syndrome" placeholder="多囊卵巢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="postoperative_one_month_osahs">
				<el-input v-model="Form.postoperative_one_month_osahs" placeholder="osahs" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="nash" prop="postoperative_one_month_nash">
				<el-input v-model="Form.postoperative_one_month_nash" placeholder="nash" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="postoperative_one_month_insulin_resistance">
				<el-input v-model="Form.postoperative_one_month_insulin_resistance" placeholder="胰岛素抵抗" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="postoperative_one_month_abnormal_glucose_metabolism">
				<el-input v-model="Form.postoperative_one_month_abnormal_glucose_metabolism" placeholder="糖代谢异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="postoperative_one_month_type_2_diabetes">
				<el-input v-model="Form.postoperative_one_month_type_2_diabetes" placeholder="2型糖尿病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="postoperative_one_month_reflux_esophagitis">
				<el-input v-model="Form.postoperative_one_month_reflux_esophagitis" placeholder="反流性食管炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="postoperative_one_month_acanthosis_nigricans">
				<el-input v-model="Form.postoperative_one_month_acanthosis_nigricans" placeholder="黑棘皮病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="postoperative_one_month_metabolic_syndrome">
				<el-input v-model="Form.postoperative_one_month_metabolic_syndrome" placeholder="代谢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="脱发" prop="postoperative_one_month_hair_loss">
				<el-input v-model="Form.postoperative_one_month_hair_loss" placeholder="脱发" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="postoperative_one_month_diarrhea">
				<el-input v-model="Form.postoperative_one_month_diarrhea" placeholder="腹泻" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="postoperative_one_month_constipation">
				<el-input v-model="Form.postoperative_one_month_constipation" placeholder="便秘" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胆囊结石" prop="postoperative_one_month_gallbladder_stones">
				<el-input v-model="Form.postoperative_one_month_gallbladder_stones" placeholder="胆囊结石" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- 术后三月 -->
			<div><strong>术后三月</strong></div>
			<el-divider />
			<el-form-item label="身高cm" prop="postoperative_three_month_height">
				<el-input v-model="Form.postoperative_three_month_height" placeholder="身高cm" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="postoperative_three_month_weight">
				<el-input v-model="Form.postoperative_three_month_weight" placeholder="体重kg" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="postoperative_three_month_waistline">
				<el-input v-model="Form.postoperative_three_month_waistline" placeholder="腰围" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="postoperative_three_month_bmi">
				<el-input v-model="Form.postoperative_three_month_bmi" placeholder="bmi" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="postoperative_three_month_rbc">
				<el-input v-model="Form.postoperative_three_month_rbc" placeholder="rbc" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="postoperative_three_month_hemoglobin">
				<el-input v-model="Form.postoperative_three_month_hemoglobin" placeholder="血红蛋白(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="postoperative_three_month_alanine_aminotransferase">
				<el-input v-model="Form.postoperative_three_month_alanine_aminotransferase" placeholder="谷丙转氨酶alt(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="postoperative_three_month_aspartate_aminotransferase">
				<el-input v-model="Form.postoperative_three_month_aspartate_aminotransferase" placeholder="谷草转氨酶ast(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil(mmol/l)" prop="postoperative_three_month_total_bilirubin">
				<el-input v-model="Form.postoperative_three_month_total_bilirubin" placeholder="总胆红素tbil(mmol/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="postoperative_three_month_total_protein">
				<el-input v-model="Form.postoperative_three_month_total_protein" placeholder="总蛋白tp(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="postoperative_three_month_albumin">
				<el-input v-model="Form.postoperative_three_month_albumin" placeholder="白蛋白(alb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="glu" prop="postoperative_three_month_glu">
				<el-input v-model="Form.postoperative_three_month_glu" placeholder="glu" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="urea" prop="postoperative_three_month_urea">
				<el-input v-model="Form.postoperative_three_month_urea" placeholder="urea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="crea" prop="postoperative_three_month_crea">
				<el-input v-model="Form.postoperative_three_month_crea" placeholder="crea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="d-d-2" prop="postoperative_three_month_d_d_2">
				<el-input v-model="Form.postoperative_three_month_d_d_2" placeholder="d-d-2" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="postoperative_three_month_basal_metabolic_rate">
				<el-input v-model="Form.postoperative_three_month_basal_metabolic_rate" placeholder="基础代谢率" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="postoperative_three_month_folic_acid">
				<el-input v-model="Form.postoperative_three_month_folic_acid" placeholder="叶酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="postoperative_three_month_renal_dysfunction">
				<el-input v-model="Form.postoperative_three_month_renal_dysfunction" placeholder="肾功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="postoperative_three_month_deformation_arthritis">
				<el-input v-model="Form.postoperative_three_month_deformation_arthritis" placeholder="变形性关节炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="postoperative_three_month_male_sexual_dysfunction">
				<el-input v-model="Form.postoperative_three_month_male_sexual_dysfunction" placeholder="男性性功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="postoperative_three_month_polycystic_ovary_syndrome">
				<el-input v-model="Form.postoperative_three_month_polycystic_ovary_syndrome" placeholder="多囊卵巢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="postoperative_three_month_osahs">
				<el-input v-model="Form.postoperative_three_month_osahs" placeholder="osahs" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="nash" prop="postoperative_three_month_nash">
				<el-input v-model="Form.postoperative_three_month_nash" placeholder="nash" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="postoperative_three_month_insulin_resistance">
				<el-input v-model="Form.postoperative_three_month_insulin_resistance" placeholder="胰岛素抵抗" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="postoperative_three_month_abnormal_glucose_metabolism">
				<el-input v-model="Form.postoperative_three_month_abnormal_glucose_metabolism" placeholder="糖代谢异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="postoperative_three_month_type_2_diabetes">
				<el-input v-model="Form.postoperative_three_month_type_2_diabetes" placeholder="2型糖尿病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="postoperative_three_month_reflux_esophagitis">
				<el-input v-model="Form.postoperative_three_month_reflux_esophagitis" placeholder="反流性食管炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="postoperative_three_month_acanthosis_nigricans">
				<el-input v-model="Form.postoperative_three_month_acanthosis_nigricans" placeholder="黑棘皮病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="postoperative_three_month_metabolic_syndrome">
				<el-input v-model="Form.postoperative_three_month_metabolic_syndrome" placeholder="代谢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="脱发" prop="postoperative_three_month_hair_loss">
				<el-input v-model="Form.postoperative_three_month_hair_loss" placeholder="脱发" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="postoperative_three_month_diarrhea">
				<el-input v-model="Form.postoperative_three_month_diarrhea" placeholder="腹泻" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="postoperative_three_month_constipation">
				<el-input v-model="Form.postoperative_three_month_constipation" placeholder="便秘" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胆囊结石" prop="postoperative_three_month_gallbladder_stones">
				<el-input v-model="Form.postoperative_three_month_gallbladder_stones" placeholder="胆囊结石" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- 术后六月 -->
			<div><strong>术后六月</strong></div>
			<el-divider />
			<el-form-item label="身高cm" prop="postoperative_six_month_height">
				<el-input v-model="Form.postoperative_six_month_height" placeholder="身高cm" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="postoperative_six_month_weight">
				<el-input v-model="Form.postoperative_six_month_weight" placeholder="体重kg" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="postoperative_six_month_waistline">
				<el-input v-model="Form.postoperative_six_month_waistline" placeholder="腰围" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="postoperative_six_month_bmi">
				<el-input v-model="Form.postoperative_six_month_bmi" placeholder="bmi" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="postoperative_six_month_rbc">
				<el-input v-model="Form.postoperative_six_month_rbc" placeholder="rbc" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="postoperative_six_month_hemoglobin">
				<el-input v-model="Form.postoperative_six_month_hemoglobin" placeholder="血红蛋白(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="postoperative_six_month_alanine_aminotransferase">
				<el-input v-model="Form.postoperative_six_month_alanine_aminotransferase" placeholder="谷丙转氨酶alt(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="postoperative_six_month_aspartate_aminotransferase">
				<el-input v-model="Form.postoperative_six_month_aspartate_aminotransferase" placeholder="谷草转氨酶ast(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil(mmol/l)" prop="postoperative_six_month_total_bilirubin">
				<el-input v-model="Form.postoperative_six_month_total_bilirubin" placeholder="总胆红素tbil(mmol/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="postoperative_six_month_total_protein">
				<el-input v-model="Form.postoperative_six_month_total_protein" placeholder="总蛋白tp(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="postoperative_six_month_albumin">
				<el-input v-model="Form.postoperative_six_month_albumin" placeholder="白蛋白(alb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="glu" prop="postoperative_six_month_glu">
				<el-input v-model="Form.postoperative_six_month_glu" placeholder="glu" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="urea" prop="postoperative_six_month_urea">
				<el-input v-model="Form.postoperative_six_month_urea" placeholder="urea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="crea" prop="postoperative_six_month_crea">
				<el-input v-model="Form.postoperative_six_month_crea" placeholder="crea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="d-d-2" prop="postoperative_six_month_d_d_2">
				<el-input v-model="Form.postoperative_six_month_d_d_2" placeholder="d-d-2" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="postoperative_six_month_basal_metabolic_rate">
				<el-input v-model="Form.postoperative_six_month_basal_metabolic_rate" placeholder="基础代谢率" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="postoperative_six_month_folic_acid">
				<el-input v-model="Form.postoperative_six_month_folic_acid" placeholder="叶酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="postoperative_six_month_renal_dysfunction">
				<el-input v-model="Form.postoperative_six_month_renal_dysfunction" placeholder="肾功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="postoperative_six_month_deformation_arthritis">
				<el-input v-model="Form.postoperative_six_month_deformation_arthritis" placeholder="变形性关节炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="postoperative_six_month_male_sexual_dysfunction">
				<el-input v-model="Form.postoperative_six_month_male_sexual_dysfunction" placeholder="男性性功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="postoperative_six_month_polycystic_ovary_syndrome">
				<el-input v-model="Form.postoperative_six_month_polycystic_ovary_syndrome" placeholder="多囊卵巢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="postoperative_six_month_osahs">
				<el-input v-model="Form.postoperative_six_month_osahs" placeholder="osahs" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="nash" prop="postoperative_six_month_nash">
				<el-input v-model="Form.postoperative_six_month_nash" placeholder="nash" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="postoperative_six_month_insulin_resistance">
				<el-input v-model="Form.postoperative_six_month_insulin_resistance" placeholder="胰岛素抵抗" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="postoperative_six_month_abnormal_glucose_metabolism">
				<el-input v-model="Form.postoperative_six_month_abnormal_glucose_metabolism" placeholder="糖代谢异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="postoperative_six_month_type_2_diabetes">
				<el-input v-model="Form.postoperative_six_month_type_2_diabetes" placeholder="2型糖尿病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="postoperative_six_month_reflux_esophagitis">
				<el-input v-model="Form.postoperative_six_month_reflux_esophagitis" placeholder="反流性食管炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="postoperative_six_month_acanthosis_nigricans">
				<el-input v-model="Form.postoperative_six_month_acanthosis_nigricans" placeholder="黑棘皮病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="postoperative_six_month_metabolic_syndrome">
				<el-input v-model="Form.postoperative_six_month_metabolic_syndrome" placeholder="代谢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="脱发" prop="postoperative_six_month_hair_loss">
				<el-input v-model="Form.postoperative_six_month_hair_loss" placeholder="脱发" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="postoperative_six_month_diarrhea">
				<el-input v-model="Form.postoperative_six_month_diarrhea" placeholder="腹泻" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="postoperative_six_month_constipation">
				<el-input v-model="Form.postoperative_six_month_constipation" placeholder="便秘" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胆囊结石" prop="postoperative_six_month_gallbladder_stones">
				<el-input v-model="Form.postoperative_six_month_gallbladder_stones" placeholder="胆囊结石" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- 术后一年 -->
			<div><strong>术后一年</strong></div>
			<el-divider />
			<el-form-item label="身高cm" prop="postoperative_one_year_height">
				<el-input v-model="Form.postoperative_one_year_height" placeholder="身高cm" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="postoperative_one_year_weight">
				<el-input v-model="Form.postoperative_one_year_weight" placeholder="体重kg" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腰围" prop="postoperative_one_year_waistline">
				<el-input v-model="Form.postoperative_one_year_waistline" placeholder="腰围" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="postoperative_one_year_bmi">
				<el-input v-model="Form.postoperative_one_year_bmi" placeholder="bmi" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="rbc" prop="postoperative_one_year_rbc">
				<el-input v-model="Form.postoperative_one_year_rbc" placeholder="rbc" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="血红蛋白(g/l)" prop="postoperative_one_year_hemoglobin">
				<el-input v-model="Form.postoperative_one_year_hemoglobin" placeholder="血红蛋白(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt(u/l)" prop="postoperative_one_year_alanine_aminotransferase">
				<el-input v-model="Form.postoperative_one_year_alanine_aminotransferase" placeholder="谷丙转氨酶alt(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast(u/l)" prop="postoperative_one_year_aspartate_aminotransferase">
				<el-input v-model="Form.postoperative_one_year_aspartate_aminotransferase" placeholder="谷草转氨酶ast(u/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil(mmol/l)" prop="postoperative_one_year_total_bilirubin">
				<el-input v-model="Form.postoperative_one_year_total_bilirubin" placeholder="总胆红素tbil(mmol/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp(g/l)" prop="postoperative_one_year_total_protein">
				<el-input v-model="Form.postoperative_one_year_total_protein" placeholder="总蛋白tp(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="白蛋白(alb)(g/l)" prop="postoperative_one_year_albumin">
				<el-input v-model="Form.postoperative_one_year_albumin" placeholder="白蛋白(alb)(g/l)" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="glu" prop="postoperative_one_year_glu">
				<el-input v-model="Form.postoperative_one_year_glu" placeholder="glu" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="urea" prop="postoperative_one_year_urea">
				<el-input v-model="Form.postoperative_one_year_urea" placeholder="urea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="crea" prop="postoperative_one_year_crea">
				<el-input v-model="Form.postoperative_one_year_crea" placeholder="crea" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="d-d-2" prop="postoperative_one_year_d_d_2">
				<el-input v-model="Form.postoperative_one_year_d_d_2" placeholder="d-d-2" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="基础代谢率" prop="postoperative_one_year_basal_metabolic_rate">
				<el-input v-model="Form.postoperative_one_year_basal_metabolic_rate" placeholder="基础代谢率" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="postoperative_one_year_folic_acid">
				<el-input v-model="Form.postoperative_one_year_folic_acid" placeholder="叶酸" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="肾功能异常" prop="postoperative_one_year_renal_dysfunction">
				<el-input v-model="Form.postoperative_one_year_renal_dysfunction" placeholder="肾功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="变形性关节炎" prop="postoperative_one_year_deformation_arthritis">
				<el-input v-model="Form.postoperative_one_year_deformation_arthritis" placeholder="变形性关节炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="男性性功能异常" prop="postoperative_one_year_male_sexual_dysfunction">
				<el-input v-model="Form.postoperative_one_year_male_sexual_dysfunction" placeholder="男性性功能异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="多囊卵巢综合征" prop="postoperative_one_year_polycystic_ovary_syndrome">
				<el-input v-model="Form.postoperative_one_year_polycystic_ovary_syndrome" placeholder="多囊卵巢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="osahs" prop="postoperative_one_year_osahs">
				<el-input v-model="Form.postoperative_one_year_osahs" placeholder="osahs" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="nash" prop="postoperative_one_year_nash">
				<el-input v-model="Form.postoperative_one_year_nash" placeholder="nash" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胰岛素抵抗" prop="postoperative_one_year_insulin_resistance">
				<el-input v-model="Form.postoperative_one_year_insulin_resistance" placeholder="胰岛素抵抗" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="糖代谢异常" prop="postoperative_one_year_abnormal_glucose_metabolism">
				<el-input v-model="Form.postoperative_one_year_abnormal_glucose_metabolism" placeholder="糖代谢异常" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="2型糖尿病" prop="postoperative_one_year_type_2_diabetes">
				<el-input v-model="Form.postoperative_one_year_type_2_diabetes" placeholder="2型糖尿病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="反流性食管炎" prop="postoperative_one_year_reflux_esophagitis">
				<el-input v-model="Form.postoperative_one_year_reflux_esophagitis" placeholder="反流性食管炎" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="黑棘皮病" prop="postoperative_one_year_acanthosis_nigricans">
				<el-input v-model="Form.postoperative_one_year_acanthosis_nigricans" placeholder="黑棘皮病" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="代谢综合征" prop="postoperative_one_year_metabolic_syndrome">
				<el-input v-model="Form.postoperative_one_year_metabolic_syndrome" placeholder="代谢综合征" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="脱发" prop="postoperative_one_year_hair_loss">
				<el-input v-model="Form.postoperative_one_year_hair_loss" placeholder="脱发" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="腹泻" prop="postoperative_one_year_diarrhea">
				<el-input v-model="Form.postoperative_one_year_diarrhea" placeholder="腹泻" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="便秘" prop="postoperative_one_year_constipation">
				<el-input v-model="Form.postoperative_one_year_constipation" placeholder="便秘" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="胆囊结石" prop="postoperative_one_year_gallbladder_stones">
				<el-input v-model="Form.postoperative_one_year_gallbladder_stones" placeholder="胆囊结石" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<!-- 围术期手术 -->
			<div><strong>围术期手术</strong></div>
			<el-divider />
			<el-form-item label="围术期手术并发症" prop="perioperative_complications">
				<el-checkbox-group v-model="Form.perioperative_complications">
					<el-checkbox label=0 name="perioperative_complications">无</el-checkbox>
					<el-checkbox label=1 name="perioperative_complications">胃漏</el-checkbox>
					<el-checkbox label=2 name="perioperative_complications">吻合口瘘</el-checkbox>
					<el-checkbox label=3 name="perioperative_complications">腹腔内出血</el-checkbox>
					<el-checkbox label=4 name="perioperative_complications">消化道出血</el-checkbox>
					<el-checkbox label=5 name="perioperative_complications">麻痹性肠梗阻</el-checkbox>
					<el-checkbox label=6 name="perioperative_complications">机械性梗阻</el-checkbox>
					<el-checkbox label=7 name="perioperative_complications">胃无张力</el-checkbox>
					<el-checkbox label=8 name="perioperative_complications">切口感染/切口裂开</el-checkbox>
					<el-checkbox label=9 name="perioperative_complications">腹腔感染/腹腔脓肿/腹腔局限性积液</el-checkbox>
					<el-checkbox label=10 name="perioperative_complications">血管损伤</el-checkbox>
					<el-checkbox label=11 name="perioperative_complications">临近器官损伤</el-checkbox>
					<el-checkbox label=12 name="perioperative_complications">腹腔镜相关并发症</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="围术期手术并发症处理方式" prop="perioperative_complications_deal_way">
				<el-input v-model="Form.perioperative_complications_deal_way" placeholder="围术期手术并发症处理方式" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="非手术并发症" prop="nonoperative_complication">
				<el-checkbox-group v-model="Form.nonoperative_complication">
					<el-checkbox label=0 name="nonoperative_complication">无</el-checkbox>
					<el-checkbox label=1 name="nonoperative_complication">不明原因发热(POD3以后>38.5℃)</el-checkbox>
					<el-checkbox label=2 name="nonoperative_complication">呼吸系统(a.肺部感染/b.胸腔积液/c.肺不张/d.肺动脉栓塞/e.呼吸功能不全)</el-checkbox>
					<el-checkbox label=3 name="nonoperative_complication">心血管系统、血栓</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="围术期非手术并发症处理方式" prop="perioperative_not_complications_deal_way">
				<el-input v-model="Form.perioperative_not_complications_deal_way" placeholder="围术期非手术并发症处理方式" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="转归" prop="outcome">
				<el-checkbox-group v-model="Form.outcome">
					<el-checkbox label=1 name="outcome">无并发症出院</el-checkbox>
					<el-checkbox label=2 name="outcome">并发症治愈出院</el-checkbox>
					<el-checkbox label=3 name="outcome">自动出院</el-checkbox>
					<el-checkbox label=4 name="outcome">死亡</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<div><strong>病例信息</strong></div>
			<el-divider />
			<!-- <p style="color: #409eff;">1.病例信息</p> -->
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
			<el-divider />
			<!-- <p style="color: #409eff;">1.其他</p> -->
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
					nrs2002_score: '',
					asa_grade: '',
					// 术前
					preoperative_height: '',
					preoperative_weight: '',
					preoperative_waistline: '',
					preoperative_bmi: '',
					preoperative_rbc: '',
					preoperative_hemoglobin: '',
					preoperative_alanine_aminotransferase: '',
					preoperative_aspartate_aminotransferase: '',
					preoperative_total_protein: '',
					preoperative_albumin: '',
					preoperative_prealbumin: '',
					preoperative_trace_elements: '',
					preoperative_glu: '',
					preoperative_uric_acid: '',
					preoperative_hdl_ch: '',
					preoperative_tg: '',
					preoperative_bun: '',
					preoperative_crea: '',
					preoperative_d_dimer: '',
					preoperative_vitb12: '',
					preoperative_basal_metabolic_rate: '',
					preoperative_folic_acid: '',
					preoperative_renal_dysfunction: '',
					preoperative_deformation_arthritis: '',
					preoperative_male_sexual_dysfunction: '',
					preoperative_polycystic_ovary_syndrome: '',
					preoperative_osahs: '',
					preoperative_nash: '',
					preoperative_insulin_resistance: '',
					preoperative_abnormal_glucose_metabolism: '',
					preoperative_type_2_diabetes: '',
					preoperative_reflux_esophagitis: '',
					preoperative_gout: '',
					preoperative_acanthosis_nigricans: '',
					preoperative_metabolic_syndrome: '',
					// 术后第一月
					postoperative_one_month_height: '',
					postoperative_one_month_weight: '',
					postoperative_one_month_waistline: '',
					postoperative_one_month_bmi: '',
					postoperative_one_month_rbc: '',
					postoperative_one_month_hemoglobin: '',
					postoperative_one_month_alanine_aminotransferase: '',
					postoperative_one_month_aspartate_aminotransferase: '',
					postoperative_one_month_total_bilirubin: '',
					postoperative_one_month_total_protein: '',
					postoperative_one_month_albumin: '',
					postoperative_one_month_glu: '',
					postoperative_one_month_urea: '',
					postoperative_one_month_crea: '',
					postoperative_one_month_d_d_2: '',
					postoperative_one_month_basal_metabolic_rate: '',
					postoperative_one_month_folic_acid: '',
					postoperative_one_month_renal_dysfunction: '',
					postoperative_one_month_deformation_arthritis: '',
					postoperative_one_month_male_sexual_dysfunction: '',
					postoperative_one_month_polycystic_ovary_syndrome: '',
					postoperative_one_month_osahs: '',
					postoperative_one_month_nash: '',
					postoperative_one_month_insulin_resistance: '',
					postoperative_one_month_abnormal_glucose_metabolism: '',
					postoperative_one_month_type_2_diabetes: '',
					postoperative_one_month_reflux_esophagitis: '',
					postoperative_one_month_acanthosis_nigricans: '',
					postoperative_one_month_metabolic_syndrome: '',
					postoperative_one_month_hair_loss: '',
					postoperative_one_month_diarrhea: '',
					postoperative_one_month_constipation: '',
					postoperative_one_month_gallbladder_stones: '',
					// 术后三月
					postoperative_three_month_height: '',
					postoperative_three_month_weight: '',
					postoperative_three_month_waistline: '',
					postoperative_three_month_bmi: '',
					postoperative_three_month_rbc: '',
					postoperative_three_month_hemoglobin: '',
					postoperative_three_month_alanine_aminotransferase: '',
					postoperative_three_month_aspartate_aminotransferase: '',
					postoperative_three_month_total_bilirubin: '',
					postoperative_three_month_total_protein: '',
					postoperative_three_month_albumin: '',
					postoperative_three_month_glu: '',
					postoperative_three_month_urea: '',
					postoperative_three_month_crea: '',
					postoperative_three_month_d_d_2: '',
					postoperative_three_month_basal_metabolic_rate: '',
					postoperative_three_month_folic_acid: '',
					postoperative_three_month_renal_dysfunction: '',
					postoperative_three_month_deformation_arthritis: '',
					postoperative_three_month_male_sexual_dysfunction: '',
					postoperative_three_month_polycystic_ovary_syndrome: '',
					postoperative_three_month_osahs: '',
					postoperative_three_month_nash: '',
					postoperative_three_month_insulin_resistance: '',
					postoperative_three_month_abnormal_glucose_metabolism: '',
					postoperative_three_month_type_2_diabetes: '',
					postoperative_three_month_reflux_esophagitis: '',
					postoperative_three_month_acanthosis_nigricans: '',
					postoperative_three_month_metabolic_syndrome: '',
					postoperative_three_month_hair_loss: '',
					postoperative_three_month_diarrhea: '',
					postoperative_three_month_constipation: '',
					postoperative_three_month_gallbladder_stones: '',
					// 术后六月
					postoperative_six_month_height: '',
					postoperative_six_month_weight: '',
					postoperative_six_month_waistline: '',
					postoperative_six_month_bmi: '',
					postoperative_six_month_rbc: '',
					postoperative_six_month_hemoglobin: '',
					postoperative_six_month_alanine_aminotransferase: '',
					postoperative_six_month_aspartate_aminotransferase: '',
					postoperative_six_month_total_bilirubin: '',
					postoperative_six_month_total_protein: '',
					postoperative_six_month_albumin: '',
					postoperative_six_month_glu: '',
					postoperative_six_month_urea: '',
					postoperative_six_month_crea: '',
					postoperative_six_month_d_d_2: '',
					postoperative_six_month_basal_metabolic_rate: '',
					postoperative_six_month_folic_acid: '',
					postoperative_six_month_renal_dysfunction: '',
					postoperative_six_month_deformation_arthritis: '',
					postoperative_six_month_male_sexual_dysfunction: '',
					postoperative_six_month_polycystic_ovary_syndrome: '',
					postoperative_six_month_osahs: '',
					postoperative_six_month_nash: '',
					postoperative_six_month_insulin_resistance: '',
					postoperative_six_month_abnormal_glucose_metabolism: '',
					postoperative_six_month_type_2_diabetes: '',
					postoperative_six_month_reflux_esophagitis: '',
					postoperative_six_month_acanthosis_nigricans: '',
					postoperative_six_month_metabolic_syndrome: '',
					postoperative_six_month_hair_loss: '',
					postoperative_six_month_diarrhea: '',
					postoperative_six_month_constipation: '',
					postoperative_six_month_gallbladder_stones: '',
					// 术后一年
					postoperative_one_year_height: '',
					postoperative_one_year_weight: '',
					postoperative_one_year_waistline: '',
					postoperative_one_year_bmi: '',
					postoperative_one_year_rbc: '',
					postoperative_one_year_hemoglobin: '',
					postoperative_one_year_alanine_aminotransferase: '',
					postoperative_one_year_aspartate_aminotransferase: '',
					postoperative_one_year_total_bilirubin: '',
					postoperative_one_year_total_protein: '',
					postoperative_one_year_albumin: '',
					postoperative_one_year_glu: '',
					postoperative_one_year_urea: '',
					postoperative_one_year_crea: '',
					postoperative_one_year_d_d_2: '',
					postoperative_one_year_basal_metabolic_rate: '',
					postoperative_one_year_folic_acid: '',
					postoperative_one_year_renal_dysfunction: '',
					postoperative_one_year_deformation_arthritis: '',
					postoperative_one_year_male_sexual_dysfunction: '',
					postoperative_one_year_polycystic_ovary_syndrome: '',
					postoperative_one_year_osahs: '',
					postoperative_one_year_nash: '',
					postoperative_one_year_insulin_resistance: '',
					postoperative_one_year_abnormal_glucose_metabolism: '',
					postoperative_one_year_type_2_diabetes: '',
					postoperative_one_year_reflux_esophagitis: '',
					postoperative_one_year_acanthosis_nigricans: '',
					postoperative_one_year_metabolic_syndrome: '',
					postoperative_one_year_hair_loss: '',
					postoperative_one_year_diarrhea: '',
					postoperative_one_year_constipation: '',
					postoperative_one_year_gallbladder_stones: '',
					// 围术期手术
					perioperative_complications: [],
					perioperative_complications_deal_way: '',
					nonoperative_complication: [],
					perioperative_not_complications_deal_way: '',
					outcome: [],
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
					axios.get(`/api/back/WeightLosss/${id}`).then(res => {
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
							nrs2002_score: res.data.nrs2002_score,
							asa_grade: res.data.asa_grade,
							// 术前
							preoperative_height: res.data.preoperative_height,
							preoperative_weight: res.data.preoperative_weight,
							preoperative_waistline: res.data.preoperative_waistline,
							preoperative_bmi: res.data.preoperative_bmi,
							preoperative_rbc: res.data.preoperative_rbc,
							preoperative_hemoglobin: res.data.preoperative_hemoglobin,
							preoperative_alanine_aminotransferase: res.data.preoperative_alanine_aminotransferase,
							preoperative_aspartate_aminotransferase: res.data.preoperative_aspartate_aminotransferase,
							preoperative_total_protein: res.data.preoperative_total_protein,
							preoperative_albumin: res.data.preoperative_albumin,
							preoperative_prealbumin: res.data.preoperative_prealbumin,
							preoperative_trace_elements: res.data.preoperative_trace_elements,
							preoperative_glu: res.data.preoperative_glu,
							preoperative_uric_acid: res.data.preoperative_uric_acid,
							preoperative_hdl_ch: res.data.preoperative_hdl_ch,
							preoperative_tg: res.data.preoperative_tg,
							preoperative_bun: res.data.preoperative_bun,
							preoperative_crea: res.data.preoperative_crea,
							preoperative_d_dimer: res.data.preoperative_d_dimer,
							preoperative_vitb12: res.data.preoperative_vitb12,
							preoperative_basal_metabolic_rate: res.data.preoperative_basal_metabolic_rate,
							preoperative_folic_acid: res.data.preoperative_folic_acid,
							preoperative_renal_dysfunction: res.data.preoperative_renal_dysfunction,
							preoperative_deformation_arthritis: res.data.preoperative_deformation_arthritis,
							preoperative_male_sexual_dysfunction: res.data.preoperative_male_sexual_dysfunction,
							preoperative_polycystic_ovary_syndrome: res.data.preoperative_polycystic_ovary_syndrome,
							preoperative_osahs: res.data.preoperative_osahs,
							preoperative_nash: res.data.preoperative_nash,
							preoperative_insulin_resistance: res.data.preoperative_insulin_resistance,
							preoperative_abnormal_glucose_metabolism: res.data.preoperative_abnormal_glucose_metabolism,
							preoperative_type_2_diabetes: res.data.preoperative_type_2_diabetes,
							preoperative_reflux_esophagitis: res.data.preoperative_reflux_esophagitis,
							preoperative_gout: res.data.preoperative_gout,
							preoperative_acanthosis_nigricans: res.data.preoperative_acanthosis_nigricans,
							preoperative_metabolic_syndrome: res.data.preoperative_metabolic_syndrome,
							// 术后第一月
							postoperative_one_month_height: res.data.postoperative_one_month_height,
							postoperative_one_month_weight: res.data.postoperative_one_month_weight,
							postoperative_one_month_waistline: res.data.postoperative_one_month_waistline,
							postoperative_one_month_bmi: res.data.postoperative_one_month_bmi,
							postoperative_one_month_rbc: res.data.postoperative_one_month_rbc,
							postoperative_one_month_hemoglobin: res.data.postoperative_one_month_hemoglobin,
							postoperative_one_month_alanine_aminotransferase: res.data.postoperative_one_month_alanine_aminotransferase,
							postoperative_one_month_aspartate_aminotransferase: res.data.postoperative_one_month_aspartate_aminotransferase,
							postoperative_one_month_total_bilirubin: res.data.postoperative_one_month_total_bilirubin,
							postoperative_one_month_total_protein: res.data.postoperative_one_month_total_protein,
							postoperative_one_month_albumin: res.data.postoperative_one_month_albumin,
							postoperative_one_month_glu: res.data.postoperative_one_month_glu,
							postoperative_one_month_urea: res.data.postoperative_one_month_urea,
							postoperative_one_month_crea: res.data.postoperative_one_month_crea,
							postoperative_one_month_d_d_2: res.data.postoperative_one_month_d_d_2,
							postoperative_one_month_basal_metabolic_rate: res.data.postoperative_one_month_basal_metabolic_rate,
							postoperative_one_month_folic_acid: res.data.postoperative_one_month_folic_acid,
							postoperative_one_month_renal_dysfunction: res.data.postoperative_one_month_renal_dysfunction,
							postoperative_one_month_deformation_arthritis: res.data.postoperative_one_month_deformation_arthritis,
							postoperative_one_month_male_sexual_dysfunction: res.data.postoperative_one_month_male_sexual_dysfunction,
							postoperative_one_month_polycystic_ovary_syndrome: res.data.postoperative_one_month_polycystic_ovary_syndrome,
							postoperative_one_month_osahs: res.data.postoperative_one_month_osahs,
							postoperative_one_month_nash: res.data.postoperative_one_month_nash,
							postoperative_one_month_insulin_resistance: res.data.postoperative_one_month_insulin_resistance,
							postoperative_one_month_abnormal_glucose_metabolism: res.data.postoperative_one_month_abnormal_glucose_metabolism,
							postoperative_one_month_type_2_diabetes: res.data.postoperative_one_month_type_2_diabetes,
							postoperative_one_month_reflux_esophagitis: res.data.postoperative_one_month_reflux_esophagitis,
							postoperative_one_month_acanthosis_nigricans: res.data.postoperative_one_month_acanthosis_nigricans,
							postoperative_one_month_metabolic_syndrome: res.data.postoperative_one_month_metabolic_syndrome,
							postoperative_one_month_hair_loss: res.data.postoperative_one_month_hair_loss,
							postoperative_one_month_diarrhea: res.data.postoperative_one_month_diarrhea,
							postoperative_one_month_constipation: res.data.postoperative_one_month_constipation,
							postoperative_one_month_gallbladder_stones: res.data.postoperative_one_month_gallbladder_stones,
							// 术后三月
							postoperative_three_month_height: res.data.postoperative_three_month_height,
							postoperative_three_month_weight: res.data.postoperative_three_month_weight,
							postoperative_three_month_waistline: res.data.postoperative_three_month_waistline,
							postoperative_three_month_bmi: res.data.postoperative_three_month_bmi,
							postoperative_three_month_rbc: res.data.postoperative_three_month_rbc,
							postoperative_three_month_hemoglobin: res.data.postoperative_three_month_hemoglobin,
							postoperative_three_month_alanine_aminotransferase: res.data.postoperative_three_month_alanine_aminotransferase,
							postoperative_three_month_aspartate_aminotransferase: res.data.postoperative_three_month_aspartate_aminotransferase,
							postoperative_three_month_total_bilirubin: res.data.postoperative_three_month_total_bilirubin,
							postoperative_three_month_total_protein: res.data.postoperative_three_month_total_protein,
							postoperative_three_month_albumin: res.data.postoperative_three_month_albumin,
							postoperative_three_month_glu: res.data.postoperative_three_month_glu,
							postoperative_three_month_urea: res.data.postoperative_three_month_urea,
							postoperative_three_month_crea: res.data.postoperative_three_month_crea,
							postoperative_three_month_d_d_2: res.data.postoperative_three_month_d_d_2,
							postoperative_three_month_basal_metabolic_rate: res.data.postoperative_three_month_basal_metabolic_rate,
							postoperative_three_month_folic_acid: res.data.postoperative_three_month_folic_acid,
							postoperative_three_month_renal_dysfunction: res.data.postoperative_three_month_renal_dysfunction,
							postoperative_three_month_deformation_arthritis: res.data.postoperative_three_month_deformation_arthritis,
							postoperative_three_month_male_sexual_dysfunction: res.data.postoperative_three_month_male_sexual_dysfunction,
							postoperative_three_month_polycystic_ovary_syndrome: res.data.postoperative_three_month_polycystic_ovary_syndrome,
							postoperative_three_month_osahs: res.data.postoperative_three_month_osahs,
							postoperative_three_month_nash: res.data.postoperative_three_month_nash,
							postoperative_three_month_insulin_resistance: res.data.postoperative_three_month_insulin_resistance,
							postoperative_three_month_abnormal_glucose_metabolism: res.data.postoperative_three_month_abnormal_glucose_metabolism,
							postoperative_three_month_type_2_diabetes: res.data.postoperative_three_month_type_2_diabetes,
							postoperative_three_month_reflux_esophagitis: res.data.postoperative_three_month_reflux_esophagitis,
							postoperative_three_month_acanthosis_nigricans: res.data.postoperative_three_month_acanthosis_nigricans,
							postoperative_three_month_metabolic_syndrome: res.data.postoperative_three_month_metabolic_syndrome,
							postoperative_three_month_hair_loss: res.data.postoperative_three_month_hair_loss,
							postoperative_three_month_diarrhea: res.data.postoperative_three_month_diarrhea,
							postoperative_three_month_constipation: res.data.postoperative_three_month_constipation,
							postoperative_three_month_gallbladder_stones: res.data.postoperative_three_month_gallbladder_stones,
							// 术后六月
							postoperative_six_month_height: res.data.postoperative_six_month_height,
							postoperative_six_month_weight: res.data.postoperative_six_month_weight,
							postoperative_six_month_waistline: res.data.postoperative_six_month_waistline,
							postoperative_six_month_bmi: res.data.postoperative_six_month_bmi,
							postoperative_six_month_rbc: res.data.postoperative_six_month_rbc,
							postoperative_six_month_hemoglobin: res.data.postoperative_six_month_hemoglobin,
							postoperative_six_month_alanine_aminotransferase: res.data.postoperative_six_month_alanine_aminotransferase,
							postoperative_six_month_aspartate_aminotransferase: res.data.postoperative_six_month_aspartate_aminotransferase,
							postoperative_six_month_total_bilirubin: res.data.postoperative_six_month_total_bilirubin,
							postoperative_six_month_total_protein: res.data.postoperative_six_month_total_protein,
							postoperative_six_month_albumin: res.data.postoperative_six_month_albumin,
							postoperative_six_month_glu: res.data.postoperative_six_month_glu,
							postoperative_six_month_urea: res.data.postoperative_six_month_urea,
							postoperative_six_month_crea: res.data.postoperative_six_month_crea,
							postoperative_six_month_d_d_2: res.data.postoperative_six_month_d_d_2,
							postoperative_six_month_basal_metabolic_rate: res.data.postoperative_six_month_basal_metabolic_rate,
							postoperative_six_month_folic_acid: res.data.postoperative_six_month_folic_acid,
							postoperative_six_month_renal_dysfunction: res.data.postoperative_six_month_renal_dysfunction,
							postoperative_six_month_deformation_arthritis: res.data.postoperative_six_month_deformation_arthritis,
							postoperative_six_month_male_sexual_dysfunction: res.data.postoperative_six_month_male_sexual_dysfunction,
							postoperative_six_month_polycystic_ovary_syndrome: res.data.postoperative_six_month_polycystic_ovary_syndrome,
							postoperative_six_month_osahs: res.data.postoperative_six_month_osahs,
							postoperative_six_month_nash: res.data.postoperative_six_month_nash,
							postoperative_six_month_insulin_resistance: res.data.postoperative_six_month_insulin_resistance,
							postoperative_six_month_abnormal_glucose_metabolism: res.data.postoperative_six_month_abnormal_glucose_metabolism,
							postoperative_six_month_type_2_diabetes: res.data.postoperative_six_month_type_2_diabetes,
							postoperative_six_month_reflux_esophagitis: res.data.postoperative_six_month_reflux_esophagitis,
							postoperative_six_month_acanthosis_nigricans: res.data.postoperative_six_month_acanthosis_nigricans,
							postoperative_six_month_metabolic_syndrome: res.data.postoperative_six_month_metabolic_syndrome,
							postoperative_six_month_hair_loss: res.data.postoperative_six_month_hair_loss,
							postoperative_six_month_diarrhea: res.data.postoperative_six_month_diarrhea,
							postoperative_six_month_constipation: res.data.postoperative_six_month_constipation,
							postoperative_six_month_gallbladder_stones: res.data.postoperative_six_month_gallbladder_stones,
							// 术后一年
							postoperative_one_year_height: res.data.postoperative_one_year_height,
							postoperative_one_year_weight: res.data.postoperative_one_year_weight,
							postoperative_one_year_waistline: res.data.postoperative_one_year_waistline,
							postoperative_one_year_bmi: res.data.postoperative_one_year_bmi,
							postoperative_one_year_rbc: res.data.postoperative_one_year_rbc,
							postoperative_one_year_hemoglobin: res.data.postoperative_one_year_hemoglobin,
							postoperative_one_year_alanine_aminotransferase: res.data.postoperative_one_year_alanine_aminotransferase,
							postoperative_one_year_aspartate_aminotransferase: res.data.postoperative_one_year_aspartate_aminotransferase,
							postoperative_one_year_total_bilirubin: res.data.postoperative_one_year_total_bilirubin,
							postoperative_one_year_total_protein: res.data.postoperative_one_year_total_protein,
							postoperative_one_year_albumin: res.data.postoperative_one_year_albumin,
							postoperative_one_year_glu: res.data.postoperative_one_year_glu,
							postoperative_one_year_urea: res.data.postoperative_one_year_urea,
							postoperative_one_year_crea: res.data.postoperative_one_year_crea,
							postoperative_one_year_d_d_2: res.data.postoperative_one_year_d_d_2,
							postoperative_one_year_basal_metabolic_rate: res.data.postoperative_one_year_basal_metabolic_rate,
							postoperative_one_year_folic_acid: res.data.postoperative_one_year_folic_acid,
							postoperative_one_year_renal_dysfunction: res.data.postoperative_one_year_renal_dysfunction,
							postoperative_one_year_deformation_arthritis: res.data.postoperative_one_year_deformation_arthritis,
							postoperative_one_year_male_sexual_dysfunction: res.data.postoperative_one_year_male_sexual_dysfunction,
							postoperative_one_year_polycystic_ovary_syndrome: res.data.postoperative_one_year_polycystic_ovary_syndrome,
							postoperative_one_year_osahs: res.data.postoperative_one_year_osahs,
							postoperative_one_year_nash: res.data.postoperative_one_year_nash,
							postoperative_one_year_insulin_resistance: res.data.postoperative_one_year_insulin_resistance,
							postoperative_one_year_abnormal_glucose_metabolism: res.data.postoperative_one_year_abnormal_glucose_metabolism,
							postoperative_one_year_type_2_diabetes: res.data.postoperative_one_year_type_2_diabetes,
							postoperative_one_year_reflux_esophagitis: res.data.postoperative_one_year_reflux_esophagitis,
							postoperative_one_year_acanthosis_nigricans: res.data.postoperative_one_year_acanthosis_nigricans,
							postoperative_one_year_metabolic_syndrome: res.data.postoperative_one_year_metabolic_syndrome,
							postoperative_one_year_hair_loss: res.data.postoperative_one_year_hair_loss,
							postoperative_one_year_diarrhea: res.data.postoperative_one_year_diarrhea,
							postoperative_one_year_constipation: res.data.postoperative_one_year_constipation,
							postoperative_one_year_gallbladder_stones: res.data.postoperative_one_year_gallbladder_stones,
							// 围术期手术
							perioperative_complications: res.data.perioperative_complications,
							perioperative_complications_deal_way: res.data.perioperative_complications_deal_way,
							nonoperative_complication: res.data.nonoperative_complication,
							perioperative_not_complications_deal_way: res.data.perioperative_not_complications_deal_way,
							outcome: res.data.outcome,
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
							nrs2002_score: state.Form.nrs2002_score,
							asa_grade: state.Form.asa_grade,
							// 术前
							preoperative_height: state.Form.preoperative_height,
							preoperative_weight: state.Form.preoperative_weight,
							preoperative_waistline: state.Form.preoperative_waistline,
							preoperative_bmi: state.Form.preoperative_bmi,
							preoperative_rbc: state.Form.preoperative_rbc,
							preoperative_hemoglobin: state.Form.preoperative_hemoglobin,
							preoperative_alanine_aminotransferase: state.Form.preoperative_alanine_aminotransferase,
							preoperative_aspartate_aminotransferase: state.Form.preoperative_aspartate_aminotransferase,
							preoperative_total_protein: state.Form.preoperative_total_protein,
							preoperative_albumin: state.Form.preoperative_albumin,
							preoperative_prealbumin: state.Form.preoperative_prealbumin,
							preoperative_trace_elements: state.Form.preoperative_trace_elements,
							preoperative_glu: state.Form.preoperative_glu,
							preoperative_uric_acid: state.Form.preoperative_uric_acid,
							preoperative_hdl_ch: state.Form.preoperative_hdl_ch,
							preoperative_tg: state.Form.preoperative_tg,
							preoperative_bun: state.Form.preoperative_bun,
							preoperative_crea: state.Form.preoperative_crea,
							preoperative_d_dimer: state.Form.preoperative_d_dimer,
							preoperative_vitb12: state.Form.preoperative_vitb12,
							preoperative_basal_metabolic_rate: state.Form.preoperative_basal_metabolic_rate,
							preoperative_folic_acid: state.Form.preoperative_folic_acid,
							preoperative_renal_dysfunction: state.Form.preoperative_renal_dysfunction,
							preoperative_deformation_arthritis: state.Form.preoperative_deformation_arthritis,
							preoperative_male_sexual_dysfunction: state.Form.preoperative_male_sexual_dysfunction,
							preoperative_polycystic_ovary_syndrome: state.Form.preoperative_polycystic_ovary_syndrome,
							preoperative_osahs: state.Form.preoperative_osahs,
							preoperative_nash: state.Form.preoperative_nash,
							preoperative_insulin_resistance: state.Form.preoperative_insulin_resistance,
							preoperative_abnormal_glucose_metabolism: state.Form.preoperative_abnormal_glucose_metabolism,
							preoperative_type_2_diabetes: state.Form.preoperative_type_2_diabetes,
							preoperative_reflux_esophagitis: state.Form.preoperative_reflux_esophagitis,
							preoperative_gout: state.Form.preoperative_gout,
							preoperative_acanthosis_nigricans: state.Form.preoperative_acanthosis_nigricans,
							preoperative_metabolic_syndrome: state.Form.preoperative_metabolic_syndrome,
							// 术后第一月
							postoperative_one_month_height: state.Form.postoperative_one_month_height,
							postoperative_one_month_weight: state.Form.postoperative_one_month_weight,
							postoperative_one_month_waistline: state.Form.postoperative_one_month_waistline,
							postoperative_one_month_bmi: state.Form.postoperative_one_month_bmi,
							postoperative_one_month_rbc: state.Form.postoperative_one_month_rbc,
							postoperative_one_month_hemoglobin: state.Form.postoperative_one_month_hemoglobin,
							postoperative_one_month_alanine_aminotransferase: state.Form.postoperative_one_month_alanine_aminotransferase,
							postoperative_one_month_aspartate_aminotransferase: state.Form.postoperative_one_month_aspartate_aminotransferase,
							postoperative_one_month_total_bilirubin: state.Form.postoperative_one_month_total_bilirubin,
							postoperative_one_month_total_protein: state.Form.postoperative_one_month_total_protein,
							postoperative_one_month_albumin: state.Form.postoperative_one_month_albumin,
							postoperative_one_month_glu: state.Form.postoperative_one_month_glu,
							postoperative_one_month_urea: state.Form.postoperative_one_month_urea,
							postoperative_one_month_crea: state.Form.postoperative_one_month_crea,
							postoperative_one_month_d_d_2: state.Form.postoperative_one_month_d_d_2,
							postoperative_one_month_basal_metabolic_rate: state.Form.postoperative_one_month_basal_metabolic_rate,
							postoperative_one_month_folic_acid: state.Form.postoperative_one_month_folic_acid,
							postoperative_one_month_renal_dysfunction: state.Form.postoperative_one_month_renal_dysfunction,
							postoperative_one_month_deformation_arthritis: state.Form.postoperative_one_month_deformation_arthritis,
							postoperative_one_month_male_sexual_dysfunction: state.Form.postoperative_one_month_male_sexual_dysfunction,
							postoperative_one_month_polycystic_ovary_syndrome: state.Form.postoperative_one_month_polycystic_ovary_syndrome,
							postoperative_one_month_osahs: state.Form.postoperative_one_month_osahs,
							postoperative_one_month_nash: state.Form.postoperative_one_month_nash,
							postoperative_one_month_insulin_resistance: state.Form.postoperative_one_month_insulin_resistance,
							postoperative_one_month_abnormal_glucose_metabolism: state.Form.postoperative_one_month_abnormal_glucose_metabolism,
							postoperative_one_month_type_2_diabetes: state.Form.postoperative_one_month_type_2_diabetes,
							postoperative_one_month_reflux_esophagitis: state.Form.postoperative_one_month_reflux_esophagitis,
							postoperative_one_month_acanthosis_nigricans: state.Form.postoperative_one_month_acanthosis_nigricans,
							postoperative_one_month_metabolic_syndrome: state.Form.postoperative_one_month_metabolic_syndrome,
							postoperative_one_month_hair_loss: state.Form.postoperative_one_month_hair_loss,
							postoperative_one_month_diarrhea: state.Form.postoperative_one_month_diarrhea,
							postoperative_one_month_constipation: state.Form.postoperative_one_month_constipation,
							postoperative_one_month_gallbladder_stones: state.Form.postoperative_one_month_gallbladder_stones,
							// 术后三月
							postoperative_three_month_height: state.Form.postoperative_three_month_height,
							postoperative_three_month_weight: state.Form.postoperative_three_month_weight,
							postoperative_three_month_waistline: state.Form.postoperative_three_month_waistline,
							postoperative_three_month_bmi: state.Form.postoperative_three_month_bmi,
							postoperative_three_month_rbc: state.Form.postoperative_three_month_rbc,
							postoperative_three_month_hemoglobin: state.Form.postoperative_three_month_hemoglobin,
							postoperative_three_month_alanine_aminotransferase: state.Form.postoperative_three_month_alanine_aminotransferase,
							postoperative_three_month_aspartate_aminotransferase: state.Form.postoperative_three_month_aspartate_aminotransferase,
							postoperative_three_month_total_bilirubin: state.Form.postoperative_three_month_total_bilirubin,
							postoperative_three_month_total_protein: state.Form.postoperative_three_month_total_protein,
							postoperative_three_month_albumin: state.Form.postoperative_three_month_albumin,
							postoperative_three_month_glu: state.Form.postoperative_three_month_glu,
							postoperative_three_month_urea: state.Form.postoperative_three_month_urea,
							postoperative_three_month_crea: state.Form.postoperative_three_month_crea,
							postoperative_three_month_d_d_2: state.Form.postoperative_three_month_d_d_2,
							postoperative_three_month_basal_metabolic_rate: state.Form.postoperative_three_month_basal_metabolic_rate,
							postoperative_three_month_folic_acid: state.Form.postoperative_three_month_folic_acid,
							postoperative_three_month_renal_dysfunction: state.Form.postoperative_three_month_renal_dysfunction,
							postoperative_three_month_deformation_arthritis: state.Form.postoperative_three_month_deformation_arthritis,
							postoperative_three_month_male_sexual_dysfunction: state.Form.postoperative_three_month_male_sexual_dysfunction,
							postoperative_three_month_polycystic_ovary_syndrome: state.Form.postoperative_three_month_polycystic_ovary_syndrome,
							postoperative_three_month_osahs: state.Form.postoperative_three_month_osahs,
							postoperative_three_month_nash: state.Form.postoperative_three_month_nash,
							postoperative_three_month_insulin_resistance: state.Form.postoperative_three_month_insulin_resistance,
							postoperative_three_month_abnormal_glucose_metabolism: state.Form.postoperative_three_month_abnormal_glucose_metabolism,
							postoperative_three_month_type_2_diabetes: state.Form.postoperative_three_month_type_2_diabetes,
							postoperative_three_month_reflux_esophagitis: state.Form.postoperative_three_month_reflux_esophagitis,
							postoperative_three_month_acanthosis_nigricans: state.Form.postoperative_three_month_acanthosis_nigricans,
							postoperative_three_month_metabolic_syndrome: state.Form.postoperative_three_month_metabolic_syndrome,
							postoperative_three_month_hair_loss: state.Form.postoperative_three_month_hair_loss,
							postoperative_three_month_diarrhea: state.Form.postoperative_three_month_diarrhea,
							postoperative_three_month_constipation: state.Form.postoperative_three_month_constipation,
							postoperative_three_month_gallbladder_stones: state.Form.postoperative_three_month_gallbladder_stones,
							// 术后六月
							postoperative_six_month_height: state.Form.postoperative_six_month_height,
							postoperative_six_month_weight: state.Form.postoperative_six_month_weight,
							postoperative_six_month_waistline: state.Form.postoperative_six_month_waistline,
							postoperative_six_month_bmi: state.Form.postoperative_six_month_bmi,
							postoperative_six_month_rbc: state.Form.postoperative_six_month_rbc,
							postoperative_six_month_hemoglobin: state.Form.postoperative_six_month_hemoglobin,
							postoperative_six_month_alanine_aminotransferase: state.Form.postoperative_six_month_alanine_aminotransferase,
							postoperative_six_month_aspartate_aminotransferase: state.Form.postoperative_six_month_aspartate_aminotransferase,
							postoperative_six_month_total_bilirubin: state.Form.postoperative_six_month_total_bilirubin,
							postoperative_six_month_total_protein: state.Form.postoperative_six_month_total_protein,
							postoperative_six_month_albumin: state.Form.postoperative_six_month_albumin,
							postoperative_six_month_glu: state.Form.postoperative_six_month_glu,
							postoperative_six_month_urea: state.Form.postoperative_six_month_urea,
							postoperative_six_month_crea: state.Form.postoperative_six_month_crea,
							postoperative_six_month_d_d_2: state.Form.postoperative_six_month_d_d_2,
							postoperative_six_month_basal_metabolic_rate: state.Form.postoperative_six_month_basal_metabolic_rate,
							postoperative_six_month_folic_acid: state.Form.postoperative_six_month_folic_acid,
							postoperative_six_month_renal_dysfunction: state.Form.postoperative_six_month_renal_dysfunction,
							postoperative_six_month_deformation_arthritis: state.Form.postoperative_six_month_deformation_arthritis,
							postoperative_six_month_male_sexual_dysfunction: state.Form.postoperative_six_month_male_sexual_dysfunction,
							postoperative_six_month_polycystic_ovary_syndrome: state.Form.postoperative_six_month_polycystic_ovary_syndrome,
							postoperative_six_month_osahs: state.Form.postoperative_six_month_osahs,
							postoperative_six_month_nash: state.Form.postoperative_six_month_nash,
							postoperative_six_month_insulin_resistance: state.Form.postoperative_six_month_insulin_resistance,
							postoperative_six_month_abnormal_glucose_metabolism: state.Form.postoperative_six_month_abnormal_glucose_metabolism,
							postoperative_six_month_type_2_diabetes: state.Form.postoperative_six_month_type_2_diabetes,
							postoperative_six_month_reflux_esophagitis: state.Form.postoperative_six_month_reflux_esophagitis,
							postoperative_six_month_acanthosis_nigricans: state.Form.postoperative_six_month_acanthosis_nigricans,
							postoperative_six_month_metabolic_syndrome: state.Form.postoperative_six_month_metabolic_syndrome,
							postoperative_six_month_hair_loss: state.Form.postoperative_six_month_hair_loss,
							postoperative_six_month_diarrhea: state.Form.postoperative_six_month_diarrhea,
							postoperative_six_month_constipation: state.Form.postoperative_six_month_constipation,
							postoperative_six_month_gallbladder_stones: state.Form.postoperative_six_month_gallbladder_stones,
							// 术后一年
							postoperative_one_year_height: state.Form.postoperative_one_year_height,
							postoperative_one_year_weight: state.Form.postoperative_one_year_weight,
							postoperative_one_year_waistline: state.Form.postoperative_one_year_waistline,
							postoperative_one_year_bmi: state.Form.postoperative_one_year_bmi,
							postoperative_one_year_rbc: state.Form.postoperative_one_year_rbc,
							postoperative_one_year_hemoglobin: state.Form.postoperative_one_year_hemoglobin,
							postoperative_one_year_alanine_aminotransferase: state.Form.postoperative_one_year_alanine_aminotransferase,
							postoperative_one_year_aspartate_aminotransferase: state.Form.postoperative_one_year_aspartate_aminotransferase,
							postoperative_one_year_total_bilirubin: state.Form.postoperative_one_year_total_bilirubin,
							postoperative_one_year_total_protein: state.Form.postoperative_one_year_total_protein,
							postoperative_one_year_albumin: state.Form.postoperative_one_year_albumin,
							postoperative_one_year_glu: state.Form.postoperative_one_year_glu,
							postoperative_one_year_urea: state.Form.postoperative_one_year_urea,
							postoperative_one_year_crea: state.Form.postoperative_one_year_crea,
							postoperative_one_year_d_d_2: state.Form.postoperative_one_year_d_d_2,
							postoperative_one_year_basal_metabolic_rate: state.Form.postoperative_one_year_basal_metabolic_rate,
							postoperative_one_year_folic_acid: state.Form.postoperative_one_year_folic_acid,
							postoperative_one_year_renal_dysfunction: state.Form.postoperative_one_year_renal_dysfunction,
							postoperative_one_year_deformation_arthritis: state.Form.postoperative_one_year_deformation_arthritis,
							postoperative_one_year_male_sexual_dysfunction: state.Form.postoperative_one_year_male_sexual_dysfunction,
							postoperative_one_year_polycystic_ovary_syndrome: state.Form.postoperative_one_year_polycystic_ovary_syndrome,
							postoperative_one_year_osahs: state.Form.postoperative_one_year_osahs,
							postoperative_one_year_nash: state.Form.postoperative_one_year_nash,
							postoperative_one_year_insulin_resistance: state.Form.postoperative_one_year_insulin_resistance,
							postoperative_one_year_abnormal_glucose_metabolism: state.Form.postoperative_one_year_abnormal_glucose_metabolism,
							postoperative_one_year_type_2_diabetes: state.Form.postoperative_one_year_type_2_diabetes,
							postoperative_one_year_reflux_esophagitis: state.Form.postoperative_one_year_reflux_esophagitis,
							postoperative_one_year_acanthosis_nigricans: state.Form.postoperative_one_year_acanthosis_nigricans,
							postoperative_one_year_metabolic_syndrome: state.Form.postoperative_one_year_metabolic_syndrome,
							postoperative_one_year_hair_loss: state.Form.postoperative_one_year_hair_loss,
							postoperative_one_year_diarrhea: state.Form.postoperative_one_year_diarrhea,
							postoperative_one_year_constipation: state.Form.postoperative_one_year_constipation,
							postoperative_one_year_gallbladder_stones: state.Form.postoperative_one_year_gallbladder_stones,
							// 围术期手术
							perioperative_complications: state.Form.perioperative_complications,
							perioperative_complications_deal_way: state.Form.perioperative_complications_deal_way,
							nonoperative_complication: state.Form.nonoperative_complication,
							perioperative_not_complications_deal_way: state.Form.perioperative_not_complications_deal_way,
							outcome: state.Form.outcome,
							// 病理录入者
							inputting_medical_records: state.Form.inputting_medical_records,
							is_the_record_entry_complete: state.Form.is_the_record_entry_complete,
							medical_records_information_checker: state.Form.medical_records_information_checker,
						}

						let url = '/api/back/WeightLosss'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/WeightLosss/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/weight-loss-index',
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
