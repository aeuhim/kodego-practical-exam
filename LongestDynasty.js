function longestDynasty(dynastyReign) {
    if (!Object.keys(dynastyReign)?.length) {
        return "No Data"
    }

    let startYear = 1000
    let longest = Number.MIN_VALUE
    let result = null

    for (const key of Object.keys(dynastyReign)) {
        if (convertYear(dynastyReign[key]) === "Invalid") {
            continue
        }

        if (convertYear(dynastyReign[key]) - startYear > longest) {
            longest = convertYear(dynastyReign[key]) - startYear
            result = key
        }

        startYear = convertYear(dynastyReign[key])
    }

    return result
}

function convertYear(year) {
    const regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

    if (!regex.test(year) == true) {
        return "Invalid"
    }

    function value(numeral) {
        if (numeral == 'I') {
            return 1
        }

        if (numeral == 'V') {
            return 5
        }

        if (numeral == 'X') {
            return 10
        }

        if (numeral == 'L') {
            return 50
        }

        if (numeral == 'C') {
            return 100
        }

        if (numeral == 'D') {
            return 500
        }

        if (numeral == 'M') {
            return 1000
        }
    }

    let result = 0

    for (let idx = 0; idx < year.length; idx++) {
        const s1 = value(year.charAt(idx))

        if (idx + 1 < year.length) {
            const s2 = value(year.charAt(idx + 1))

            if (s1 >= s2) {
                result = result + s1
            } else {
                result = result + s2 - s1
                idx++
            }
        } else {
            result = result + s1
        }
    }

    return result
}

var dynastyReign = { "San Dynasty": "MXLI", "Villoria Dynasty": "MCCCIIII", "Tan Dynasty": "MCCCXCVIII", "Bon Dynasty": "MCDXLV", "Maiko Dynasty": "MDCLXIV", "Paul Dynasty": "MCMXLIX", "Andre Dynasty": "MMMXICX" }
var longestDynastyName = longestDynasty(dynastyReign)
console.log(longestDynastyName)
