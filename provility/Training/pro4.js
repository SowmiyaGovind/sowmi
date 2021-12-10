const instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometownCity: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
//console.log(instructorData(additionalData(moreDetails.hometown['city'])));
// console.log(instructorData.additionalData.moreDetails.hometown.city);
// console.log(instructorData.additionalData.moreDetails.hometown.state);
// console.log(instructorData.additionalData.moreDetails.favoriteBasketballTeam);
// console.log(instructorData.additionalData.favoriteHobbies);
console.log(instructorData.additionalData.favoriteHobbies="playing")
// console.log(instructorData.additionalData.favoriteHobbies);

console.log(instructorData['additionalData']['moreDetails']['hometownCity']['city'])
// console.log(instructorData['additionalData']['moreDetails'].hometown.city)


