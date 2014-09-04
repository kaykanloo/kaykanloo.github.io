var ToC =
	"<nav role='navigation' class='TOC'>" +
	"<h1>Table Of Contents:</h1>";
	
var newLine, el, secNum, title, link;
secNum=0;

$( "#MarkDownDes :header" ).each(function() {

	el = $(this);
	secNum=secNum+1;
	$(this).attr('id','sec'+secNum);
	title = "&bull; " + el.text();
	link = "#" + el.attr("id");
  
	switch(el.prop("tagName")){
	case 'H1':
		newLine = "<a class='TOCH1' href='" + link + "'>" + title + "</a>";
		ToC += newLine;
		break;
	case 'H2':
		newLine = "<a class='TOCH2' href='" + link + "'>" + title + "</a>";
		ToC += newLine;
		break;
	case 'H3':
		newLine = "<a class='TOCH3' href='" + link + "'>" + title + "</a>";
		ToC += newLine;
		break;	
  }
});
ToC +="</nav>";
$("#MarkDownDes").prepend(ToC);