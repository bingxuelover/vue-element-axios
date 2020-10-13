export const formatSecondsGet = function (value) {
    //将秒数转换为时分秒格式
    let theTime = parseInt(value); // 秒
    let middle = 0; // 分
    let hour = 0; // 小时

    if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }
    let result = "" + parseInt(theTime) + "秒";
    if (middle > 0) {
        result = "" + parseInt(middle) + "分" + result;
    }
    if (hour > 0) {
        result = "" + parseInt(hour) + "小时" + result;
    }
    return result;
}
export const getDateGet = function (time) {
    var now = new Date(time),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        now.toTimeString().substr(0, 8)
    );
}

//修正Element的页码显示
export const getIndexGet = function (index, currentPage, showCount) {
    return (currentPage - 1) * showCount + index + 1;
}