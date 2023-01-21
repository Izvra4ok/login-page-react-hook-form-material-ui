export const loginValidation = {
    require: "Incorrect entry login",
    validate: (value: string) => {
        if (value.length < 3) {
            return "Login should be at least 3"
        }
        if (value.length > 25) {
            return "Login must be longer than 20 characters"
        }
        if (value.match(/[а-яА-Я]/)) {
            return "Login cannot contain russian letters "
        }
        return true
    }
};

export const passwordValidation = {
    require: "Incorrect entry password",
    validate: (value: string) => {
        if (value.length < 6) {
            return " Password should be at least 6"
        }
        if (value.length > 25) {
            return "password must be longer than 25 characters"
        }
        if (value.match(/[а-яА-Я]/)) {
            return "Password cannot contain russian letters "
        }
        return true
    }
}