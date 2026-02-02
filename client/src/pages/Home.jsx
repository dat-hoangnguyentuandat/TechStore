import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-4 space-y-8">
            <section className="grid grid-cols-12 gap-4">
                <aside className="col-span-3 hidden lg:block bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                        <p className="text-xs font-bold uppercase text-slate-400">Danh mục</p>
                    </div>
                    <ul className="py-2 text-sm">
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">smartphone</span> Điện thoại</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">laptop</span> Laptop</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">tablet</span> Máy tính bảng</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">headphones</span> Âm thanh</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">watch</span> Đồng hồ</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">tv</span> Tivi</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">kitchen</span> Đồ gia dụng</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                        <li className="group px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl opacity-70">mouse</span> Phụ kiện</span>
                            <span className="material-symbols-outlined text-sm opacity-50">chevron_right</span>
                        </li>
                    </ul>
                </aside>
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-full relative bg-slate-200 group">
                        <img alt="Siêu sale cuối tuần" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZITmyXpr6hqCNOUJOop66vBMhNOkK_N5KCrxI3RQ5ecg5aK626BuFrojHmdf4foz0XnG5WFWkW9y_x2LesN0BDBIdece1hO1y5SHbsfJ70ds2ozSCeRpetZ5dG3f8XkcQKxmyi1dK0MgQbV6eugYkL6WkmymMBs3d_McsFads6hMfOuvRHRk4_56K2osIAAGf_VbmdIBx0NksKStl4v4QgQBaeRM9Q3ig12qjc6RKBs7l9eeqdedPf7Fr93ykOHD11P8127ZJmA5R" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                            <h1 className="text-white text-4xl font-black uppercase mb-2">Siêu sale cuối tuần</h1>
                            <p className="text-white/90 text-lg">Giảm sốc hàng loạt sản phẩm công nghệ</p>
                        </div>
                        <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md flex text-white overflow-x-auto no-scrollbar">
                            <div className="flex-1 min-w-[120px] p-3 text-center border-r border-white/10 hover:bg-white/10 cursor-pointer border-b-2 border-primary">
                                <p className="text-xs font-bold uppercase">Siêu sale cuối tuần</p>
                                <p className="text-[10px] opacity-80">Giảm đến 50%++</p>
                            </div>
                            <div className="flex-1 min-w-[120px] p-3 text-center border-r border-white/10 hover:bg-white/10 cursor-pointer">
                                <p className="text-xs font-bold uppercase">iPhone 15 Pro</p>
                                <p className="text-[10px] opacity-80">Giá từ 28.990.000đ</p>
                            </div>
                            <div className="flex-1 min-w-[120px] p-3 text-center border-r border-white/10 hover:bg-white/10 cursor-pointer">
                                <p className="text-xs font-bold uppercase">SAMSUNG S24</p>
                                <p className="text-[10px] opacity-80">Đặt ngay ưu đãi lớn</p>
                            </div>
                            <div className="flex-1 min-w-[120px] p-3 text-center hover:bg-white/10 cursor-pointer">
                                <p className="text-xs font-bold uppercase">Máy chơi game</p>
                                <p className="text-[10px] opacity-80">Trải nghiệm đỉnh cao</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-2 hidden lg:flex flex-col gap-4">
                    <div className="flex-1 bg-slate-200 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                        <img alt="Quảng cáo 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKI3ZSAzZgsWLtWYdPAiX_i91UwYWF4G5MwhnXjyroWDgqNxH5BqkeMm4X-mNhLsJm-jt6gguprgxuNRMxqQUq8HNAqXhzROC5hf1c-mI-vg3GQCvvfM-nZlWQzKbff7SvUL4rMaEGWsRN5-ZTPr4hqYopIGI3aDx_Rjx0tRD-xiW9un8taxWc4rP2g6xRMT1kNo7k3pBdz8IT3FRHShK6cG-Btl9wOOVvBh-xwI5A1OuBgETcD7qx8v1k49OwTbYqpFMR-uxGcckZ" />
                    </div>
                    <div className="flex-1 bg-slate-200 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                        <img alt="Quảng cáo 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUyyj1mvKxGX1aRmeRtQVhFghroz-yPJZryk7oTbQVjbCrcau4KSCOShS7jXtOjxX45gVG-RuQm-B4vVJ7Etq6MXKtqwL_9S63w_w8UA8I-n5Je_X1y-BgrB7cAZglTktH701z2tkj5BFXm-uxIwS6RwMVvw8fzAvtjfnaau74SFcvh8e8pNJxrt83ko2ZrOnNNXDbzAmOvf1FPyJqSmMtYd4fAONo8adrzZdRHjZ2qh9vA2u7KRsHl2SvYK4kj4UmIO1ARWy_42Dj" />
                    </div>
                    <div className="flex-1 bg-slate-200 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                        <img alt="Quảng cáo 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD84ZtwhqNoLeRBcmnSGwRnP6w5v8-uFzx6A7WzmhX91dTOMApyyBoeqKLtNN0I04i3WR_JRk0azeUvaUiU8hh4Z3CR9UcxaqA5-HHYiQeZod-KE8cr3jzpy5szG2lE0AD4oSns10pVVv2K025HMPX94W8uEmuzm9yvb7oTCzwv7bUl1N_miBNRmCSpX8HJbvILf2_Iw_kiwNw8JnegXZp6bYiPgy_dMlIoxa34LoQsPZUB1pE2Q1u5GlvmPQjiMDLR92OUJaTl48Xa" />
                    </div>
                </div>
            </section>
            <section className="bg-primary rounded-2xl p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 text-white gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">local_fire_department</span>
                            Hot Sale Cuối Tuần
                        </h2>
                        <div className="flex gap-2 items-center ml-4">
                            <span className="text-sm font-medium uppercase opacity-80">Kết thúc sau:</span>
                            <div className="flex gap-1 font-mono font-bold">
                                <span className="bg-black/20 px-2 py-1 rounded">05</span>
                                <span>:</span>
                                <span className="bg-black/20 px-2 py-1 rounded">12</span>
                                <span>:</span>
                                <span className="bg-black/20 px-2 py-1 rounded">45</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="text-sm font-medium hover:underline flex items-center gap-1">Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className="product-card bg-white dark:bg-slate-800 p-3 rounded-xl flex flex-col relative group">
                        <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">Giảm 15%</div>
                        <div className="aspect-square mb-4 p-2">
                            <img alt="iPhone 15" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuD8aJlxqN3W1lScET13qR7Mg1BsjZRbxDxyyvP_y0y58Zr96yQvbk8VnHQGXHkZf0QMVOuxM5BiJI8kQFDmhN4JGW0cLSreY59hOxzlQskgGG-LjkFEXLV4JYOQj2FZEK3byvJQ6_Zbv8NpDRgaDrpaAgHPU18H71yCzHhrqUJYipILtG7fd_3OYKt_hqRUX1z-USxyvVRQho86c4CMR8F12hSqVtoV1TJvloR_npizIGNj4woUir7OlRPAIrVwCPBusSrNxd4PuP" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xs font-semibold mb-2 line-clamp-2 dark:text-white">iPhone 15 128GB - Chính hãng VN/A</h3>
                            <div className="flex flex-col">
                                <span className="text-primary font-bold">19.790.000₫</span>
                                <span className="text-[10px] text-slate-400 line-through">22.990.000₫</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <button className="py-2 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-red-700 transition">MUA NGAY</button>
                            <button className="py-2 border border-primary text-primary text-[10px] font-bold rounded-lg hover:bg-red-50 transition flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                            </button>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-yellow-400 text-sm FILL-1">star</span>
                                <span className="text-[10px] font-medium opacity-70">4.5</span>
                            </div>
                            <button className="text-primary hover:bg-red-50 p-1 rounded-full transition">
                                <span className="material-symbols-outlined text-lg">favorite</span>
                            </button>
                        </div>
                    </div>
                    {/* Repeated Product Cards truncated for brevity in artifact, replicating structure */}
                    <div className="product-card bg-white dark:bg-slate-800 p-3 rounded-xl flex flex-col relative group">
                        <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">Giảm 21%</div>
                        <div className="aspect-square mb-4 p-2">
                            <img alt="Samsung Galaxy S24" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7CF0Nb20hejxoMgiFiNLMG1N_VLHbO_OaMw6TgzHQELkRhYbnKjNQOHnmUVa1APMUU5Eiq4lwL2bfqvW5oGcjGcOH4BrwVkWts4JjLszE6AbTbxOp8O_tpl4GHOjOjgzuAw9Ub1uCePiTPVkFdlaW5pGumNdmnHImyrAVcnjit7AxEuMynM8u0X7J0Hk5fnJH2oCXOoxBHpyvImXQ8NL-daxPczM2HrmtKGeh7Obgzch4va5V_45o1xWWuwX3kSW6YjITlgZjmc5X" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xs font-semibold mb-2 line-clamp-2 dark:text-white">Samsung Galaxy S24 Ultra 256GB</h3>
                            <div className="flex flex-col">
                                <span className="text-primary font-bold">26.990.000₫</span>
                                <span className="text-[10px] text-slate-400 line-through">33.990.000₫</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <button className="py-2 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-red-700 transition">MUA NGAY</button>
                            <button className="py-2 border border-primary text-primary text-[10px] font-bold rounded-lg hover:bg-red-50 transition flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                            </button>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-yellow-400 text-sm FILL-1">star</span>
                                <span className="text-[10px] font-medium opacity-70">4.8</span>
                            </div>
                            <button className="text-primary hover:bg-red-50 p-1 rounded-full transition">
                                <span className="material-symbols-outlined text-lg">favorite</span>
                            </button>
                        </div>
                    </div>
                    <div className="product-card bg-white dark:bg-slate-800 p-3 rounded-xl flex flex-col relative group">
                        <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">Giảm 45%</div>
                        <div className="aspect-square mb-4 p-2">
                            <img alt="Apple Watch" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Mg5pdjmduUfohNcZdyyHIIC1G1HcF0tl65ztm3MwjsazrIFAZwMBiTbyf9DoRwzVQoMABY52xTaCVKiX5-HarfaUH80KRCU-yN80eywO2OnFCFcKwwTGzmSPV6Fdk8hjvzUwdtxiLRlsV8qkyO4FCJ8bs-15GJ52hm1XYJCoeRb3YVLxf4tEjw_UkYKw9s4yV3GvfzB7qaxebXIdTlWCKRGdEmPRz9fYKghHvnY3YQRgovYx0pzHeT8EKBUntQsiAaTQVTBwiRNf" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xs font-semibold mb-2 line-clamp-2 dark:text-white">Apple Watch SE 2023 GPS 40mm</h3>
                            <div className="flex flex-col">
                                <span className="text-primary font-bold">5.890.000₫</span>
                                <span className="text-[10px] text-slate-400 line-through">7.490.000₫</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <button className="py-2 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-red-700 transition">MUA NGAY</button>
                            <button className="py-2 border border-primary text-primary text-[10px] font-bold rounded-lg hover:bg-red-50 transition flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                        Điện Thoại Nổi Bật
                    </h2>
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 hover:border-primary transition">Apple</button>
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 hover:border-primary transition">Samsung</button>
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 hover:border-primary transition">Xiaomi</button>
                        <button className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium bg-white dark:bg-slate-800 hover:border-primary transition">OPPO</button>
                        <a className="whitespace-nowrap text-xs font-medium text-slate-500 ml-4 hover:underline" href="#">Xem tất cả</a>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="product-card bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
                        <div className="aspect-square mb-4 relative">
                            <img alt="Điện thoại" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIvOOeph8y3uVnNKEGta0c2aRQi7XYzc385nD7sDJO_XnU3h16FsV5t4e6OthUNh_wfdxOh9ZpgfyTZeQMEBod5eY5796VOAmUQboyuA25uWwSgyS_7vv7_77-jcFvJfyn5NYM_gaKeSnc_peob2aLss7apDTYSo1kLoJzsj_1SOQK5bf6um_PZ5PD73CNuqITEN_573uVcYK-PzkVEmRh-mQqSMSCMBy-31UplbPpmmSRgBZtOYVh8xf7llBYMtPZXFrMUbV--Tah" />
                        </div>
                        <h3 className="text-sm font-semibold mb-2 line-clamp-2 dark:text-white">iPhone 14 Pro Max 128GB</h3>
                        <div className="mb-4">
                            <p className="text-primary font-bold">24.590.000₫</p>
                            <p class="text-xs text-slate-400 line-through">29.990.000₫</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded p-2 mb-4 text-[11px] text-slate-600 dark:text-slate-400">
                            Thu cũ đổi mới: Giảm đến 2 triệu đồng
                        </div>
                        <div className="mt-auto">
                            <div className="flex items-center gap-1 mb-3">
                                <div className="flex text-yellow-400"><span className="material-symbols-outlined text-xs FILL-1">star</span><span className="material-symbols-outlined text-xs FILL-1">star</span><span className="material-symbols-outlined text-xs FILL-1">star</span><span className="material-symbols-outlined text-xs FILL-1">star</span><span className="material-symbols-outlined text-xs FILL-1">star</span></div>
                                <span className="text-[10px] opacity-60">(128 đánh giá)</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-grow py-2 bg-primary text-white text-[11px] font-bold rounded-lg hover:bg-red-700 transition">Mua ngay</button>
                                <button className="p-2 border border-primary text-primary rounded-lg hover:bg-red-50 transition">
                                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">laptop_mac</span>
                    <span className="text-xs font-semibold">Macbook</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">watch</span>
                    <span className="text-xs font-semibold">Đồng hồ thông minh</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">headset</span>
                    <span className="text-xs font-semibold">Âm thanh</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">desktop_windows</span>
                    <span className="text-xs font-semibold">PC - Màn hình</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">print</span>
                    <span className="text-xs font-semibold">Phụ kiện PC</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition">
                    <span className="material-symbols-outlined text-3xl opacity-70">vacuum</span>
                    <span className="text-xs font-semibold">Gia dụng</span>
                </div>
            </section>
            <section className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Khuyến mãi & Tin tức</h2>
                    <p className="text-slate-400 text-sm">Đăng ký nhận ngay voucher 100k cho đơn hàng đầu tiên</p>
                </div>
                <div className="flex w-full max-w-md gap-2">
                    <input className="flex-grow h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-primary pl-4" placeholder="Nhập email của bạn..." type="email" />
                    <button className="bg-primary hover:bg-red-700 text-white px-6 font-bold rounded-lg transition">Đăng ký</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
