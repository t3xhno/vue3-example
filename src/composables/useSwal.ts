import Swal, { SweetAlertResult } from "sweetalert2";

type Icons = "warning" | "success" | "info" | "question" | "error";
type SwalResKeys = "isConfirmed" | "isDenied" | "isDismissed" | "value" | "dismiss";
export type SwalType = (a: string, b: string, c: Icons, d?: string) => Promise<SweetAlertResult<Record<SwalResKeys, unknown>>>

const useSwal = (mySwal = Swal): Record<string, SwalType> => {
    const swal: SwalType = (title, text, icon, confirmButtonText = "Close") =>
        mySwal.fire({ title, text, icon, confirmButtonText });
    return { swal };
};

export default useSwal;