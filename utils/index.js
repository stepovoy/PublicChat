module.exports = function () {
    isTextValid = function (text) {
        const limit = 200;

        return text.length < limit;
    }

    isAlphaNumeric = function (username) {
        const exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;

        return username.match(exp)
    }

};
