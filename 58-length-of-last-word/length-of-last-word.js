/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   s = s.trim();
   const lastSpace = s.lastIndexOf(" ")
   return s.length - lastSpace - 1 
   }