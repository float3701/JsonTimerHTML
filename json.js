rs/*raw_schedule*/ = { 
	"end_time" : 68400, 
	"default" : { "ud":"放学", "cls":"放学啦", "bgc":"b" },
	"schedule" : [
		{ "start":[8,0,0], "ud":"开学", "cls":"课前", "bgc":"b" }, 
		{ "start":[8,40,0], "ud":"下课", "cls":"_0", "bgc":"c" }, 
		{ "start":[8,50,0], "ud":"_1", "cls":"下课", "bgc":"b"},
		{ "start":[9,30,0], "ud":"下课", "cls":"_1", "bgc":"c"},
		{ "start":[9,40,0], "ud":"_2", "cls":"下课", "bgc":"b"},
		{ "start":[10,20,0], "ud":"下课", "cls":"_2", "bgc":"c"},
		{ "start":[10,30,0], "ud":"_3", "cls":"下课", "bgc":"b"},
		{ "start":[11,10,0], "ud":"下课", "cls":"_3", "bgc":"c"},
		{ "start":[11,20,0], "ud":"_4", "cls":"下课", "bgc":"b"},
		{ "start":[12,00,0], "ud":"下课", "cls":"_4", "bgc":"c"},
		
		{ "start":[13,55,0], "ud":"下课", "cls":"午间", "bgc":"g"},
		{ "start":[14,0,0], "ud":"上课", "cls":"下课", "bgc":"b"},
		{ "start":[14,10,0], "ud":"_5", "cls":"课前十分钟", "bgc":"g"},
		{ "start":[14,50,0], "ud":"下课", "cls":"_5", "bgc":"c"},
		{ "start":[15,0,0], "ud":"_6", "cls":"下课", "bgc":"b"},
		{ "start":[15,40,0], "ud":"下课", "cls":"_6", "bgc":"c"},
		{ "start":[15,50,0], "ud":"_7", "cls":"下课", "bgc":"b"},
		{ "start":[16,30,0], "ud":"放学", "cls":"_7", "bgc":"c"}
	] 
};

lunch = 5;

var weeklyClass = {
	"default":['第一节','第二节','第三节','第四节','第五节','第六节','第七节','第八节'],
	1:['语文','物理','英语','数学','音乐' , '体育','地理','班会'],
	2:['语文','语文','数学','物理','历史' , '英语','体育','生物'],
	3:['语文','物理','数学','英语','英语' , '地理','习思','体育'],
	4:['英语','数学','心理','物理','体育' , '美术','语文','道法'],
	5:['数学','数学','语文','物理','英语' , '体育','生物','历史']
};

var rawDate = new Date();
var nowDay = rawDate.getDay();
var isDefault = true;
classList = []

if (weeklyClass[nowDay] == undefined) {
	classList = weeklyClass.default;
	isDefault = true;
} else {
	classList = weeklyClass[nowDay];
	isDefault = false;
}

schedule = rs;

for(var i=0;i<rs.schedule.length;i++){
	tc = rs.schedule[i].cls;
	if(tc.match(/_[0-9]+/g)!=null){
		schedule.schedule[i].cls=classList[Number(tc.match(/[0-9]+/g))]
	}
	
	ta = rs.schedule[i].ud
	if(ta.match(/_[0-9]+/g)!=null){
		schedule.schedule[i].ud=classList[Number(ta.match(/[0-9]+/g))]
		if(isDefault){
			schedule.schedule[i].ud="上课"
		}
	}
}
