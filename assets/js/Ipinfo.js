function pretrziIPDB(keyword)
 {

const key = "b5728fd97cdc6b5ca519bd7aeb066ad48de1475b7df94d5e2d54f2f73484a11742545c259d204cf5";
 let api = `https://www.abuseipdb.com/check/${keyword}/json?key=${key}&days=1`;
fetch(api, { headers:"*"})
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });
}




function citaj() {
    var pom = document.getElementById("ioc-input").value;
    var cekiran = document.getElementById("drop-down-toggle-button").value;
    if (cekiran == 1 || cekiran == 2 ) {  //za ip4 ip6 i domain 1 2 3 redom
        //this.pretrziIPDB(pom);
        this.pretraziIPINFO(pom);  

}}

function pretraziIPINFO(keyword)
{
    
 let api = `https://ipinfo.io/${keyword}/json?token=06fd3125a2044e`;
fetch(api)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });}
