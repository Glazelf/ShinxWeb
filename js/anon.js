window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    // Need to rewrite sometime, due to Javascript deprecating most of the code I used for this it's not functional in its current state.
    // document.addEventListener("keydown", function (e) {
    //     // I
    //     if (e.key == "Control" && e.key == "Shift" && e.key == "I") {
    //         disabledEvent(e);
    //     };
    //     // J
    //     if (e.key == "Control" && e.key == "Shift" && e.key == "J") {
    //         disabledEvent(e);
    //     };
    //     // S / MacOS
    //     if (e.key == "S" && e.key == "Meta" && e.key == "Control") {
    //         disabledEvent(e);
    //     };
    //     // CMD OPT I / MacOS
    //     if (e.key == "Meta" && e.key == "Alt" && e.key == "I") {
    //         disabledEvent(e);
    //     };
    //     // U
    //     if (e.key == "Control" && e.key == "U") {
    //         disabledEvent(e);
    //     };
    //     // F12
    //     if (e.key == "F12") {
    //         disabledEvent(e);
    //     };
    // }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        };
        e.preventDefault();
        return false;
    };
};