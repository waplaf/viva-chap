const { default: Swal } = require("sweetalert2")

const Alert = function (title, icon = 'success', position = 'top', timer = 3000) {
    const Toast = Swal.mixin({
        toast: true,
        position,
        showConfirmButton: false,
        timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon,
        title
    })



}

module.exports = { Alert }






