import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/bf9812fa-8086-4858-a27a-acb51353cfe2/files/b8b113b7-90be-4119-8acf-4d6b59ebc1ee.jpg";
const TEAM_BG = "https://cdn.poehali.dev/projects/bf9812fa-8086-4858-a27a-acb51353cfe2/files/ccb04164-bb37-4b9f-ab82-2a7a31321a4c.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "О сервере", href: "#about" },
  { label: "Коллектив", href: "#team" },
  { label: "Магазин", href: "#shop" },
  { label: "Сервера", href: "#servers" },
  { label: "Контакты", href: "#contacts" },
];

const TEAM_MEMBERS = [
  { name: "ShadowByte", role: "Основатель", avatar: "👑", color: "#00ff88" },
  { name: "NeonWolf", role: "Администратор", avatar: "🛡️", color: "#00ffff" },
  { name: "CryptoFox", role: "Модератор", avatar: "⚔️", color: "#a855f7" },
  { name: "StarDust", role: "Разработчик", avatar: "💻", color: "#f59e0b" },
  { name: "IronGhost", role: "Модератор", avatar: "🎯", color: "#00ff88" },
  { name: "PixelQueen", role: "Дизайнер", avatar: "🎨", color: "#ec4899" },
];

const SHOP_ITEMS = [
  { name: "VIP статус", price: "199₽", icon: "⭐", desc: "Расширенный доступ к привилегиям", popular: true },
  { name: "Кейс х10", price: "99₽", icon: "🎁", desc: "Набор из 10 случайных предметов", popular: false },
  { name: "Premium", price: "499₽", icon: "💎", desc: "Максимальный набор привилегий", popular: false },
  { name: "Монеты х1000", price: "149₽", icon: "🪙", desc: "Внутриигровая валюта сервера", popular: false },
];

