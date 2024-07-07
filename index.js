document.addEventListener('DOMContentLoaded', function () {
    autoCheck();
});
function autoCheck() {
    setTimeout(autoCheck, 30000);
    checkData();
}
function checkData() {
    fetch('/config.json')
        .then(response => response.json())
        .then(dataJSON => {
            let versionName = dataJSON['versionName'];
            let versionCode = dataJSON['versionCode'];
            let updateAt = dataJSON['updateAt'];
            let info = "Phiên Bản: " + updateAt + " | " + versionName + " (" + versionCode + ")";
            document.getElementById('info').innerHTML = info + ". Tải Xuống Ngay !!";
            for (let i = 0; i < dataJSON['data'].length; i++) {
                let data = dataJSON['data'][i];
                let type = data['type'];
                let downloadLink = data['downloadLink'];
                switch (type) {
                    case "Android":
                        // document.getElementById("text-android").innerHTML = "For Android<br>"+info;
                        document.getElementById('android').onclick = function() {
                            updateDownloaded('android');
                        };
                        document.getElementById('android').href = downloadLink;
                        break;
                    case "Window64":
                        document.getElementById('window').onclick = function() {
                            updateDownloaded('window');
                        };
                        document.getElementById('window').href = downloadLink;
                        break;
                    case "Linux1":
                        document.getElementById('linux1').onclick = function() {
                            updateDownloaded('linux1');
                        };
                        document.getElementById('linux1').href = downloadLink;
                        break;
                    case "Linux2":
                        document.getElementById('linux2').onclick = function() {
                            updateDownloaded('linux2');
                        };
                        document.getElementById('linux2').href = downloadLink;
                        break;
                    case "Linux3":
                        document.getElementById('linux3').onclick = function() {
                            updateDownloaded('linux3');
                        };
                        document.getElementById('linux3').href = downloadLink;
                        break;    
                    case "MacOS":
                        document.getElementById('macos').onclick = function() {
                            updateDownloaded('macos');
                        };
                        document.getElementById('macos').href = downloadLink;
                        break;
                    case "IOS":
                        document.getElementById('ios').onclick = function() {
                            updateDownloaded('ios');
                        };
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
const url_downloaded = "https://dev.hack4g.me/platformnext/DownloadPlatformNext.php";
const headersData = {
    'Content-Type': 'application/json; charset=UTF-8'
}

function updateDownloaded(type_device) {
    const data = { 
        Device_ID: type_device, 
    };
    fetch(url_downloaded, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json; charset=UTF-8','Device_ID':type_device}
    })
    .then(response => response.text())
    .then(data => {
        if(data === 'Success'){
            initDownloaded();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function initDownloaded() {
    fetch(url_downloaded, {
        method: 'GET',
        headers: headersData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("total-download").innerHTML = "Tổng Lượt Tải Xuống: " + data + "+";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}