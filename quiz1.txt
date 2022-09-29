* use one function for one purpose

function isString(country) {
    return typeof(country) == "string";
}

function isEven(country) {
    return (country.length % 2 == 0);
}

longestEvenName = "";
function isLongestName(country) {
    return country.length > longestEvenName,length;
}

function findLongestCountry(countries) {
    longestEvenName = ""; //NEED TO RESET TO EMPTY EVERY TIME
    for (const country of countries) {
      if(isString(country) && isLongestName() && isEven(country)) {
        longestEvenName = country;
      }

    if(longestEvenName.length > 0) {
        console.log(longestEvenName);
      } else {
        console.log("There was no name available");
      }
  }
}