const SERVERS_LIST = [
  { name: "SurvivalCraft", players: "124/200", mode: "Выживание", status: "online", ping: "12ms" },
  { name: "SkyWars", players: "89/150", mode: "PvP", status: "online", ping: "8ms" },
  { name: "Creative Hub", players: "45/100", mode: "Творческий", status: "online", ping: "15ms" },
  { name: "HardCore", players: "0/50", mode: "Хардкор", status: "offline", ping: "—" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--dark-bg)" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8, 12, 20, 0.95)" : "rgba(8, 12, 20, 0.5)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,255,136,0.15)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-oswald font-bold text-sm"
              style={{ background: "linear-gradient(135deg, var(--neon-green), var(--neon-cyan))", color: "#080c14" }}
            >
              SRV
            </div>
            <span className="font-oswald text-xl font-semibold tracking-wider text-white">
              PRIME<span className="neon-text">SERVER</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-medium text-gray-300">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#servers"
            className="hidden md:inline-flex btn-neon font-oswald text-sm font-medium px-5 py-2 rounded-lg tracking-wider"
          >
            ИГРАТЬ
          </a>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "rgba(8, 12, 20, 0.98)" }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white font-medium py-1 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})`, opacity: 0.2 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--dark-bg) 0%, transparent 30%, transparent 70%, var(--dark-bg) 100%)" }} />
        <div className="hero-glow w-96 h-96 top-20 -left-20" style={{ background: "var(--neon-green)" }} />
        <div className="hero-glow w-80 h-80 bottom-20 -right-10" style={{ background: "var(--neon-cyan)" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 fade-in-up"
            style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "var(--neon-green)" }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            СЕРВЕР ОНЛАЙН • 258 ИГРОКОВ
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl font-bold tracking-wider mb-6 leading-none fade-in-up fade-in-up-delay-1">
            PRIME<br />
            <span className="gradient-text">SERVER</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed fade-in-up fade-in-up-delay-2">
            Лучший игровой сервер с уникальными режимами, дружным сообществом и постоянными обновлениями. Здесь каждый найдёт своё место.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up fade-in-up-delay-3">
            <button className="btn-neon-filled font-oswald text-base font-bold px-8 py-4 rounded-xl tracking-wider">
              НАЧАТЬ ИГРАТЬ
            </button>
            <button className="btn-neon font-oswald text-base font-bold px-8 py-4 rounded-xl tracking-wider">
              НАШИ СЕРВЕРА
            </button>
          </div>

          <div className="flex justify-center gap-12 mt-20 fade-in-up fade-in-up-delay-4">
            {[
              { val: "258", label: "Онлайн" },
              { val: "12K+", label: "Игроков" },
              { val: "4", label: "Режима" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-oswald text-3xl font-bold neon-text">{s.val}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs text-gray-500">Скролл</span>
          <Icon name="ChevronDown" size={16} className="text-gray-500" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "var(--neon-green)" }}>
                — О СЕРВЕРЕ
              </div>
              <h2 className="font-oswald text-5xl font-bold text-white mb-6 leading-tight">
                МЫ СОЗДАЁМ<br /><span className="gradient-text">ЛУЧШИЙ ОПЫТ</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                PRIME SERVER — это место, где каждый игрок чувствует себя как дома. Мы предлагаем уникальные игровые режимы, честную экономику и дружное сообщество, которое растёт каждый день.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Наша команда работает круглосуточно, чтобы обеспечить стабильную работу серверов, проводить ивенты и добавлять новый контент. Обновления выходят каждую неделю!
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", label: "Анти-чит защита" },
                  { icon: "Zap", label: "Низкий пинг" },
                  { icon: "Clock", label: "24/7 поддержка" },
                  { icon: "Star", label: "Еженедельные ивенты" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
                    >
                      <Icon name={f.icon} size={16} style={{ color: "var(--neon-green)" }} />
                    </div>
                    <span className="text-gray-300 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,255,255,0.05))", transform: "rotate(3deg)" }}
              />
              <div className="relative rounded-2xl overflow-hidden neon-border p-1">
                <img src={HERO_BG} alt="О сервере" className="w-full h-72 object-cover rounded-xl" />
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
                  style={{ background: "rgba(8,12,20,0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(0,255,136,0.2)" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-oswald font-bold text-white text-lg">Работаем с 2021</div>
                      <div className="text-gray-400 text-sm">Более 3 лет опыта</div>
                    </div>
                    <div className="text-right">
                      <div className="neon-text font-oswald font-bold text-2xl">99.9%</div>
                      <div className="text-gray-400 text-sm">Аптайм</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "var(--neon-cyan)" }}>
              — КОЛЛЕКТИВ
            </div>
            <h2 className="font-oswald text-5xl font-bold text-white">
              НАША <span className="gradient-text">КОМАНДА</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Люди, которые делают сервер живым каждый день</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.name}
                className="hover-card card-dark rounded-2xl p-5 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
                  style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
                >
                  {m.avatar}
                </div>
                <div className="font-oswald font-bold text-white text-sm">{m.name}</div>
                <div className="text-xs mt-1" style={{ color: m.color }}>{m.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden relative">
            <img src={TEAM_BG} alt="Команда" className="w-full h-48 object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-oswald text-2xl font-bold text-white mb-4">Хочешь присоединиться?</div>
                <button className="btn-neon font-oswald text-sm font-bold px-6 py-3 rounded-xl tracking-wider">
                  ПОДАТЬ ЗАЯВКУ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "var(--neon-green)" }}>
              — НАШ МАГАЗИН
            </div>
            <h2 className="font-oswald text-5xl font-bold text-white">
              ПРИВИЛЕГИИ &amp; <span className="gradient-text">ТОВАРЫ</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Расширь свои возможности и поддержи развитие сервера</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOP_ITEMS.map((item) => (
              <div
                key={item.name}
                className="hover-card card-dark rounded-2xl p-6 relative"
                style={{
                  border: item.popular ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: item.popular ? "0 0 20px rgba(0,255,136,0.08)" : "none",
                }}
              >
                {item.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full font-oswald tracking-wider"
                    style={{ background: "var(--neon-green)", color: "#080c14" }}
                  >
                    POPULAR
                  </div>
                )}
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-oswald text-xl font-bold text-white mb-2">{item.name}</div>
                <div className="text-gray-500 text-sm mb-4">{item.desc}</div>
                <div className="flex items-center justify-between">
                  <span className="font-oswald text-2xl font-bold neon-text">{item.price}</span>
                  <button className="btn-neon text-xs font-bold px-4 py-2 rounded-lg font-oswald tracking-wider">
                    КУПИТЬ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVERS */}
      <section id="servers" className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "var(--neon-cyan)" }}>
              — НАШИ СЕРВЕРА
            </div>
            <h2 className="font-oswald text-5xl font-bold text-white">
              ВЫБЕРИ <span className="gradient-text">РЕЖИМ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVERS_LIST.map((srv) => (
              <div
                key={srv.name}
                className="hover-card card-dark rounded-2xl p-6 flex items-center justify-between gap-4"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: srv.status === "online" ? "rgba(0,255,136,0.1)" : "rgba(255,50,50,0.1)",
                      border: srv.status === "online" ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,50,50,0.3)",
                    }}
                  >
                    <Icon
                      name="Server"
                      size={20}
                      style={{ color: srv.status === "online" ? "var(--neon-green)" : "#ff3232" }}
                    />
                  </div>
                  <div>
                    <div className="font-oswald font-bold text-white text-lg">{srv.name}</div>
                    <div className="text-gray-500 text-sm">{srv.mode}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="flex items-center gap-2 text-sm font-medium mb-1 justify-end"
                    style={{ color: srv.status === "online" ? "var(--neon-green)" : "#ff6464" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" style={{ boxShadow: srv.status === "online" ? "0 0 6px var(--neon-green)" : "none" }} />
                    {srv.status === "online" ? "Онлайн" : "Оффлайн"}
                  </div>
                  <div className="text-gray-400 text-xs">{srv.players} игроков</div>
                  <div className="text-gray-600 text-xs">Пинг: {srv.ping}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div
              className="inline-block px-6 py-4 rounded-xl font-oswald text-lg font-bold tracking-wider"
              style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.2)", color: "var(--neon-green)" }}
            >
              IP: <span className="text-white">play.primeserver.ru</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest mb-4" style={{ color: "var(--neon-green)" }}>
              — КОНТАКТЫ
            </div>
            <h2 className="font-oswald text-5xl font-bold text-white">
              СВЯЖИСЬ С <span className="gradient-text">НАМИ</span>
            </h2>
            <p className="text-gray-500 mt-4">Мы всегда рады помочь и ответить на вопросы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: "MessageCircle", label: "Discord", val: "discord.gg/primeserver", color: "#5865F2" },
              { icon: "Send", label: "Telegram", val: "@primeserver", color: "#00ffff" },
              { icon: "Mail", label: "Email", val: "admin@primeserver.ru", color: "#00ff88" },
            ].map((c) => (
              <div
                key={c.label}
                className="hover-card card-dark rounded-2xl p-6 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                >
                  <Icon name={c.icon} size={24} style={{ color: c.color }} fallback="Link" />
                </div>
                <div className="font-oswald font-bold text-white text-lg mb-1">{c.label}</div>
                <div className="text-gray-500 text-sm">{c.val}</div>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto">
            <div className="card-dark rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 className="font-oswald font-bold text-white text-xl mb-4">Написать нам</h3>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваш никнейм"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all placeholder:text-gray-600"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "Montserrat, sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--neon-green)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                <textarea
                  placeholder="Ваше сообщение..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none transition-all placeholder:text-gray-600"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "Montserrat, sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--neon-green)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
                <button className="btn-neon-filled w-full font-oswald tracking-wider text-sm py-3 rounded-xl">
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-oswald font-bold text-sm"
                style={{ background: "linear-gradient(135deg, var(--neon-green), var(--neon-cyan))", color: "#080c14" }}
              >
                SRV
              </div>
              <span className="font-oswald text-xl font-semibold text-white tracking-wider">
                PRIME<span className="neon-text">SERVER</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-300 text-xs transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="text-gray-600 text-xs">
              © 2024 PRIMESERVER. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
