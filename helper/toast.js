import { toast } from 'react-toastify';

const options = {
    theme: 'colored',
    autoClose: 1500,
    pauseOnFocusLoss: false
}

export const successToast = (message) => {
    toast.success(message, options)
}

export const errorToast = (message) => {
    toast.error(message, options)
}