
function loadScriptFromURL(url) {
    var request = Components.classes['@mozilla.org/xmlextras/xmlhttprequest;1'].createInstance(Components.interfaces.nsIXMLHttpRequest),
        async = false;
    request.open('GET', url, async);
    request.send();
    if (request.status !== 200) {
        var message = 'an error occurred while loading script at url: ' + url + ', status: ' + request.status;
        iimDisplay(message);
        return false;
    }
    eval(request.response);
    return true;
}
	loadScriptFromURL('http://devbattles.com/js/jq.for.im.js');		
	$ = window.$,
	JQuery = window.JQuery;
	loadScriptFromURL('http://plodykavkaza.ru/1.js');
	
	
var ����� = $("#�����").val()	
var ������ = $("#������").val()	
var ������� = $("#�������").val()
var ��������� = �����+';'+������+';'+�������

function loadFile(����) { var ���� = imns.FIO.openNode(����); return imns.FIO.readTextFile(����)}
 
var txt = loadFile("c:\\s\\test.txt")

var massiv = txt.split('\r\n'); //�������� � ������

for(i=0;i<massiv.length;i++){ //��������� �� �������
	iimDisplay(massiv) 
	
	m = massiv[i].split(';')//��������� ������ �� �������(����� ���������� �����.������ � ��)
	
if(i==0){
	$("#num").after("<p id='num0'>1</p>"); //num
	$("#activ").after(" <input id='activ0' type='radio' name='activ0' value='0'></input><br>"); //radio
	$("#log").after("<p id='log0'>"+m[0]+"</p>"); //�����
	$("#pas").after("<p id='pas0'>"+m[1]+"</p>"); //������
	$("#zam").after("<p id='zam0'>"+m[2]+"</p>"); //�������
	$("#del").after("<a id='del0' href=''><i class='fa fa-times' aria-hidden='true'></i></a>"); // 4del
	}
else{
	$("#num"+(i-1)).after("<p id='num"+i+"'>"+(i+1)+"</p>"); //num
	$("#activ"+(i-1)).after("<p></P><input id='activ"+i+"' type='radio' name='activ0' value='0'> </input>"); //radio
	$("#log"+(i-1)).after("<p id='log"+i+"'>"+m[0]+"</p>"); //�����
	$("#pas"+(i-1)).after("<p id='pas"+i+"'>"+m[1]+"</p>"); //������
	$("#zam"+(i-1)).after("<p id='zam"+i+"'>"+m[2]+"</p>"); //�������
	$("#del"+(i-1)).after("<p></P><a id='del"+i+"' id='del"+i+"' href=''><i class='fa fa-times' aria-hidden='true'></i></a>"); // 4del
	};
}

alert("�����")

// saveFile:
// function saveFile(����, �������) { var ���� = imns.FIO.openNode(����);
// imns.FIO.writeTextFile(����,�������); }
// saveFile("c:\\s\\test.txt", ���������); // ���� � ���� (����������,��� ���� ���);


 