/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(" ").map((w) => w.length <= 2 ? w.toLowerCase() :  w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ")
};