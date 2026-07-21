import type { Metadata } from "next";
import { ContactLinks } from "../contact-links";

const aboutUrl = "https://fiorentinorosso.github.io/avtarkia/o-kompanii/";
const ogImage = "https://fiorentinorosso.github.io/avtarkia/assets/og.png";

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
      image: "https://fiorentinorosso.github.io/avtarkia/assets/ruslan-gayfutdinov.jpg",
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
      <header className="topbar about-topbar">
        <a className="brand" href="../" aria-label="Avtarkia — на главную">
          <span className="brand-wordmark">AVTARKIA</span>
        </a>
        <nav className="nav" aria-label="Навигация">
          <a href="../#approach">Подход</a>
          <a href="../#solutions">Решения</a>
          <a href="../#process">Процесс</a>
          <a href="#top" aria-current="page">О компании</a>
        </nav>
        <a className="top-cta" href="#about-contact">Обсудить задачу</a>
      </header>

      <main className="about-page" id="top">
        <section className="about-hero">
          <div className="about-hero-copy">
            <nav className="about-back" aria-label="Хлебные крошки">
              <ol>
                <li><a href="../">Главная</a></li>
                <li aria-current="page">О компании</li>
              </ol>
            </nav>
            <p className="eyebrow">О Avtarkia</p>
            <h1>Финансы, данные и автоматизация в одной рабочей системе</h1>
            <p className="lead">Avtarkia помогает собственникам и руководителям перейти от разрозненных отчётов к проверяемой управленческой картине.</p>
            <a className="button primary" href="#about-contact">Обсудить задачу</a>
          </div>
          <div className="about-monogram" aria-hidden="true"><span>A</span></div>
        </section>

        <section className="about-profile">
          <div className="profile-photo-wrap">
            <img src="../assets/ruslan-gayfutdinov.jpg" width="720" height="720" alt="Руслан Гайфутдинов, FCCA" />
          </div>
          <div className="profile-copy">
            <p className="eyebrow">Эксперт</p>
            <h2>Руслан Гайфутдинов, FCCA</h2>
            <p className="profile-lead">Специализация — управленческая аналитика, финансовые модели, автоматизация отчётности и контроль качества данных.</p>
            <div className="credential-grid">
              <div><strong>с 2013 года</strong><span>член ACCA</span></div>
              <div><strong>University of London</strong><span>магистр Professional Accountancy</span></div>
              <div><strong>Финансы + данные</strong><span>от методики до работающей системы</span></div>
            </div>
            <div className="profile-links">
              <a href="https://profi.ru/profile/GayfutdinovRV/" target="_blank" rel="noopener noreferrer">Профиль на Profi.ru</a>
              <a href="https://www.linkedin.com/in/ruslan-gaifutdinov-fcca-670609101/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

        <section className="about-principles">
          <div className="about-section-head">
            <p className="eyebrow">Как строится работа</p>
            <h2>Сначала решение и проверяемые цифры. Потом визуализация.</h2>
          </div>
          <div className="principle-grid">
            <article><span>01</span><h3>Формулируем вопрос</h3><p>Определяем, какое управленческое решение должно приниматься по результату.</p></article>
            <article><span>02</span><h3>Фиксируем методику</h3><p>Согласуем источники, правила расчёта, допущения и контрольные суммы.</p></article>
            <article><span>03</span><h3>Подтверждаем процесс</h3><p>Визуализация появляется после проверки цифр, автоматизация — после подтверждения повторяемости.</p></article>
          </div>
        </section>

        <section className="about-method">
          <div>
            <p className="eyebrow">Подход Avtarkia</p>
            <h2>На стыке финансов, данных и реализации</h2>
          </div>
          <div className="about-prose">
            <p>Финансовая модель задаёт смысл показателей, инженерный контур обеспечивает повторяемую загрузку, а контроль качества связывает итог с исходными операциями. Это особенно важно там, где собственник, бухгалтерия, продажи и разработчики используют разные определения одной цифры.</p>
            <p>Перед визуализацией формируется словарь показателей и набор контрольных примеров. Если правило нельзя объяснить пользователю и проверить на исходной строке, оно не считается готовым.</p>
          </div>
        </section>

        <section className="about-competence">
          <div className="about-section-head">
            <p className="eyebrow">Компетенции и ответственность</p>
            <h2>Практическая аналитика без подмены формальных ролей</h2>
          </div>
          <div className="competence-grid">
            <div><h3>Практический фокус</h3><p>Управленческая отчётность, финансовые модели, SQL, Python, BI и автоматизация повторяемых процессов.</p></div>
            <div><h3>Граница ответственности</h3><p>Avtarkia не заменяет аудитора, налогового консультанта или штатную ИТ-службу там, где требуется их формальная ответственность.</p></div>
            <div><h3>Конфиденциальность</h3><p>Публичные профили подтверждают личность и опыт. Результаты проектов публикуются только с учётом конфиденциальности клиента.</p></div>
          </div>
        </section>

        <section className="about-proof">
          <div>
            <p className="eyebrow">Как подтверждается результат</p>
            <h2>Каждая цифра должна выдерживать проверку</h2>
          </div>
          <ul>
            <li>Контрольные суммы сопоставляются с выбранным первичным источником.</li>
            <li>Формулы проверяются на обычных и пограничных сценариях.</li>
            <li>Пользователь получает описание показателей и ключевых допущений.</li>
            <li>Ошибки воспроизводятся на конкретном примере и исправляются в общем правиле.</li>
          </ul>
        </section>

        <section className="about-legal">
          <div className="about-section-head">
            <p className="eyebrow">Публичные реквизиты</p>
            <h2>Прозрачная основа сотрудничества</h2>
          </div>
          <dl>
            <div><dt>Исполнитель</dt><dd>Гайфутдинов Руслан Васильевич</dd></div>
            <div><dt>Статус</dt><dd>Плательщик налога на профессиональный доход</dd></div>
            <div><dt>ИНН</dt><dd>165047079359</dd></div>
            <div><dt>Контакт</dt><dd><a href="mailto:info@4vdata.ru">info@4vdata.ru</a></dd></div>
          </dl>
          <p className="legal-note">Банковские реквизиты и адрес предоставляются сторонам договора при необходимости.</p>
        </section>

        <section className="about-contact" id="about-contact">
          <div>
            <p className="eyebrow">Связаться</p>
            <h2>Разберём вашу задачу</h2>
            <p>Определим первый полезный контур аналитики, источники данных и правила расчёта.</p>
          </div>
          <ContactLinks className="contact-methods-about" />
        </section>
      </main>

      <footer className="footer"><span>Avtarkia</span><span><a href="../">Главная</a> · <a href="mailto:info@4vdata.ru">info@4vdata.ru</a></span></footer>
    </>
  );
}
