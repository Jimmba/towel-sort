module.exports = function towelSort (matrix) {
    return (matrix === undefined || matrix.length === 0) ? [] : matrix.filter((el, index) =>{
        return index % 2 === 0 ? el : el.reverse();
    }).join(",").split(",").map(el=>(parseInt(el)));
}
