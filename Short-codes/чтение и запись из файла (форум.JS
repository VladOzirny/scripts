
/*
Опять таки повторюсь, постоянно нахожусь в поисках правильного применения этого криворукого плагина.
Кто из Вас часто и долго пользовался его замечательными функциями, такими как SAVEAS например мог заменить, что функция имеет
бесконечные глюки и с каждой новой версией FF перестает что-нибудь работать.
А функции извлечения текста из файла....эм, если вам нужно 30-40 потоков запустит и фаил поколбасить....в общем эти функции не для
брутальных экстремалов.
Порыл гугл. яндекс, нашел 2 кода, очень интересных думаю многим будет полезно, если припечет
Сохранение файла, и чтение данных из файла. нормальные скриптовые команды, ловите, повторюсь, автор не я, но очень ему благодарен.

СОХРАНЕНИЕ файла 
Код:
*/

function fromUnicode(charset, data){
    var uniConv=Components.classes["@mozilla.org/intl/scriptableunicodeconverter"];
    uniConv=uniConv.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
    uniConv.charset = charset;
    data = uniConv.ConvertFromUnicode(data);
    return data;
};
var newFile = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
newFile.initWithPath("D:\\");
newFile.appendRelativePath('file.txt');
if(!newFile.exists()){
    alert('Файл еще не существует, но будет создан '); 
    newFile.create(0x00, 0666);
}else{alert('Файл уже существует и будет перезаписан');}
var stream;
stream = Components.classes['@mozilla.org/network/file-output-stream;1'];
stream = stream.createInstance(Components.interfaces.nsIFileOutputStream);
stream.init(newFile,2,0,0);
var str='Это надо сохранить';
str=fromUnicode("windows-1251",str);
stream.write(str, str.length);
stream.close();
alert('+');


// ЧТЕНИЕ из файла  
function toUnicode(charset, data){
    var uniConv = Components.classes['@mozilla.org/intl/scriptableunicodeconverter'];
    uniConv = uniConv.createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
    uniConv.charset = charset;
    data = uniConv.ConvertToUnicode(data);
    return data;
 };
var conv = Components.classes["@mozilla.org/network/protocol;1?name=file"];
conv = conv.createInstance(Components.interfaces.nsIFileProtocolHandler);
var url ="file:\\\D:\\file.txt";
var file = conv.getFileFromURLSpec(url);
var file_size=file.fileSize; 
var stream;
stream = Components.classes["@mozilla.org/network/file-input-stream;1"];
stream = stream.createInstance(Components.interfaces.nsIFileInputStream);
stream.init(file, 1, 0,0);
var s2 = Components.classes["@mozilla.org/scriptableinputstream;1"];
s2 = s2.createInstance(Components.interfaces.nsIScriptableInputStream);
s2.init(stream);
var content = null;
content = s2.read(file_size);
stream.close();
str=toUnicode("windows-1251",content.toString());
alert(str); 
