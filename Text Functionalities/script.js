let myTextBox = document.getElementById("my-text-box");
let result = document.getElementById("result");

//Validation for empty field
let isEmpty = () => {
    if (myTextBox.value.length != 0) {
        return false;
    } else {
        return true;
    }
};

//Function to reverse text
let reverseStr = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        result.innerHTML = `Reverse : <span>${myText
            .split("")
            .reverse()
            .join("")}</span>`;
    }
};

//Function to check palindrome
let isPalindrome = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        if (myText == myText.split("").reverse().join("")) {
            result.innerHTML = `<span>Palindrome</span>`;
        } else {
            result.innerHTML = `<span>Not A Palindrome</span>`;
        }
    }
};

//Count number of characters
let charCount = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        let charLength = 0;
        for (let index = 0; index < myText.length; index++) {
            const element = myText[index];
            if (element != " ") {
                charLength++;
            }
            else {
                continue;
            }

        }
        result.innerHTML = `Character Count : <span>${charLength}</span>`;
    }
};

//Count number of words
let wordCount = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        result.innerHTML = ` Word Count : <span>${myText
            .trim()
            .split(/\s+/)
            .filter((item) => item).length
            }</span>`;
    }
};

//Search given word in the text
let search = () => {
    let searchText = document.getElementById("search-text").value;
    if (isEmpty() || searchText.length == 0) {
        result.innerHTML = "Either Or Both Input Fields Are Empty";
    } else {
        let myText = myTextBox.value;
        if (myText.includes(searchText)) {
            result.innerHTML = `The text contains <span>'${searchText}'</span>`;
        } else {
            result.innerHTML = `The text does NOT contains <span>'${searchText}'</span>`;
        }
    }
};