import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/bf9812fa-8086-4858-a27a-acb51353cfe2/bucket/9465ae2f-5fe0-4b54-816f-bb35c6425581.jpg";
const VK_LINK = "https://vk.com/respublicavestmark";
const TIKTOK_LINK = "https://www.tiktok.com/@.4123544?_r=1&_t=ZP-977fqBsf7eR";

const NAV_LINKS = [
  { label: "Описание", href: "#about" },
  { label: "Наш коллектив", href: "#team" },
  { label: "Магазин", href: "#shop" },
  { label: "Наши сервера", href: "#servers" },
];

const TEAM = [
  { name: "Кирилл", role: "Создатель сервера", emoji: "👑", vk: "https://vk.com/id1094786468" },
  { name: "Артём", role: "Заместитель создателя", emoji: "🛡️", vk: "https://vk.com/id1118347121" },
  { name: "Юрий", role: "Создатель сайта", emoji: "💻", vk: "https://vk.com/hotjuk20110712" },
];

const SHOP_ITEMS = [
  { name: "Проходка", price: "200₽", emoji: "🎟️", desc: "С её помощью вы сможете играть с нами" },
  { name: "Разбан", price: "400₽", emoji: "🔓", desc: "Снятие блокировки аккаунта и возврат на сервер" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["about", "team", "shop", "servers"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-minecraft" style={{ background: "#0a0c0f", color: "#e8e0d0", fontSize: "18px" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,12,15,0.97)" : "rgba(10,12,15,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(180,130,60,0.25)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="text-2xl">⚔️</span>
            <div>
              <div className="font-minecraft text-sm leading-none tracking-widest" style={{ color: "#c9a84c" }}>
                РЕСПУБЛИКА
              </div>
              <div className="font-minecraft text-2xl leading-none tracking-wider text-white">
                ВЕСТМАРК
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#c9a84c" : "#a09080",
                    background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "#e8e0d0"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "#a09080"; e.currentTarget.style.background = "transparent"; } }}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <a
            href={VK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-bold font-minecraft tracking-wider transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)", color: "#0a0c0f" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            ВКонтакте
          </a>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-1" style={{ background: "rgba(10,12,15,0.99)" }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 px-3 rounded-lg text-sm font-medium border-b"
                style={{ color: "#a09080", borderColor: "rgba(255,255,255,0.05)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 py-3 px-3 rounded-lg text-lg font-bold font-minecraft text-center tracking-wider"
              style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)", color: "#0a0c0f" }}
            >
              ВКонтакте
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})`, opacity: 0.35 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,15,0.3) 0%, rgba(10,12,15,0.1) 40%, rgba(10,12,15,0.7) 80%, #0a0c0f 100%)" }} />
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full opacity-60 animate-pulse" style={{ background: "#c9a84c" }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full opacity-40 animate-pulse" style={{ background: "#c9a84c", animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full opacity-50 animate-pulse" style={{ background: "#c9a84c", animationDelay: "2s" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-8"
            style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c" }}
          >
            ⚔️ MINECRAFT РП-СЕРВЕР
          </div>

          <h1 className="font-pixel leading-tight mb-4 text-white" style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)", letterSpacing: "0.03em" }}>
            РЕСПУБЛИКА
          </h1>
          <h1
            className="font-pixel leading-tight mb-10"
            style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)", letterSpacing: "0.03em", color: "#c9a84c", textShadow: "0 0 20px rgba(201,168,76,0.5), 4px 4px 0px rgba(100,60,0,0.8)" }}
          >
            ВЕСТМАРК
          </h1>

          <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "#8a7a6a" }}>
            Давно мечтали о сервере где будет РП и ванила? Тогда тебе к нам!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-4 rounded-xl font-minecraft tracking-wider text-xl transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)", color: "#0a0c0f" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              УЗНАТЬ БОЛЬШЕ
            </a>
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-minecraft tracking-wider text-xl transition-all duration-200"
              style={{ background: "transparent", border: "2px solid rgba(201,168,76,0.4)", color: "#c9a84c" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "transparent"; }}
            >
              ВКонтакте
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
          <Icon name="ChevronDown" size={20} style={{ color: "#c9a84c" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9a84c" }}>— ОПИСАНИЕ —</div>
            <h2 className="font-pixel text-white" style={{ fontSize: "clamp(1rem, 3vw, 1.8rem)" }}>О СЕРВЕРЕ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl p-8" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="text-3xl mb-4">🏰</div>
              <h3 className="font-pixel text-white mb-4" style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>Кто мы?</h3>
              <p className="leading-relaxed" style={{ color: "#8a7a6a" }}>
                Наш сервер — это новый проект, в котором находятся элементы РП и выживания. Мы создаём уникальное пространство, где каждый игрок может найти своё место и роль.
              </p>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-pixel text-white mb-4" style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>Что вас ждёт?</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🏢", text: "Воплощение и развитие своей бизнес-империи" },
                  { icon: "💰", text: "Регулярные выплаты зарплаты" },
                  { icon: "🤝", text: "Взаимодействие с игроками и администрацией" },
                  { icon: "🎉", text: "Участие в регулярных ивентах и многое другое" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl p-8 text-center" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-lg font-medium italic" style={{ color: "#c9a84c" }}>
              "Давно мечтали о сервере где будет РП и ванила? Тогда тебе к нам!"
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
      </div>

      {/* TEAM */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9a84c" }}>— ЛЮДИ —</div>
            <h2 className="font-pixel text-white" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.6rem)" }}>НАШ КОЛЛЕКТИВ</h2>
            <p className="mt-3 text-sm" style={{ color: "#5a4a3a" }}>Те, кто создают и поддерживают сервер</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM.map((m) => (
              <a
                key={m.name}
                href={m.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 text-center transition-all duration-300 block"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.background = "rgba(201,168,76,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "none"; }}
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  {m.emoji}
                </div>
                <div className="font-pixel text-white mb-2" style={{ fontSize: "0.65rem" }}>{m.name}</div>
                <div className="font-pixel mb-2" style={{ fontSize: "0.5rem", color: "#c9a84c" }}>{m.role}</div>
                <div className="font-pixel" style={{ fontSize: "0.45rem", color: "#5a4a3a" }}>ВКонтакте →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
      </div>

      {/* SHOP */}
      <section id="shop" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9a84c" }}>— ДОНАТ —</div>
            <h2 className="font-pixel text-white" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.6rem)" }}>МАГАЗИН</h2>
            <p className="mt-3 text-sm" style={{ color: "#5a4a3a" }}>Поддержи сервер и получи привилегии</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {SHOP_ITEMS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <div className="font-minecraft text-xl font-bold text-white mb-2">{item.name}</div>
                <div className="text-sm mb-4" style={{ color: "#6a5a4a" }}>{item.desc}</div>
                <div className="font-minecraft text-3xl font-bold" style={{ color: "#c9a84c" }}>{item.price}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl p-6 text-center" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="text-2xl mb-3">💬</div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8a7a6a" }}>
              Чтобы оформить заказ — пишите нам в личные сообщения сообщества ВКонтакте
            </p>
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-minecraft font-bold tracking-wider text-sm transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)", color: "#0a0c0f" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <Icon name="ExternalLink" size={16} />
              ПЕРЕЙТИ
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
      </div>

      {/* SERVERS */}
      <section id="servers" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#c9a84c" }}>— PLAY —</div>
            <h2 className="font-pixel text-white" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.6rem)" }}>НАШИ СЕРВЕРА</h2>
            <p className="mt-3 text-sm" style={{ color: "#5a4a3a" }}>Выбери платформу и присоединяйся</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* PE */}
            <div className="rounded-2xl p-6 transition-all duration-300" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-minecraft font-bold text-white text-xl leading-tight">Республика Вестмарк</div>
                  <div className="font-minecraft text-sm tracking-wider mt-1" style={{ color: "#c9a84c" }}>MINECRAFT PE</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Онлайн
                </div>
              </div>
              <p className="text-sm mb-5" style={{ color: "#6a5a4a" }}>Bedrock Edition — Играй на телефоне, компьютере или планшете.</p>
              <a
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-minecraft font-bold tracking-wider text-sm transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #c9a84c, #a07830)", color: "#0a0c0f" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 16px rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <Icon name="ExternalLink" size={14} />
                ПЕРЕЙТИ
              </a>
            </div>

            {/* JAVA */}
            <div className="rounded-2xl p-6 transition-all duration-300" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">🖥️</div>
                  <div className="font-minecraft font-bold text-white text-xl leading-tight">Республика Вестмарк</div>
                  <div className="font-minecraft text-sm tracking-wider mt-1" style={{ color: "#6a7a8a" }}>MINECRAFT JAVA</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(100,100,120,0.15)", color: "#8090a0" }}>
                  🔧 Разработка
                </div>
              </div>
              <p className="text-sm mb-5" style={{ color: "#4a4a5a" }}>Java Edition — скоро откроется для игроков ПК</p>
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-minecraft font-bold tracking-wider text-sm cursor-not-allowed"
                style={{ background: "rgba(255,255,255,0.05)", color: "#5a5a6a", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Icon name="Clock" size={14} />
                В РАЗРАБОТКЕ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(201,168,76,0.12)", background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚔️</span>
            <div>
              <div className="font-minecraft font-bold text-xs tracking-widest" style={{ color: "#c9a84c" }}>РЕСПУБЛИКА</div>
              <div className="font-minecraft font-bold text-sm text-white tracking-wider">ВЕСТМАРК</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#5a4a3a" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#c9a84c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#5a4a3a"; }}
            >
              <Icon name="ExternalLink" size={14} />
              ВКонтакте
            </a>
            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
              style={{ color: "#8a7a6a" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#c9a84c"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#8a7a6a"; e.currentTarget.style.transform = "none"; }}
            >
              🎵 Наш TikTok
            </a>
          </div>

          <div className="text-xs" style={{ color: "#3a3a4a" }}>
            © 2024 Республика Вестмарк
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;