const contacts = [
  { label: "Telegram", detail: "@Nfrtum", href: "https://t.me/Nfrtum", mark: "T" },
  { label: "WhatsApp", detail: "Написать", href: "https://wa.me/qr/QME4Q3PSIIAJF1", mark: "W" },
  { label: "MAX", detail: "Написать", href: "https://max.ru/u/f9LHodD0cOLAjqkoKX8pl9Hv4TiIWUYnNJDe6ZqmUyAtlSqjYCbKffk9API", mark: "M" },
  { label: "E-mail", detail: "info@4vdata.ru", href: "mailto:info@4vdata.ru", mark: "@" },
];

export function ContactLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`contact-methods ${className}`.trim()} aria-label="Способы связи">
      {contacts.map((contact) => {
        const external = contact.href.startsWith("http");
        return (
          <a
            key={contact.label}
            href={contact.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="contact-mark" aria-hidden="true">{contact.mark}</span>
            <span><strong>{contact.label}</strong><small>{contact.detail}</small></span>
          </a>
        );
      })}
    </nav>
  );
}
