const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

/* This function gets string, then drops all commas from it and returns it */
const cleanCommas = function(string) {
    string = story.split(",").join("")
    return string
}

/* This function gets string, then drops all dots from it and returns it */
const cleanDots = function(string) {
    string = string.split(".").join("")
    return string
}

/* This function gets string, swiches all the capital letters to small letters and returns it */
const lowerCase = function(string) {
    string = string.toLowerCase()
    return string
}

/* This function gets string, Split the string wards into an array of substrings and returns it*/
const splitString = function(string) {
    const strArray = string.split(" ")
    return strArray
}

/* This function gets array, checks every value in the array if he's peresent in the wordCount object. If the ward is unPresent, 
the function will add the ward as key-value to the object with 1 as value, if the ward is present the function add 1 to the ward 
amount*/
const addToTheCounter = function(strArray) {
    for (let value of strArray) {
        if (value in wordCounts) {
            wordCounts[value]++
        }
        else {
            wordCounts[value] = 1
        }
    }
}

/* The function creat copy of the story variable to use it as parameter for all the function, and call them, finally prints
the wardCount object */
const mainFunction = function() {
    const strHelper = story
    const noCommasStory = cleanCommas(strHelper)
    const noDotsAndCommasStory = cleanDots(noCommasStory)
    const cleanStory = lowerCase(noDotsAndCommasStory)
    const storyArray = splitString(cleanStory)
    addToTheCounter(storyArray)
    console.log(wordCounts)
}

mainFunction()