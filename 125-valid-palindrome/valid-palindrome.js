var isPalindrome = function(s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const reversed = str.split("").reverse().join("")
    return str === reversed;
};