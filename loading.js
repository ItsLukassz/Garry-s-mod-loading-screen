let totalfiles = 0;
let filesleft = 0;

// global variable to store the percentage of the files left
let percentage = 100;

window.onload = function() {
    const mainText = document.querySelector("h1");
    document.documentElement.style.setProperty('--height', 100 + '%')

}


function SetStatusChanged( status ) {

    let allow_increment = true;
    if (status === "Workshop Complete") {

        document.querySelector(".main-info").innerHTML = "Workshop Complete";
        // Changing currently downloading file name
        document.querySelector(".extra-info").innerHTML = 'Hardest part is done';

        allow_increment = false;
        setLoadProgress(50);


    } else if (status === "Client info sent!") {

        document.querySelector(".main-info").innerHTML = "Client Info Sent!";
        // Changing currently downloading file name
        document.querySelector(".extra-info").innerHTML = "You'll be able to play very soon!";
        allow_increment = false;
        setLoadProgress(20);
    } else if (status === "Starting Lua...") {

        document.querySelector(".main-info").innerHTML = "Starting Lua...";
        // Changing currently downloading file name
        document.querySelector(".extra-info").innerHTML = "You'll be in the game in a moment";

        setLoadProgress(10);
    } else {
        if (allow_increment) {
            percentage = percentage - 0.2;
            setLoadProgress(percentage);
        }
    }
}


function SetFilesTotal( total ) {
    // store total value
    totalfiles = total;
    document.querySelector(".total-files").innerHTML = "Downloading: " + total;
}

function SetFilesNeeded( needed ) {

    // filesleft = needed;
    //
    // // Get the procentage of the files left, it can't exceed 100%
    // let procentagelocal = (filesleft / totalfiles) * 100;
    //
    //
    // // change the main text css :before tag height depending on the procentage
    // setLoadProgress(procentagelocal)
    // console.log(procentagelocal);
    //
    // // change element text
    // document.querySelector(".files-left").innerHTML = "Files left: " + needed;

}

function DownloadingFile( fileName ) {

    document.querySelector(".main-info").innerHTML = "Downloading files...";
    // Changing currently downloading file name
    document.querySelector(".extra-info").innerHTML = fileName;

}

function setLoadProgress( progress ) {
    percentage = progress;
    // Changing the progress bar
    document.documentElement.style.setProperty('--height', progress + '%');
    document.querySelector(".files-left").innerHTML = "load progress: " + percentage;
}