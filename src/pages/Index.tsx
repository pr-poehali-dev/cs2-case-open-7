import Icon from '@/components/ui/icon';

const CASE_IMAGE = "https://cdn.poehali.dev/projects/5805c55d-f42c-47ec-bbd4-d48003a6cc92/files/3c464076-b1be-47ea-b425-7f2b6fffbe1b.jpg";
const KNIFE_IMAGE = "https://cdn.poehali.dev/projects/5805c55d-f42c-47ec-bbd4-d48003a6cc92/files/7853d425-42a3-4aed-b7b1-8fef46ba52fd.jpg";
const HERO_IMAGE = "https://cdn.poehali.dev/projects/5805c55d-f42c-47ec-bbd4-d48003a6cc92/files/36cdcdac-0398-431e-90f7-d3ca98b5da98.jpg";

const cases = [
  {
    id: 1,
    name: "Кейс Революция",
    price: "₽89",
    oldPrice: "₽149",
    tag: "ХИТ",
    tagColor: "bg-red-500",
    rarity: "★★★★★",
    image: CASE_IMAGE,
    items: ["AK-47 Неоновая революция", "M4A4 Империатрица", "AWP Нео-Нуар"],
  },
  {
    id: 2,
    name: "Кейс Лихорадка",
    price: "₽49",
    oldPrice: "₽99",
    tag: "ДЁШЕВО",
    tagColor: "bg-green-600",
    rarity: "★★★★☆",
    image: CASE_IMAGE,
    items: ["Glock-18 Водяной монстр", "USP-S Неонуар", "P250 Пурпурный демон"],
  },
  {
    id: 3,
    name: "Перчаточный кейс",
    price: "₽199",
    oldPrice: null,
    tag: "РЕДКИЙ",
    tagColor: "bg-purple-600",
    rarity: "★★★★★",
    image: CASE_IMAGE,
    items: ["★ Перчатки Гидра", "★ Перчатки Гладиатор", "★ Спортивные перчатки"],
  },
  {
    id: 4,
    name: "Гремучий кейс",
    price: "₽39",
    oldPrice: "₽79",
    tag: "НОВЫЙ",
    tagColor: "bg-yellow-500",
    rarity: "★★★☆☆",
    image: CASE_IMAGE,
    items: ["Desert Eagle Гремучая змея", "Five-SeveN Регулятор", "MAC-10 Дождь"],
  },
  {
    id: 5,
    name: "Киловатт кейс",
    price: "₽129",
    oldPrice: null,
    tag: "ТОП",
    tagColor: "bg-orange-500",
    rarity: "★★★★★",
    image: CASE_IMAGE,
    items: ["★ Нож Скелет", "AK-47 Иллюзия", "M4A1-S Бородатый лев"],
  },
  {
    id: 6,
    name: "Бесплатный кейс",
    price: "БЕСПЛАТНО",
    oldPrice: null,
    tag: "FREE",
    tagColor: "bg-green-500",
    rarity: "★★★☆☆",
    image: CASE_IMAGE,
    items: ["Случайный скин", "Бонусный дроп", "Ежедневный приз"],
    isFree: true,
  },
];

const stats = [
  { value: "1 250 000+", label: "Открытых кейсов" },
  { value: "320 000+", label: "Игроков" },
  { value: "98%", label: "Вывод в Стим" },
  { value: "24/7", label: "Поддержка" },
];

