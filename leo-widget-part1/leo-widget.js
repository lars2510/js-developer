/**
* Dynamic Widget
* Creates a little HTML input field to search english/german translation at leo.org
*
* @author:  lars
* @mail:    info@js-developer.de
* @date:    2011-09-12
**/

// DOM is ready
$(document).ready(function(){

  // the widget dom (HTML-Div element)
  var myWidget = $("#my-widget");
  
  // set widget css proberties
  myWidget.css({
    'width': '250px',
    'height': '30px',
    'background-color': '#ccc'
  });
  
  //input field
  var inputDOM = $('<input />', {
    'id': 'widget-input',
    'type': 'text',
    'size': '35',
    'value': 'Wort eingeben ...' 
  });

  // submit button
  var buttonDOM = $('<a />', {
    'id': 'widget-submit',
    'href': '#'
  });

  // button text and css properties
  buttonDOM.text("Los!");
  buttonDOM.css({
    'cursor': 'pointer'
  });
  
  // event listener
  buttonDOM.click(function(event) {
    event.preventDefault();
    var url = 'http://dict.leo.org/ende?search=' + inputDOM.val();
    var newWindow = window.open(url, "_self");			        		        
    newWindow.focus();
  });
  
  // append to widget
  myWidget.append(inputDOM);
  myWidget.append(buttonDOM);
});
