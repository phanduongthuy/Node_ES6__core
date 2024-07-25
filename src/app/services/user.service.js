import {User} from "../models";
import {generatePassword} from "@/utils/helpers";

export async function createOrUpdateUser(data) {
    const {full_name, face_info_id} = data;

    return (
        await User.findOneAndUpdate(
            {
                face_info_id
            }, {
                full_name,
                face_info_id
            }, {
                upsert: true,
                new: true
            }
        )
    );
}

export async function resetPassword(user, new_password) {
    user.password = generatePassword(new_password);
    await user.save();
    return user;
}



