<template>
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" size="default" label-suffix=":" :inline="false">
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
					<el-radio label=2>女</el-radio>
					<el-radio label=1>男</el-radio>
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
			<el-form-item label="术前是否化疗" prop="preoperative_chemotherapy">
				<el-radio-group v-model="Form.preoperative_chemotherapy">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术前化疗前是否腹腔镜探查" prop="preoperative_chemotherapy_laparoscopic_exploration">
				<el-radio-group v-model="Form.preoperative_chemotherapy_laparoscopic_exploration">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹腔镜探查时间" prop="laparoscopic_exploration_time">
				<el-date-picker v-model="Form.laparoscopic_exploration_time" type="datetime" :default-value="new Date()"
					placeholder="请输入腹腔镜探查时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="腹腔镜探查结果" prop="laparoscopic_exploration_result">
				<el-radio-group v-model="Form.laparoscopic_exploration_result">
					<el-radio label=1>无腹膜转移</el-radio>
					<el-radio label=2>有腹膜转移</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="pci 指数" prop="pci_index">
				<el-input v-model="Form.pci_index" placeholder="请输入pci 指数" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹腔镜探查脱落细胞结果" prop="laparoscopic_exploration_cast_off_result">
				<el-input v-model="Form.laparoscopic_exploration_cast_off_result" placeholder="请输入腹腔镜探查脱落细胞结果" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹腔镜探查是否取活检" prop="laparoscopic_exploration_biopsy">
				<el-radio-group v-model="Form.laparoscopic_exploration_biopsy">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹腔镜探查活检结果" prop="laparoscopic_exploration_biopsy_result">
				<el-input v-model="Form.laparoscopic_exploration_biopsy_result" placeholder="请输入腹腔镜探查活检结果" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹腔镜探查后转归" prop="laparoscopic_exploration_prognosis">
				<el-radio-group v-model="Form.laparoscopic_exploration_prognosis">
					<el-radio label=1>胃肠外科行新辅助化疗</el-radio>
					<el-radio label=2>肿瘤科姑息治疗</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术前化疗方案" prop="preoperative_chemotherapy_scheme">
				<el-input v-model="Form.preoperative_chemotherapy_scheme" placeholder="请输入术前化疗方案" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前化疗周期" prop="preoperative_chemotherapy_period">
				<el-input v-model="Form.preoperative_chemotherapy_period" placeholder="请输入术前化疗周期" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="第一周期化疗时间" prop="first_period_chemotherapy_time">
				<el-date-picker v-model="Form.first_period_chemotherapy_time" type="datetime" :default-value="new Date()"
					placeholder="请输入第一周期化疗时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="第二周期化疗时间" prop="second_period_chemotherapy_time">
				<el-date-picker v-model="Form.second_period_chemotherapy_time" type="datetime" :default-value="new Date()"
					placeholder="请输入第二周期化疗时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="第三周期化疗时间" prop="third_period_chemotherapy_time">
				<el-date-picker v-model="Form.third_period_chemotherapy_time" type="datetime" :default-value="new Date()"
					placeholder="请输入第三周期化疗时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="第四周期化疗时间" prop="fourth_period_chemotherapy_time">
				<el-date-picker v-model="Form.fourth_period_chemotherapy_time" type="datetime" :default-value="new Date()"
					placeholder="请输入第四周期化疗时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="化疗后是否手术" prop="chemotherapy_operative">
				<el-radio-group v-model="Form.chemotherapy_operative">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="化疗期间不良反应" prop="chemotherapy_adverse_reactions">
				<el-input v-model="Form.chemotherapy_adverse_reactions" placeholder="请输入化疗期间不良反应" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="接受化疗后临床评价" prop="accept_chemotherapy_clinic_evaluate">
				<el-radio-group v-model="Form.accept_chemotherapy_clinic_evaluate">
					<el-radio label=1>cr</el-radio>
					<el-radio label=2>pr</el-radio>
					<el-radio label=3>sd</el-radio>
					<el-radio label=4>pd</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术后病理评效" prop="operative_evaluate_effect">
				<el-input v-model="Form.operative_evaluate_effect" placeholder="请输入术后病理评效" :rows="2" type="textarea"></el-input>
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
			<el-form-item label="总住院时间（天）" prop="total_hospital_days">
				<el-input v-model="Form.total_hospital_days" placeholder="请输入总住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术后住院时间（天）" prop="postoperation_hospital_days">
				<el-input v-model="Form.postoperation_hospital_days" placeholder="请输入术后住院时间（天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="ecog 评分" prop="ecog_score">
				<el-input v-model="Form.ecog_score" placeholder="请输入ecog 评分" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="1月内体重下降" prop="one_month_loss_of_weight">
				<el-radio-group v-model="Form.one_month_loss_of_weight">
					<el-radio label=1>{{ "<=5%" }}</el-radio>
					<el-radio label=2>5-10%</el-radio>
					<el-radio label=3>>=10%</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="nrs2002评分" prop="nrs2002_score">
				<el-radio-group v-model="Form.nrs2002_score">
					<el-radio label=0>{{ "<3" }}</el-radio>
					<el-radio label=1>>=3</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="pg-sga评估" prop="pg_sga_assessment">
				<el-radio-group v-model="Form.pg_sga_assessment">
					<el-radio label=1>a</el-radio>
					<el-radio label=2>b</el-radio>
					<el-radio label=2>c</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="营养支持治疗" prop="nutrition_support_therapy">
				<el-radio-group v-model="Form.nutrition_support_therapy">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="方案" prop="scheme">
				<el-radio-group v-model="Form.scheme">
					<el-radio label=1>ten</el-radio>
					<el-radio label=2>pe+en</el-radio>
					<el-radio label=3>tpn</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="天数" prop="days">
				<el-input v-model="Form.days" placeholder="请输入天数" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="asa分级" prop="asa_grade">
				<el-input v-model="Form.asa_grade" placeholder="请输入asa分级" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="主要症状" prop="main_symptoms">
				<el-checkbox-group v-model="Form.main_symptoms">
					<el-checkbox label=0 name="main_symptoms">无</el-checkbox>
					<el-checkbox label=1 name="main_symptoms">腹痛</el-checkbox>
					<el-checkbox label=2 name="main_symptoms">饱胀</el-checkbox>
					<el-checkbox label=3 name="main_symptoms">呕吐</el-checkbox>
					<el-checkbox label=4 name="main_symptoms">呕血</el-checkbox>
					<el-checkbox label=5 name="main_symptoms">便血</el-checkbox>
					<el-checkbox label=6 name="main_symptoms">黑便</el-checkbox>
					<el-checkbox label=7 name="main_symptoms">吞咽困难</el-checkbox>
					<el-checkbox label=8 name="main_symptoms">烧心感</el-checkbox>
					<el-checkbox label=9 name="main_symptoms">厌食</el-checkbox>
					<el-checkbox label=10 name="main_symptoms">乏力</el-checkbox>
					<el-checkbox label=11 name="main_symptoms">体重下降</el-checkbox>
					<el-checkbox label=12 name="main_symptoms">返酸</el-checkbox>
					<el-checkbox label=13 name="main_symptoms">暖气</el-checkbox>
					<el-checkbox label=14 name="main_symptoms">呃逆</el-checkbox>
					<el-checkbox label=15 name="main_symptoms">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="主要体征" prop="main_signs">
				<el-checkbox-group v-model="Form.main_signs">
					<el-checkbox label=0 name="main_signs">无</el-checkbox>
					<el-checkbox label=1 name="main_signs">腹部压痛</el-checkbox>
					<el-checkbox label=2 name="main_signs">腹部包块</el-checkbox>
					<el-checkbox label=3 name="main_signs">腹肌抵抗</el-checkbox>
					<el-checkbox label=4 name="main_signs">胃型</el-checkbox>
					<el-checkbox label=5 name="main_signs">肛检包块/结节</el-checkbox>
					<el-checkbox label=6 name="main_signs">振水音</el-checkbox>
					<el-checkbox label=7 name="main_signs">左锁骨上淋巴结肿大</el-checkbox>
					<el-checkbox label=8 name="main_signs">移动性浊音</el-checkbox>
					<el-checkbox label=9 name="main_signs">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="腹腔手术史" prop="laparoscopic_operative_record">
				<el-input v-model="Form.laparoscopic_operative_record" placeholder="请输入腹腔手术史" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="家族史" prop="family_record">
				<el-input v-model="Form.family_record" placeholder="请输入家族史" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="吸烟" prop="smoke">
				<el-radio-group v-model="Form.smoke">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="吸烟（年）" prop="smoke_year">
				<el-input v-model="Form.smoke_year" placeholder="请输入吸烟（年）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="平均（支/天）" prop="average_smoke_day">
				<el-input v-model="Form.average_smoke_day" placeholder="请输入平均（支/天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="饮酒" prop="drink">
				<el-radio-group v-model="Form.drink">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="饮酒年" prop="drink_year">
				<el-input v-model="Form.drink_year" placeholder="请输入饮酒年" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="饮酒平均（g/天）" prop="average_drink_day">
				<el-input v-model="Form.average_drink_day" placeholder="饮酒请输入平均（g/天）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="身高cm" prop="height">
				<el-input v-model="Form.height" placeholder="饮酒请输入身高cm" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="体重kg" prop="weight">
				<el-input v-model="Form.weight" placeholder="饮酒请输入体重kg" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="bmi" prop="bmi">
				<el-input v-model="Form.bmi" placeholder="饮酒请输入bmi" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="hp" prop="hp">
				<el-radio-group v-model="Form.hp">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="心电图" prop="ecg">
				<el-radio-group v-model="Form.ecg">
					<el-radio label=0>无特殊</el-radio>
					<el-radio label=1>特殊异常</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术前肺功能fev1/fvc(%)" prop="preoperative_lung_function">
				<el-input v-model="Form.preoperative_lung_function" placeholder="饮酒请输入术前肺功能fev1/fvc(%)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前CT" prop="preoperative_ct">
				<el-radio-group v-model="Form.preoperative_ct">
					<el-radio label=1>Tx</el-radio>
					<el-radio label=2>T1a-M,T1b-SM</el-radio>
					<el-radio label=3>T2-MP</el-radio>
					<el-radio label=4>T3-SS</el-radio>
					<el-radio label=5>T4a-SE</el-radio>
					<el-radio label=6>T4b-SI</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="N分期" prop="n_aging">
				<el-radio-group v-model="Form.n_aging">
					<el-radio label=1>N0/区域淋巴结无转移</el-radio>
					<el-radio label=2>N1/1-2个区域淋巴结转移</el-radio>
					<el-radio label=3>N2/3-6个区域淋巴结转移</el-radio>
					<el-radio label=4>N3/7个以上区域淋巴结转移</el-radio>
					<el-radio label=5>Nx/区域淋巴结无法评估</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术前CT检查M分期" prop="preoperative_ct_check_m_aging">
				<el-input v-model="Form.preoperative_ct_check_m_aging" placeholder="术前CT检查M分期" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前分期ctnm" prop="preoperative_aging">
				<el-input v-model="Form.preoperative_aging" placeholder="术前分期ctnm" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前合并症/术前检查异常" prop="preoperative_complications_check_exception">
				<el-input v-model="Form.preoperative_complications_check_exception" placeholder="术前合并症/术前检查异常" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前合并症" prop="preoperative_complications">
				<el-checkbox-group v-model="Form.preoperative_complications">
					<el-checkbox label=0 name="preoperative_complications">无</el-checkbox>
					<el-checkbox label=1 name="preoperative_complications">呼吸系统（COPD，哮喘，肺心病）</el-checkbox>
					<el-checkbox label=2 name="preoperative_complications">循环系统（高血压，心功能不全（NYHA Ⅲ或Ⅳ)，陈旧性心肌梗塞）</el-checkbox>
					<el-checkbox label=3 name="preoperative_complications">消化系统（肝炎，肝硬化，门脉高压，消化道溃疡，炎性肠病）</el-checkbox>
					<el-checkbox label=4 name="preoperative_complications">内分泌（甲亢，糖尿病）</el-checkbox>
					<el-checkbox label=5 name="preoperative_complications">泌尿系统（慢性肾炎，肾功能不全）</el-checkbox>
					<el-checkbox label=6 name="preoperative_complications">神经系统（陈旧性脑梗塞）</el-checkbox>
					<el-checkbox label=7 name="preoperative_complications">患有其他恶性疾病</el-checkbox>
					<el-checkbox label=8 name="preoperative_complications">免疫疾病后长期服用免疫抑制剂</el-checkbox>
					<el-checkbox label=9 name="preoperative_complications">凝血机制异常或长期使用抗凝药物</el-checkbox>
					<el-checkbox label=10 name="preoperative_complications">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="术前胸部CT" prop="preoperative_chest_ct">
				<el-input v-model="Form.preoperative_chest_ct" placeholder="术前胸部CT" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="超声胃镜tnm" prop="ultrasound_gastroscope_tnm">
				<el-input v-model="Form.ultrasound_gastroscope_tnm" placeholder="超声胃镜tnm" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="超声造影tnm" prop="ultrasound_imaging_tnm">
				<el-input v-model="Form.ultrasound_imaging_tnm" placeholder="超声造影tnm" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹腔内脂肪容积" prop="laparoscopic_fat_volumne">
				<el-input v-model="Form.laparoscopic_fat_volumne" placeholder="腹腔内脂肪容积" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹壁脂肪容积" prop="napes_fat_volumne">
				<el-input v-model="Form.napes_fat_volumne" placeholder="腹壁脂肪容积" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="her-2" prop="her_2">
				<el-radio-group v-model="Form.her_2">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="rbc" prop="rbc">
				<el-input v-model="Form.rbc" placeholder="rbc" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="血红蛋白（g/l）" prop="hemoglobin">
				<el-input v-model="Form.hemoglobin" placeholder="血红蛋白（g/l）" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="谷丙转氨酶alt u/l" prop="gpt">
				<el-input v-model="Form.gpt" placeholder="谷丙转氨酶alt u/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="谷草转氨酶ast u/l" prop="got">
				<el-input v-model="Form.got" placeholder="谷草转氨酶ast u/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="总胆红素tbil mmol/l" prop="tbil">
				<el-input v-model="Form.tbil" placeholder="总胆红素tbil mmol/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="总蛋白tp g/l" prop="tp">
				<el-input v-model="Form.tp" placeholder="总蛋白tp g/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="白蛋白 alb g/l" prop="alb">
				<el-input v-model="Form.alb" placeholder="白蛋白 alb g/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="前白蛋白 palb g/l" prop="palb">
				<el-input v-model="Form.palb" placeholder="前白蛋白 palb g/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="glu" prop="glu">
				<el-input v-model="Form.glu" placeholder="glu" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="tg" prop="tg">
				<el-input v-model="Form.tg" placeholder="tg" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="crea" prop="crea">
				<el-input v-model="Form.crea" placeholder="crea" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="d-dimer" prop="d_dimer">
				<el-input v-model="Form.d_dimer" placeholder="d-dimer" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="血型" prop="blood_type">
				<el-radio-group v-model="Form.blood_type">
					<el-radio label=1>a</el-radio>
					<el-radio label=2>b</el-radio>
					<el-radio label=3>o</el-radio>
					<el-radio label=4>ab</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术前afp" prop="preoperative_afp">
				<el-input v-model="Form.preoperative_afp" placeholder="术前afp" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前cea" prop="preoperative_cea">
				<el-input v-model="Form.preoperative_cea" placeholder="术前cea" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ca19-9" prop="preoperative_ca19_9">
				<el-input v-model="Form.preoperative_ca19_9" placeholder="术前ca19-9" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ca125" prop="preoperative_ca125">
				<el-input v-model="Form.preoperative_ca125" placeholder="术前ca125" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ca15-3" prop="preoperative_ca15_3">
				<el-input v-model="Form.preoperative_ca15_3" placeholder="术前ca15-3" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ca72-4" prop="preoperative_ca72_4">
				<el-input v-model="Form.preoperative_ca72_4" placeholder="术前ca72-4" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胃泌素-17" prop="gas_17">
				<el-input v-model="Form.gas_17" placeholder="胃泌素-17" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胃蛋白酶原1" prop="pepsinogen_1">
				<el-input v-model="Form.pepsinogen_1" placeholder="胃蛋白酶原1" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胃蛋白酶原2" prop="pepsinogen_2">
				<el-input v-model="Form.pepsinogen_2" placeholder="胃蛋白酶原2" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="胃蛋白酶原1/胃蛋白酶原2比值" prop="pepsinogen_1_divide_pepsinogen_2">
				<el-input v-model="Form.pepsinogen_1_divide_pepsinogen_2" placeholder="胃蛋白酶原1/胃蛋白酶原2比值" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ll-6" prop="preoperative_ll_6">
				<el-input v-model="Form.preoperative_ll_6" placeholder="术前ll-6" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="vitb12" prop="vitb12">
				<el-input v-model="Form.vitb12" placeholder="vitb12" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="叶酸" prop="folate">
				<el-input v-model="Form.folate" placeholder="叶酸" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="evb-ca-lga" prop="evb_ca_lga">
				<el-input v-model="Form.evb_ca_lga" placeholder="evb-ca-lga" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="ebv-ea-lgg" prop="ebv_ea_lgg">
				<el-input v-model="Form.ebv_ea_lgg" placeholder="ebv-ea-lgg" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="pg-1/pg-2比值" prop="pg_1_divide_pg_2">
				<el-input v-model="Form.pg_1_divide_pg_2" placeholder="pg-1/pg-2比值" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="大便隐血" prop="stool_ob">
				<el-radio-group v-model="Form.stool_ob">
					<el-radio label=0>阴</el-radio>
					<el-radio label=1>阳</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术后afp" prop="postoperative_afp">
				<el-input v-model="Form.postoperative_afp" placeholder="术后afp" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后cea" prop="postoperative_cea">
				<el-input v-model="Form.postoperative_cea" placeholder="术后cea" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后ca19-9" prop="postoperative_ca19_9">
				<el-input v-model="Form.postoperative_ca19_9" placeholder="术后ca19-9" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后ca72-4" prop="postoperative_ca72_4">
				<el-input v-model="Form.postoperative_ca72_4" placeholder="术后ca72-4" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后125" prop="postoperative_ca125">
				<el-input v-model="Form.postoperative_ca125" placeholder="术后125" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后ca15-3" prop="postoperative_ca15_3">
				<el-input v-model="Form.postoperative_ca15_3" placeholder="术后ca15-3" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后rbc" prop="postoperative_rbc">
				<el-input v-model="Form.postoperative_rbc" placeholder="术后rbc" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后血红蛋白" prop="postoperative_hemoglobin">
				<el-input v-model="Form.postoperative_hemoglobin" placeholder="术后血红蛋白" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后谷丙转氨酶alt u/l" prop="postoperative_gpt">
				<el-input v-model="Form.postoperative_gpt" placeholder="术后谷丙转氨酶alt u/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后谷草转氨酶ast u/l" prop="postoperative_got">
				<el-input v-model="Form.postoperative_got" placeholder="术后谷草转氨酶ast u/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后总胆红素tbil mmol/l" prop="postoperative_tbil">
				<el-input v-model="Form.postoperative_tbil" placeholder="术后总胆红素tbil mmol/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后总蛋白tp g/l" prop="postoperative_tp">
				<el-input v-model="Form.postoperative_tp" placeholder="术后总蛋白tp g/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后白蛋白 alb g/l" prop="postoperative_alb">
				<el-input v-model="Form.postoperative_alb" placeholder="术后白蛋白 alb g/l" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后glu" prop="postoperative_glu">
				<el-input v-model="Form.postoperative_glu" placeholder="术后glu" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后tg" prop="postoperative_tg">
				<el-input v-model="Form.postoperative_tg" placeholder="术后tg" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后crea" prop="postoperative_crea">
				<el-input v-model="Form.postoperative_crea" placeholder="术后crea" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="d-d2" prop="d_d2">
				<el-input v-model="Form.d_d2" placeholder="d-d2" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="穿刺液淀粉酶" prop="amylase_in_puncture_fluid">
				<el-input v-model="Form.amylase_in_puncture_fluid" placeholder="穿刺液淀粉酶" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="外科干预方式" prop="surgical_intervention">
				<el-radio-group v-model="Form.surgical_intervention">
					<el-radio label=0>未手术</el-radio>
					<el-radio label=1>根治性切除</el-radio>
					<el-radio label=2>姑息性切除</el-radio>
					<el-radio label=3>姑息性胃空肠吻合</el-radio>
					<el-radio label=4>探查</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术者" prop="surgeon">
				<el-input v-model="Form.surgeon" placeholder="术者" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="入路方式" prop="road_way">
				<el-radio-group v-model="Form.road_way">
					<el-radio label=0>原位</el-radio>
					<el-radio label=1>拖出</el-radio>
					<el-radio label=2>后入路原位</el-radio>
					<el-radio label=3>开腹</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="入路" prop="road">
				<el-radio-group v-model="Form.road">
					<el-radio label=1>开腹</el-radio>
					<el-radio label=2>腹腔镜</el-radio>
					<el-radio label=3>胸腹联合</el-radio>
					<el-radio label=4>开腹+食管膈肌裂孔</el-radio>
					<el-radio label=5>腹腔镜+食管膈肌裂孔</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹腔镜探查后中转开腹原因" prop="laparoscopic_exploration_laparoscopy">
				<el-input v-model="Form.laparoscopic_exploration_laparoscopy" placeholder="腹腔镜探查后中转开腹原因" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="切除方式" prop="removal_way">
				<el-radio-group v-model="Form.removal_way">
					<el-radio label=1>DG</el-radio>
					<el-radio label=2>TG</el-radio>
					<el-radio label=3>PG</el-radio>
					<el-radio label=4>局部切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="淋巴结清扫" prop="lymphadenectomy">
				<el-radio-group v-model="Form.lymphadenectomy">
					<el-radio label=1>D1</el-radio>
					<el-radio label=2>D2</el-radio>
					<el-radio label=3>D2+</el-radio>
					<el-radio label=4>D2+PAND</el-radio>
					<el-radio label=5>D1+</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="重建" prop="rebuild">
				<el-radio-group v-model="Form.rebuild">
					<el-radio label=1>Billroth-1</el-radio>
					<el-radio label=2>Billroth-2</el-radio>
					<el-radio label=3>Roux-en-Y</el-radio>
					<el-radio label=4>EGA</el-radio>
					<el-radio label=5>JPI</el-radio>
					<el-radio label=6>Braun</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="网膜囊切除" prop="omental_sac_resection">
				<el-radio-group v-model="Form.omental_sac_resection">
					<el-radio label=0>未切除</el-radio>
					<el-radio label=1>不完全切除</el-radio>
					<el-radio label=2>网膜囊切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="网膜囊切除时间（分）" prop="omental_sac_resection_minutes">
				<el-input v-model="Form.omental_sac_resection_minutes" placeholder="网膜囊切除时间（分）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="脾门淋巴结清扫时间（分）" prop="splenic_hilar_lymph_node_clear_minutes">
				<el-input v-model="Form.splenic_hilar_lymph_node_clear_minutes" placeholder="脾门淋巴结清扫时间（分）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="联合脏器切除" prop="simultaneous_organoectomy_resection">
				<el-checkbox-group v-model="Form.simultaneous_organoectomy_resection">
					<el-checkbox label=0 name="simultaneous_organoectomy_resection">无</el-checkbox>
					<el-checkbox label=1 name="simultaneous_organoectomy_resection">脾脏</el-checkbox>
					<el-checkbox label=2 name="simultaneous_organoectomy_resection">左肝外叶</el-checkbox>
					<el-checkbox label=3 name="simultaneous_organoectomy_resection">胰头</el-checkbox>
					<el-checkbox label=4 name="simultaneous_organoectomy_resection">横结肠</el-checkbox>
					<el-checkbox label=5 name="simultaneous_organoectomy_resection">胆囊</el-checkbox>
					<el-checkbox label=6 name="simultaneous_organoectomy_resection">卵巢</el-checkbox>
					<el-checkbox label=7 name="simultaneous_organoectomy_resection">小肠</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="术中并发器官损伤" prop="intraoperative_organ_injury_occurred">
				<el-checkbox-group v-model="Form.intraoperative_organ_injury_occurred">
					<el-checkbox label=0 name="intraoperative_organ_injury_occurred">无</el-checkbox>
					<el-checkbox label=1 name="intraoperative_organ_injury_occurred">血管</el-checkbox>
					<el-checkbox label=2 name="intraoperative_organ_injury_occurred">脾脏</el-checkbox>
					<el-checkbox label=3 name="intraoperative_organ_injury_occurred">胰</el-checkbox>
					<el-checkbox label=4 name="intraoperative_organ_injury_occurred">横结肠</el-checkbox>
					<el-checkbox label=5 name="intraoperative_organ_injury_occurred">胆囊</el-checkbox>
					<el-checkbox label=6 name="intraoperative_organ_injury_occurred">肝脏</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="术中并发症-出血处理" prop="intraoperative_organ_injury_occurred_handle">
				<el-input v-model="Form.intraoperative_organ_injury_occurred_handle" placeholder="术中并发症-出血处理" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术中并发症-出血部位" prop="intraoperative_complications_bleeding_site">
				<el-input v-model="Form.intraoperative_complications_bleeding_site" placeholder="术中并发症-出血部位" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="手术时间（分）" prop="operation_minutes">
				<el-input v-model="Form.operation_minutes" placeholder="手术时间（分）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术中估计出血量ml" prop="intraoperative_blood_loss_was_estimated">
				<el-input v-model="Form.intraoperative_blood_loss_was_estimated" placeholder="术中估计出血量ml" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="围术期输血" prop="perioperative_blood_transfusion">
				<el-radio-group v-model="Form.perioperative_blood_transfusion">
					<el-radio label=0>未输血</el-radio>
					<el-radio label=1>术前</el-radio>
					<el-radio label=2>术中</el-radio>
					<el-radio label=3>术后</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期输血单位" prop="perioperative_transfusion_unit">
				<el-input v-model="Form.perioperative_transfusion_unit" placeholder="围术期输血单位" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术中化疗" prop="chemotherapy_during_operation">
				<el-input v-model="Form.chemotherapy_during_operation" placeholder="术中化疗" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术中纳米碳示踪" prop="intraoperative_carbon_nanotracers">
				<el-radio-group v-model="Form.intraoperative_carbon_nanotracers">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术中动脉灌注化疗" prop="intraoperative_arterial_infusion_chemotherapy">
				<el-input v-model="Form.intraoperative_arterial_infusion_chemotherapy" placeholder="术中动脉灌注化疗" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术中特殊冰冻结果(如网膜结节系低分化腺癌)" prop="intraoperative_results_of_special_freezing">
				<el-input v-model="Form.intraoperative_results_of_special_freezing" placeholder="术中特殊冰冻结果(如网膜结节系低分化腺癌)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="腹水" prop="ascites">
				<el-radio-group v-model="Form.ascites">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>少量</el-radio>
					<el-radio label=2>中量</el-radio>
					<el-radio label=3>大量</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="癌细胞" prop="cancer_cell">
				<el-radio-group v-model="Form.cancer_cell">
					<el-radio label=0>CY0:腹腔脱落癌细胞检查,未见癌细胞</el-radio>
					<el-radio label=1>CY1: 找到癌细胞</el-radio>
					<el-radio label=2>CYX:未做腹腔脱落癌细胞检查</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹膜转移" prop="peritoneal_metastasis">
				<el-radio-group v-model="Form.peritoneal_metastasis">
					<el-radio label=0>P0 无腹膜扩散</el-radio>
					<el-radio label=1>P1 癌灶附近腹膜，大网膜及横结肠系膜种植</el-radio>
					<el-radio label=2>P2 横结肠下及膈肌腹膜少数癌灶</el-radio>
					<el-radio label=3>P3 远处腹膜多数癌灶种植</el-radio>
					<el-radio label=4>Px 腹膜转移无法判断</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肝转移" prop="hepatic_metastases">
				<el-input v-model="Form.hepatic_metastases" placeholder="肝转移" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="单个肝转移" prop="single_hepatic_metastases">
				<el-radio-group v-model="Form.single_hepatic_metastases">
					<el-radio label=1>左叶</el-radio>
					<el-radio label=2>右叶</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="多个肝转移" prop="more_hepatic_metastases">
				<el-radio-group v-model="Form.more_hepatic_metastases">
					<el-radio label=1>左叶</el-radio>
					<el-radio label=2>右叶</el-radio>
					<el-radio label=3>左右叶均有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹膜后、肠系膜根部、16组淋巴结肿大" prop="lymph_nodes_were_enlarged_in_16">
				<el-input v-model="Form.lymph_nodes_were_enlarged_in_16" placeholder="腹膜后、肠系膜根部、16组淋巴结肿大" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="肿瘤病灶个数" prop="number_of_tumor_lesions">
				<el-radio-group v-model="Form.number_of_tumor_lesions">
					<el-radio label=1>单病灶</el-radio>
					<el-radio label=2>双病灶</el-radio>
					<el-radio label=3>三病灶及更多</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="单病灶肿瘤纵向部位" prop="longitudinal_position_of_a_single_lesion">
				<el-radio-group v-model="Form.longitudinal_position_of_a_single_lesion">
					<el-radio label=1>胃上部U</el-radio>
					<el-radio label=2>胃体M</el-radio>
					<el-radio label=3>胃下部L</el-radio>
					<el-radio label=4>U+食管受累E</el-radio>
					<el-radio label=5>UM/MU</el-radio>
					<el-radio label=6>LM/ML</el-radio>
					<el-radio label=7>L+十二指肠受累D</el-radio>
					<el-radio label=8>LMU/MLU/MUL/UML</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="食管胃结合部腺癌" prop="aeg">
				<el-radio-group v-model="Form.aeg">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>siewert-I型</el-radio>
					<el-radio label=2>siewert-II型</el-radio>
					<el-radio label=3>siewert-III型</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肿瘤周径部位" prop="peridiameter_of_the_tumor">
				<el-radio-group v-model="Form.peridiameter_of_the_tumor">
					<el-radio label=1>小弯</el-radio>
					<el-radio label=2>大弯</el-radio>
					<el-radio label=3>前壁</el-radio>
					<el-radio label=4>后壁</el-radio>
					<el-radio label=5>全周</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肿瘤最大径（如果为双病灶肿瘤描述主体病灶）(cm)" prop="greatest_tumor_diameter">
				<el-input v-model="Form.greatest_tumor_diameter" placeholder="肿瘤最大径（如果为双病灶肿瘤描述主体病灶）(cm)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术中肿瘤浸润深度" prop="intraoperative_depth_of_tumor_invasion">
				<el-radio-group v-model="Form.intraoperative_depth_of_tumor_invasion">
					<el-radio label=1>原位癌</el-radio>
					<el-radio label=2>粘膜层</el-radio>
					<el-radio label=3>粘膜下层</el-radio>
					<el-radio label=4>浅肌层</el-radio>
					<el-radio label=5>深肌层</el-radio>
					<el-radio label=6>浆膜下层</el-radio>
					<el-radio label=7>浆膜层</el-radio>
					<el-radio label=8>临近器官受侵</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="癌" prop="cancer">
				<el-radio-group v-model="Form.cancer">
					<el-radio label=1>早癌</el-radio>
					<el-radio label=2>Borr-1</el-radio>
					<el-radio label=3>Borr-2</el-radio>
					<el-radio label=4>Borr-3</el-radio>
					<el-radio label=5>Borr-4</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="早癌(T1)大体分型" prop="early_cancer_t1">
				<el-radio-group v-model="Form.early_cancer_t1">
					<el-radio label=1>0-I 隆起型</el-radio>
					<el-radio label=2>0-IIa 表浅隆起型</el-radio>
					<el-radio label=3>0-IIb 平坦型</el-radio>
					<el-radio label=4>0-IIc 表浅凹陷型</el-radio>
					<el-radio label=5>III 凹陷型</el-radio>
					<el-radio label=6>混合型(按病变面积记录)</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="根治度" prop="radical_degrees">
				<el-radio-group v-model="Form.radical_degrees">
					<el-radio label=1>R0</el-radio>
					<el-radio label=2>R1</el-radio>
					<el-radio label=3>R2</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="近切缘距肿瘤距离cm" prop="distance_between_the_proximal_margin_and_the_tumor">
				<el-input v-model="Form.distance_between_the_proximal_margin_and_the_tumor" placeholder="近切缘距肿瘤距离cm" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="远切缘距肿瘤距离cm" prop="distance_of_distal_margin_to_tumor">
				<el-input v-model="Form.distance_of_distal_margin_to_tumor" placeholder="远切缘距肿瘤距离cm" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="双病灶肿瘤 病灶-1：性质" prop="dual_foci_neoplasms_foci_1_nature">
				<el-radio-group v-model="Form.dual_foci_neoplasms_foci_1_nature">
					<el-radio label=1>AC=腺癌</el-radio>
					<el-radio label=2>GIST=间质肿瘤</el-radio>
					<el-radio label=3>LYM=淋巴瘤</el-radio>
					<el-radio label=4>NC=神经内分泌癌</el-radio>
					<el-radio label=5>OTHER=其它特殊类型</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="双病灶肿瘤 病灶-2：性质" prop="dual_foci_neoplasms_foci_2_nature">
				<el-radio-group v-model="Form.dual_foci_neoplasms_foci_2_nature">
					<el-radio label=1>AC=腺癌</el-radio>
					<el-radio label=2>GIST=间质肿瘤</el-radio>
					<el-radio label=3>LYM=淋巴瘤</el-radio>
					<el-radio label=4>NC=神经内分泌癌</el-radio>
					<el-radio label=5>OTHER=其它特殊类型</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="双病灶肿瘤主病灶部位" prop="double_focal_tumor_site">
				<el-radio-group v-model="Form.double_focal_tumor_site">
					<el-radio label=1>病灶-1</el-radio>
					<el-radio label=2>病灶-2</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="双病灶肿瘤部位 病灶-1" prop="bifoci_tumor_site_foci_1">
				<el-radio-group v-model="Form.bifoci_tumor_site_foci_1">
					<el-radio label=1>胃上部U</el-radio>
					<el-radio label=2>胃体M</el-radio>
					<el-radio label=3>胃下部L</el-radio>
					<el-radio label=4>U+食管受累E</el-radio>
					<el-radio label=5>UM/MU</el-radio>
					<el-radio label=6>LM/ML</el-radio>
					<el-radio label=7>L+十二指肠受累D</el-radio>
					<el-radio label=8>LMU/MLU/MUL/UML</el-radio>
					<el-radio label=9>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="双病灶肿瘤部位 病灶-2" prop="bifoci_tumor_site_foci_2">
				<el-radio-group v-model="Form.bifoci_tumor_site_foci_2">
					<el-radio label=1>胃上部U</el-radio>
					<el-radio label=2>胃体M</el-radio>
					<el-radio label=3>胃下部L</el-radio>
					<el-radio label=4>U+食管受累E</el-radio>
					<el-radio label=5>UM/MU</el-radio>
					<el-radio label=6>LM/ML</el-radio>
					<el-radio label=7>L+十二指肠受累D</el-radio>
					<el-radio label=8>LMU/MLU/MUL/UML</el-radio>
					<el-radio label=9>其他</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="三病灶以上多病灶肿瘤具体描述" prop="three_or_more_lesions_and_multiple_lesions">
				<el-input v-model="Form.three_or_more_lesions_and_multiple_lesions" placeholder="三病灶以上多病灶肿瘤具体描述" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="单病灶肿瘤病理类型" prop="single_focal_tumor_pathology">
				<el-radio-group v-model="Form.single_focal_tumor_pathology">
					<el-radio label=1>AC=腺癌</el-radio>
					<el-radio label=2>GIST=间质肿瘤</el-radio>
					<el-radio label=3>LYM=淋巴瘤</el-radio>
					<el-radio label=4>NC=神经内分泌癌E</el-radio>
					<el-radio label=5>OTHER=其它特殊类型</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="细胞类型" prop="cell_type">
				<el-radio-group v-model="Form.cell_type">
					<el-radio label=1>乳头腺癌</el-radio>
					<el-radio label=2>管状腺癌</el-radio>
					<el-radio label=3>腺癌</el-radio>
					<el-radio label=4>印戒细胞癌</el-radio>
					<el-radio label=5>粘液细胞癌</el-radio>
					<el-radio label=6>类癌</el-radio>
					<el-radio label=7>内分泌细胞癌</el-radio>
					<el-radio label=8>其它</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腺癌分化程度" prop="adenocarcinoma_of_differentiation">
				<el-radio-group v-model="Form.adenocarcinoma_of_differentiation">
					<el-radio label=1>Gx-无法评估</el-radio>
					<el-radio label=2>G1-高分化</el-radio>
					<el-radio label=3>G2-中分化</el-radio>
					<el-radio label=4>G3-低分化</el-radio>
					<el-radio label=5>G4-未分化</el-radio>
					<el-radio label=6>印戒</el-radio>
					<el-radio label=7>粘液腺癌</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="lauren分型" prop="lauren_type">
				<el-radio-group v-model="Form.lauren_type">
					<el-radio label=1>肠型</el-radio>
					<el-radio label=2>弥漫型</el-radio>
					<el-radio label=3>混合型</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肿瘤级别(淋巴瘤-侵袭度）" prop="level_of_tumor">
				<el-radio-group v-model="Form.level_of_tumor">
					<el-radio label=1>低侵袭度</el-radio>
					<el-radio label=2>高侵袭度</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="淋巴瘤：TNM分期" prop="lymphoma_tnm_aging">
				<el-input v-model="Form.lymphoma_tnm_aging" placeholder="淋巴瘤：TNM分期" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="冰冻切缘病检" prop="detection_of_frozen_cutting_edge_disease">
				<el-radio-group v-model="Form.detection_of_frozen_cutting_edge_disease">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>食管断端阳性</el-radio>
					<el-radio label=2>十二指肠断端阳性</el-radio>
					<el-radio label=3>胃大弯阳性</el-radio>
					<el-radio label=4>胃小弯阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="再次切除送检切缘" prop="resect_the_inspection_margin_again">
				<el-radio-group v-model="Form.resect_the_inspection_margin_again">
					<el-radio label=0>无需再次送检</el-radio>
					<el-radio label=1>食管断端阴性</el-radio>
					<el-radio label=2>十二指肠断端阴性</el-radio>
					<el-radio label=3>胃大弯阳性</el-radio>
					<el-radio label=4>胃小弯阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="大网膜边缘送检" prop="greater_omentum_margin_was_examined">
				<el-radio-group v-model="Form.greater_omentum_margin_was_examined">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="小网膜边缘送检" prop="examination_of_lesser_omentum_margin">
				<el-radio-group v-model="Form.examination_of_lesser_omentum_margin">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="fT分期" prop="ft_aging">
				<el-radio-group v-model="Form.ft_aging">
					<el-radio label=1>原位癌</el-radio>
					<el-radio label=2>粘膜层</el-radio>
					<el-radio label=3>粘膜下层</el-radio>
					<el-radio label=4>浅肌层</el-radio>
					<el-radio label=5>深肌层</el-radio>
					<el-radio label=6>浆膜下层</el-radio>
					<el-radio label=7>浆膜层</el-radio>
					<el-radio label=8>临近器官受侵</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="邻近结构直接浸润" prop="adjacent_structures_are_infiltrated_directly">
				<el-checkbox-group v-model="Form.adjacent_structures_are_infiltrated_directly">
					<el-checkbox label=0 name="adjacent_structures_are_infiltrated_directly">无</el-checkbox>
					<el-checkbox label=1 name="adjacent_structures_are_infiltrated_directly">脾脏</el-checkbox>
					<el-checkbox label=2 name="adjacent_structures_are_infiltrated_directly">肝脏</el-checkbox>
					<el-checkbox label=3 name="adjacent_structures_are_infiltrated_directly">胰腺</el-checkbox>
					<el-checkbox label=4 name="adjacent_structures_are_infiltrated_directly">横结肠</el-checkbox>
					<el-checkbox label=5 name="adjacent_structures_are_infiltrated_directly">胆囊</el-checkbox>
					<el-checkbox label=6 name="adjacent_structures_are_infiltrated_directly">胆道</el-checkbox>
					<el-checkbox label=7 name="adjacent_structures_are_infiltrated_directly">膈肌</el-checkbox>
					<el-checkbox label=8 name="adjacent_structures_are_infiltrated_directly">腹后壁</el-checkbox>
					<el-checkbox label=9 name="adjacent_structures_are_infiltrated_directly">腹前壁</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="fN-分期" prop="fn_aging">
				<el-radio-group v-model="Form.fn_aging">
					<el-radio label=0>N0</el-radio>
					<el-radio label=1>N1</el-radio>
					<el-radio label=2>N2</el-radio>
					<el-radio label=3>N3a</el-radio>
					<el-radio label=4>N3b</el-radio>
					<el-radio label=5>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="fM分期" prop="fm_aging">
				<el-radio-group v-model="Form.fm_aging">
					<el-radio label=0>M0</el-radio>
					<el-radio label=1>M1</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="M1分期" prop="m1_aging">
				<el-radio-group v-model="Form.m1_aging">
					<el-radio label=1>淋巴结(LYM)</el-radio>
					<el-radio label=2>皮肤(SKI)</el-radio>
					<el-radio label=3>肺(PUL)</el-radio>
					<el-radio label=4>骨髓(MAR)</el-radio>
					<el-radio label=5>骨(OSS)</el-radio>
					<el-radio label=6>胸腔(PLE)</el-radio>
					<el-radio label=7>脑(BRA)</el-radio>
					<el-radio label=8>脑膜(MEN)</el-radio>
					<el-radio label=9>肾上腺(ADR)</el-radio>
					<el-radio label=10>后腹膜(RET)</el-radio>
					<el-radio label=11>卵巢(OVA)</el-radio>
					<el-radio label=12>肝(H)</el-radio>
					<el-radio label=13>腹腔脱落细胞(CY)</el-radio>
					<el-radio label=14>腹膜(P)</el-radio>
					<el-radio label=15>其他(OTH)</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="fTNM-JGCA" prop="ftnm_jgca">
				<el-input v-model="Form.ftnm_jgca" placeholder="fTNM-JGCA" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="fTNM" prop="ftnm">
				<el-radio-group v-model="Form.ftnm">
					<el-radio label=1>IA</el-radio>
					<el-radio label=2>IB</el-radio>
					<el-radio label=3>IIA</el-radio>
					<el-radio label=4>IIB</el-radio>
					<el-radio label=5>IIIA</el-radio>
					<el-radio label=6>IIIB</el-radio>
					<el-radio label=7>IIIC</el-radio>
					<el-radio label=8>IV</el-radio>
					<el-radio label=9>不详</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="HER2" prop="her2">
				<el-radio-group v-model="Form.her2">
					<el-radio label=0>0</el-radio>
					<el-radio label=1>1+</el-radio>
					<el-radio label=2>2+</el-radio>
					<el-radio label=3>3+</el-radio>
					<el-radio label=4>4+</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="淋巴结清扫总数" prop="lymphadenectomy_total">
				<el-input v-model="Form.lymphadenectomy_total" placeholder="淋巴结清扫总数" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="淋巴结+" prop="lymph_node">
				<el-input v-model="Form.lymph_node" placeholder="淋巴结+" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="区域淋巴结有无癌结节" prop="regional_lymph_nodes_cancer_nodules">
				<el-input v-model="Form.regional_lymph_nodes_cancer_nodules" placeholder="区域淋巴结有无癌结节" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no1_plus" prop="no1_plus">
				<el-input v-model="Form.no1_plus" placeholder="no1_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no1" prop="no1">
				<el-input v-model="Form.no1" placeholder="no1" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no2_plus" prop="no2_plus">
				<el-input v-model="Form.no2_plus" placeholder="no2_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no2" prop="no2">
				<el-input v-model="Form.no2" placeholder="no2" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3_plus" prop="no3_plus">
				<el-input v-model="Form.no3_plus" placeholder="no3_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3" prop="no3">
				<el-input v-model="Form.no3" placeholder="no3" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3a_plus" prop="no3a_plus">
				<el-input v-model="Form.no3a_plus" placeholder="no3a_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3a" prop="no3a">
				<el-input v-model="Form.no3a" placeholder="no3a" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3b_plus" prop="no3b_plus">
				<el-input v-model="Form.no3b_plus" placeholder="no3b_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no3b" prop="no3b">
				<el-input v-model="Form.no3b" placeholder="no3b" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4d_plus" prop="no4d_plus">
				<el-input v-model="Form.no4d_plus" placeholder="no4d_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4d" prop="no4d">
				<el-input v-model="Form.no4d" placeholder="no4d" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4sb_plus" prop="no4sb_plus">
				<el-input v-model="Form.no4sb_plus" placeholder="no4sb_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4sb" prop="no4sb">
				<el-input v-model="Form.no4sb" placeholder="no4sb" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4sa_plus" prop="no4sa_plus">
				<el-input v-model="Form.no4sa_plus" placeholder="no4sa_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no4sa" prop="no4sa">
				<el-input v-model="Form.no4sa" placeholder="no4sa" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no5_plus" prop="no5_plus">
				<el-input v-model="Form.no5_plus" placeholder="no5_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no5" prop="no5">
				<el-input v-model="Form.no5" placeholder="no5" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6_plus" prop="no6_plus">
				<el-input v-model="Form.no6_plus" placeholder="no6_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6" prop="no6">
				<el-input v-model="Form.no6" placeholder="no6" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6a_plus" prop="no6a_plus">
				<el-input v-model="Form.no6a_plus" placeholder="no6a_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6a" prop="no6a">
				<el-input v-model="Form.no6a" placeholder="no6a" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6b_plus" prop="no6b_plus">
				<el-input v-model="Form.no6b_plus" placeholder="no6b_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6b" prop="no6b">
				<el-input v-model="Form.no6b" placeholder="no6b" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6c_plus" prop="no6c_plus">
				<el-input v-model="Form.no6c_plus" placeholder="no6c_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no6c" prop="no6c">
				<el-input v-model="Form.no6c" placeholder="no6c" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no7_plus" prop="no7_plus">
				<el-input v-model="Form.no7_plus" placeholder="no7_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no7" prop="no7">
				<el-input v-model="Form.no7" placeholder="no7" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no8a_plus" prop="no8a_plus">
				<el-input v-model="Form.no8a_plus" placeholder="no8a_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no8a" prop="no8a">
				<el-input v-model="Form.no8a" placeholder="no8a" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no8p_plus" prop="no8p_plus">
				<el-input v-model="Form.no8p_plus" placeholder="no8p_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no8p" prop="no8p">
				<el-input v-model="Form.no8p" placeholder="no8p" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no9_plus" prop="no9_plus">
				<el-input v-model="Form.no9_plus" placeholder="no9_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no9" prop="no9">
				<el-input v-model="Form.no9" placeholder="no9" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no10_plus" prop="no10_plus">
				<el-input v-model="Form.no10_plus" placeholder="no10_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no10" prop="no10">
				<el-input v-model="Form.no10" placeholder="no10" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no10p_plus" prop="no10p_plus">
				<el-input v-model="Form.no10p_plus" placeholder="no10p_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no10p" prop="no10p">
				<el-input v-model="Form.no10p" placeholder="no10p" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11p_plus" prop="no11p_plus">
				<el-input v-model="Form.no11p_plus" placeholder="no11p_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11p" prop="no11p">
				<el-input v-model="Form.no11p" placeholder="no11p" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11p_back_plus" prop="no11p_back_plus">
				<el-input v-model="Form.no11p_back_plus" placeholder="no11p_back_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11p_back" prop="no11p_back">
				<el-input v-model="Form.no11p_back" placeholder="no11p_back" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11d_plus" prop="no11d_plus">
				<el-input v-model="Form.no11d_plus" placeholder="no11d_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no11d" prop="no11d">
				<el-input v-model="Form.no11d" placeholder="no11d" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12a_plus" prop="no12a_plus">
				<el-input v-model="Form.no12a_plus" placeholder="no12a_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12a" prop="no12a">
				<el-input v-model="Form.no12a" placeholder="no12a" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12p_plus" prop="no12p_plus">
				<el-input v-model="Form.no12p_plus" placeholder="no12p_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12p" prop="no12p">
				<el-input v-model="Form.no12p" placeholder="no12p" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12b_plus" prop="no12b_plus">
				<el-input v-model="Form.no12b_plus" placeholder="no12b_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12b" prop="no12b">
				<el-input v-model="Form.no12b" placeholder="no12b" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12h_plus" prop="no12h_plus">
				<el-input v-model="Form.no12h_plus" placeholder="no12h_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no12h" prop="no12h">
				<el-input v-model="Form.no12h" placeholder="no12h" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no13_plus" prop="no13_plus">
				<el-input v-model="Form.no13_plus" placeholder="no13_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no13" prop="no13">
				<el-input v-model="Form.no13" placeholder="no13" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no14v_plus" prop="no14v_plus">
				<el-input v-model="Form.no14v_plus" placeholder="no14v_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no14v" prop="no14v">
				<el-input v-model="Form.no14v" placeholder="no14v" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no15_plus" prop="no15_plus">
				<el-input v-model="Form.no15_plus" placeholder="no15_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no15" prop="no15">
				<el-input v-model="Form.no15" placeholder="no15" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16a1_plus" prop="no16a1_plus">
				<el-input v-model="Form.no16a1_plus" placeholder="no16a1_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16a1" prop="no16a1">
				<el-input v-model="Form.no16a1" placeholder="no16a1" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16a2_plus" prop="no16a2_plus">
				<el-input v-model="Form.no16a2_plus" placeholder="no16a2_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16a2" prop="no16a2">
				<el-input v-model="Form.no16a2" placeholder="no16a2" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16b1_plus" prop="no16b1_plus">
				<el-input v-model="Form.no16b1_plus" placeholder="no16b1_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16b1" prop="no16b1">
				<el-input v-model="Form.no16b1" placeholder="no16b1" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16b2_plus" prop="no16b2_plus">
				<el-input v-model="Form.no16b2_plus" placeholder="no16b2_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no16b2" prop="no16b2">
				<el-input v-model="Form.no16b2" placeholder="no16b2" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no17_plus" prop="no17_plus">
				<el-input v-model="Form.no17_plus" placeholder="no17_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no17" prop="no17">
				<el-input v-model="Form.no17" placeholder="no17" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no18_plus" prop="no18_plus">
				<el-input v-model="Form.no18_plus" placeholder="no18_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no18" prop="no18">
				<el-input v-model="Form.no18" placeholder="no18" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no19_plus" prop="no19_plus">
				<el-input v-model="Form.no19_plus" placeholder="no19_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no19" prop="no19">
				<el-input v-model="Form.no19" placeholder="no19" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no20_plus" prop="no20_plus">
				<el-input v-model="Form.no20_plus" placeholder="no20_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no20" prop="no20">
				<el-input v-model="Form.no20" placeholder="no20" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no110_plus" prop="no110_plus">
				<el-input v-model="Form.no110_plus" placeholder="no110_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no110" prop="no110">
				<el-input v-model="Form.no110" placeholder="no110" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no111_plus" prop="no111_plus">
				<el-input v-model="Form.no111_plus" placeholder="no111_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no111" prop="no111">
				<el-input v-model="Form.no111" placeholder="no111" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no112_plus" prop="no112_plus">
				<el-input v-model="Form.no112_plus" placeholder="no112_plus" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="no112" prop="no112">
				<el-input v-model="Form.no112" placeholder="no112" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="small_mesenteric_ln_plus" prop="small_mesenteric_ln_plus">
				<el-input v-model="Form.small_mesenteric_ln_plus" placeholder="small_mesenteric_ln_plus" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="小肠系膜ln_plus" prop="small_mesenteric_ln_plus">
				<el-input v-model="Form.small_mesenteric_ln_plus" placeholder="小肠系膜ln_plus" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="小肠系膜ln" prop="small_mesenteric_ln">
				<el-input v-model="Form.small_mesenteric_ln" placeholder="小肠系膜ln" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="血管受累" prop="vascular_involvement">
				<el-radio-group v-model="Form.vascular_involvement">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="淋巴管受累" prop="lymphatic_involvement">
				<el-radio-group v-model="Form.lymphatic_involvement">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="神经受累" prop="neurologic_involvement">
				<el-radio-group v-model="Form.neurologic_involvement">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="脂肪查见癌结节" prop="fat_examination_reveals_cancerous_nodules">
				<el-radio-group v-model="Form.fat_examination_reveals_cancerous_nodules">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="脉管癌栓" prop="vascular_tumor_emboli">
				<el-radio-group v-model="Form.vascular_tumor_emboli">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="肝十二指肠韧带腹膜前叶" prop="hepatoduodenal_ligament_anterior_peritoneum">
				<el-radio-group v-model="Form.hepatoduodenal_ligament_anterior_peritoneum">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="胰腺被膜" prop="pancreas_capsule">
				<el-radio-group v-model="Form.pancreas_capsule">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="横结肠系膜前叶" prop="anterior_lobe_of_transverse_mesentery">
				<el-radio-group v-model="Form.anterior_lobe_of_transverse_mesentery">
					<el-radio label=0>阴性</el-radio>
					<el-radio label=1>阳性</el-radio>
					<el-radio label=2>未报道</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="分期说明（术前MDCT，术中特殊发现，术后病理特殊信息）" prop="stage_show">
				<el-input v-model="Form.stage_show" placeholder="分期说明（术前MDCT，术中特殊发现，术后病理特殊信息）" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="病理号（另自行保存病理报告副本pdf文档，以病理号命名）" prop="pathology_num">
				<el-input v-model="Form.pathology_num" placeholder="病理号（另自行保存病理报告副本pdf文档，以病理号命名）" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期营养支持(包括具体方案，持续时间，不良反应)" prop="perioperative_nutritional_support">
				<el-input v-model="Form.perioperative_nutritional_support" placeholder="围术期营养支持(包括具体方案，持续时间，不良反应)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期抗生素" prop="perioperative_antibiotics">
				<el-input v-model="Form.perioperative_antibiotics" placeholder="围术期抗生素" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后预防抗生素" prop="postoperative_prophylactic_antibiotic">
				<el-radio-group v-model="Form.postoperative_prophylactic_antibiotic">
					<el-radio label=1>常规用法</el-radio>
					<el-radio label=2>短程用法</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期抑酸剂" prop="perioperative_acid_suppressor">
				<el-input v-model="Form.perioperative_acid_suppressor" placeholder="围术期抑酸剂" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期黏膜保护剂" prop="perioperative_mucosal_protectant">
				<el-input v-model="Form.perioperative_mucosal_protectant" placeholder="围术期黏膜保护剂" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期止血药" prop="perioperative_hemostatic_agent">
				<el-input v-model="Form.perioperative_hemostatic_agent" placeholder="围术期止血药" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期生长抑素" prop="perioperative_somatostatin">
				<el-radio-group v-model="Form.perioperative_somatostatin">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期镇痛药" prop="perioperative_analgesics">
				<el-input v-model="Form.perioperative_analgesics" placeholder="围术期镇痛药" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期重症监护" prop="perioperative_intensive_care">
				<el-input v-model="Form.perioperative_intensive_care" placeholder="围术期重症监护" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期其他特殊处理" prop="other_special_treatments_during_perioperative_period">
				<el-input v-model="Form.other_special_treatments_during_perioperative_period" placeholder="围术期其他特殊处理" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="是否安置胃管" prop="whether_to_install_a_gastric_tube">
				<el-radio-group v-model="Form.whether_to_install_a_gastric_tube">
					<el-radio label=1>是</el-radio>
					<el-radio label=2>否</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="安置时间" prop="set_time">
				<el-date-picker v-model="Form.set_time" type="datetime" :default-value="new Date()"
					placeholder="请输入安置时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="胃管拔除日(POD)" prop="extraction_date_of_gastric_tube_time">
				<el-date-picker v-model="Form.extraction_date_of_gastric_tube_time" type="datetime" :default-value="new Date()"
					placeholder="请输入胃管拔除日(POD)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="每日平均胃液量(ml)" prop="average_daily_gastric_fluid_volume">
				<el-input v-model="Form.average_daily_gastric_fluid_volume" placeholder="每日平均胃液量(ml)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="再次安置胃管原因：具体描述" prop="cause_of_gastric_tube_replacement">
				<el-input v-model="Form.cause_of_gastric_tube_replacement" placeholder="再次安置胃管原因：具体描述" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="尿管拔除时间(POH)" prop="catheter_removal_time">
				<el-date-picker v-model="Form.catheter_removal_time" type="datetime" :default-value="new Date()"
					placeholder="请输入尿管拔除时间(POH)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="腹腔引流管拔除日(POD)" prop="abdominal_drainage_tube_removal_date_time">
				<el-date-picker v-model="Form.abdominal_drainage_tube_removal_date_time" type="datetime" :default-value="new Date()"
					placeholder="请输入腹腔引流管拔除日(POD)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="每日平均腹腔引流液量(ml)" prop="average_daily_volume_of_abdominal_drainage_fluid">
				<el-input v-model="Form.average_daily_volume_of_abdominal_drainage_fluid" placeholder="每日平均腹腔引流液量(ml)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="肛门排气日" prop="anal_exhaust_day_time">
				<el-date-picker v-model="Form.anal_exhaust_day_time" type="datetime" :default-value="new Date()"
					placeholder="请输入肛门排气日">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="开始下床活动日(POH)" prop="start_an_out_of_bed_day_time">
				<el-date-picker v-model="Form.start_an_out_of_bed_day_time" type="datetime" :default-value="new Date()"
					placeholder="请输入开始下床活动日(POH)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="开始进食流质日(POH)" prop="start_a_fluid_day_time">
				<el-date-picker v-model="Form.start_a_fluid_day_time" type="datetime" :default-value="new Date()"
					placeholder="请输入开始进食流质日(POH)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="最高体温(℃)" prop="highest_temperature">
				<el-input v-model="Form.highest_temperature" placeholder="最高体温(℃)" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后体温>38℃天数" prop="postoperative_temperature_greater_than_38_days">
				<el-input v-model="Form.postoperative_temperature_greater_than_38_days" placeholder="术后体温>38℃天数" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期手术并发症" prop="perioperative_complications">
				<el-checkbox-group v-model="Form.perioperative_complications">
					<el-checkbox label=0 name="perioperative_complications">无</el-checkbox>
					<el-checkbox label=1 name="perioperative_complications">十二指肠残端瘘</el-checkbox>
					<el-checkbox label=2 name="perioperative_complications">吻合口瘘</el-checkbox>
					<el-checkbox label=3 name="perioperative_complications">胰瘘/胰腺炎</el-checkbox>
					<el-checkbox label=4 name="perioperative_complications">肠瘘</el-checkbox>
					<el-checkbox label=5 name="perioperative_complications">胆瘘</el-checkbox>
					<el-checkbox label=6 name="perioperative_complications">淋巴乳糜瘘</el-checkbox>
					<el-checkbox label=7 name="perioperative_complications">腹腔内出血</el-checkbox>
					<el-checkbox label=8 name="perioperative_complications">消化道出血</el-checkbox>
					<el-checkbox label=9 name="perioperative_complications">麻痹性肠梗阻</el-checkbox>
					<el-checkbox label=10 name="perioperative_complications">机械性梗阻</el-checkbox>
					<el-checkbox label=11 name="perioperative_complications">胃无张力</el-checkbox>
					<el-checkbox label=12 name="perioperative_complications">切口感染/切口裂开</el-checkbox>
					<el-checkbox label=13 name="perioperative_complications">腹腔感染/腹腔脓肿/腹腔局限性积液</el-checkbox>
					<el-checkbox label=14 name="perioperative_complications">血管损伤</el-checkbox>
					<el-checkbox label=15 name="perioperative_complications">临近器官损伤</el-checkbox>
					<el-checkbox label=16 name="perioperative_complications">腹腔镜相关并发症</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="围术期手术并发症处理方式" prop="management_of_perioperative_complications">
				<el-input v-model="Form.management_of_perioperative_complications" placeholder="围术期手术并发症处理方式" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="非手术并发症" prop="nonoperative_complication">
				<el-input v-model="Form.nonoperative_complication" placeholder="非手术并发症" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期非手术并发症处理方式" prop="perioperative_management_of_nonoperative_complications">
				<el-input v-model="Form.perioperative_management_of_nonoperative_complications" placeholder="围术期非手术并发症处理方式" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="转归" prop="outcome">
				<el-radio-group v-model="Form.outcome">
					<el-radio label=1>无并发症出院</el-radio>
					<el-radio label=2>并发症治愈出院</el-radio>
					<el-radio label=3>自动出院</el-radio>
					<el-radio label=4>死亡</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="病历信息录入者" prop="inputting_medical_records">
				<el-input v-model="Form.inputting_medical_records" placeholder="病历信息录入者" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="病历录入是否完整" prop="is_the_record_entry_complete">
				<el-input v-model="Form.is_the_record_entry_complete" placeholder="病历录入是否完整" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="病历信息核查者" prop="medical_records_information_checker">
				<el-input v-model="Form.medical_records_information_checker" placeholder="病历信息核查者" :rows="2" type="text"></el-input>
			</el-form-item>
			
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
				<el-upload ref="videoRef" :headers="{ Authorization: token }" :action="uploadImgServer" :on-remove="handleVideoRemove" :on-success="handleVideoSuccess" :auto-upload="true" :data="{ basket: 'video' }" :limit="1" multiple :file-list="Form.videoFileList">
					<el-button type="primary">上传</el-button>
				</el-upload>
			</el-form-item>
			<el-form-item label="附件" prop='attachment'>
				<el-upload ref="attachmentRef" :headers="{ Authorization: token }" :action="uploadImgServer" :on-remove="handleAttachmentRemove" :on-success="handleAttachmentSuccess" :auto-upload="true" :data="{ basket: 'attachment' }" :limit="3" multiple :file-list="Form.attachmentFileList">
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
					preoperative_chemotherapy: '0',
					preoperative_chemotherapy_laparoscopic_exploration: '0',
					laparoscopic_exploration_time: '',
					laparoscopic_exploration_result: '0',
					pci_index: '',
					laparoscopic_exploration_cast_off_result: '',
					laparoscopic_exploration_biopsy: '0',
					laparoscopic_exploration_biopsy_result: '',
					laparoscopic_exploration_prognosis: '0',
					preoperative_chemotherapy_scheme: '',
					preoperative_chemotherapy_period: '',
					first_period_chemotherapy_time: '',
					second_period_chemotherapy_time: '',
					third_period_chemotherapy_time: '',
					fourth_period_chemotherapy_time: '',
					chemotherapy_operative: '0',
					chemotherapy_adverse_reactions: '',
					accept_chemotherapy_clinic_evaluate: '0',
					operative_evaluate_effect: '',
					admission_time: '',
					operative_time: '',
					discharge_time: '',
					total_hospital_days: '',
					postoperation_hospital_days: '',
					ecog_score: '',
					one_month_loss_of_weight: '0',
					nrs2002_score: '0',
					pg_sga_assessment: '0',
					nutrition_support_therapy: '0',
					scheme: '0',
					days: '',
					asa_grade: '',
					main_symptoms: ['0'],
					main_signs: ['0'],
					laparoscopic_operative_record: '',
					family_record: '',
					smoke: '0',
					smoke_year: '',
					average_smoke_day: '',
					drink: '0',
					drink_year: '',
					average_drink_day: '',
					height: '',
					weight: '',
					bmi: '',
					hp: '0',
					ecg: '0',
					preoperative_lung_function: '',
					preoperative_ct: '0',
					n_aging: '0',
					preoperative_ct_check_m_aging: '',
					preoperative_aging: '',
					preoperative_complications_check_exception: '',
					preoperative_complications: ['0'],
					preoperative_chest_ct: '0',
					ultrasound_gastroscope_tnm: '',
					ultrasound_imaging_tnm: '',
					laparoscopic_fat_volumne: '',
					napes_fat_volumne: '',
					her_2: '0',
					rbc: '',
					hemoglobin: '',
					gpt: '',
					got: '',
					tbil: '',
					tp: '',
					alb: '',
					palb: '',
					glu: '',
					tg: '',
					crea: '',
					d_dimer: '',
					blood_type: '',
					preoperative_afp: '',
					preoperative_cea: '',
					preoperative_ca19_9: '',
					preoperative_ca125: '',
					preoperative_ca15_3: '',
					preoperative_ca72_4: '',
					gas_17: '',
					pepsinogen_1: '',
					pepsinogen_2: '',
					pepsinogen_1_divide_pepsinogen_2: '',
					preoperative_ll_6: '',
					vitb12: '',
					folate: '',
					evb_ca_lga: '',
					ebv_ea_lgg: '',
					pg_1_divide_pg_2: '',
					stool_ob: '',
					postoperative_afp: '',
					postoperative_cea: '',
					postoperative_ca19_9: '',
					postoperative_ca72_4: '',
					postoperative_ca125: '',
					postoperative_ca15_3: '',
					postoperative_rbc: '',
					postoperative_hemoglobin: '',
					postoperative_gpt: '',
					postoperative_got: '',
					postoperative_tbil: '',
					postoperative_tp: '',
					postoperative_alb: '',
					postoperative_glu: '',
					postoperative_tg: '',
					postoperative_crea: '',
					d_d2: '',
					amylase_in_puncture_fluid: '',
					surgical_intervention: '0',
					surgeon: '',
					road_way: '0',
					road: '0',
					laparoscopic_exploration_laparoscopy: '',
					removal_way: '0',
					lymphadenectomy: '0',
					rebuild: '0',
					omental_sac_resection: '0',
					omental_sac_resection_minutes: '',
					splenic_hilar_lymph_node_clear_minutes: '',
					simultaneous_organoectomy_resection: ['0'],
					intraoperative_organ_injury_occurred: ['0'],
					intraoperative_organ_injury_occurred_handle: '',
					intraoperative_complications_bleeding_site: '',
					operation_minutes: '',
					intraoperative_blood_loss_was_estimated: '',
					perioperative_blood_transfusion: '0',
					adverse_reactions_of_perioperative_blood_transfusion: '0',
					perioperative_transfusion_unit: '',
					chemotherapy_during_operation: '',
					intraoperative_carbon_nanotracers: '0',
					intraoperative_arterial_infusion_chemotherapy: '',
					intraoperative_results_of_special_freezing: '',
					ascites: '0',
					cancer_cell: '0',
					peritoneal_metastasis: '0',
					hepatic_metastases: '',
					single_hepatic_metastases: '0',
					more_hepatic_metastases: '0',
					lymph_nodes_were_enlarged_in_16: '',
					number_of_tumor_lesions: '0',
					longitudinal_position_of_a_single_lesion: '0',
					aeg: '0',
					peridiameter_of_the_tumor: '0',
					greatest_tumor_diameter: '',
					intraoperative_depth_of_tumor_invasion: '0',
					cancer: '0',
					early_cancer_t1: '0',
					radical_degrees: '0',
					distance_between_the_proximal_margin_and_the_tumor: '',
					distance_of_distal_margin_to_tumor: '',
					dual_foci_neoplasms_foci_1_nature: '0',
					dual_foci_neoplasms_foci_2_nature: '0',
					double_focal_tumor_site: '0',
					bifoci_tumor_site_foci_1: '0',
					bifoci_tumor_site_foci_2: '0',
					three_or_more_lesions_and_multiple_lesions: '',
					single_focal_tumor_pathology: '0',
					cell_type: '0',
					adenocarcinoma_of_differentiation: '0',
					lauren_type: '0',
					level_of_tumor: '0',
					lymphoma_tnm_aging: '',
					detection_of_frozen_cutting_edge_disease: '0',
					resect_the_inspection_margin_again: '0',
					greater_omentum_margin_was_examined: '0',
					examination_of_lesser_omentum_margin: '0',
					ft_aging: '0',
					adjacent_structures_are_infiltrated_directly: ['0'],
					fn_aging: '0',
					fm_aging: '0',
					m1_aging: '0',
					ftnm_jgca: '',
					ftnm: '0',
					her2: '0',
					lymphadenectomy_total: '',
					lymph_node: '',
					regional_lymph_nodes_cancer_nodules: '',
					no1_plus: '',
					no1: '',
					no2_plus: '',
					no2: '',
					no3_plus: '',
					no3: '',
					no3a_plus: '',
					no3a: '',
					no3b_plus: '',
					no3b: '',
					no4d_plus: '',
					no4d: '',
					no4sb_plus: '',
					no4sb: '',
					no4sa_plus: '',
					no4sa: '',
					no5_plus: '',
					no5: '',
					no6_plus: '',
					no6: '',
					no6a_plus: '',
					no6a: '',
					no6b_plus: '',
					no6b: '',
					no6c_plus: '',
					no6c: '',
					no7_plus: '',
					no7: '',
					no8a_plus: '',
					no8a: '',
					no8p_plus: '',
					no8p: '',
					no9_plus: '',
					no9: '',
					no10_plus: '',
					no10: '',
					no10p_plus: '',
					no10p: '',
					no11p_plus: '',
					no11p: '',
					no11p_back_plus: '',
					no11p_back: '',
					no11d_plus: '',
					no11d: '',
					no12a_plus: '',
					no12a: '',
					no12p_plus: '',
					no12p: '',
					no12b_plus: '',
					no12b: '',
					no12h_plus: '',
					no12h: '',
					no13_plus: '',
					no13: '',
					no14v_plus: '',
					no14v: '',
					no15_plus: '',
					no15: '',
					no16a1_plus: '',
					no16a1: '',
					no16a2_plus: '',
					no16a2: '',
					no16b1_plus: '',
					no16b1: '',
					no16b2_plus: '',
					no16b2: '',
					no17_plus: '',
					no17: '',
					no18_plus: '',
					no18: '',
					no19_plus: '',
					no19: '',
					no20_plus: '',
					no20: '',
					no110_plus: '',
					no110: '',
					no111_plus: '',
					no111: '',
					no112_plus: '',
					no112: '',
					small_mesenteric_ln_plus: '',
					small_mesenteric_ln: '',
					special_lymph_node: '',
					vascular_involvement: '0',
					lymphatic_involvement: '0',
					neurologic_involvement: '0',
					fat_examination_reveals_cancerous_nodules: '0',
					vascular_tumor_emboli: '0',
					hepatoduodenal_ligament_anterior_peritoneum: '0',
					pancreas_capsule: '0',
					anterior_lobe_of_transverse_mesentery: '0',
					stage_show: '',
					pathology_num: '',
					perioperative_nutritional_support: '',
					perioperative_antibiotics: '',
					postoperative_prophylactic_antibiotic: '0',
					perioperative_acid_suppressor: '',
					perioperative_mucosal_protectant: '',
					perioperative_hemostatic_agent: '',
					perioperative_somatostatin: '0',
					perioperative_analgesics: '',
					perioperative_intensive_care: '',
					other_special_treatments_during_perioperative_period: '',
					whether_to_install_a_gastric_tube: '0',
					set_time: '',
					extraction_date_of_gastric_tube_time: '',
					average_daily_gastric_fluid_volume: '',
					cause_of_gastric_tube_replacement: '',
					catheter_removal_time: '',
					abdominal_drainage_tube_removal_date_time: '',
					average_daily_volume_of_abdominal_drainage_fluid: '',
					anal_exhaust_day_time: '',
					start_an_out_of_bed_day_time: '',
					start_a_fluid_day_time: '',
					highest_temperature: '',
					postoperative_temperature_greater_than_38_days: '',
					perioperative_complications: ['0'],
					management_of_perioperative_complications: '',
					nonoperative_complication: '',
					perioperative_management_of_nonoperative_complications: '',
					outcome: '',
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
					axios.get(`/api/back/stomachCas/${id}`).then(res => {
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
							preoperative_chemotherapy: String(res.data.preoperative_chemotherapy),
							preoperative_chemotherapy_laparoscopic_exploration: String(res.data.preoperative_chemotherapy_laparoscopic_exploration),
							laparoscopic_exploration_time: res.data.laparoscopic_exploration_time == '1970-01-01 08:00:00' ? '' : res.data.laparoscopic_exploration_time,
							laparoscopic_exploration_result: String(res.data.laparoscopic_exploration_result),
							pci_index: res.data.pci_index,
							laparoscopic_exploration_cast_off_result: res.data.laparoscopic_exploration_cast_off_result,
							laparoscopic_exploration_biopsy: String(res.data.laparoscopic_exploration_biopsy),
							laparoscopic_exploration_biopsy_result: res.data.laparoscopic_exploration_biopsy_result,
							laparoscopic_exploration_prognosis: String(res.data.laparoscopic_exploration_prognosis),
							preoperative_chemotherapy_scheme: res.data.preoperative_chemotherapy_scheme,
							preoperative_chemotherapy_period: res.data.preoperative_chemotherapy_period,
							first_period_chemotherapy_time: res.data.first_period_chemotherapy_time == '1970-01-01 08:00:00' ? '' : res.data.first_period_chemotherapy_time,
							second_period_chemotherapy_time: res.data.second_period_chemotherapy_time == '1970-01-01 08:00:00' ? '' : res.data.second_period_chemotherapy_time,
							third_period_chemotherapy_time: res.data.third_period_chemotherapy_time == '1970-01-01 08:00:00' ? '' : res.data.third_period_chemotherapy_time,
							fourth_period_chemotherapy_time: res.data.fourth_period_chemotherapy_time == '1970-01-01 08:00:00' ? '' : res.data.fourth_period_chemotherapy_time,
							chemotherapy_operative: String(res.data.chemotherapy_operative),
							chemotherapy_adverse_reactions: res.data.chemotherapy_adverse_reactions,
							accept_chemotherapy_clinic_evaluate: String(res.data.accept_chemotherapy_clinic_evaluate),
							operative_evaluate_effect: res.data.operative_evaluate_effect,
							admission_time: res.data.admission_time == '1970-01-01 08:00:00' ? '' : res.data.admission_time,
							operative_time: res.data.operative_time == '1970-01-01 08:00:00' ? '' : res.data.operative_time,
							discharge_time: res.data.discharge_time == '1970-01-01 08:00:00' ? '' : res.data.discharge_time,
							total_hospital_days: res.data.total_hospital_days,
							postoperation_hospital_days: res.data.postoperation_hospital_days,
							ecog_score: res.data.ecog_score,
							one_month_loss_of_weight: String(res.data.one_month_loss_of_weight),
							nrs2002_score: String(res.data.nrs2002_score),
							pg_sga_assessment: String(res.data.pg_sga_assessment),
							nutrition_support_therapy: String(res.data.nutrition_support_therapy),
							scheme: String(res.data.scheme),
							days: res.data.days,
							asa_grade: res.data.asa_grade,
							main_symptoms: res.data.main_symptoms,
							main_signs: res.data.main_signs,
							laparoscopic_operative_record: res.data.laparoscopic_operative_record,
							family_record: res.data.family_record,
							smoke: String(res.data.smoke),
							smoke_year: res.data.smoke_year,
							average_smoke_day: res.data.average_smoke_day,
							drink: String(res.data.drink),
							drink_year: res.data.drink_year,
							average_drink_day: res.data.average_drink_day,
							height: res.data.height,
							weight: res.data.weight,
							bmi: res.data.bmi,
							hp: String(res.data.hp),
							ecg: String(res.data.ecg),
							preoperative_lung_function: res.data.preoperative_lung_function,
							preoperative_ct: String(res.data.preoperative_ct),
							n_aging: String(res.data.n_aging),
							preoperative_ct_check_m_aging: res.data.preoperative_ct_check_m_aging,
							preoperative_aging: res.data.preoperative_aging,
							preoperative_complications_check_exception: res.data.preoperative_complications_check_exception,
							preoperative_complications: res.data.preoperative_complications,
							preoperative_chest_ct: String(res.data.preoperative_chest_ct),
							ultrasound_gastroscope_tnm: res.data.ultrasound_gastroscope_tnm,
							ultrasound_imaging_tnm: res.data.ultrasound_imaging_tnm,
							laparoscopic_fat_volumne: res.data.laparoscopic_fat_volumne,
							napes_fat_volumne: res.data.napes_fat_volumne,
							her_2: String(res.data.her_2),
							rbc: res.data.rbc,
							hemoglobin: res.data.hemoglobin,
							gpt: res.data.gpt,
							got: res.data.got,
							tbil: res.data.tbil,
							tp: res.data.tp,
							alb: res.data.alb,
							palb: res.data.palb,
							glu: res.data.glu,
							tg: res.data.tg,
							crea: res.data.crea,
							d_dimer: res.data.d_dimer,
							blood_type: res.data.blood_type,
							preoperative_afp: res.data.preoperative_afp,
							preoperative_cea: res.data.preoperative_cea,
							preoperative_ca19_9: res.data.preoperative_ca19_9,
							preoperative_ca125: res.data.preoperative_ca125,
							preoperative_ca15_3: res.data.preoperative_ca15_3,
							preoperative_ca72_4: res.data.preoperative_ca72_4,
							gas_17: res.data.gas_17,
							pepsinogen_1: res.data.pepsinogen_1,
							pepsinogen_2: res.data.pepsinogen_2,
							pepsinogen_1_divide_pepsinogen_2: res.data.pepsinogen_1_divide_pepsinogen_2,
							preoperative_ll_6: res.data.preoperative_ll_6,
							vitb12: res.data.vitb12,
							folate: res.data.folate,
							evb_ca_lga: res.data.evb_ca_lga,
							ebv_ea_lgg: res.data.ebv_ea_lgg,
							pg_1_divide_pg_2: res.data.pg_1_divide_pg_2,
							stool_ob: res.data.stool_ob,
							postoperative_afp: res.data.postoperative_afp,
							postoperative_cea: res.data.postoperative_cea,
							postoperative_ca19_9: res.data.postoperative_ca19_9,
							postoperative_ca72_4: res.data.postoperative_ca72_4,
							postoperative_ca125: res.data.postoperative_ca125,
							postoperative_ca15_3: res.data.postoperative_ca15_3,
							postoperative_rbc: res.data.postoperative_rbc,
							postoperative_hemoglobin: res.data.postoperative_hemoglobin,
							postoperative_gpt: res.data.postoperative_gpt,
							postoperative_got: res.data.postoperative_got,
							postoperative_tbil: res.data.postoperative_tbil,
							postoperative_tp: res.data.postoperative_tp,
							postoperative_alb: res.data.postoperative_alb,
							postoperative_glu: res.data.postoperative_glu,
							postoperative_tg: res.data.postoperative_tg,
							postoperative_crea: res.data.postoperative_crea,
							d_d2: res.data.d_d2,
							amylase_in_puncture_fluid: res.data.amylase_in_puncture_fluid,
							surgical_intervention: String(res.data.surgical_intervention),
							surgeon: res.data.surgeon,
							road_way: String(res.data.road_way),
							road: String(res.data.road),
							laparoscopic_exploration_laparoscopy: res.data.laparoscopic_exploration_laparoscopy,
							removal_way: String(res.data.removal_way),
							lymphadenectomy: String(res.data.lymphadenectomy),
							rebuild: String(res.data.rebuild),
							omental_sac_resection: String(res.data.omental_sac_resection),
							omental_sac_resection_minutes: res.data.omental_sac_resection_minutes,
							splenic_hilar_lymph_node_clear_minutes: res.data.splenic_hilar_lymph_node_clear_minutes,
							simultaneous_organoectomy_resection: res.data.simultaneous_organoectomy_resection,
							intraoperative_organ_injury_occurred: res.data.intraoperative_organ_injury_occurred,
							intraoperative_organ_injury_occurred_handle: res.data.intraoperative_organ_injury_occurred_handle,
							intraoperative_complications_bleeding_site: res.data.intraoperative_complications_bleeding_site,
							operation_minutes: res.data.operation_minutes,
							intraoperative_blood_loss_was_estimated: res.data.intraoperative_blood_loss_was_estimated,
							perioperative_blood_transfusion: String(res.data.perioperative_blood_transfusion),
							adverse_reactions_of_perioperative_blood_transfusion: String(res.data.adverse_reactions_of_perioperative_blood_transfusion),
							perioperative_transfusion_unit: res.data.perioperative_transfusion_unit,
							chemotherapy_during_operation: String(res.data.chemotherapy_during_operation),
							intraoperative_carbon_nanotracers: String(res.data.intraoperative_carbon_nanotracers),
							intraoperative_arterial_infusion_chemotherapy: res.data.intraoperative_arterial_infusion_chemotherapy,
							intraoperative_results_of_special_freezing: res.data.intraoperative_results_of_special_freezing,
							ascites: String(res.data.ascites),
							cancer_cell: String(res.data.cancer_cell),
							peritoneal_metastasis: String(res.data.peritoneal_metastasis),
							hepatic_metastases: res.data.hepatic_metastases,
							single_hepatic_metastases: String(res.data.single_hepatic_metastases),
							more_hepatic_metastases: String(res.data.more_hepatic_metastases),
							lymph_nodes_were_enlarged_in_16: res.data.lymph_nodes_were_enlarged_in_16,
							number_of_tumor_lesions: String(res.data.number_of_tumor_lesions),
							longitudinal_position_of_a_single_lesion: String(res.data.longitudinal_position_of_a_single_lesion),
							aeg: String(res.data.aeg),
							peridiameter_of_the_tumor: String(res.data.peridiameter_of_the_tumor),
							greatest_tumor_diameter: res.data.greatest_tumor_diameter,
							intraoperative_depth_of_tumor_invasion: String(res.data.intraoperative_depth_of_tumor_invasion),
							cancer: String(res.data.cancer),
							early_cancer_t1: String(res.data.early_cancer_t1),
							radical_degrees: String(res.data.radical_degrees),
							distance_between_the_proximal_margin_and_the_tumor: res.data.distance_between_the_proximal_margin_and_the_tumor,
							distance_of_distal_margin_to_tumor: res.data.distance_of_distal_margin_to_tumor,
							dual_foci_neoplasms_foci_1_nature: String(res.data.dual_foci_neoplasms_foci_1_nature),
							dual_foci_neoplasms_foci_2_nature: String(res.data.dual_foci_neoplasms_foci_2_nature),
							double_focal_tumor_site: String(res.data.double_focal_tumor_site),
							bifoci_tumor_site_foci_1: String(res.data.bifoci_tumor_site_foci_1),
							bifoci_tumor_site_foci_2: String(res.data.bifoci_tumor_site_foci_2),
							three_or_more_lesions_and_multiple_lesions: res.data.three_or_more_lesions_and_multiple_lesions,
							single_focal_tumor_pathology: String(res.data.single_focal_tumor_pathology),
							cell_type: String(res.data.cell_type),
							adenocarcinoma_of_differentiation: String(res.data.adenocarcinoma_of_differentiation),
							lauren_type: String(res.data.lauren_type),
							level_of_tumor: String(res.data.level_of_tumor),
							lymphoma_tnm_aging: res.data.lymphoma_tnm_aging,
							detection_of_frozen_cutting_edge_disease: String(res.data.detection_of_frozen_cutting_edge_disease),
							resect_the_inspection_margin_again: String(res.data.resect_the_inspection_margin_again),
							greater_omentum_margin_was_examined: String(res.data.greater_omentum_margin_was_examined),
							examination_of_lesser_omentum_margin: String(res.data.examination_of_lesser_omentum_margin),
							ft_aging: String(res.data.ft_aging),
							adjacent_structures_are_infiltrated_directly: res.data.adjacent_structures_are_infiltrated_directly,
							fn_aging: String(res.data.fn_aging),
							fm_aging: String(res.data.fm_aging),
							m1_aging: String(res.data.m1_aging),
							ftnm_jgca: res.data.ftnm_jgca,
							ftnm: String(res.data.ftnm),
							her2: String(res.data.her2),
							lymphadenectomy_total: res.data.lymphadenectomy_total,
							lymph_node: res.data.lymph_node,
							regional_lymph_nodes_cancer_nodules: res.data.regional_lymph_nodes_cancer_nodules,
							no1_plus: res.data.no1_plus,
							no1: res.data.no1,
							no2_plus: res.data.no2_plus,
							no2: res.data.no2,
							no3_plus: res.data.no3_plus,
							no3: res.data.no3,
							no3a_plus: res.data.no3a_plus,
							no3a: res.data.no3a,
							no3b_plus: res.data.no3b_plus,
							no3b: res.data.no3b,
							no4d_plus: res.data.no4d_plus,
							no4d: res.data.no4d,
							no4sb_plus: res.data.no4sb_plus,
							no4sb: res.data.no4sb,
							no4sa_plus: res.data.no4sa_plus,
							no4sa: res.data.no4sa,
							no5_plus: res.data.no5_plus,
							no5: res.data.no5,
							no6_plus: res.data.no6_plus,
							no6: res.data.no6,
							no6a_plus: res.data.no6a_plus,
							no6a: res.data.no6a,
							no6b_plus: res.data.no6b_plus,
							no6b: res.data.no6b,
							no6c_plus: res.data.no6c_plus,
							no6c: res.data.no6c_plus,
							no7_plus: res.data.no7_plus,
							no7: res.data.no7,
							no8a_plus: res.data.no8a_plus,
							no8a: res.data.no8a,
							no8p_plus: res.data.no8p_plus,
							no8p: res.data.no8p,
							no9_plus: res.data.no9_plus,
							no9: res.data.no9,
							no10_plus: res.data.no10_plus,
							no10: res.data.no10,
							no10p_plus: res.data.no10p_plus,
							no10p: res.data.no10p,
							no11p_plus: res.data.no11p_plus,
							no11p: res.data.no11p,
							no11p_back_plus: res.data.no11p_back_plus,
							no11p_back: res.data.no11p_back,
							no11d_plus: res.data.no11d_plus,
							no11d: res.data.no11d,
							no12a_plus: res.data.no12a_plus,
							no12a: res.data.no12a,
							no12p_plus: res.data.no12p_plus,
							no12p: res.data.no12p,
							no12b_plus: res.data.no12b_plus,
							no12b: res.data.no12b,
							no12h_plus: res.data.no12h_plus,
							no12h: res.data.no12h,
							no13_plus: res.data.no13_plus,
							no13: res.data.no13,
							no14v_plus: res.data.no14v_plus,
							no14v: res.data.no14v,
							no15_plus: res.data.no15_plus,
							no15: res.data.no15,
							no16a1_plus: res.data.no16a1_plus,
							no16a1: res.data.no16a1,
							no16a2_plus: res.data.no16a2_plus,
							no16a2: res.data.no16a2,
							no16b1_plus: res.data.no16b1_plus,
							no16b1: res.data.no16b1,
							no16b2_plus: res.data.no16b2_plus,
							no16b2: res.data.no16b2,
							no17_plus: res.data.no17_plus,
							no17: res.data.no17,
							no18_plus: res.data.no18_plus,
							no18: res.data.no18,
							no19_plus: res.data.no19_plus,
							no19: res.data.no19,
							no20_plus: res.data.no20_plus,
							no20: res.data.no20,
							no110_plus: res.data.no110_plus,
							no110: res.data.no110,
							no111_plus: res.data.no111_plus,
							no111: res.data.no111,
							no112_plus: res.data.no112_plus,
							no112: res.data.no112,
							small_mesenteric_ln_plus: res.data.small_mesenteric_ln_plus,
							small_mesenteric_ln: res.data.small_mesenteric_ln,
							special_lymph_node: res.data.special_lymph_node,
							vascular_involvement: String(res.data.vascular_involvement),
							lymphatic_involvement: String(res.data.lymphatic_involvement),
							neurologic_involvement: String(res.data.neurologic_involvement),
							fat_examination_reveals_cancerous_nodules: String(res.data.fat_examination_reveals_cancerous_nodules),
							vascular_tumor_emboli: String(res.data.vascular_tumor_emboli),
							hepatoduodenal_ligament_anterior_peritoneum: String(res.data.hepatoduodenal_ligament_anterior_peritoneum),
							pancreas_capsule: String(res.data.pancreas_capsule),
							anterior_lobe_of_transverse_mesentery: String(res.data.anterior_lobe_of_transverse_mesentery),
							stage_show: res.data.stage_show,
							pathology_num: res.data.pathology_num,
							perioperative_nutritional_support: res.data.perioperative_nutritional_support,
							perioperative_antibiotics: res.data.perioperative_antibiotics,
							postoperative_prophylactic_antibiotic: String(res.data.postoperative_prophylactic_antibiotic),
							perioperative_acid_suppressor: res.data.perioperative_acid_suppressor,
							perioperative_mucosal_protectant: res.data.perioperative_mucosal_protectant,
							perioperative_hemostatic_agent: res.data.perioperative_hemostatic_agent,
							perioperative_somatostatin: String(res.data.perioperative_somatostatin),
							perioperative_analgesics: res.data.perioperative_analgesics,
							perioperative_intensive_care: res.data.perioperative_intensive_care,
							other_special_treatments_during_perioperative_period: res.data.other_special_treatments_during_perioperative_period,
							whether_to_install_a_gastric_tube: String(res.data.whether_to_install_a_gastric_tube),
							set_time: res.data.set_time == '1970-01-01 08:00:00' ? '' : res.data.set_time,
							extraction_date_of_gastric_tube_time: res.data.extraction_date_of_gastric_tube_time == '1970-01-01 08:00:00' ? '' : extraction_date_of_gastric_tube_time,
							average_daily_gastric_fluid_volume: res.data.average_daily_gastric_fluid_volume,
							cause_of_gastric_tube_replacement: res.data.cause_of_gastric_tube_replacement,
							catheter_removal_time: res.data.catheter_removal_time == '1970-01-01 08:00:00' ? '' : res.data.catheter_removal_time,
							abdominal_drainage_tube_removal_date_time: res.data.abdominal_drainage_tube_removal_date_time == '1970-01-01 08:00:00' ? '' : res.data.abdominal_drainage_tube_removal_date_time,
							average_daily_volume_of_abdominal_drainage_fluid: res.data.average_daily_volume_of_abdominal_drainage_fluid,
							anal_exhaust_day_time: res.data.anal_exhaust_day_time == '1970-01-01 08:00:00' ? '' : res.data.anal_exhaust_day_time,
							start_an_out_of_bed_day_time: res.data.start_an_out_of_bed_day_time == '1970-01-01 08:00:00' ? '' : res.data.start_an_out_of_bed_day_time,
							start_a_fluid_day_time: res.data.start_a_fluid_day_time == '1970-01-01 08:00:00' ? '' : res.data.start_a_fluid_day_time,
							highest_temperature: res.data.highest_temperature,
							postoperative_temperature_greater_than_38_days: res.data.postoperative_temperature_greater_than_38_days,
							perioperative_complications: res.data.perioperative_complications,
							management_of_perioperative_complications: res.data.management_of_perioperative_complications,
							nonoperative_complication: res.data.nonoperative_complication,
							perioperative_management_of_nonoperative_complications: res.data.perioperative_management_of_nonoperative_complications,
							outcome: res.data.outcome,
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
							sex: String(state.Form.sex),
							national: state.Form.national,
							id_card: state.Form.id_card,
							mobile: state.Form.mobile,
							total_money: state.Form.total_money,
							remark: state.Form.remark,
							family_contact: state.Form.family_contact,
							preoperative_chemotherapy: String(state.Form.preoperative_chemotherapy),
							preoperative_chemotherapy_laparoscopic_exploration: String(state.Form.preoperative_chemotherapy_laparoscopic_exploration),
							laparoscopic_exploration_time: state.Form.laparoscopic_exploration_time,
							laparoscopic_exploration_result: String(state.Form.laparoscopic_exploration_result),
							pci_index: state.Form.pci_index,
							laparoscopic_exploration_cast_off_result: state.Form.laparoscopic_exploration_cast_off_result,
							laparoscopic_exploration_biopsy: String(state.Form.laparoscopic_exploration_biopsy),
							laparoscopic_exploration_biopsy_result: state.Form.laparoscopic_exploration_biopsy_result,
							laparoscopic_exploration_prognosis: String(state.Form.laparoscopic_exploration_prognosis),
							preoperative_chemotherapy_scheme: state.Form.preoperative_chemotherapy_scheme,
							preoperative_chemotherapy_period: state.Form.preoperative_chemotherapy_period,
							first_period_chemotherapy_time: state.Form.first_period_chemotherapy_time,
							second_period_chemotherapy_time: state.Form.second_period_chemotherapy_time,
							third_period_chemotherapy_time: state.Form.third_period_chemotherapy_time,
							fourth_period_chemotherapy_time: state.Form.fourth_period_chemotherapy_time,
							chemotherapy_operative: String(state.Form.chemotherapy_operative),
							chemotherapy_adverse_reactions: state.Form.chemotherapy_adverse_reactions,
							accept_chemotherapy_clinic_evaluate: String(state.Form.accept_chemotherapy_clinic_evaluate),
							operative_evaluate_effect: state.Form.operative_evaluate_effect,
							admission_time: state.Form.admission_time,
							operative_time: state.Form.operative_time,
							discharge_time: state.Form.discharge_time,
							total_hospital_days: state.Form.total_hospital_days,
							postoperation_hospital_days: state.Form.postoperation_hospital_days,
							ecog_score: state.Form.ecog_score,
							one_month_loss_of_weight: String(state.Form.one_month_loss_of_weight),
							nrs2002_score: String(state.Form.nrs2002_score),
							pg_sga_assessment: String(state.Form.pg_sga_assessment),
							nutrition_support_therapy: String(state.Form.nutrition_support_therapy),
							scheme: String(state.Form.scheme),
							days: state.Form.days,
							asa_grade: state.Form.asa_grade,
							main_symptoms: state.Form.main_symptoms,
							main_signs: state.Form.main_signs,
							laparoscopic_operative_record: state.Form.laparoscopic_operative_record,
							family_record: state.Form.family_record,
							smoke: String(state.Form.smoke),
							smoke_year: state.Form.smoke_year,
							average_smoke_day: state.Form.average_smoke_day,
							drink: String(state.Form.drink),
							drink_year: state.Form.drink_year,
							average_drink_day: state.Form.average_drink_day,
							height: state.Form.height,
							weight: state.Form.weight,
							bmi: state.Form.bmi,
							hp: String(state.Form.hp),
							ecg: String(state.Form.ecg),
							preoperative_lung_function: state.Form.preoperative_lung_function,
							preoperative_ct: String(state.Form.preoperative_ct),
							n_aging: String(state.Form.n_aging),
							preoperative_ct_check_m_aging: state.Form.preoperative_ct_check_m_aging,
							preoperative_aging: state.Form.preoperative_aging,
							preoperative_complications_check_exception: state.Form.preoperative_complications_check_exception,
							preoperative_complications: state.Form.preoperative_complications,
							preoperative_chest_ct: String(state.Form.preoperative_chest_ct),
							ultrasound_gastroscope_tnm: state.Form.ultrasound_gastroscope_tnm,
							ultrasound_imaging_tnm: state.Form.ultrasound_imaging_tnm,
							laparoscopic_fat_volumne: state.Form.laparoscopic_fat_volumne,
							napes_fat_volumne: state.Form.napes_fat_volumne,
							her_2: String(state.Form.her_2),
							rbc: state.Form.rbc,
							hemoglobin: state.Form.hemoglobin,
							gpt: state.Form.gpt,
							got: state.Form.got,
							tbil: state.Form.tbil,
							tp: state.Form.tp,
							alb: state.Form.alb,
							palb: state.Form.palb,
							glu: state.Form.glu,
							tg: state.Form.tg,
							crea: state.Form.crea,
							d_dimer: state.Form.d_dimer,
							blood_type: state.Form.blood_type,
							preoperative_afp: state.Form.preoperative_afp,
							preoperative_cea: state.Form.preoperative_cea,
							preoperative_ca19_9: state.Form.preoperative_ca19_9,
							preoperative_ca125: state.Form.preoperative_ca125,
							preoperative_ca15_3: state.Form.preoperative_ca15_3,
							preoperative_ca72_4: state.Form.preoperative_ca72_4,
							gas_17: state.Form.gas_17,
							pepsinogen_1: state.Form.pepsinogen_1,
							pepsinogen_2: state.Form.pepsinogen_2,
							pepsinogen_1_divide_pepsinogen_2: state.Form.pepsinogen_1_divide_pepsinogen_2,
							preoperative_ll_6: state.Form.preoperative_ll_6,
							vitb12: state.Form.vitb12,
							folate: state.Form.folate,
							evb_ca_lga: state.Form.evb_ca_lga,
							ebv_ea_lgg: state.Form.ebv_ea_lgg,
							pg_1_divide_pg_2: state.Form.pg_1_divide_pg_2,
							stool_ob: state.Form.stool_ob,
							postoperative_afp: state.Form.postoperative_afp,
							postoperative_cea: state.Form.postoperative_cea,
							postoperative_ca19_9: state.Form.postoperative_ca19_9,
							postoperative_ca72_4: state.Form.postoperative_ca72_4,
							postoperative_ca125: state.Form.postoperative_ca125,
							postoperative_ca15_3: state.Form.postoperative_ca15_3,
							postoperative_rbc: state.Form.postoperative_rbc,
							postoperative_hemoglobin: state.Form.postoperative_hemoglobin,
							postoperative_gpt: state.Form.postoperative_gpt,
							postoperative_got: state.Form.postoperative_got,
							postoperative_tbil: state.Form.postoperative_tbil,
							postoperative_tp: state.Form.postoperative_tp,
							postoperative_alb: state.Form.postoperative_alb,
							postoperative_glu: state.Form.postoperative_glu,
							postoperative_tg: state.Form.postoperative_tg,
							postoperative_crea: state.Form.postoperative_crea,
							d_d2: state.Form.d_d2,
							amylase_in_puncture_fluid: state.Form.amylase_in_puncture_fluid,
							surgical_intervention: String(state.Form.surgical_intervention),
							surgeon: state.Form.surgeon,
							road_way: String(state.Form.road_way),
							road: String(state.Form.road),
							laparoscopic_exploration_laparoscopy: state.Form.laparoscopic_exploration_laparoscopy,
							removal_way: String(state.Form.removal_way),
							lymphadenectomy: String(state.Form.lymphadenectomy),
							rebuild: String(state.Form.rebuild),
							omental_sac_resection: String(state.Form.omental_sac_resection),
							omental_sac_resection_minutes: state.Form.omental_sac_resection_minutes,
							splenic_hilar_lymph_node_clear_minutes: state.Form.splenic_hilar_lymph_node_clear_minutes,
							simultaneous_organoectomy_resection: state.Form.simultaneous_organoectomy_resection,
							intraoperative_organ_injury_occurred: state.Form.intraoperative_organ_injury_occurred,
							intraoperative_organ_injury_occurred_handle: state.Form.intraoperative_organ_injury_occurred_handle,
							intraoperative_complications_bleeding_site: state.Form.intraoperative_complications_bleeding_site,
							operation_minutes: state.Form.operation_minutes,
							intraoperative_blood_loss_was_estimated: state.Form.intraoperative_blood_loss_was_estimated,
							perioperative_blood_transfusion: String(state.Form.perioperative_blood_transfusion),
							adverse_reactions_of_perioperative_blood_transfusion: String(state.Form.adverse_reactions_of_perioperative_blood_transfusion),
							perioperative_transfusion_unit: state.Form.perioperative_transfusion_unit,
							chemotherapy_during_operation: String(state.Form.chemotherapy_during_operation),
							intraoperative_carbon_nanotracers: String(state.Form.intraoperative_carbon_nanotracers),
							intraoperative_arterial_infusion_chemotherapy: state.Form.intraoperative_arterial_infusion_chemotherapy,
							intraoperative_results_of_special_freezing: state.Form.intraoperative_results_of_special_freezing,
							ascites: String(state.Form.ascites),
							cancer_cell: String(state.Form.cancer_cell),
							peritoneal_metastasis: String(state.Form.peritoneal_metastasis),
							hepatic_metastases: state.Form.hepatic_metastases,
							single_hepatic_metastases: String(state.Form.single_hepatic_metastases),
							more_hepatic_metastases: String(state.Form.more_hepatic_metastases),
							lymph_nodes_were_enlarged_in_16: state.Form.lymph_nodes_were_enlarged_in_16,
							number_of_tumor_lesions: String(state.Form.number_of_tumor_lesions),
							longitudinal_position_of_a_single_lesion: String(state.Form.longitudinal_position_of_a_single_lesion),
							aeg: String(state.Form.aeg),
							peridiameter_of_the_tumor: String(state.Form.peridiameter_of_the_tumor),
							greatest_tumor_diameter: state.Form.greatest_tumor_diameter,
							intraoperative_depth_of_tumor_invasion: String(state.Form.intraoperative_depth_of_tumor_invasion),
							cancer: String(state.Form.cancer),
							early_cancer_t1: String(state.Form.early_cancer_t1),
							radical_degrees: String(state.Form.radical_degrees),
							distance_between_the_proximal_margin_and_the_tumor: state.Form.distance_between_the_proximal_margin_and_the_tumor,
							distance_of_distal_margin_to_tumor: state.Form.distance_of_distal_margin_to_tumor,
							dual_foci_neoplasms_foci_1_nature: String(state.Form.dual_foci_neoplasms_foci_1_nature),
							dual_foci_neoplasms_foci_2_nature: String(state.Form.dual_foci_neoplasms_foci_2_nature),
							double_focal_tumor_site: String(state.Form.double_focal_tumor_site),
							bifoci_tumor_site_foci_1: String(state.Form.bifoci_tumor_site_foci_1),
							bifoci_tumor_site_foci_2: String(state.Form.bifoci_tumor_site_foci_2),
							three_or_more_lesions_and_multiple_lesions: state.Form.three_or_more_lesions_and_multiple_lesions,
							single_focal_tumor_pathology: String(state.Form.single_focal_tumor_pathology),
							cell_type: String(state.Form.cell_type),
							adenocarcinoma_of_differentiation: String(state.Form.adenocarcinoma_of_differentiation),
							lauren_type: String(state.Form.lauren_type),
							level_of_tumor: String(state.Form.level_of_tumor),
							lymphoma_tnm_aging: state.Form.lymphoma_tnm_aging,
							detection_of_frozen_cutting_edge_disease: String(state.Form.detection_of_frozen_cutting_edge_disease),
							resect_the_inspection_margin_again: String(state.Form.resect_the_inspection_margin_again),
							greater_omentum_margin_was_examined: String(state.Form.greater_omentum_margin_was_examined),
							examination_of_lesser_omentum_margin: String(state.Form.examination_of_lesser_omentum_margin),
							ft_aging: String(state.Form.ft_aging),
							adjacent_structures_are_infiltrated_directly: state.Form.adjacent_structures_are_infiltrated_directly,
							fn_aging: String(state.Form.fn_aging),
							fm_aging: String(state.Form.fm_aging),
							m1_aging: String(state.Form.m1_aging),
							ftnm_jgca: state.Form.ftnm_jgca,
							ftnm: String(state.Form.ftnm),
							her2: String(state.Form.her2),
							lymphadenectomy_total: state.Form.lymphadenectomy_total,
							lymph_node: state.Form.lymph_node,
							regional_lymph_nodes_cancer_nodules: state.Form.regional_lymph_nodes_cancer_nodules,
							no1_plus: state.Form.no1_plus,
							no1: state.Form.no1,
							no2_plus: state.Form.no2_plus,
							no2: state.Form.no2,
							no3_plus: state.Form.no3_plus,
							no3: state.Form.no3,
							no3a_plus: state.Form.no3a_plus,
							no3a: state.Form.no3a,
							no3b_plus: state.Form.no3b_plus,
							no3b: state.Form.no3b,
							no4d_plus: state.Form.no4d_plus,
							no4d: state.Form.no4d,
							no4sb_plus: state.Form.no4sb_plus,
							no4sb: state.Form.no4sb,
							no4sa_plus: state.Form.no4sa_plus,
							no4sa: state.Form.no4sa,
							no5_plus: state.Form.no5_plus,
							no5: state.Form.no5,
							no6_plus: state.Form.no6_plus,
							no6: state.Form.no6,
							no6a_plus: state.Form.no6a_plus,
							no6a: state.Form.no6a,
							no6b_plus: state.Form.no6b_plus,
							no6b: state.Form.no6b,
							no6c_plus: state.Form.no6c_plus,
							no6c: state.Form.no6c_plus,
							no7_plus: state.Form.no7_plus,
							no7: state.Form.no7,
							no8a_plus: state.Form.no8a_plus,
							no8a: state.Form.no8a,
							no8p_plus: state.Form.no8p_plus,
							no8p: state.Form.no8p,
							no9_plus: state.Form.no9_plus,
							no9: state.Form.no9,
							no10_plus: state.Form.no10_plus,
							no10: state.Form.no10,
							no10p_plus: state.Form.no10p_plus,
							no10p: state.Form.no10p,
							no11p_plus: state.Form.no11p_plus,
							no11p: state.Form.no11p,
							no11p_back_plus: state.Form.no11p_back_plus,
							no11p_back: state.Form.no11p_back,
							no11d_plus: state.Form.no11d_plus,
							no11d: state.Form.no11d,
							no12a_plus: state.Form.no12a_plus,
							no12a: state.Form.no12a,
							no12p_plus: state.Form.no12p_plus,
							no12p: state.Form.no12p,
							no12b_plus: state.Form.no12b_plus,
							no12b: state.Form.no12b,
							no12h_plus: state.Form.no12h_plus,
							no12h: state.Form.no12h,
							no13_plus: state.Form.no13_plus,
							no13: state.Form.no13,
							no14v_plus: state.Form.no14v_plus,
							no14v: state.Form.no14v,
							no15_plus: state.Form.no15_plus,
							no15: state.Form.no15,
							no16a1_plus: state.Form.no16a1_plus,
							no16a1: state.Form.no16a1,
							no16a2_plus: state.Form.no16a2_plus,
							no16a2: state.Form.no16a2,
							no16b1_plus: state.Form.no16b1_plus,
							no16b1: state.Form.no16b1,
							no16b2_plus: state.Form.no16b2_plus,
							no16b2: state.Form.no16b2,
							no17_plus: state.Form.no17_plus,
							no17: state.Form.no17,
							no18_plus: state.Form.no18_plus,
							no18: state.Form.no18,
							no19_plus: state.Form.no19_plus,
							no19: state.Form.no19,
							no20_plus: state.Form.no20_plus,
							no20: state.Form.no20,
							no110_plus: state.Form.no110_plus,
							no110: state.Form.no110,
							no111_plus: state.Form.no111_plus,
							no111: state.Form.no111,
							no112_plus: state.Form.no112_plus,
							no112: state.Form.no112,
							small_mesenteric_ln_plus: state.Form.small_mesenteric_ln_plus,
							small_mesenteric_ln: state.Form.small_mesenteric_ln,
							special_lymph_node: state.Form.special_lymph_node,
							vascular_involvement: String(state.Form.vascular_involvement),
							lymphatic_involvement: String(state.Form.lymphatic_involvement),
							neurologic_involvement: String(state.Form.neurologic_involvement),
							fat_examination_reveals_cancerous_nodules: String(state.Form.fat_examination_reveals_cancerous_nodules),
							vascular_tumor_emboli: String(state.Form.vascular_tumor_emboli),
							hepatoduodenal_ligament_anterior_peritoneum: String(state.Form.hepatoduodenal_ligament_anterior_peritoneum),
							pancreas_capsule: String(state.Form.pancreas_capsule),
							anterior_lobe_of_transverse_mesentery: String(state.Form.anterior_lobe_of_transverse_mesentery),
							stage_show: state.Form.stage_show,
							pathology_num: state.Form.pathology_num,
							perioperative_nutritional_support: state.Form.perioperative_nutritional_support,
							perioperative_antibiotics: state.Form.perioperative_antibiotics,
							postoperative_prophylactic_antibiotic: String(state.Form.postoperative_prophylactic_antibiotic),
							perioperative_acid_suppressor: state.Form.perioperative_acid_suppressor,
							perioperative_mucosal_protectant: state.Form.perioperative_mucosal_protectant,
							perioperative_hemostatic_agent: state.Form.perioperative_hemostatic_agent,
							perioperative_somatostatin: String(state.Form.perioperative_somatostatin),
							perioperative_analgesics: state.Form.perioperative_analgesics,
							perioperative_intensive_care: state.Form.perioperative_intensive_care,
							other_special_treatments_during_perioperative_period: state.Form.other_special_treatments_during_perioperative_period,
							whether_to_install_a_gastric_tube: String(state.Form.whether_to_install_a_gastric_tube),
							set_time: state.Form.set_time,
							extraction_date_of_gastric_tube_time: state.Form.extraction_date_of_gastric_tube_time,
							average_daily_gastric_fluid_volume: state.Form.average_daily_gastric_fluid_volume,
							cause_of_gastric_tube_replacement: state.Form.cause_of_gastric_tube_replacement,
							catheter_removal_time: state.Form.catheter_removal_time,
							abdominal_drainage_tube_removal_date_time: state.Form.abdominal_drainage_tube_removal_date_time,
							average_daily_volume_of_abdominal_drainage_fluid: state.Form.average_daily_volume_of_abdominal_drainage_fluid,
							anal_exhaust_day_time: state.Form.anal_exhaust_day_time,
							start_an_out_of_bed_day_time: state.Form.start_an_out_of_bed_day_time,
							start_a_fluid_day_time: state.Form.start_a_fluid_day_time,
							start_a_fluid_day_time: state.Form.start_a_fluid_day_time,
							postoperative_temperature_greater_than_38_days: state.Form.postoperative_temperature_greater_than_38_days,
							perioperative_complications: state.Form.perioperative_complications,
							management_of_perioperative_complications: state.Form.management_of_perioperative_complications,
							nonoperative_complication: state.Form.nonoperative_complication,
							perioperative_management_of_nonoperative_complications: state.Form.perioperative_management_of_nonoperative_complications,
							outcome: state.Form.outcome,
							inputting_medical_records: state.Form.inputting_medical_records,
							is_the_record_entry_complete: state.Form.is_the_record_entry_complete,
							medical_records_information_checker: state.Form.medical_records_information_checker
						}

						let url = '/api/back/stomachCas'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/stomachCas/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/stomachca-index',
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
