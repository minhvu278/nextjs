const messages = {
    name: {
        require: 'Tên người dùng không được bỏ trống'
    },

    email: {
        require: 'Email không được bỏ trống',
        format: 'Email chưa đúng định dạng'
    },

    role: {
        require: 'Vai trò không được bỏ trống'
    },

    password: {
        require: 'Mật khẩu không được bỏ trống',
        min: 'Mật khẩu phải có ít nhất 8 ký tự ',
        characters: 'Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự đặc biệt'
    },

    confirmPassword: {
        require: 'Mật khẩu nhập lại không được bỏ trống',
        confirm: 'Mật khẩu nhập lại chưa đúng'
    },

    currentPassword: {
        require: 'Mật khẩu cũ không được bỏ trống',
    },

    error: 'Có lỗi xảy ra vui lòng thử lại hoặc liên hệ với admin',

    checkAscending: 'Vui lòng nhập giá trị tiền ở dưới lớn hơn giá trị tiền ở trên',
    messageByStatus: {
        NOT_FOUND: 'Không thể tìm thấy trang này. Vui lòng thử lại hoặc liên hệ với Admin',
        UNAUTHORIZED: 'Bạn không có quyền truy cập vào trang này. Vui lòng kiểm tra tài khoản của bạn.',
        INTERNAL_SERVER_ERROR: 'Lỗi do bên máy chủ vui lòng liên hệ với admin',
        DEFAULT: 'Thao tác bạn thực hiện đã xảy ra lỗi. Vui lòng thử lại hoặc liên hệ với admin',
    },
    unauthenticated: 'Unauthenticated.',
}

export default messages;
