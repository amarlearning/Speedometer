SomApi.account = "YOUR API KEY";  //your API Key here
SomApi.domainName = "www.amarpandey.ml";     //your domain or sub-domain here
SomApi.onTestCompleted = onTestCompleted;
SomApi.onError = onError;
SomApi.onProgress = onProgress;

var msgDiv = document.getElementById("msg");
var prgsDiv = document.getElementById("prgs");

function btnStartClick() {
    //set config values
    SomApi.config.sustainTime = 8;
    SomApi.config.testServerEnabled = true;
    SomApi.config.userInfoEnabled =true;
    SomApi.config.latencyTestEnabled = true;
    SomApi.config.uploadTestEnabled = true;
    SomApi.config.progress.enabled = true;
    SomApi.config.progress.verbose = true;

    msgDiv.innerHTML = "<h3>---- Calculating Result ----</h3><h4>" +
        "Speed test in progress. Please wait...</h4>";
    SomApi.startTest();
}

function onTestCompleted(testResult) {
    msgDiv.innerHTML = "<h3>---- Results ----</h3><h4><ul>" +
        "<li>Download: " + testResult.download + " Mbps</li>" +
        "<li>Upload: " + testResult.upload + " Mbps</li>" +
        "<li>Latency: " + testResult.latency + " ms</li>" +
        "<li>Jitter: " + testResult.jitter + " ms</li>" +
        "<li>Test Server: " + testResult.testServer + "</li>" +
        "<li>IP: " + testResult.ip_address + "</li>" +
        "<li>Hostname: " + testResult.hostname + "</li>" +
    "</h4>";
}

function onError(error) {
    msgDiv.innerHTML = "Error " + error.code + ": " + error.message;
}

function onProgress(progress) {
    prgsDiv.innerHTML =
    "<h3>---- Testing In progress ----</h3><h4><ul>" +
        "<li>Progress Type: " + progress.type + "</li>" +
        "<li>Pass: " + progress.pass + "</li>" +
        "<li>Percent Done: " + progress.percentDone + "%</li>" +
        "<li>Current Speed: " + progress.currentSpeed + " Mbps</li>" +
    "</ul></h4>";
}
