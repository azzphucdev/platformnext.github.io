document.addEventListener('DOMContentLoaded', function () {
    autoCheck();
});
function autoCheck(){
    setTimeout(autoCheck, 30000);
    checkData();
}
function checkData(){
    fetch('/config.json')
  .then(response => response.json())
  .then(dataJSON => {
    console.log(dataJSON);
    for(let i=0;i<dataJSON.length;i++){
        let data = dataJSON[i];
        let type = data['type'];
        let versionName = data['versionName'];
        let versionCode = data['versionCode'];
        let updateAt = data['updateAt'];
        let info = "Info Update: "+updateAt+" | "+versionName + " ("+versionCode+")";
        let downloadLink = data['downloadLink'];
        switch(type){
            case "Android":
                document.getElementById("text-android").innerHTML = "For Android<br>"+info;
                document.getElementById('download-android').addEventListener('click', () => {
                    window.location.href = downloadLink;
                });
                break;
                case "Window64":
                document.getElementById("text-window").innerHTML = "For Window64<br>"+info;
                document.getElementById('download-window').addEventListener('click', () => {
                    window.location.href = downloadLink;
                });
                break;
                case "Linux":
                document.getElementById("text-linux").innerHTML = "For Linux<br>"+info;
                document.getElementById('download-linux').addEventListener('click', () => {
                    window.location.href = downloadLink;
                });
                break;
                case "MacOS":
                document.getElementById("text-macos").innerHTML = "For macOS<br>"+info;
                document.getElementById('download-macos').addEventListener('click', () => {
                    window.location.href = downloadLink;
                });
                break;
                case "IOS":
                document.getElementById("text-ios").innerHTML = "For IOS<br>"+info;
                document.getElementById('download-ios').addEventListener('click', () => {
                    window.location.href = downloadLink;
                });
                break;
            default:
                console.log("Not Support This Platform");
                break;
        }
    }
  });
}