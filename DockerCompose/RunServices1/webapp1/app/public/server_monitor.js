var host = window.location;
var appheader = document.getElementById("app-header");
appheader.innerText = `Welcome to Azure Container Instances! origin ${host.origin}`;
console.log(host);