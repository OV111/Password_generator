const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

// const passwordLength = document.getElementById("passwordLength");

const passwdLenValue = document.getElementById("lengthValue");

generateBtn.addEventListener("click", () => {
        let options = getOptions();
        console.log(creatingString(options));
});
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
// console.log(options.includeNumbers)
const creatingString = (options) => {
        let string = "abcdefghijklmnopqrstuvwxyz";
        if(options.includeNumbers) {string += "0123456789";}
        if(options.includeUppercase) {string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
        if(options.includeSymbols) {string += "!@#$%^&*()_+-=[]{}|;:',.<>?";}
        return string;
};

const generatePasswd = (length,pool) => {
        
};