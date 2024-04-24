function getCurrentDateFormatted() {
    var now = new Date();
    var date = String(now.getDate()).padStart(2, "0");
    var month = String(now.getMonth() + 1).padStart(2, "0");
    var year = now.getFullYear();
    return "".concat(date, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
