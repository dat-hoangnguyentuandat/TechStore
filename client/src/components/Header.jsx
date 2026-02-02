import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-primary sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl font-bold">bolt</span>
                    </div>
                    <span className="text-white text-2xl font-black tracking-tighter hidden md:block">TECHSTORE</span>
                </Link>
                <div className="flex-grow max-w-2xl relative">
                    <input className="w-full h-10 pl-10 pr-4 rounded-lg border-none focus:ring-2 focus:ring-red-300 text-sm" placeholder="Bạn cần tìm gì?" type="text" />
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-xl">search</span>
                </div>
                <div className="hidden lg:flex items-center gap-4 text-white">
                    <button className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition">
                        <span className="material-symbols-outlined">call</span>
                        <div className="text-left">
                            <p className="text-[10px] leading-tight opacity-80">Gọi mua hàng</p>
                            <p className="text-xs font-bold leading-tight">1800.2097</p>
                        </div>
                    </button>
                    <button className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition">
                        <span className="material-symbols-outlined">location_on</span>
                        <div className="text-left">
                            <p className="text-[10px] leading-tight opacity-80">Cửa hàng</p>
                            <p className="text-xs font-bold leading-tight">Gần bạn</p>
                        </div>
                    </button>
                    <Link to="/cart" className="flex flex-col items-center hover:bg-white/10 p-2 rounded-lg transition">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <p className="text-[10px] font-bold">Giỏ hàng</p>
                    </Link>
                    {user ? (
                        <div className="relative group">
                            <button className="flex flex-col items-center hover:bg-white/10 p-2 rounded-lg transition">
                                <span className="material-symbols-outlined">account_circle</span>
                                <p className="text-[10px] font-bold max-w-[80px] truncate">{user.name}</p>
                            </button>
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden hidden group-hover:block border border-slate-100 p-2">
                                {user.isAdmin && (
                                    <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg text-sm font-medium">
                                        <span className="material-symbols-outlined">dashboard</span>
                                        Quản trị
                                    </Link>
                                )}
                                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg text-sm font-medium">
                                    <span className="material-symbols-outlined">person</span>
                                    Thông tin
                                </Link>
                                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg text-sm font-medium w-full text-left text-red-600">
                                    <span className="material-symbols-outlined">logout</span>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="flex flex-col items-center hover:bg-white/10 p-2 rounded-lg transition">
                            <span className="material-symbols-outlined">account_circle</span>
                            <p className="text-[10px] font-bold">Đăng nhập</p>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