const faq = [
  {
    q: "Как получить бесплатные кейсы КС2?",
    a: "Каждый день вы получаете бесплатный кейс просто за вход на сайт. Также можно получить дополнительные бесплатные кейсы КС2 за регистрацию, пополнение баланса и реферальную программу.",
  },
  {
    q: "Сколько стоит кейс в КС2 на нашем сайте?",
    a: "Цены на кейсы CS2 начинаются от ₽39. У нас самые дешёвые кейсы КС2 — гораздо выгоднее, чем в Steam.",
  },
  {
    q: "Как вывести скины в Стим?",
    a: "После открытия кейса кс2 вы можете мгновенно вывести выигранные скины в свой аккаунт Steam. Вывод работает 24/7 без задержек.",
  },
  {
    q: "Что такое кейс батл CS2?",
    a: "Кейс батл — это режим, где несколько игроков одновременно открывают кейсы. Тот, кто выбьет самый дорогой скин, забирает всё. Настоящий адреналин!",
  },
  {
    q: "Какие кейсы могут выпасть еженедельно в КС2?",
    a: "Еженедельный кейс КС2 падает за игру в матчмейкинге. У нас вы можете купить или получить бесплатно любой еженедельный кейс ксго и cs2.",
  },
  {
    q: "Как работает симулятор открытия кейсов КС2?",
    a: "Симулятор кейсов CS2 позволяет открывать кейсы с реальными шансами дропа. Все предметы соответствуют официальной статистике CS2.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cs-dark)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(13, 17, 23, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--cs-border)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FF8C00, #FFD700)' }}>
            <Icon name="Zap" size={18} className="text-black" />
          </div>
          <span className="font-oswald text-xl font-bold tracking-wider" style={{ color: '#FFD700' }}>КЕЙСДРОП</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#cases" className="font-rubik text-sm font-medium transition-colors hover:text-yellow-400" style={{ color: '#9CA3AF' }}>Кейсы</a>
          <a href="#battle" className="font-rubik text-sm font-medium transition-colors hover:text-yellow-400" style={{ color: '#9CA3AF' }}>Кейс Батл</a>
          <a href="#faq" className="font-rubik text-sm font-medium transition-colors hover:text-yellow-400" style={{ color: '#9CA3AF' }}>FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary-cs px-4 py-2 rounded text-sm">Войти</button>
          <button className="btn-primary-cs px-4 py-2 rounded text-sm">Регистрация</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ background: `linear-gradient(to bottom, rgba(13,17,23,0.7) 0%, rgba(13,17,23,0.95) 100%), url(${HERO_IMAGE}) center/cover no-repeat` }}>
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #FF8C00, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-slide-up"
            style={{ background: 'rgba(255, 140, 0, 0.15)', border: '1px solid rgba(255, 140, 0, 0.4)' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-rubik text-sm" style={{ color: '#FF8C00' }}>Онлайн: 4 237 игроков</span>
          </div>

          <h1 className="font-oswald font-bold mb-6 leading-none animate-slide-up delay-100"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#FFFBF0' }}>
            ОТКРЫВАЙ КЕЙСЫ КС2{' '}
            <span className="rarity-gold">БЕСПЛАТНО</span>
          </h1>

          <p className="font-rubik text-lg mb-8 max-w-2xl mx-auto animate-slide-up delay-200"
            style={{ color: '#9CA3AF' }}>
            Лучший сайт для открытия кейсов CS2. Бесплатные кейсы ежедневно,
            кейс батл, вывод скинов в Стим. Дешевле чем в Steam!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <button className="btn-primary-cs px-8 py-4 rounded-lg text-lg flex items-center gap-2 justify-center glow-orange">
              <Icon name="Gift" size={20} />
              Получить бесплатный кейс
            </button>
            <button className="btn-secondary-cs px-8 py-4 rounded-lg text-lg flex items-center gap-2 justify-center">
              <Icon name="Swords" size={20} />
              Кейс Батл
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up delay-400">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-oswald text-3xl font-bold glow-text" style={{ color: '#FFD700' }}>{s.value}</div>
                <div className="font-rubik text-sm mt-1" style={{ color: '#6B7280' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: 'rgba(255, 140, 0, 0.6)' }} />
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-rubik text-sm uppercase tracking-widest mb-3 block" style={{ color: '#FF8C00' }}>
              Каталог
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFBF0' }}>
              КЕЙСЫ КС2
            </h2>
            <p className="font-rubik" style={{ color: '#6B7280' }}>
              Открывай кейсы CS2 онлайн — дешёвые кейсы ксго с выводом в Стим
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Все кейсы", "Популярные", "Дешёвые", "С ножами", "Бесплатные"].map((tab, i) => (
              <button key={tab}
                className={`font-oswald px-5 py-2 rounded text-sm tracking-wider transition-all ${i === 0 ? 'btn-primary-cs' : 'btn-secondary-cs'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.id} className="card-cs rounded-xl overflow-hidden case-shine relative group">
                <div className="relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1a2030, #0d1117)', aspectRatio: '1' }}>
                  <img src={c.image} alt={`Кейс ${c.name} КС2`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, var(--cs-card) 0%, transparent 60%)' }} />

                  <div className={`absolute top-3 left-3 ${c.tagColor} px-3 py-1 rounded font-oswald text-xs font-bold tracking-wider text-white`}>
                    {c.tag}
                  </div>

                  {c.isFree && (
                    <div className="absolute top-3 right-3 animate-pulse-glow rounded-full p-2"
                      style={{ background: 'rgba(255, 140, 0, 0.2)', border: '1px solid #FF8C00' }}>
                      <Icon name="Gift" size={16} style={{ color: '#FF8C00' }} />
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-oswald text-lg font-bold" style={{ color: '#FFFBF0' }}>{c.name}</div>
                    <div className="text-yellow-400 text-sm">{c.rarity}</div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-col gap-1 mb-4">
                    {c.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: '#FF8C00' }} />
                        <span className="font-rubik text-xs" style={{ color: '#9CA3AF' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-oswald text-2xl font-bold"
                        style={{ color: c.isFree ? '#22C55E' : '#FFD700' }}>
                        {c.price}
                      </span>
                      {c.oldPrice && (
                        <span className="font-rubik text-sm ml-2 line-through" style={{ color: '#6B7280' }}>
                          {c.oldPrice}
                        </span>
                      )}
                    </div>
                    <button className="btn-primary-cs px-4 py-2 rounded text-sm flex items-center gap-1">
                      <Icon name="Package" size={14} />
                      Открыть
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-secondary-cs px-10 py-4 rounded-lg font-oswald text-lg tracking-wider">
              Показать все кейсы КС2
            </button>
          </div>
        </div>
      </section>

      {/* BATTLE */}
      <section id="battle" className="py-20 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.05) 0%, rgba(13,17,23,1) 50%, rgba(255,215,0,0.03) 100%)' }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-rubik text-sm uppercase tracking-widest mb-3 block" style={{ color: '#FF8C00' }}>
                Битва игроков
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#FFFBF0' }}>
                КЕЙС БАТЛ<br />
                <span className="rarity-gold">КС2</span>
              </h2>
              <p className="font-rubik text-lg mb-6" style={{ color: '#9CA3AF' }}>
                Сразись с другими игроками в кейс батл CS2! Открывайте кейсы одновременно — тот, кто выбьет самый дорогой скин, забирает всё. Настоящий адреналин!
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Режим 1v1, 2v2, 4 игрока",
                  "Мгновенный вывод в Steam",
                  "Прозрачный алгоритм дропа",
                  "Турниры с призовым фондом",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255, 140, 0, 0.2)', border: '1px solid rgba(255,140,0,0.4)' }}>
                      <Icon name="Check" size={12} style={{ color: '#FF8C00' }} />
                    </div>
                    <span className="font-rubik" style={{ color: '#D1D5DB' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary-cs px-8 py-4 rounded-lg text-lg flex items-center gap-2 glow-orange">
                <Icon name="Swords" size={20} />
                Начать батл
              </button>
            </div>

            <div className="relative">
              <div className="relative animate-float">
                <div className="rounded-2xl overflow-hidden glow-orange" style={{ border: '1px solid rgba(255,140,0,0.4)' }}>
                  <img src={KNIFE_IMAGE} alt="Нож КС2 легендарный скин" className="w-full" />
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FF8C00, #FFD700)' }}>
                  <span className="font-oswald font-bold text-black text-sm">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-rubik text-sm uppercase tracking-widest mb-3 block" style={{ color: '#FF8C00' }}>
              Просто
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold" style={{ color: '#FFFBF0' }}>
              КАК ОТКРЫТЬ КЕЙС КС2
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "LogIn", title: "Войди в аккаунт", desc: "Авторизация через Steam — быстро и безопасно" },
              { step: "02", icon: "CreditCard", title: "Пополни баланс", desc: "Дешёвые кейсы от ₽39 или бесплатный бонус при регистрации" },
              { step: "03", icon: "Package", title: "Открой кейс", desc: "Выбери кейс кс2 из каталога и крути рулетку" },
              { step: "04", icon: "ArrowUpRight", title: "Выведи в Steam", desc: "Скины cs2 мгновенно в твой аккаунт Steam" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all group-hover:glow-orange"
                    style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.2), rgba(255,215,0,0.1))', border: '1px solid rgba(255,140,0,0.4)' }}>
                    <Icon name={item.icon} size={24} style={{ color: '#FF8C00' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 font-oswald text-xs font-bold px-2 py-1 rounded"
                    style={{ background: '#FF8C00', color: '#0D1117' }}>{item.step}</div>
                </div>
                <h3 className="font-oswald text-lg font-bold mb-2" style={{ color: '#FFFBF0' }}>{item.title}</h3>
                <p className="font-rubik text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CASE BANNER */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.15), rgba(255,215,0,0.08))', border: '1px solid rgba(255,140,0,0.4)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />
            <Icon name="Gift" size={48} className="mx-auto mb-4" style={{ color: '#FFD700' }} />
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFBF0' }}>
              БЕСПЛАТНЫЙ КЕЙС КС2
            </h2>
            <p className="font-rubik text-lg mb-6" style={{ color: '#9CA3AF' }}>
              Каждый день бесплатное открытие кейсов КС2 для всех зарегистрированных игроков.
              Бесплатные кейсы CS2 — просто за вход на сайт!
            </p>
            <button className="btn-primary-cs px-10 py-4 rounded-lg text-xl glow-orange">
              Получить бесплатный кейс
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-rubik text-sm uppercase tracking-widest mb-3 block" style={{ color: '#FF8C00' }}>
              Вопросы
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold" style={{ color: '#FFFBF0' }}>
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q}
                className="card-cs rounded-xl group"
                style={{ border: '1px solid var(--cs-border)' }}>
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-oswald text-lg font-medium" style={{ color: '#FFFBF0' }}>{item.q}</span>
                  <Icon name="ChevronDown" size={18} style={{ color: '#FF8C00' }}
                    className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="font-rubik" style={{ color: '#9CA3AF', lineHeight: '1.7' }}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--cs-border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FF8C00, #FFD700)' }}>
                  <Icon name="Zap" size={18} className="text-black" />
                </div>
                <span className="font-oswald text-xl font-bold" style={{ color: '#FFD700' }}>КЕЙСДРОП</span>
              </div>
              <p className="font-rubik text-sm" style={{ color: '#6B7280' }}>
                Лучший сайт для открытия кейсов КС2 и CS2. Бесплатные кейсы, кейс батл, вывод в Steam.
              </p>
            </div>
            <div>
              <h4 className="font-oswald text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#FF8C00' }}>Кейсы</h4>
              <ul className="space-y-2">
                {["Все кейсы КС2", "Дешёвые кейсы", "Бесплатные кейсы", "Кейсы с ножами", "Популярные кейсы"].map(l => (
                  <li key={l}><a href="#" className="font-rubik text-sm hover:text-yellow-400 transition-colors" style={{ color: '#6B7280' }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-oswald text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#FF8C00' }}>Режимы</h4>
              <ul className="space-y-2">
                {["Открыть кейс КС2", "Кейс батл CS2", "Симулятор кейсов", "Ежедневный кейс", "Кейсы с обменом"].map(l => (
                  <li key={l}><a href="#" className="font-rubik text-sm hover:text-yellow-400 transition-colors" style={{ color: '#6B7280' }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-oswald text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#FF8C00' }}>Информация</h4>
              <ul className="space-y-2">
                {["Как работает сайт", "Правила", "Честный дроп", "Поддержка"].map(l => (
                  <li key={l}><a href="#" className="font-rubik text-sm hover:text-yellow-400 transition-colors" style={{ color: '#6B7280' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8"
            style={{ borderTop: '1px solid var(--cs-border)' }}>
            <p className="font-rubik text-xs" style={{ color: '#4B5563' }}>
              © 2026 КейсДроп — открытие кейсов КС2, CS2, CSGO онлайн. Не аффилирован с Valve Corporation.
            </p>
            <p className="font-rubik text-xs mt-2 md:mt-0" style={{ color: '#4B5563' }}>
              18+ | Играй ответственно
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}