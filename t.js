let name = prompt('Введите название акции'); 
document.location.href = "https://www.macrotrends.net/assets/php/stock_price_history.php?t="+ name; 
let data = prompt('Введите время дату(в формате yyyy-mm-dd)'); 

var d = dataDaily.find(item => item.d == data); 
if(d!==undefined)
alert("Цена акций " + name + " в день " + data + " = " + d.c); 
else alert("Акций в этот день нет!")