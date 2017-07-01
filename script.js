var color_tr, color_td;

document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
  
  if (i == 1){
    color_tr = "#ba59a0";
  } 
  else {
    color_td = "#e5598c";  
  }
  
  document.write("<tr style='height:30px;background-color:" + color_tr + "'>");
  for(var j = 1; j < 10; j++) {
     document.write("<td style='width:30px'>" + i*j + "</td>")
  }
  document.write("</tr>");
}
document.write("</table>");