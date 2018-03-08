turn
toggleElement("loanValue", "off", "1111");
into
toggleElement("loanValue", "off");


Find: 
\"(on|off)\"(\,.*?)\)
Replace with
\"$1\"\)