var names=new Array();
names[0] = "Yaakov";
names[1] = "Jen";
names[2] = "John";
names[3] = "paul";
names[4] = "jin";
names[5] = "Frank";

for(var i =0;i<names.length;i++){
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye: "+names[i]);
    }
    else{
        console.log("Hello: "+names[i]);
    }
}