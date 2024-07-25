import {createModel} from "./base";

export const User = createModel("User", "users", {
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
});
