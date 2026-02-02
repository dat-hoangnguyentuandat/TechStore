import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 pt-12 pb-8 border-t border-slate-100 dark:border-slate-800 mt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h4 className="font-bold uppercase text-sm">Tổng đài hỗ trợ</h4>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <p>Gọi mua hàng: <span className="text-primary font-bold">1800.2097</span> (8h00 - 22h00)</p>
                        <p>Khiếu nại: <span className="text-primary font-bold">1800.2063</span> (8h00 - 21h30)</p>
                        <p>Bảo hành: <span className="text-primary font-bold">1800.2064</span> (8h00 - 21h00)</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase text-sm">Thông tin chính sách</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><a className="hover:text-primary" href="#">Mua hàng và thanh toán Online</a></li>
                        <li><a className="hover:text-primary" href="#">Chính sách bảo hành</a></li>
                        <li><a className="hover:text-primary" href="#">Tra cứu hóa đơn điện tử</a></li>
                        <li><a className="hover:text-primary" href="#">Trung tâm bảo hành chính hãng</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase text-sm">Dịch vụ và thông tin khác</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><a className="hover:text-primary" href="#">Khách hàng doanh nghiệp (B2B)</a></li>
                        <li><a className="hover:text-primary" href="#">Ưu đãi thanh toán</a></li>
                        <li><a className="hover:text-primary" href="#">Tuyển dụng</a></li>
                        <li><a className="hover:text-primary" href="#">Quy chế hoạt động</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold uppercase text-sm">Kết nối với TechStore</h4>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition" href="#"><span className="material-symbols-outlined">facebook</span></a>
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition" href="#"><span className="material-symbols-outlined">play_circle</span></a>
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition" href="#"><span className="material-symbols-outlined">language</span></a>
                    </div>
                    <h4 className="font-bold uppercase text-sm mt-4">Phương thức thanh toán</h4>
                    <div className="grid grid-cols-4 gap-2 opacity-70">
                        <div className="bg-slate-50 p-1 rounded border">VISA</div>
                        <div className="bg-slate-50 p-1 rounded border">MOMO</div>
                        <div className="bg-slate-50 p-1 rounded border">VNPAY</div>
                        <div className="bg-slate-50 p-1 rounded border">COD</div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-[10px] text-slate-400">
                <p>© {new Date().getFullYear()} TechStore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
