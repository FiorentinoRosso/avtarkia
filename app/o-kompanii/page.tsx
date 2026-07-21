import type { Metadata } from "next";
import { ContactLinks } from "../contact-links";

const aboutUrl = "https://fiorentinorosso.github.io/avtarkia/o-kompanii/";
const ogImage = "https://fiorentinorosso.github.io/avtarkia/assets/og.png";
const profileImage = "https://fiorentinorosso.github.io/avtarkia/assets/ruslan-gayfutdinov.png";

export const metadata: Metadata = {
  title: "О компании Avtarkia и эксперте Руслане Гайфутдинове",
  description: "Avtarkia — индивидуальная бизнес-аналитика, финансовые модели и автоматизация отчётности. Эксперт: Руслан Гайфутдинов, FCCA.",
  alternates: { canonical: aboutUrl },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Avtarkia",
    url: aboutUrl,
    title: "О компании Avtarkia и эксперте Руслане Гайфутдинове",
    description: "Индивидуальная бизнес-аналитика, финансовые модели и автоматизация отчётности. Эксперт: Руслан Гайфутдинов, FCCA.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Avtarkia — индивидуальная аналитика для бизнеса" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О компании Avtarkia и эксперте Руслане Гайфутдинове",
    description: "Индивидуальная бизнес-аналитика, финансовые модели и автоматизация отчётности.",
    images: [ogImage],
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://fiorentinorosso.github.io/avtarkia/" },
        { "@type": "ListItem", position: 2, name: "О компании", item: aboutUrl },
      ],
    },
    { "@type": "ProfilePage", mainEntity: { "@id": `${aboutUrl}#person` } },
    {
      "@type": "Person",
      "@id": `${aboutUrl}#person`,
      name: "Руслан Гайфутдинов",
      honorificSuffix: "FCCA",
      jobTitle: "Эксперт по финансовой аналитике и автоматизации",
      image: profileImage,
      url: aboutUrl,
      sameAs: [
        "https://profi.ru/profile/GayfutdinovRV/",
        "https://www.linkedin.com/in/ruslan-gaifutdinov-fcca-670609101/",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <header className="topbar">
        <a className="brand" href="../" aria-label="Avtarkia — на главную">
          <span className="brand-wordmark">AVTARKIA</span>
        </a>
        <nav className="nav" aria-label="Навигация">
          <a href="../#approach">Подход</a>
          <a href="../#solutions">Решения</a>
          <a href="../#process">Процесс</a>
          <a href="#top" aria-current="page">О компании</a>
        </nav>
        <a className="top-cta" href="#contact">Обсудить задачу</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-wordmark">AVTARKIA</p>
            <span className="hero-rule" aria-hidden="true" />
            <p className="eyebrow">О компании</p>
            <h1>Финансы, данные и автоматизация в одной рабочей системе</h1>
            <p className="lead">Avtarkia помогает собственникам и руководителям перейти от разрозненных отчётов к проверяемой управленческой картине.</p>
            <div className="hero-actions">
              <a className="button primary" href="#expert">Об эксперте</a>
              <a className="button secondary" href="#contact">Связаться</a>
            </div>
            <div className="hero-points" aria-label="Ключевые компетенции">
              <span>Финансовая методология</span>
              <span>Инженерия данных</span>
              <span>Автоматизация контроля</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/og.png" alt="" />
          </div>
        </section>

        <section className="section contact" id="expert">
          <div>
            <p className="eyebrow">Эксперт</p>
            <h2>Руслан Гайфутдинов, FCCA</h2>
            <p>Специализация — управленческая аналитика, финансовые модели, автоматизация отчётности и контроль качества данных.</p>
            <div className="hero-actions">
              <a className="button primary" href="https://profi.ru/profile/GayfutdinovRV/" target="_blank" rel="noopener noreferrer">Профиль на Profi.ru</a>
              <a className="button secondary" href="https://www.linkedin.com/in/ruslan-gaifutdinov-fcca-670609101/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="contact-box">
            <img src="../assets/ruslan-gayfutdinov.png" width="1150" height="2560" alt="Руслан Гайфутдинов, FCCA" />
          </div>
        </section>

        <section className="section solution">
          <div className="solution-copy">
            <p className="eyebrow">Профессиональная основа</p>
            <h2>Финансовая экспертиза и практическая реализация</h2>
            <p>От методики показателей до работающей системы, которую можно проверить на исходных данных.</p>
          </div>
          <div className="solution-list">
            <div><strong>с 2013 года</strong><p>член ACCA</p></div>
            <div><strong>University of London</strong><p>магистр Professional Accountancy</p></div>
            <div><strong>Финансы + данные</strong><p>финансовые модели, SQL, Python и BI</p></div>
            <div><strong>Контроль качества</strong><p>проверяемые правила, контрольные суммы и допущения</p></div>
          </div>
        </section>

        <section className="section pains">
          <div className="section-head">
            <p className="eyebrow">Как строится работа</p>
            <h2>Сначала решение и проверяемые цифры. Потом визуализация.</h2>
          </div>
          <div className="pain-grid">
            <article><span>01</span><h3>Формулируем вопрос</h3><p>Определяем, какое управленческое решение должно приниматься по результату.</p></article>
            <article><span>02</span><h3>Фиксируем методику</h3><p>Согласуем источники, правила расчёта, допущения и контрольные суммы.</p></article>
            <article><span>03</span><h3>Подтверждаем процесс</h3><p>Визуализация появляется после проверки цифр, автоматизация — после подтверждения повторяемости.</p></article>
          </div>
        </section>

        <section className="section intro">
          <div className="section-head">
            <p className="eyebrow">Подход Avtarkia</p>
            <h2>На стыке финансов, данных и реализации</h2>
          </div>
          <p className="wide-text">Финансовая модель задаёт смысл показателей, инженерный контур обеспечивает повторяемую загрузку, а контроль качества связывает итог с исходными операциями. Если правило нельзя объяснить пользователю и проверить на исходной строке, оно не считается готовым.</p>
        </section>

        <section className="section compare">
          <div className="section-head">
            <p className="eyebrow">Компетенции и ответственность</p>
            <h2>Практическая аналитика без подмены формальных ролей</h2>
          </div>
          <div className="compare-grid">
            <div className="muted-panel"><h3>Практический фокус</h3><ul><li>Управленческая отчётность.</li><li>Финансовые модели.</li><li>SQL, Python и BI.</li><li>Автоматизация повторяемых процессов.</li></ul></div>
            <div className="accent-panel"><h3>Граница ответственности</h3><ul><li>Avtarkia не заменяет аудитора или налогового консультанта.</li><li>Формальная ответственность остаётся у профильных специалистов.</li><li>Результаты проектов публикуются только с учётом конфиденциальности клиента.</li></ul></div>
          </div>
        </section>

        <section className="section result">
          <div className="result-card">
            <p className="eyebrow">Как подтверждается результат</p>
            <h2>Каждая цифра должна выдерживать проверку</h2>
            <div className="result-grid">
              <div><strong>Контрольные суммы</strong><span>сопоставляются с выбранным первичным источником</span></div>
              <div><strong>Формулы</strong><span>проверяются на обычных и пограничных сценариях</span></div>
              <div><strong>Описание показателей</strong><span>включает ключевые правила и допущения</span></div>
              <div><strong>Исправление ошибок</strong><span>делается в общем правиле на воспроизводимом примере</span></div>
            </div>
          </div>
        </section>

        <section className="section solution">
          <div className="solution-copy">
            <p className="eyebrow">Публичные реквизиты</p>
            <h2>Прозрачная основа сотрудничества</h2>
            <p>Банковские реквизиты и адрес предоставляются сторонам договора при необходимости.</p>
          </div>
          <div className="solution-list">
            <div><strong>Исполнитель</strong><p>Гайфутдинов Руслан Васильевич</p></div>
            <div><strong>Статус</strong><p>Плательщик налога на профессиональный доход</p></div>
            <div><strong>ИНН</strong><p>165047079359</p></div>
            <div><strong>Контакт</strong><p><a href="mailto:info@4vdata.ru">info@4vdata.ru</a></p></div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Связаться</p>
            <h2>Разберём вашу задачу</h2>
            <p>Определим первый полезный контур аналитики, источники данных и правила расчёта.</p>
          </div>
          <div className="contact-box">
            <h3>Удобный способ связи</h3>
            <a className="button primary full" href="https://t.me/Nfrtum" target="_blank" rel="noopener noreferrer">Обсудить проект в Telegram</a>
            <ContactLinks className="contact-methods-main" />
          </div>
        </section>
      </main>

      <footer className="footer"><span>Avtarkia</span><span><a href="../">Главная</a> · <a href="mailto:info@4vdata.ru">info@4vdata.ru</a></span></footer>
    </>
  );
}
