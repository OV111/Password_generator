const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

// const passwordLength = document.getElementById("passwordLength");

const passwdLenValue = document.getElementById("lengthValue");

const updateLength = (value) => {
        document.getElementById("lengthValue").textContent = value;
        return value;
};
const getOptions = () => {
        return {
                includeNumbers: includeNumbers.checked,
                includeUppercase: includeUppercase.checked,
                includeSymbols: includeSymbols.checked,
        };
};
let options = getOptions();

const creatingString = (options) => {
        let string = "";
        if(options.includeUppercase) string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(options.includeNumbers) string += "0123456789";
        if(options.includeSymbols) string += "!@#$%^&*()_+-=[]{}|;:',.<>?";
        return string;
};
// console.log(creatingString(options));





const generatePasswd = (length,pool) => {
        
};
generateBtn.addEventListener("click", () => {
        console.log(passwdLenValue.textContent);     
        getOptions();
        console.log(creatingString(options));
});