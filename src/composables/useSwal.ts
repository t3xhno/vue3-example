import Swal, { SweetAlertIcon } from 'sweetalert2';

const useSwal = () => {
    const swal = (title: string, text: string, icon: SweetAlertIcon, confirmButtonText: string) =>
        Swal.fire({ title, text, icon, confirmButtonText });
    return { swal };
};

export default useSwal;