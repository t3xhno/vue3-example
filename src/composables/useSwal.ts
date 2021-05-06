import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

type SwalType = (a: string, b: string, c: SweetAlertIcon, d: string) => Promise<SweetAlertResult<any>>

const useSwal = () => {
    const swal: SwalType = (title, text, icon, confirmButtonText) =>
        Swal.fire({ title, text, icon, confirmButtonText });
    return { swal };
};

export default useSwal;