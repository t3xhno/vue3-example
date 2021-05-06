import Swal, { SweetAlertResult } from 'sweetalert2';

type Icons = "warning" | "success" | "info" | "question" | "error";
type SwalType = (a: string, b: string, c: Icons, d: string) => Promise<SweetAlertResult<any>>

const useSwal = () => {
    const swal: SwalType = (title, text, icon, confirmButtonText) =>
        Swal.fire({ title, text, icon, confirmButtonText });
    return { swal };
};

export default useSwal;