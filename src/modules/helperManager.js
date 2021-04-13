export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}
export function splitTypeArray(arr){
    return arr.join(" and ");
}
export function sort(x,y) {
    let a= new Date(x.entryDate),
    b = new Date(y.entryDate);
    return b - a;
}