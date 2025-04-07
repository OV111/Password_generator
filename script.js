const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const passwordInput = document.getElementById("password");

const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwdLenValue = document.getElementById("lengthValue");

const getOptions = () => {
    return {
        includeNumbers: includeNumbers.checked,
        includeUppercase: includeUppercase.checked,
        includeSymbols: includeSymbols.checked,
    };
};
const updateLength = (value) => {
        document.getElementById("lengthValue").textContent = value;
        return value;
};
const creatingString = (options) => {
        let string = "abcdefghijklmnopqrstuvwxyz";
        if(options.includeNumbers) string += "0123456789";
        if(options.includeUppercase) string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(options.includeSymbols) string += "!@#$%^&*()_+-=[]{}|;:',.<>?";
        return string;
};
const generatePasswd = (length,pool) => {
        let password = "";
        for(let i = 0; i < length; ++i) {
            let randomIndex = Math.floor(Math.random() * pool.length);
            password += pool[randomIndex];
        }
        return password;
};
generateBtn.addEventListener("click", () => {
        let options = getOptions();
        let len = passwdLenValue.textContent;
        let str = creatingString(options);
        passwordInput.value = generatePasswd(len,str);
});