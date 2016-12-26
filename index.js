var rootUrl = "https://owlbot.info/api/v1/dictionary/";
var format = "?format=json";

module.exports = {
    define: function(word) {
        return rootUrl + word.toLowerCase() + format;
    }
}
