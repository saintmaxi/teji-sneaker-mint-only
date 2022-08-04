async function displayErrorMessage(message, timed = true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

async function displayResultPopup(result) {
    if (!($("#result-pop-up").length)) {
        let resultJSX;
        if (result == 0) {
            resultJSX = `<div id="result-pop-up" class=" sucesspopup">
            <svg xmlns="http://www.w3.org/2000/svg" onclick="toggleResultPopup()" class="close" width="20"
              viewBox="0 0 320 512">
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
            <div class="sucesswrapper">
              <div class="upperinternalwrappersucess">
                <h1 class="headingsucesspopup"><strong class="bold-text-5">Oops!</strong></h1>
                <h1 class="heading-2">An error occurred with your transaction!</h1>
                <h3 class="heading-3">Check the etherscan page for more information.</h3>
              </div>
            </div>
          </div>`;
        }
        else if (result == 1) {
            resultJSX = `<div id="result-pop-up" class=" sucesspopup">
            <svg xmlns="http://www.w3.org/2000/svg" onclick="toggleResultPopup()" class="close" width="20"
              viewBox="0 0 320 512">
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
            <div class="sucesswrapper">
              <div class="upperinternalwrappersucess">
                <h1 class="headingsucesspopup"><strong class="bold-text-5">Nice!</strong></h1>
                <h1 class="heading-2">please proceed to the <a href="https://discord.gg/TXtPXkWjSv" target="_blank" class="link">tejiverse discord</a><br>to claim your physical sneakers</h1>
                <h3 class="heading-3">(claim opens shortly after sell out)</h3>
              </div>
            </div>
          </div>`;
        }
        let height = $(document).height();
        $("#main-section").append(resultJSX);
        $("#main-section").append(`<div id='block-screen-status' onclick="toggleResultPopup()" style="height:${height}px"></div>`);
    }
}

function toggleFocus() {
    console.log("focusing")
    $("#mint-button").focus();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleMintPopup() {
    $("#mint-pop-up").toggle().css('display', 'none');
}

function toggleResultPopup() {
    $("#result-pop-up").remove();
    $("#block-screen-status").remove();
}

// function revealMint() {
//     $("#about").addClass("fading-out");
//     $('#about').on("animationend", function () {
//         $("#about").addClass("hidden");
//         $("#mint").removeClass("hidden");
//         $("#mint").addClass("fading-in");
//     });
// }