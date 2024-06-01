const url_downloaded = "https://dev.hack4g.me/DownloadPlatformNext.php";
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
    let versionName = dataJSON['versionName'];
        let versionCode = dataJSON['versionCode'];
        let updateAt = dataJSON['updateAt'];
        let info = "Info Update: "+updateAt+" | "+versionName + " ("+versionCode+")";
        document.getElementById('info').innerHTML = info+". Download Now !!";
    for(let i=0;i<dataJSON['data'].length;i++){
        let data = dataJSON['data'][i];
        let type = data['type'];
        let downloadLink = data['downloadLink'];
        switch(type){
            case "Android":
                // document.getElementById("text-android").innerHTML = "For Android<br>"+info;
                document.getElementById('android').onclick = updateDownloaded;
                document.getElementById('android').href = downloadLink;
                break;
                case "Window64":
                    document.getElementById('window').onclick = updateDownloaded;
                    document.getElementById('window').href = downloadLink;
                break;
                case "Linux1":
                    document.getElementById('linux1').onclick = updateDownloaded;
                    document.getElementById('linux1').href = downloadLink;
                break;
                case "Linux2":
                    document.getElementById('linux2').onclick = updateDownloaded;
                    document.getElementById('linux2').href = downloadLink;
                break;
                case "MacOS":
                    document.getElementById('macos').onclick = updateDownloaded;
                    document.getElementById('macos').href = downloadLink;
                break;
                case "IOS":
                    document.getElementById('ios').onclick = updateDownloaded;
                    document.getElementById('ios').href = downloadLink;
                break;
            default:
                console.log("Not Support This Platform");
                break;
        }
    }
    initDownloaded();
  });
}
function updateDownloaded() {
    fetch(url_downloaded,{
        method: "POST"
    }).then(response => response.text())
    .then(data => {
        console.log(data);
    });
}
function initDownloaded(){
    fetch(url_downloaded)
    .then(response => response.text())
  .then(data => {
    document.getElementById("total-download").innerHTML = "Downloaded: "+data+"+";
  });
}