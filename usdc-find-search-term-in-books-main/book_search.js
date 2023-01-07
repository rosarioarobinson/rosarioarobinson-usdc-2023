/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    // This if statement goes through the scannedTextObj and 
    // iterates through the JSON objects to find the searchTerm if found
    for (var i = 0; i < scannedTextObj.length; i++){
       var found = [];
        if (scannedTextObj[i].Title.includes(searchTerm)) { 
            found.push(scannedTextObj[i])    // if found, pass the index of the record
    
        } else if (scannedTextObj[i]) {    // if not found, pass the searchTerm
            found.push(searchTerm)     
            found.length = searchTerm.length    /// if not found, pass the length
            break
        }
    }

    var result = {
        "SearchTerm": searchTerm,   //return search string
        "Results": found    // return what was found if any
    };  
    
    return result;  // return the result of the search function
    

     
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}



////////// Test 3 ///////////////////////////////////////////////////////////////
// Developer: Rosario A. Robinson
// Test Result: This test case passes for search text found in the array twentyLeaguesIn.
//////////////////////////////////////////////////////////////////////////
const test3result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test3result.Results.length == 1) {
    console.log("Test 3 Passed (Developer RAR)");
} else {
    console.log("Test 3 Failed (Developer RAR)");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test3result.Results.length);
}


////////// Test 4 ///////////////////////////////////////////////////////////////
// Developer: Rosario A. Robinson
// Test Result: This test case fails for search text not found in the array twentyLeaguesIn. 
/////////////////////////////////////////////////////////////////////////////////
const test4result = findSearchTermInBooks("Rosario", twentyLeaguesIn);
if (test4result.Results.length == 1) {
    console.log("Test 4 Passed (Developer RAR)");
} else {
    console.log("Test 4 Failed (Developer RAR)");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test4result.Results.length);
}


////////// Test 5 /////////////////////////////////////////////////////////////////
// Developer: Rosario A. Robinson
// Test Result: This test case fails for case sensitive strings.
//////////////////////////////////////////////////////////////////////////////////
const test5result = findSearchTermInBooks("thousand", twentyLeaguesIn);
if (test5result.Results.length == 1) {
    console.log("Test 5 Passed (Developer RAR)");
} else {
    console.log("Test 5 Failed (Developer RAR)");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test5result.Results.length);
}


////////// Test 6 ///////////////////////////////////////////////////////////////////
// Developer: Rosario A. Robinson
// Test Result: This test case passes for case sensitive strings.
////////////////////////////////////////////////////////////////////////////////////
const test6result = findSearchTermInBooks("Thousand", twentyLeaguesIn);
if (test6result.Results.length == 1) {
    console.log("Test 6 Passed (Developer RAR)");
} else {
    console.log("Test 6 Failed (Developer RAR)");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test6result.Results.length);
}
