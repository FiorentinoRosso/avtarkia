import { ContactLinks } from "./contact-links";

const contactUrl = "https://t.me/Nfrtum";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Avtarkia — на главную">
          <span className="brand-wordmark">AVTARKIA</span>
        </a>
        <nav className="nav" aria-label="Навигация">
          <a href="#approach">Подход</a>
          <a href="#solutions">Решения</a>
          <a href="#process">Процесс</a>
          <a href="o-kompanii/">О компании</a>
        </nav>
        <a className="top-cta" href="#contact">Обсудить задачу</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-wordmark">AVTARKIA</p>
            <span className="hero-rule" aria-hidden="true" />
            <p className="eyebrow">Tailor-made analytics</p>
            <h1>Индивидуальная аналитика для бизнеса</h1>
            <p className="lead">Связываем финансы, продажи и операционные данные в один управленческий контур. Не типовой сервис, а рабочая система под ваши решения.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Разобрать задачу</a>
              <a className="button secondary" href="#solutions">Посмотреть подход</a>
            </div>
            <div className="hero-points" aria-label="Ключевые преимущества">
              <span>Ваши правила расчёта</span>
              <span>Ваши источники данных</span>
              <span>Ваша инфраструктура</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/og.png" alt="" />
          </div>
        </section>

        <section className="section intro" id="approach">
          <div className="section-head">
            <p className="eyebrow">Когда отчётов много, а ясности мало</p>
            <h2>Цифры должны помогать решать, а не требовать отдельного расследования</h2>
          </div>
          <p className="wide-text">Данные живут в учётной системе, CRM, банке, таблицах и головах сотрудников. Мы соединяем их, согласуем логику и показываем ровно то, что нужно собственнику и команде.</p>
        </section>

        <section className="section pains">
          <div className="section-head"><p className="eyebrow">Типичные ограничения</p><h2>Что отнимает время и искажает решения</h2></div>
          <div className="pain-grid">
            {[
              ["01", "Отчёты не сходятся", "Финансы, продажи и операции используют разные определения одной и той же цифры."],
              ["02", "Сводка приходит поздно", "К моменту закрытия месяца управленческое решение уже нельзя изменить."],
              ["03", "Excel стал процессом", "Команда копирует данные, чинит формулы и вручную собирает презентации."],
              ["04", "Нет единой картины", "Каждый отдел видит свой участок, а взаимосвязи остаются за рамками отчёта."],
              ["05", "План живёт отдельно", "Факт фиксируется, но причины отклонений и прогноз до конца периода не видны."],
              ["06", "Шаблон не подходит", "Типовой продукт не знает вашу экономику, роли, справочники и управленческие правила."],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section solution" id="solutions">
          <div className="solution-copy">
            <p className="eyebrow">Что собираем</p>
            <h2>Единый контур управленческой аналитики</h2>
            <p>Начинаем с решений и вопросов бизнеса, затем подключаем только нужные данные. Поэтому кабинет остаётся понятным и действительно используется.</p>
          </div>
          <div className="solution-list">
            {[
              ["Финансы и P&L", "Прибыль, расходы, денежный поток, бюджет и план-факт по вашей методологии."],
              ["Продажи и клиенты", "Воронка, каналы, продукты, маржа, повторные продажи и качество клиентской базы."],
              ["Операции", "Производительность, загрузка, сроки, запасы, закупки и узкие места процессов."],
              ["Прогноз и сценарии", "Ожидаемый результат периода, чувствительность и последствия управленческих решений."],
              ["Автоматизация отчётности", "Регулярная загрузка, проверки качества и обновление без ручной переклейки файлов."],
              ["ИИ поверх ваших данных", "Поиск отклонений, объяснения и подсказки в рамках согласованных показателей."],
            ].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
          </div>
        </section>

        <section className="section compare">
          <div className="section-head"><p className="eyebrow">Почему индивидуально</p><h2>Бизнес не должен подстраиваться под чужую модель</h2></div>
          <div className="compare-grid">
            <div className="muted-panel"><h3>Типовой сервис</h3><ul><li>Заранее заданные показатели.</li><li>Общая логика расчёта.</li><li>Ограниченный набор источников.</li><li>Много экранов без контекста решений.</li></ul></div>
            <div className="accent-panel"><h3>Avtarkia</h3><ul><li>Показатели из реальных вопросов бизнеса.</li><li>Согласованные определения и ответственность.</li><li>Интеграция с текущим ИТ-контуром.</li><li>Отклонения, причины и действия на одном экране.</li></ul></div>
          </div>
        </section>

        <section className="section start" id="process">
          <div className="section-head"><p className="eyebrow">Как запускаем</p><h2>От вопроса бизнеса до рабочего инструмента</h2></div>
          <div className="steps">
            {[
              ["1", "Разбираем решения", "Определяем, кто, когда и на основании каких цифр принимает решения."],
              ["2", "Согласуем логику", "Фиксируем показатели, источники, правила расчёта и проверки качества."],
              ["3", "Собираем первый контур", "Показываем рабочую версию на ваших данных и быстро уточняем детали."],
              ["4", "Встраиваем в работу", "Автоматизируем обновление, обучаем команду и развиваем по фактической пользе."],
            ].map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="section result">
          <div className="result-card">
            <p className="eyebrow">Результат</p>
            <h2>Один экран показывает состояние бизнеса и следующий вопрос для решения</h2>
            <div className="result-grid">
              <div><strong>Где создаётся прибыль</strong><span>по направлениям, продуктам, каналам и клиентам</span></div>
              <div><strong>Почему меняется результат</strong><span>факторы отклонения от плана и прошлого периода</span></div>
              <div><strong>Что требует внимания</strong><span>риски, аномалии и операционные ограничения</span></div>
              <div><strong>Что будет дальше</strong><span>прогноз и сценарии до конца периода</span></div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Первый шаг</p>
            <h2>Разберём один управленческий вопрос на ваших примерах</h2>
            <p>На короткой встрече определим, какие данные уже есть, где расходится логика и как может выглядеть первый полезный контур аналитики.</p>
          </div>
          <div className="contact-box">
            <h3>Что достаточно подготовить</h3>
            <ul><li>Главный вопрос или решение.</li><li>Текущий отчёт либо его пример.</li><li>Источники данных.</li><li>Кому и как часто нужен результат.</li></ul>
            <a className="button primary full" href={contactUrl} target="_blank" rel="noopener noreferrer">Обсудить проект в Telegram</a>
            <ContactLinks className="contact-methods-main" />
            <p className="small-note">Без готового технического задания — начнём с бизнес-задачи.</p>
          </div>
        </section>
      </main>

      <footer className="footer"><span>Avtarkia</span><span><a href="o-kompanii/">О компании</a> · <a href="mailto:info@4vdata.ru">info@4vdata.ru</a></span></footer>
    </>
  );
}
