var color_tr, color_td;

document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
  
  if (i == 1){
    color_tr = "green";
  } 
  else {
    color_tr = "yellow";  
  }
  
  document.write("<tr style='height:30px;background-color:" + color_tr + "'>");
  for(var j = 1; j < 10; j++) {
    
    if (j == 1 || i == 1){
    color_td = "green";
  } 
  else {
    color_td = "yellow";  
  }
    
     document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>")
  }
  document.write("</tr>");
}
document.write("</table>");