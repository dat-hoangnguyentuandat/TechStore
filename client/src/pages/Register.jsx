import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await register({ name, email, password });
            navigate('/'); // Redirect to Home or Login
        } catch (err) {
            setError(err.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="flex border-b border-gray-100 dark:border-gray-700">
                    <Link to="/login" className="flex-1 py-4 text-center text-sm font-semibold border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-primary transition-all uppercase tracking-wide">
                        Đăng nhập
                    </Link>
                    <button className="flex-1 py-4 text-center text-sm font-semibold border-b-2 border-primary text-primary transition-all uppercase tracking-wide">
                        Đăng ký
                    </button>
                </div>
                <div className="p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">devices</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">Tham gia với TechStore!</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Tạo tài khoản để bắt đầu mua sắm</p>
                    </div>
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-500 text-xs rounded-lg text-center font-medium">
                            {error}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 ml-1 uppercase tracking-wider">Họ và tên</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">badge</span>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder-gray-400"
                                    placeholder="Nhập họ tên của bạn"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 ml-1 uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">mail</span>
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
                            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 ml-1 uppercase tracking-wider">Mật khẩu</label>
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
                        <div className="flex items-start space-x-2 pt-1">
                            <input className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" type="checkbox" required />
                            <label className="text-xs text-gray-500 dark:text-gray-400">
                                Tôi đồng ý với các <a className="text-primary hover:underline" href="#">Điều khoản dịch vụ</a> và <a className="text-primary hover:underline" href="#">Chính sách bảo mật</a>
                            </label>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 mt-4 uppercase tracking-wide disabled:opacity-70"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Đang xử lý..." : "Đăng ký"}
                        </button>
                    </form>
                    <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
                        Đã có tài khoản?
                        <Link to="/login" className="text-primary font-bold hover:underline ml-1">Đăng nhập ngay</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
