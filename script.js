const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthLabel = document.getElementById("strengthLabel");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwdLenValue = document.getElementById("lengthValue");

copyBtn.addEventListener("click",() => {
   navigator.clipboard.writeText(passwordInput.value);
//    console.log("Works");     
});
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
const updateStrength = (options) => {
        if(options.includeUppercase) {
                strengthBar.style.width = "45%";
                strengthLabel.textContent = "Medium";
        }
        if(options.includeNumbers && options.includeUppercase) {
                strengthBar.style.width = "70%";
                strengthLabel.textContent = "High";
        }
        if(options.includeNumbers && options.includeUppercase && options.includeSymbols) {
                strengthBar.style.width = "100%";
                strengthLabel.textContent = "Very High";
        }
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
        updateStrength(options);
        passwordInput.value = generatePasswd(len,str);
});