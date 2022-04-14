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
			<el-form-item label="术前化疗方案" prop="preoperative_chemotherapy_scheme">
				<el-input v-model="Form.preoperative_chemotherapy_scheme" placeholder="请输入术前化疗方案" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前化疗时间周期" prop="preoperative_chemotherapy_period">
				<el-input v-model="Form.preoperative_chemotherapy_period" placeholder="请输入术前化疗周期" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="化疗后是否手术" prop="chemotherapy_operative">
				<el-radio-group v-model="Form.chemotherapy_operative">
					<el-radio label=0>否</el-radio>
					<el-radio label=1>是</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="化疗期间不良反应" prop="chemotherapy_adverse_reactions">
				<el-input v-model="Form.chemotherapy_adverse_reactions" placeholder="请输入化疗期间不良反应" :rows="2"
					type="textarea"></el-input>
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
				<el-input v-model="Form.operative_evaluate_effect" placeholder="请输入术后病理评效" :rows="2" type="textarea">
				</el-input>
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
				<el-input v-model="Form.postoperation_hospital_days" placeholder="请输入术后住院时间（天）" :rows="2" type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="ecog 评分" prop="ecog_score">
				<el-input v-model="Form.ecog_score" placeholder="请输入ecog 评分" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="nrs2002评分" prop="nrs2002_score">
				<el-radio-group v-model="Form.nrs2002_score">
					<el-radio label=0>{{ "<3" }}</el-radio>
					<el-radio label=1>>=3</el-radio>
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
				<el-input v-model="Form.laparoscopic_operative_record" placeholder="请输入腹腔手术史" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="腹腔手术" prop="abdominal_surgery">
				<el-input v-model="Form.abdominal_surgery" placeholder="请输入腹腔手术" :rows="2" type="textarea"></el-input>
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
				<el-input v-model="Form.preoperative_lung_function" placeholder="饮酒请输入术前肺功能fev1/fvc(%)" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前合并症/术前检查异常" prop="preoperative_complications_check_exception">
				<el-input v-model="Form.preoperative_complications_check_exception" placeholder="术前合并症/术前检查异常" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前合并症" prop="preoperative_complications_0">
				<el-checkbox-group v-model="Form.preoperative_complications_0">
					<el-checkbox label=0 name="preoperative_complications_0">无</el-checkbox>
					<el-checkbox label=1 name="preoperative_complications_0">出血</el-checkbox>
					<el-checkbox label=2 name="preoperative_complications_0">穿孔</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="术前合并症" prop="preoperative_complications">
				<el-checkbox-group v-model="Form.preoperative_complications">
					<el-checkbox label=0 name="preoperative_complications">无</el-checkbox>
					<el-checkbox label=1 name="preoperative_complications">呼吸系统（COPD，哮喘，肺心病）</el-checkbox>
					<el-checkbox label=2 name="preoperative_complications">循环系统（高血压，心功能不全（NYHA Ⅲ或Ⅳ)，陈旧性心肌梗塞）
					</el-checkbox>
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
				<el-input v-model="Form.preoperative_chest_ct" placeholder="术前胸部CT" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="腹腔内脂肪容积" prop="laparoscopic_fat_volumne">
				<el-input v-model="Form.laparoscopic_fat_volumne" placeholder="腹腔内脂肪容积" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="腹壁脂肪容积" prop="napes_fat_volumne">
				<el-input v-model="Form.napes_fat_volumne" placeholder="腹壁脂肪容积" :rows="2" type="textarea"></el-input>
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
			<el-form-item label="ua" prop="ua">
				<el-input v-model="Form.ua" placeholder="ua" :rows="2" type="textarea"></el-input>
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
				<el-input v-model="Form.preoperative_ca19_9" placeholder="术前ca19-9" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术前ca125" prop="preoperative_ca125">
				<el-input v-model="Form.preoperative_ca125" placeholder="术前ca125" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术前ca15-3" prop="preoperative_ca15_3">
				<el-input v-model="Form.preoperative_ca15_3" placeholder="术前ca15-3" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术前ca72-4" prop="preoperative_ca72_4">
				<el-input v-model="Form.preoperative_ca72_4" placeholder="术前ca72-4" :rows="2" type="textarea">
				</el-input>
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
				<el-input v-model="Form.postoperative_ca19_9" placeholder="术后ca19-9" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后ca72-4" prop="postoperative_ca72_4">
				<el-input v-model="Form.postoperative_ca72_4" placeholder="术后ca72-4" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后125" prop="postoperative_ca125">
				<el-input v-model="Form.postoperative_ca125" placeholder="术后125" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后ca15-3" prop="postoperative_ca15_3">
				<el-input v-model="Form.postoperative_ca15_3" placeholder="术后ca15-3" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后her2" prop="postoperative_her2">
				<el-input v-model="Form.postoperative_her2" placeholder="术后her2" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后rbc" prop="postoperative_rbc">
				<el-input v-model="Form.postoperative_rbc" placeholder="术后rbc" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后血红蛋白" prop="postoperative_hemoglobin">
				<el-input v-model="Form.postoperative_hemoglobin" placeholder="术后血红蛋白" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后谷丙转氨酶alt u/l" prop="postoperative_gpt">
				<el-input v-model="Form.postoperative_gpt" placeholder="术后谷丙转氨酶alt u/l" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后谷草转氨酶ast u/l" prop="postoperative_got">
				<el-input v-model="Form.postoperative_got" placeholder="术后谷草转氨酶ast u/l" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后总胆红素tbil mmol/l" prop="postoperative_tbil">
				<el-input v-model="Form.postoperative_tbil" placeholder="术后总胆红素tbil mmol/l" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后总蛋白tp g/l" prop="postoperative_tp">
				<el-input v-model="Form.postoperative_tp" placeholder="术后总蛋白tp g/l" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后白蛋白 alb g/l" prop="postoperative_alb">
				<el-input v-model="Form.postoperative_alb" placeholder="术后白蛋白 alb g/l" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后glu" prop="postoperative_glu">
				<el-input v-model="Form.postoperative_glu" placeholder="术后glu" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后ua" prop="postoperative_ua">
				<el-input v-model="Form.postoperative_ua" placeholder="术后ua" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后crea" prop="postoperative_crea">
				<el-input v-model="Form.postoperative_crea" placeholder="术后crea" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术后d-d2" prop="postoperative_d_d2">
				<el-input v-model="Form.postoperative_d_d2" placeholder="d-d2" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术者" prop="surgeon">
				<el-input v-model="Form.surgeon" placeholder="术者" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="位置" prop="location">
				<el-radio-group v-model="Form.location">
					<el-radio label=1>胃腔内</el-radio>
					<el-radio label=2>胃腔外</el-radio>
					<el-radio label=3>小肠</el-radio>
					<el-radio label=4>直肠</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="入路" prop="road">
				<el-radio-group v-model="Form.road">
					<el-radio label=1>开腹</el-radio>
					<el-radio label=2>腹腔镜</el-radio>
					<el-radio label=3>经直肠</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="腹腔镜探查后中转开腹原因" prop="laparoscopic_exploration_laparoscopy">
				<el-input v-model="Form.laparoscopic_exploration_laparoscopy" placeholder="腹腔镜探查后中转开腹原因" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="切除方式" prop="removal_way">
				<el-radio-group v-model="Form.removal_way">
					<el-radio label=1>DG</el-radio>
					<el-radio label=2>TG</el-radio>
					<el-radio label=3>PG</el-radio>
					<el-radio label=4>局部切除</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="吻合钉" prop="consistent_with_nail">
				<el-input v-model="Form.consistent_with_nail" placeholder="吻合钉" :rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="重建" prop="rebuild">
				<el-radio-group v-model="Form.rebuild">
					<el-radio label=1>Billroth-1</el-radio>
					<el-radio label=2>Billroth-2</el-radio>
					<el-radio label=3>Roux-en-Y</el-radio>
					<el-radio label=4>Braun</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="包膜完整" prop="coated_complete">
				<el-radio-group v-model="Form.coated_complete">
					<el-radio label=0>不完整</el-radio>
					<el-radio label=1>完整</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="术中并发器官损伤" prop="intraoperative_organ_injury_occurred">
				<el-checkbox-group v-model="Form.intraoperative_organ_injury_occurred">
					<el-checkbox label=0 name="intraoperative_organ_injury_occurred">无</el-checkbox>
					<el-checkbox label=1 name="intraoperative_organ_injury_occurred">脾脏</el-checkbox>
					<el-checkbox label=2 name="intraoperative_organ_injury_occurred">肝</el-checkbox>
					<el-checkbox label=3 name="intraoperative_organ_injury_occurred">胰</el-checkbox>
					<el-checkbox label=4 name="intraoperative_organ_injury_occurred">横结肠</el-checkbox>
					<el-checkbox label=5 name="intraoperative_organ_injury_occurred">胆囊</el-checkbox>
					<el-checkbox label=6 name="intraoperative_organ_injury_occurred">小肠</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="术中并发症-处理" prop="intraoperative_organ_injury_occurred_handle">
				<el-input v-model="Form.intraoperative_organ_injury_occurred_handle" placeholder="术中并发症-出血处理" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术中并发症-出血部位" prop="intraoperative_complications_bleeding_site">
				<el-input v-model="Form.intraoperative_complications_bleeding_site" placeholder="术中并发症-出血部位" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="术中并发症-出血部位处理" prop="intraoperative_complications_bleeding_handle">
				<el-input v-model="Form.intraoperative_complications_bleeding_handle" placeholder="术中并发症-出血部位处理"
					:rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="手术时间（分）" prop="operation_minutes">
				<el-input v-model="Form.operation_minutes" placeholder="手术时间（分）" :rows="2" type="text"></el-input>
			</el-form-item>
			<el-form-item label="术中估计出血量ml" prop="intraoperative_blood_loss_was_estimated">
				<el-input v-model="Form.intraoperative_blood_loss_was_estimated" placeholder="术中估计出血量ml" :rows="2"
					type="text"></el-input>
			</el-form-item>
			<el-form-item label="围术期输血" prop="perioperative_blood_transfusion">
				<el-radio-group v-model="Form.perioperative_blood_transfusion">
					<el-radio label=0>未输血</el-radio>
					<el-radio label=1>术前</el-radio>
					<el-radio label=2>术中</el-radio>
					<el-radio label=3>术后</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期输血不良反应" prop="adverse_reactions_of_perioperative_blood_transfusion">
				<el-checkbox-group v-model="Form.adverse_reactions_of_perioperative_blood_transfusion">
					<el-checkbox label=0 name="adverse_reactions_of_perioperative_blood_transfusion">无</el-checkbox>
					<el-checkbox label=1 name="adverse_reactions_of_perioperative_blood_transfusion">发热</el-checkbox>
					<el-checkbox label=2 name="adverse_reactions_of_perioperative_blood_transfusion">过敏</el-checkbox>
					<el-checkbox label=3 name="adverse_reactions_of_perioperative_blood_transfusion">溶血</el-checkbox>
					<el-checkbox label=4 name="adverse_reactions_of_perioperative_blood_transfusion">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="围术期输血单位" prop="perioperative_transfusion_unit">
				<el-input v-model="Form.perioperative_transfusion_unit" placeholder="围术期输血单位" :rows="2" type="text">
				</el-input>
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
				<el-input v-model="Form.lymph_nodes_were_enlarged_in_16" placeholder="腹膜后、肠系膜根部、16组淋巴结肿大" :rows="2"
					type="textarea"></el-input>
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
				<el-input v-model="Form.greatest_tumor_diameter" placeholder="肿瘤最大径（如果为双病灶肿瘤描述主体病灶）(cm)" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="近切缘距肿瘤距离cm" prop="distance_between_the_proximal_margin_and_the_tumor">
				<el-input v-model="Form.distance_between_the_proximal_margin_and_the_tumor" placeholder="近切缘距肿瘤距离cm"
					:rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="远切缘距肿瘤距离cm" prop="distance_of_distal_margin_to_tumor">
				<el-input v-model="Form.distance_of_distal_margin_to_tumor" placeholder="远切缘距肿瘤距离cm" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="冰冻切缘病检" prop="detection_of_frozen_cutting_edge_disease">
				<el-input v-model="Form.detection_of_frozen_cutting_edge_disease" placeholder="冰冻切缘病检" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="肿瘤级别（gist-风险级别）" prop="level_of_tumor">
				<el-radio-group v-model="Form.level_of_tumor">
					<el-radio label=1>低风险</el-radio>
					<el-radio label=2>高风险</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="GIST TNM分期" prop="gist_tnm_aging">
				<el-input v-model="Form.gist_tnm_aging" placeholder="GIST TNM分期" :rows="2" type="textarea"></el-input>
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
			<el-form-item label="HER2" prop="her2">
				<el-radio-group v-model="Form.her2">
					<el-radio label=0>0</el-radio>
					<el-radio label=1>1+</el-radio>
					<el-radio label=2>2+</el-radio>
					<el-radio label=3>3+</el-radio>
					<el-radio label=4>4+</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="分期说明（术前MDCT，术中特殊发现，术后病理特殊信息）" prop="stage_show">
				<el-input v-model="Form.stage_show" placeholder="分期说明（术前MDCT，术中特殊发现，术后病理特殊信息）" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="病理号（另自行保存病理报告副本pdf文档，以病理号命名）" prop="pathology_num">
				<el-input v-model="Form.pathology_num" placeholder="病理号（另自行保存病理报告副本pdf文档，以病理号命名）" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期营养支持(包括具体方案，持续时间，不良反应)" prop="perioperative_nutritional_support">
				<el-input v-model="Form.perioperative_nutritional_support" placeholder="围术期营养支持(包括具体方案，持续时间，不良反应)"
					:rows="2" type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期抗生素" prop="perioperative_antibiotics">
				<el-input v-model="Form.perioperative_antibiotics" placeholder="围术期抗生素" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="术后预防抗生素" prop="postoperative_prophylactic_antibiotic">
				<el-radio-group v-model="Form.postoperative_prophylactic_antibiotic">
					<el-radio label=1>常规用法</el-radio>
					<el-radio label=2>短程用法</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期抑酸剂" prop="perioperative_acid_suppressor">
				<el-input v-model="Form.perioperative_acid_suppressor" placeholder="围术期抑酸剂" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="围术期黏膜保护剂" prop="perioperative_mucosal_protectant">
				<el-input v-model="Form.perioperative_mucosal_protectant" placeholder="围术期黏膜保护剂" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="围术期止血药" prop="perioperative_hemostatic_agent">
				<el-input v-model="Form.perioperative_hemostatic_agent" placeholder="围术期止血药" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="围术期生长抑素" prop="perioperative_somatostatin">
				<el-radio-group v-model="Form.perioperative_somatostatin">
					<el-radio label=0>无</el-radio>
					<el-radio label=1>有</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="围术期镇痛药" prop="perioperative_analgesics">
				<el-input v-model="Form.perioperative_analgesics" placeholder="围术期镇痛药" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="围术期重症监护" prop="perioperative_intensive_care">
				<el-input v-model="Form.perioperative_intensive_care" placeholder="围术期重症监护" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="围术期其他特殊处理" prop="other_special_treatments_during_perioperative_period">
				<el-input v-model="Form.other_special_treatments_during_perioperative_period" placeholder="围术期其他特殊处理"
					:rows="2" type="textarea"></el-input>
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
				<el-date-picker v-model="Form.extraction_date_of_gastric_tube_time" type="datetime"
					:default-value="new Date()" placeholder="请输入胃管拔除日(POD)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="每日平均胃液量(ml)" prop="average_daily_gastric_fluid_volume">
				<el-input v-model="Form.average_daily_gastric_fluid_volume" placeholder="每日平均胃液量(ml)" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="再次安置胃管原因：具体描述" prop="cause_of_gastric_tube_replacement">
				<el-input v-model="Form.cause_of_gastric_tube_replacement" placeholder="再次安置胃管原因：具体描述" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="尿管拔除时间(POH)" prop="catheter_removal_time">
				<el-date-picker v-model="Form.catheter_removal_time" type="datetime" :default-value="new Date()"
					placeholder="请输入尿管拔除时间(POH)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="腹腔引流管拔除日(POD)" prop="abdominal_drainage_tube_removal_date_time">
				<el-date-picker v-model="Form.abdominal_drainage_tube_removal_date_time" type="datetime"
					:default-value="new Date()" placeholder="请输入腹腔引流管拔除日(POD)">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="每日平均腹腔引流液量(ml)" prop="average_daily_volume_of_abdominal_drainage_fluid">
				<el-input v-model="Form.average_daily_volume_of_abdominal_drainage_fluid" placeholder="每日平均腹腔引流液量(ml)"
					:rows="2" type="textarea"></el-input>
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
				<el-input v-model="Form.postoperative_temperature_greater_than_38_days" placeholder="术后体温>38℃天数"
					:rows="2" type="textarea"></el-input>
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
				<el-input v-model="Form.management_of_perioperative_complications" placeholder="围术期手术并发症处理方式" :rows="2"
					type="textarea"></el-input>
			</el-form-item>
			<el-form-item label="非手术并发症" prop="nonoperative_complication">
				<el-input v-model="Form.nonoperative_complication" placeholder="非手术并发症" :rows="2" type="textarea">
				</el-input>
			</el-form-item>
			<el-form-item label="围术期非手术并发症处理方式" prop="perioperative_management_of_nonoperative_complications">
				<el-input v-model="Form.perioperative_management_of_nonoperative_complications"
					placeholder="围术期非手术并发症处理方式" :rows="2" type="textarea"></el-input>
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
					preoperative_chemotherapy: '0',
					preoperative_chemotherapy_laparoscopic_exploration: '0',
					laparoscopic_exploration_time: '',
					laparoscopic_exploration_result: '0',
					preoperative_chemotherapy_scheme: '',
					preoperative_chemotherapy_period: '',
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
					nrs2002_score: '0',
					nutrition_support_therapy: '0',
					scheme: '0',
					days: '',
					asa_grade: '',
					main_symptoms: ['0'],
					main_signs: ['0'],
					laparoscopic_operative_record: '',
					abdominal_surgery: '',
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
					preoperative_complications_check_exception: '',
					preoperative_complications_0: ['0'],
					preoperative_complications: ['0'],
					preoperative_chest_ct: '0',
					laparoscopic_fat_volumne: '',
					napes_fat_volumne: '',
					rbc: '',
					hemoglobin: '',
					gpt: '',
					got: '',
					tbil: '',
					tp: '',
					alb: '',
					palb: '',
					glu: '',
					ua: '',
					crea: '',
					d_dimer: '',
					blood_type: '',
					preoperative_afp: '',
					preoperative_cea: '',
					preoperative_ca19_9: '',
					preoperative_ca125: '',
					preoperative_ca15_3: '',
					preoperative_ca72_4: '',
					stool_ob: '',
					postoperative_afp: '',
					postoperative_cea: '',
					postoperative_ca19_9: '',
					postoperative_ca72_4: '',
					postoperative_ca125: '',
					postoperative_ca15_3: '',
					postoperative_her2: '',
					postoperative_rbc: '',
					postoperative_hemoglobin: '',
					postoperative_gpt: '',
					postoperative_got: '',
					postoperative_tbil: '',
					postoperative_tp: '',
					postoperative_alb: '',
					postoperative_glu: '',
					postoperative_ua: '',
					postoperative_crea: '',
					postoperative_d_d2: '',
					surgeon: '',
					location: '0',
					road: '0',
					laparoscopic_exploration_laparoscopy: '',
					removal_way: '0',
					consistent_with_nail: '',
					rebuild: '0',
					coated_complete: '0',
					intraoperative_organ_injury_occurred: ['0'],
					intraoperative_organ_injury_occurred_handle: '',
					intraoperative_complications_bleeding_site: '',
					intraoperative_complications_bleeding_handle: '',
					operation_minutes: '',
					intraoperative_blood_loss_was_estimated: '',
					perioperative_blood_transfusion: '0',
					adverse_reactions_of_perioperative_blood_transfusion: ['0'],
					perioperative_transfusion_unit: '',
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
					distance_between_the_proximal_margin_and_the_tumor: '',
					distance_of_distal_margin_to_tumor: '',
					detection_of_frozen_cutting_edge_disease: '',
					level_of_tumor: '0',
					gist_tnm_aging: '',
					resect_the_inspection_margin_again: '0',
					greater_omentum_margin_was_examined: '0',
					examination_of_lesser_omentum_margin: '0',
					her2: '0',
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
					axios.get(`/api/back/StromalTumors/${id}`).then(res => {
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
							preoperative_chemotherapy_laparoscopic_exploration: String(res.data
								.preoperative_chemotherapy_laparoscopic_exploration),
							laparoscopic_exploration_time: res.data.laparoscopic_exploration_time ==
								'1970-01-01 08:00:00' ? '' : res.data.laparoscopic_exploration_time,
							laparoscopic_exploration_result: String(res.data
								.laparoscopic_exploration_result),
							preoperative_chemotherapy_scheme: res.data
								.preoperative_chemotherapy_scheme,
							preoperative_chemotherapy_period: res.data
								.preoperative_chemotherapy_period,
							chemotherapy_operative: String(res.data.chemotherapy_operative),
							chemotherapy_adverse_reactions: res.data.chemotherapy_adverse_reactions,
							accept_chemotherapy_clinic_evaluate: String(res.data
								.accept_chemotherapy_clinic_evaluate),
							operative_evaluate_effect: res.data.operative_evaluate_effect,
							admission_time: res.data.admission_time == '1970-01-01 08:00:00' ? '' : res
								.data.admission_time,
							operative_time: res.data.operative_time == '1970-01-01 08:00:00' ? '' : res
								.data.operative_time,
							discharge_time: res.data.discharge_time == '1970-01-01 08:00:00' ? '' : res
								.data.discharge_time,
							total_hospital_days: res.data.total_hospital_days,
							postoperation_hospital_days: res.data.postoperation_hospital_days,
							ecog_score: res.data.ecog_score,
							nrs2002_score: String(res.data.nrs2002_score),
							nutrition_support_therapy: String(res.data.nutrition_support_therapy),
							scheme: String(res.data.scheme),
							days: res.data.days,
							asa_grade: res.data.asa_grade,
							main_symptoms: res.data.main_symptoms,
							main_signs: res.data.main_signs,
							laparoscopic_operative_record: res.data.laparoscopic_operative_record,
							abdominal_surgery: res.data.abdominal_surgery,
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
							preoperative_complications_check_exception: res.data
								.preoperative_complications_check_exception,
							preoperative_complications_0: res.data.preoperative_complications_0,
							preoperative_complications: res.data.preoperative_complications,
							preoperative_chest_ct: String(res.data.preoperative_chest_ct),
							laparoscopic_fat_volumne: res.data.laparoscopic_fat_volumne,
							napes_fat_volumne: res.data.napes_fat_volumne,
							rbc: res.data.rbc,
							hemoglobin: res.data.hemoglobin,
							gpt: res.data.gpt,
							got: res.data.got,
							tbil: res.data.tbil,
							tp: res.data.tp,
							alb: res.data.alb,
							palb: res.data.palb,
							glu: res.data.glu,
							ua: res.data.ua,
							crea: res.data.crea,
							d_dimer: res.data.d_dimer,
							blood_type: res.data.blood_type,
							preoperative_afp: res.data.preoperative_afp,
							preoperative_cea: res.data.preoperative_cea,
							preoperative_ca19_9: res.data.preoperative_ca19_9,
							preoperative_ca125: res.data.preoperative_ca125,
							preoperative_ca15_3: res.data.preoperative_ca15_3,
							preoperative_ca72_4: res.data.preoperative_ca72_4,
							stool_ob: res.data.stool_ob,
							postoperative_afp: res.data.postoperative_afp,
							postoperative_cea: res.data.postoperative_cea,
							postoperative_ca19_9: res.data.postoperative_ca19_9,
							postoperative_ca72_4: res.data.postoperative_ca72_4,
							postoperative_ca125: res.data.postoperative_ca125,
							postoperative_ca15_3: res.data.postoperative_ca15_3,
							postoperative_her2: res.data.postoperative_her2,
							postoperative_rbc: res.data.postoperative_rbc,
							postoperative_hemoglobin: res.data.postoperative_hemoglobin,
							postoperative_gpt: res.data.postoperative_gpt,
							postoperative_got: res.data.postoperative_got,
							postoperative_tbil: res.data.postoperative_tbil,
							postoperative_tp: res.data.postoperative_tp,
							postoperative_alb: res.data.postoperative_alb,
							postoperative_glu: res.data.postoperative_glu,
							postoperative_ua: res.data.postoperative_ua,
							postoperative_crea: res.data.postoperative_crea,
							postoperative_d_d2: res.data.postoperative_d_d2,
							surgeon: res.data.surgeon,
							location: String(res.data.location),
							road: String(res.data.road),
							laparoscopic_exploration_laparoscopy: res.data
								.laparoscopic_exploration_laparoscopy,
							removal_way: String(res.data.removal_way),
							consistent_with_nail: res.data.consistent_with_nail,
							rebuild: String(res.data.rebuild),
							coated_complete: String(res.data.coated_complete),
							intraoperative_organ_injury_occurred: res.data
								.intraoperative_organ_injury_occurred,
							intraoperative_organ_injury_occurred_handle: res.data
								.intraoperative_organ_injury_occurred_handle,
							intraoperative_complications_bleeding_site: res.data
								.intraoperative_complications_bleeding_site,
							intraoperative_complications_bleeding_handle: res.data
								.intraoperative_complications_bleeding_handle,
							operation_minutes: res.data.operation_minutes,
							intraoperative_blood_loss_was_estimated: res.data
								.intraoperative_blood_loss_was_estimated,
							perioperative_blood_transfusion: String(res.data
								.perioperative_blood_transfusion),
							adverse_reactions_of_perioperative_blood_transfusion: res.data
								.adverse_reactions_of_perioperative_blood_transfusion,
							perioperative_transfusion_unit: res.data.perioperative_transfusion_unit,
							ascites: String(res.data.ascites),
							cancer_cell: String(res.data.cancer_cell),
							peritoneal_metastasis: String(res.data.peritoneal_metastasis),
							hepatic_metastases: res.data.hepatic_metastases,
							single_hepatic_metastases: String(res.data.single_hepatic_metastases),
							more_hepatic_metastases: String(res.data.more_hepatic_metastases),
							lymph_nodes_were_enlarged_in_16: res.data.lymph_nodes_were_enlarged_in_16,
							number_of_tumor_lesions: String(res.data.number_of_tumor_lesions),
							longitudinal_position_of_a_single_lesion: String(res.data
								.longitudinal_position_of_a_single_lesion),
							aeg: String(res.data.aeg),
							peridiameter_of_the_tumor: String(res.data.peridiameter_of_the_tumor),
							greatest_tumor_diameter: res.data.greatest_tumor_diameter,
							distance_between_the_proximal_margin_and_the_tumor: res.data
								.distance_between_the_proximal_margin_and_the_tumor,
							distance_of_distal_margin_to_tumor: res.data
								.distance_of_distal_margin_to_tumor,
							detection_of_frozen_cutting_edge_disease: String(res.data
								.detection_of_frozen_cutting_edge_disease),
							level_of_tumor: String(res.data.level_of_tumor),
							gist_tnm_aging: res.data.gist_tnm_aging,
							resect_the_inspection_margin_again: String(res.data
								.resect_the_inspection_margin_again),
							greater_omentum_margin_was_examined: String(res.data
								.greater_omentum_margin_was_examined),
							examination_of_lesser_omentum_margin: String(res.data
								.examination_of_lesser_omentum_margin),
							her2: String(res.data.her2),
							stage_show: res.data.stage_show,
							pathology_num: res.data.pathology_num,
							perioperative_nutritional_support: res.data
								.perioperative_nutritional_support,
							perioperative_antibiotics: res.data.perioperative_antibiotics,
							postoperative_prophylactic_antibiotic: String(res.data
								.postoperative_prophylactic_antibiotic),
							perioperative_acid_suppressor: res.data.perioperative_acid_suppressor,
							perioperative_mucosal_protectant: res.data
								.perioperative_mucosal_protectant,
							perioperative_hemostatic_agent: res.data.perioperative_hemostatic_agent,
							perioperative_somatostatin: String(res.data.perioperative_somatostatin),
							perioperative_analgesics: res.data.perioperative_analgesics,
							perioperative_intensive_care: res.data.perioperative_intensive_care,
							other_special_treatments_during_perioperative_period: res.data
								.other_special_treatments_during_perioperative_period,
							whether_to_install_a_gastric_tube: String(res.data
								.whether_to_install_a_gastric_tube),
							set_time: res.data.set_time == '1970-01-01 08:00:00' ? '' : res.data
								.set_time,
							extraction_date_of_gastric_tube_time: res.data
								.extraction_date_of_gastric_tube_time == '1970-01-01 08:00:00' ? '' :
								extraction_date_of_gastric_tube_time,
							average_daily_gastric_fluid_volume: res.data
								.average_daily_gastric_fluid_volume,
							cause_of_gastric_tube_replacement: res.data
								.cause_of_gastric_tube_replacement,
							catheter_removal_time: res.data.catheter_removal_time ==
								'1970-01-01 08:00:00' ? '' : res.data.catheter_removal_time,
							abdominal_drainage_tube_removal_date_time: res.data
								.abdominal_drainage_tube_removal_date_time == '1970-01-01 08:00:00' ?
								'' : res.data.abdominal_drainage_tube_removal_date_time,
							average_daily_volume_of_abdominal_drainage_fluid: res.data
								.average_daily_volume_of_abdominal_drainage_fluid,
							anal_exhaust_day_time: res.data.anal_exhaust_day_time ==
								'1970-01-01 08:00:00' ? '' : res.data.anal_exhaust_day_time,
							start_an_out_of_bed_day_time: res.data.start_an_out_of_bed_day_time ==
								'1970-01-01 08:00:00' ? '' : res.data.start_an_out_of_bed_day_time,
							start_a_fluid_day_time: res.data.start_a_fluid_day_time ==
								'1970-01-01 08:00:00' ? '' : res.data.start_a_fluid_day_time,
							highest_temperature: res.data.highest_temperature,
							postoperative_temperature_greater_than_38_days: res.data
								.postoperative_temperature_greater_than_38_days,
							perioperative_complications: res.data.perioperative_complications,
							management_of_perioperative_complications: res.data
								.management_of_perioperative_complications,
							nonoperative_complication: res.data.nonoperative_complication,
							perioperative_management_of_nonoperative_complications: res.data
								.perioperative_management_of_nonoperative_complications,
							outcome: res.data.outcome,
							inputting_medical_records: res.data.inputting_medical_records,
							is_the_record_entry_complete: res.data.is_the_record_entry_complete,
							medical_records_information_checker: res.data
								.medical_records_information_checker,
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
							preoperative_chemotherapy: state.Form.preoperative_chemotherapy,
							preoperative_chemotherapy_laparoscopic_exploration: state.Form
								.preoperative_chemotherapy_laparoscopic_exploration,
							laparoscopic_exploration_time: state.Form.laparoscopic_exploration_time,
							laparoscopic_exploration_result: state.Form.laparoscopic_exploration_result,
							preoperative_chemotherapy_scheme: state.Form.preoperative_chemotherapy_scheme,
							preoperative_chemotherapy_period: state.Form.preoperative_chemotherapy_period,
							chemotherapy_operative: state.Form.chemotherapy_operative,
							chemotherapy_adverse_reactions: state.Form.chemotherapy_adverse_reactions,
							accept_chemotherapy_clinic_evaluate: state.Form
								.accept_chemotherapy_clinic_evaluate,
							operative_evaluate_effect: state.Form.operative_evaluate_effect,
							admission_time: state.Form.admission_time,
							operative_time: state.Form.operative_time,
							discharge_time: state.Form.discharge_time,
							total_hospital_days: state.Form.total_hospital_days,
							postoperation_hospital_days: state.Form.postoperation_hospital_days,
							ecog_score: state.Form.ecog_score,
							nrs2002_score: state.Form.nrs2002_score,
							nutrition_support_therapy: state.Form.nutrition_support_therapy,
							scheme: state.Form.scheme,
							days: state.Form.days,
							asa_grade: state.Form.asa_grade,
							main_symptoms: state.Form.main_symptoms,
							main_signs: state.Form.main_signs,
							laparoscopic_operative_record: state.Form.laparoscopic_operative_record,
							abdominal_surgery: state.Form.abdominal_surgery,
							family_record: state.Form.family_record,
							smoke: state.Form.smoke,
							smoke_year: state.Form.smoke_year,
							average_smoke_day: state.Form.average_smoke_day,
							drink: state.Form.drink,
							drink_year: state.Form.drink_year,
							average_drink_day: state.Form.average_drink_day,
							height: state.Form.height,
							weight: state.Form.weight,
							bmi: state.Form.bmi,
							hp: state.Form.hp,
							ecg: state.Form.ecg,
							preoperative_lung_function: state.Form.preoperative_lung_function,
							preoperative_complications_check_exception: state.Form
								.preoperative_complications_check_exception,
							preoperative_complications_0: state.Form.preoperative_complications_0,
							preoperative_complications: state.Form.preoperative_complications,
							preoperative_chest_ct: state.Form.preoperative_chest_ct,
							laparoscopic_fat_volumne: state.Form.laparoscopic_fat_volumne,
							napes_fat_volumne: state.Form.napes_fat_volumne,
							rbc: state.Form.rbc,
							hemoglobin: state.Form.hemoglobin,
							gpt: state.Form.gpt,
							got: state.Form.got,
							tbil: state.Form.tbil,
							tp: state.Form.tp,
							alb: state.Form.alb,
							palb: state.Form.palb,
							glu: state.Form.glu,
							ua: state.Form.ua,
							crea: state.Form.crea,
							d_dimer: state.Form.d_dimer,
							blood_type: state.Form.blood_type,
							preoperative_afp: state.Form.preoperative_afp,
							preoperative_cea: state.Form.preoperative_cea,
							preoperative_ca19_9: state.Form.preoperative_ca19_9,
							preoperative_ca125: state.Form.preoperative_ca125,
							preoperative_ca15_3: state.Form.preoperative_ca15_3,
							preoperative_ca72_4: state.Form.preoperative_ca72_4,
							stool_ob: state.Form.stool_ob,
							postoperative_afp: state.Form.postoperative_afp,
							postoperative_cea: state.Form.postoperative_cea,
							postoperative_ca19_9: state.Form.postoperative_ca19_9,
							postoperative_ca72_4: state.Form.postoperative_ca72_4,
							postoperative_ca125: state.Form.postoperative_ca125,
							postoperative_ca15_3: state.Form.postoperative_ca15_3,
							postoperative_her2: state.Form.postoperative_her2,
							postoperative_rbc: state.Form.postoperative_rbc,
							postoperative_hemoglobin: state.Form.postoperative_hemoglobin,
							postoperative_gpt: state.Form.postoperative_gpt,
							postoperative_got: state.Form.postoperative_got,
							postoperative_tbil: state.Form.postoperative_tbil,
							postoperative_tp: state.Form.postoperative_tp,
							postoperative_alb: state.Form.postoperative_alb,
							postoperative_glu: state.Form.postoperative_glu,
							postoperative_ua: state.Form.postoperative_ua,
							postoperative_crea: state.Form.postoperative_crea,
							postoperative_d_d2: state.Form.postoperative_d_d2,
							surgeon: state.Form.surgeon,
							location: state.Form.location,
							road: state.Form.road,
							laparoscopic_exploration_laparoscopy: state.Form
								.laparoscopic_exploration_laparoscopy,
							removal_way: state.Form.removal_way,
							consistent_with_nail: state.Form.consistent_with_nail,
							rebuild: state.Form.rebuild,
							coated_complete: state.Form.coated_complete,
							intraoperative_organ_injury_occurred: state.Form
								.intraoperative_organ_injury_occurred,
							intraoperative_organ_injury_occurred_handle: state.Form
								.intraoperative_organ_injury_occurred_handle,
							intraoperative_complications_bleeding_site: state.Form
								.intraoperative_complications_bleeding_site,
							intraoperative_complications_bleeding_handle: state.Form
								.intraoperative_complications_bleeding_handle,
							operation_minutes: state.Form.operation_minutes,
							intraoperative_blood_loss_was_estimated: state.Form
								.intraoperative_blood_loss_was_estimated,
							perioperative_blood_transfusion: state.Form.perioperative_blood_transfusion,
							adverse_reactions_of_perioperative_blood_transfusion: state.Form
								.adverse_reactions_of_perioperative_blood_transfusion,
							perioperative_transfusion_unit: state.Form.perioperative_transfusion_unit,
							ascites: state.Form.ascites,
							cancer_cell: state.Form.cancer_cell,
							peritoneal_metastasis: state.Form.peritoneal_metastasis,
							hepatic_metastases: state.Form.hepatic_metastases,
							single_hepatic_metastases: state.Form.single_hepatic_metastases,
							more_hepatic_metastases: state.Form.more_hepatic_metastases,
							lymph_nodes_were_enlarged_in_16: state.Form.lymph_nodes_were_enlarged_in_16,
							number_of_tumor_lesions: state.Form.number_of_tumor_lesions,
							longitudinal_position_of_a_single_lesion: state.Form
								.longitudinal_position_of_a_single_lesion,
							aeg: state.Form.aeg,
							peridiameter_of_the_tumor: state.Form.peridiameter_of_the_tumor,
							greatest_tumor_diameter: state.Form.greatest_tumor_diameter,
							distance_between_the_proximal_margin_and_the_tumor: state.Form
								.distance_between_the_proximal_margin_and_the_tumor,
							distance_of_distal_margin_to_tumor: state.Form
								.distance_of_distal_margin_to_tumor,
							detection_of_frozen_cutting_edge_disease: state.Form
								.detection_of_frozen_cutting_edge_disease,
							level_of_tumor: state.Form.level_of_tumor,
							gist_tnm_aging: state.Form.gist_tnm_aging,
							resect_the_inspection_margin_again: state.Form
								.resect_the_inspection_margin_again,
							greater_omentum_margin_was_examined: state.Form
								.greater_omentum_margin_was_examined,
							examination_of_lesser_omentum_margin: state.Form
								.examination_of_lesser_omentum_margin,
							her2: state.Form.her2,
							stage_show: state.Form.stage_show,
							pathology_num: state.Form.pathology_num,
							perioperative_nutritional_support: state.Form
								.perioperative_nutritional_support,
							perioperative_antibiotics: state.Form.perioperative_antibiotics,
							postoperative_prophylactic_antibiotic: state.Form
								.postoperative_prophylactic_antibiotic,
							perioperative_acid_suppressor: state.Form.perioperative_acid_suppressor,
							perioperative_mucosal_protectant: state.Form.perioperative_mucosal_protectant,
							perioperative_hemostatic_agent: state.Form.perioperative_hemostatic_agent,
							perioperative_somatostatin: state.Form.perioperative_somatostatin,
							perioperative_analgesics: state.Form.perioperative_analgesics,
							perioperative_intensive_care: state.Form.perioperative_intensive_care,
							other_special_treatments_during_perioperative_period: state.Form
								.other_special_treatments_during_perioperative_period,
							whether_to_install_a_gastric_tube: state.Form
								.whether_to_install_a_gastric_tube,
							set_time: state.Form.set_time,
							extraction_date_of_gastric_tube_time: state.Form
								.extraction_date_of_gastric_tube_time,
							average_daily_gastric_fluid_volume: state.Form
								.average_daily_gastric_fluid_volume,
							cause_of_gastric_tube_replacement: state.Form
								.cause_of_gastric_tube_replacement,
							catheter_removal_time: state.Form.catheter_removal_time,
							abdominal_drainage_tube_removal_date_time: state.Form
								.abdominal_drainage_tube_removal_date_time,
							average_daily_volume_of_abdominal_drainage_fluid: state.Form
								.average_daily_volume_of_abdominal_drainage_fluid,
							anal_exhaust_day_time: state.Form.anal_exhaust_day_time,
							start_an_out_of_bed_day_time: state.Form.start_an_out_of_bed_day_time,
							start_a_fluid_day_time: state.Form.start_a_fluid_day_time,
							highest_temperature: state.Form.highest_temperature,
							postoperative_temperature_greater_than_38_days: state.Form
								.postoperative_temperature_greater_than_38_days,
							perioperative_complications: state.Form.perioperative_complications,
							management_of_perioperative_complications: state.Form
								.management_of_perioperative_complications,
							nonoperative_complication: state.Form.nonoperative_complication,
							perioperative_management_of_nonoperative_complications: state.Form
								.perioperative_management_of_nonoperative_complications,
							outcome: state.Form.outcome,
							inputting_medical_records: state.Form.inputting_medical_records,
							is_the_record_entry_complete: state.Form.is_the_record_entry_complete,
							medical_records_information_checker: state.Form
								.medical_records_information_checker,
						}

						let url = '/api/back/StromalTumors'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/back/StromalTumors/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/stromal-tumor-index',
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
