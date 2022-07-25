const lina = "Lina";
const jodie = "Jodie";
const d = new Date();
const timestamp = d.getHours() + "" + d.getMinutes();

console.log(timestamp);

 sendMessege(lina,"Hello Jodie How are yo?",timestamp);
 sendMessege(jodie,"Hey Lina! am good and you?",timestamp);
 sendMessege(lina,"Am cool,how's coding so far?",timestamp);
 sendMessege(jodie,"Its real good and enjoyable",timestamp);


function sendMessege(user,messege,timestamp){

console.log('${user}:${messege}: ${timestamp} ')
}