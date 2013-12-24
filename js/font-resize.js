window.onload = function(){
	textChanger.init(); 	
}

var textChanger = {
	cpanel : 'txt-size',
	element : 'wrapper',
	defaultFS : 1,
	init: function() {
		var cpel = document.getElementById(textChanger.cpanel);
		var el = document.getElementById(textChanger.element);
		if (cpel == null || el == null) {alert('The elements with the \"'+textChanger.cpanel+'\" and/or \"'+textChanger.element+'\" ID do not exist in HTML source.');} else {
		var u = document.createElement('ul');
		cpel.appendChild(u);
		u.innerHTML = 
		'<li id="decrease"><a href="#" title="Decrease font size">A</a></li>'+
		'<li id="reset"><a href="#" title="Default font size">A</a></li>'+
		'<li id="increase"><a href="#" title="Increase font size">A</a></li>'
		var sz = textChanger.getCookie();
		el.style.fontSize = sz ? sz + 'em' : textChanger.defaultFS + 'em';
		var incr = document.getElementById('increase');
		incr.onclick = function(){textChanger.changeSize(1); return false;};
		var decr = document.getElementById('decrease');
		decr.onclick = function(){textChanger.changeSize(-1); return false;};
		var reset= document.getElementById('reset');
		reset.onclick = function(){textChanger.changeSize(0); return false;};
		}
	} ,

	changeSize: function(val) {
		var el = document.getElementById(textChanger.element);
		var size = el.style.fontSize.substring(0,3);
		var fSize = parseFloat(size,10);
		if (val == 1) {
			fSize += 0.11;
			if (fSize > 2.0) fSize = 2.0;
		} 
		if (val == -1) {
			fSize -= 0.11;
			if (fSize < 0.5) fSize = 0.5;
		}		
		if (val == 0) {
			fSize = 1;
		}
		el.style.fontSize = fSize + 'em';
		textChanger.updateCookie(fSize);
		} ,
		
	updateCookie: function(vl) {
		var today = new Date();
		var exp = new Date(today.getTime() + (365*24*60*60*1000));
		document.cookie = 'textChangerL=size=' + vl + ';' +'expires=' + exp.toGMTString() + ';' +'path=/';
	} ,

	getCookie: function() { 
		var cname = 'textChangerL=size=';	
		var start = document.cookie.indexOf(cname);
		var len = start + cname.length;
		if ((!start) && (cname != document.cookie.substring(0,cname.length))) {return null;}
		if (start == -1) return null;
		var end = document.cookie.indexOf(";",len);
		if (end == -1) end = document.cookie.length;
		return unescape(document.cookie.substring(len, end));
	}
}