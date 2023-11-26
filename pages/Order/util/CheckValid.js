 export const isValidPhoneNumber = (phoneNumber) => {
    // Sử dụng biểu thức chính quy để kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10}$/;

    // Loại bỏ khoảng trắng và dấu gạch ngang nếu có
    const cleanedPhoneNumber = phoneNumber.replace(/\s|-/g, '');

    // Kiểm tra xem số điện thoại có đúng định dạng không
    return phoneRegex.test(cleanedPhoneNumber);
}

// Trả về giá trị Lỗi khi user nhập vào Họ Tên không hợp lệ
export const returnValueErrorOfNameCustomer = (name_customer) => {

    if (name_customer == null || name_customer.length === 0) return 'Họ Tên không được để trống'
    if (name_customer.length > 50) return 'Họ Tên không được quá 50 kí tự'
    return null;
}

// Trả về giá trị Lỗi khi user nhập vào Số Điện Thoại không hợp lệ
export const returnValueErrorOfPhoneNumber = (phone_number) => {
    if (phone_number == null || phone_number.length === 0) return 'Số điện thoại không được để trống'
    if (!isValidPhoneNumber(phone_number)) return 'Số điện thoại không hợp lệ'
    return null; // => dữ liệu nhập vào hợp lệ
}