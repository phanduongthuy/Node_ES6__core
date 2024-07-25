import {responseSuccess} from "@/utils/helpers";

export async function exportExcel(req, res) {

    return responseSuccess(res, {}, 201, "Đăng ký thành công");
}
