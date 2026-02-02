# Hướng dẫn kết nối MongoDB Compass

Tài liệu này hướng dẫn cách kết nối dự án TechStore với công cụ quản lý cơ sở dữ liệu MongoDB Compass.

## 1. Chuẩn bị
- Đảm bảo bạn đã cài đặt **MongoDB Compass** trên máy tính.
- Đảm bảo **MongoDB Server** (mongod) đang chạy (nếu dùng local).

## 2. Lấy chuỗi kết nối (Connection String)
1. Mở file `.env` trong thư mục `server/`.
2. Tìm dòng chứa `MONGO_URI`.
   - Ví dụ: `MONGO_URI=mongodb://localhost:27017/techstore`

## 3. Kết nối trong Compass
1. Mở ứng dụng **MongoDB Compass**.
2. Tại màn hình **New Connection**, bạn sẽ thấy ô nhập URI.
3. Dán chuỗi kết nối (`mongodb://localhost:27017/techstore`) vào ô này.
4. Bấm nút **Connect** (màu xanh lá).

## 4. Kiểm tra
- Sau khi kết nối thành công, bạn sẽ thấy danh sách các Database ở cột bên trái.
- Tìm database tên là `techstore`.
- Nếu chưa thấy, có thể do chưa có dữ liệu nào được ghi. Hãy thử chạy server và đăng ký một tài khoản user để database được khởi tạo.

## 5. Troubleshooting (Sửa lỗi)
- **Lỗi "Connection refused"**: Kiểm tra xem MongoDB Service đã chạy chưa.
- **Lỗi "Authentication failed"**: Nếu bạn dùng MongoDB Atlas (Cloud), hãy kiểm tra lại username/password trong chuỗi kết nối.
