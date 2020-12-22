import moment from "moment";

export function formDatetime(row, column) {
    let date = row[column.property];
    if (date == undefined) {
        return "";
    }
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

export function formData(row, column) {
    let date = row[column.property];
    if (date == undefined) {
        return "";
    }
    return moment(date).format("YYYY-MM-DD");
}