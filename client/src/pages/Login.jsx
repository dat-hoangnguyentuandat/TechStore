import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as loginService } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const data = await loginService({ email, password });
            login(data);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Đăng nhập thất bại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="flex border-b border-gray-100 dark:border-gray-700">
                    <button className="flex-1 py-4 text-center text-sm font-semibold border-b-2 border-primary text-primary transition-all uppercase tracking-wide">
                        Đăng nhập
                    </button>
                    <Link to="/register" className="flex-1 py-4 text-center text-sm font-semibold border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-primary transition-all uppercase tracking-wide">
                        Đăng ký
                    </Link>
                </div>
                <div className="p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">devices</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">Chào mừng bạn đến với TechStore</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vui lòng đăng nhập vào tài khoản của bạn</p>
                    </div>
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-500 text-xs rounded-lg text-center font-medium">
                            {error}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 ml-1 uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">person</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder-gray-400"
                                    placeholder="Nhập email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1.5">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">Mật khẩu</label>
                                <a className="text-xs font-bold text-primary hover:underline" href="#">Quên mật khẩu?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">lock</span>
                                <input
                                    className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder-gray-400"
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg hover:text-gray-600"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "visibility_off" : "visibility"}
                                </button>
                            </div>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 mt-4 uppercase tracking-wide disabled:opacity-70"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Đang xử lý..." : "Đăng nhập"}
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-gray-800 px-3 text-gray-500 dark:text-gray-400 font-medium tracking-widest">Hoặc tiếp tục với</span>
                        </div>
                    </div>
                    {/* Social Login Buttons (Simplifying SVG for brevity, usually should extract) */}
                    <div className="grid grid-cols-1 gap-3">
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all group">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">Đăng nhập bằng Google</span>
                        </button>
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
                        Bạn chưa có tài khoản?
                        <Link to="/register" className="text-primary font-bold hover:underline ml-1">Đăng ký ngay</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
