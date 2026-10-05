import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Stethoscope,
  Smile,
  Navigation,
  MessageCircle,
} from "lucide-react";
import "./App.css";
import { useLang } from "./LanguageContext";
import {
  CLINIC,
  GOOGLE_REVIEWS,
  LOCATIONS,
  SERVICES,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  telegramLink,
  whatsappLink,
} from "./content";

import receptionPhoto from "./assets/images/magelogo.jpg";
import treatmentRoomBluePhoto from "./assets/images/p2.png";
import treatmentRoomBeigePhoto from "./assets/images/p3.png";
import clinicLogo from "./assets/images/magelogo.jpg";
import summitExteriorPhoto from "./assets/images/summit-exterior.jpg";

const ICONS = {
  Stethoscope,
  Smile,
  ShieldCheck,
  CheckCircle2,
};

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 22l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9 9 0 1 1 12 21zm5.1-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.3 8.1 8.1 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3c0-.1 0-.3-.1-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.7.7-.7 1.8.8 2.1.9 2.2c.1.2 1.5 2.3 3.6 3.2 1.3.6 1.8.6 2.4.5.4-.1 1.6-.6 1.8-1.3s.2-1.1.1-1.2-.2-.2-.5-.3z" />
  </svg>
);

const TelegramIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.9 4.3 2.8 11.6c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8 1 .8.5 0 .7-.2 1-.6l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9l3.5-16.5c.3-1.3-.5-1.9-1.5-1.5z" />
  </svg>
);

const LogoMark = ({ className = "h-11 w-11 rounded-xl object-cover shadow-md" }) => (
  <img src={clinicLogo} alt="" className={className} />
);

const MessageButtons = ({ compact = false }) => {
  const { t } = useLang();
  return (
    <div className={`flex ${compact ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
      <a
        href={whatsappLink(
          "Hello Hailu Speciality Dental Clinic, I would like to ask about an appointment."
        )}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md"
      >
        <WhatsAppIcon />
        {t("contact.whatsapp")}
      </a>
      <a
        href={telegramLink()}
        className="inline-flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1b8bc0] text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md"
      >
        <TelegramIcon />
        {t("contact.telegram")}
      </a>
    </div>
  );
};

const MapEmbed = ({ query, title }) => (
  <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-100 h-[220px] sm:h-[280px]">
    <iframe
      title={title}
      src={mapsEmbedUrl(query)}
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

const Navbar = ({ onNavigate, currentView }) => {
  const { t, toggleLang, lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), view: "home" },
    { name: t("nav.services"), view: "services" },
    { name: t("nav.locations"), view: "locations" },
    { name: t("nav.contact"), view: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button
            type="button"
            className="flex items-center cursor-pointer bg-transparent border-0 p-0"
            onClick={() => onNavigate("home")}
          >
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="flex flex-col text-left">
                <span className="font-bold text-slate-900 tracking-tight leading-tight">
                  HAILU SPECIALITY
                </span>
                <span className="text-xs font-semibold text-cyan-600 tracking-wider">
                  DENTAL CLINIC
                </span>
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.view}
                type="button"
                onClick={() => onNavigate(link.view)}
                className={`text-sm font-medium transition-colors ${
                  currentView === link.view
                    ? "text-cyan-600 font-semibold"
                    : "text-slate-600 hover:text-cyan-600"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              type="button"
              onClick={toggleLang}
              className="text-xs font-bold border border-slate-200 rounded-full px-3 py-2 text-slate-700 hover:border-cyan-600 hover:text-cyan-700"
              aria-label="Switch language"
            >
              {lang === "en" ? "አማርኛ" : "English"}
            </button>

            <button
              type="button"
              onClick={() => onNavigate("appointment")}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-cyan-100"
            >
              {t("nav.book")}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="text-xs font-bold border border-slate-200 rounded-full px-3 py-2 text-slate-700"
            >
              {lang === "en" ? "አማ" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.view}
                type="button"
                onClick={() => {
                  onNavigate(link.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
                  currentView === link.view
                    ? "bg-cyan-50 text-cyan-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onNavigate("appointment");
                setIsOpen(false);
              }}
              className="block w-full text-center bg-cyan-600 text-white px-4 py-3 rounded-xl font-medium"
            >
              {t("nav.book")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ onNavigate }) => {
  const { t } = useLang();
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11 rounded-xl object-cover" />
              <div className="flex flex-col">
                <span className="font-bold tracking-tight leading-tight">
                  HAILU SPECIALITY
                </span>
                <span className="text-xs text-cyan-400 tracking-wider">
                  DENTAL CLINIC
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t("foot.blurb")}</p>
            <MessageButtons compact />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyan-400">
              {t("foot.links")}
            </h3>
            <ul className="space-y-2.5">
              {["home", "services", "locations", "contact"].map((view) => (
                <li key={view}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(view);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-white text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-3 w-3 text-cyan-500" />
                    {t(`nav.${view}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyan-400">
              {t("foot.contact")}
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`mailto:${CLINIC.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                {CLINIC.email}
              </a>
              <a
                href={`tel:${LOCATIONS[0].phoneTel}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                {LOCATIONS[0].phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => {
                  onNavigate("locations");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                {t("foot.addresses")}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} {t("foot.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

const HomeView = ({ onNavigate }) => {
  const { t } = useLang();

  return (
    <div className="animate-fade-in pt-20">
      <section className="relative bg-gradient-to-b from-cyan-50/50 via-white to-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <a
                href={CLINIC.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-semibold tracking-wide"
              >
                <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
                {t("hero.badge")}
              </a>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                {t("hero.titleA")}{" "}
                <span className="text-cyan-600">{t("hero.titleB")}</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t("hero.lead")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => onNavigate("appointment")}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl shadow-cyan-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  {t("hero.book")}
                </button>
                <a
                  href={`tel:${LOCATIONS[0].phoneTel}`}
                  className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="h-5 w-5 text-cyan-600" />
                  {t("hero.call")}
                </a>
                <a
                  href={whatsappLink(
                    "Hello Hailu Speciality Dental Clinic, I would like to book a visit."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon />
                  {t("hero.whatsapp")}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[420px] lg:h-[480px] bg-slate-100 border-4 border-white">
                <img
                  src={receptionPhoto}
                  alt="Hailu Speciality Dental Clinic reception desk"
                  className="clinic-photo hero-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="font-semibold text-sm">{t("hero.captionTitle")}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{t("hero.caption")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="space-y-1 p-4 rounded-xl bg-slate-50/50"
            >
              <div className="flex justify-center text-amber-400 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-slate-900">{t("trust.rating")}</h3>
              <p className="text-xs text-slate-500">{t("trust.ratingSub")}</p>
            </a>
            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{t("trust.hubs")}</h3>
              <p className="text-xs text-slate-500">{t("trust.hubsSub")}</p>
            </div>
            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{t("trust.docs")}</h3>
              <p className="text-xs text-slate-500">{t("trust.docsSub")}</p>
            </div>
            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{t("trust.book")}</h3>
              <p className="text-xs text-slate-500">{t("trust.bookSub")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">{t("home.servicesTitle")}</h2>
            <p className="text-slate-600 text-sm">{t("home.servicesLead")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = ICONS[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {t(service.descKey)}
                    </p>
                    <p className="text-cyan-700 text-xs font-semibold mb-6">
                      {t(service.priceKey)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate("services")}
                    className="text-cyan-600 font-semibold text-sm flex items-center gap-1"
                  >
                    {t("home.learn")}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-sm font-semibold rounded-full text-slate-700 bg-white"
            >
              {t("home.explore")}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[240px] sm:h-[320px] lg:h-[380px] bg-slate-100 border-4 border-slate-50">
              <img
                src={treatmentRoomBluePhoto}
                alt="Modern treatment room at Hailu Speciality Dental Clinic"
                className="clinic-photo room-photo"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">{t("welcome.title")}</h2>
              <p className="text-slate-600 leading-relaxed">{t("welcome.body")}</p>
              <ul className="space-y-3 pt-2">
                {["welcome.b1", "welcome.b2", "welcome.b3", "welcome.b4"].map((key) => (
                  <li key={key} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">{t("team.title")}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{t("team.lead")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img
                src={summitExteriorPhoto}
                alt="Summit branch building"
                className="h-48 w-full object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900">{t("team.c1Title")}</h3>
                <p className="text-sm text-slate-600 mt-1">{t("team.c1Body")}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img
                src={treatmentRoomBeigePhoto}
                alt="22 branch treatment room"
                className="h-48 w-full clinic-photo room-photo"
              />
              <div className="p-6">
                <h3 className="font-bold text-slate-900">{t("team.c2Title")}</h3>
                <p className="text-sm text-slate-600 mt-1">{t("team.c2Body")}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href={whatsappLink(
                "Hello, I would like to know which dentist will see me."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-700 font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              {t("team.cta")}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">{t("prices.title")}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{t("prices.lead")}</p>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl border border-slate-100 divide-y divide-slate-200">
            {SERVICES.map((s) => (
              <div key={s.id} className="flex justify-between gap-4 p-5">
                <span className="font-medium text-slate-800">{t(s.titleKey)}</span>
                <span className="text-sm text-cyan-700 font-semibold shrink-0">
                  {t(s.priceKey)}
                </span>
              </div>
            ))}
            <div className="flex justify-between gap-4 p-5">
              <span className="font-medium text-slate-800">{t("prices.consult")}</span>
              <span className="text-sm text-slate-600 text-right">{t("prices.consultFee")}</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-6 max-w-2xl mx-auto">
            {t("prices.note")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">{t("gallery.title")}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{t("gallery.lead")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: receptionPhoto, alt: t("gallery.reception"), extra: "hero-photo" },
              { src: treatmentRoomBluePhoto, alt: t("gallery.room1"), extra: "room-photo" },
              { src: treatmentRoomBeigePhoto, alt: t("gallery.room2"), extra: "room-photo" },
              { src: summitExteriorPhoto, alt: t("gallery.exterior"), extra: "" },
            ].map((img) => (
              <figure
                key={img.alt}
                className="rounded-2xl overflow-hidden bg-slate-100 h-52 border border-slate-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full clinic-photo ${img.extra}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesView = ({ onNavigate }) => {
  const { t } = useLang();
  return (
    <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">{t("svc.pageTitle")}</h1>
        <p className="text-slate-600">{t("svc.pageLead")}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-[220px] sm:h-[300px] lg:h-[340px] bg-slate-100 border-4 border-slate-50 order-2 lg:order-1">
          <img
            src={treatmentRoomBeigePhoto}
            alt="Dental treatment chair at Hailu Speciality Dental Clinic"
            className="clinic-photo room-photo"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
          {SERVICES.map((service) => {
            const IconComponent = ICONS[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{t(service.titleKey)}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{t(service.descKey)}</p>
                  <p className="text-cyan-700 text-xs font-semibold">{t(service.priceKey)}</p>
                </div>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => onNavigate("appointment")}
                    className="text-cyan-600 font-semibold text-sm flex items-center gap-1"
                  >
                    {t("svc.bookFor")} {t(service.titleKey)}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LocationsView = () => {
  const { t } = useLang();
  return (
    <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">{t("loc.pageTitle")}</h1>
        <p className="text-slate-600">{t("loc.pageLead")}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.id}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 space-y-5"
          >
            <h2 className="text-2xl font-bold text-cyan-600">{t(loc.nameKey)}</h2>
            <div className="space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                <span>{t(loc.addressKey)}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-400 shrink-0" />
                <a href={`tel:${loc.phoneTel}`} className="font-semibold text-slate-900">
                  {loc.phoneDisplay}
                </a>
              </div>
              {loc.extraPhoneDisplay && (
                <p className="text-xs text-slate-500 pl-8">
                  {t("loc.also")}:{" "}
                  <a href={`tel:${loc.extraPhoneTel}`} className="font-semibold text-slate-800">
                    {loc.extraPhoneDisplay}
                  </a>
                </p>
              )}
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-slate-400 shrink-0" />
                <span>{t(loc.hoursKey)}</span>
              </div>
            </div>
            <MapEmbed query={loc.mapsQuery} title={t(loc.nameKey)} />
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${loc.phoneTel}`}
                className="bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-xl font-semibold text-sm"
              >
                {t("loc.call")}
              </a>
              <a
                href={mapsDirectionsUrl(loc.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-slate-200 text-slate-800 text-center py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-1"
              >
                <Navigation className="h-4 w-4" />
                {t("loc.directions")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactView = () => {
  const { t } = useLang();
  const summit = LOCATIONS[0];
  return (
    <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">{t("contact.title")}</h1>
        <p className="text-slate-600">{t("contact.lead")}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">{t("contact.details")}</h2>
          <div className="space-y-4 text-slate-600">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <span>
                  {t(loc.nameKey)}:{" "}
                  <a href={`tel:${loc.phoneTel}`} className="font-semibold text-slate-900">
                    {loc.phoneDisplay}
                  </a>
                </span>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-600 shrink-0" />
              <a href={`mailto:${CLINIC.email}`} className="font-medium">
                {CLINIC.email}
              </a>
            </div>
          </div>
          <MessageButtons />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{t("contact.mapTitle")}</h2>
          <MapEmbed query={summit.mapsQuery} title={t("contact.mapTitle")} />
          <a
            href={mapsDirectionsUrl(summit.mapsQuery)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cyan-700 font-semibold text-sm"
          >
            <Navigation className="h-4 w-4" />
            {t("loc.directions")}
          </a>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900">{t("contact.reviewsTitle")}</h2>
        <p className="text-sm text-slate-600 leading-relaxed">{t("contact.reviewsLead")}</p>
        <div className="space-y-4">
          {GOOGLE_REVIEWS.map((rev) => (
            <div key={rev.id} className="p-4 bg-slate-50 rounded-xl space-y-1">
              <div className="flex text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 italic">"{rev.text}"</p>
              <p className="text-xs font-semibold text-slate-900 text-right">
                — {t("contact.googleLabel")} · {rev.branch}
              </p>
            </div>
          ))}
        </div>
        <a
          href={CLINIC.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-cyan-700 font-semibold"
        >
          {t("contact.seeGoogle")}
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const AppointmentView = () => {
  const { t } = useLang();
  const [status, setStatus] = useState("idle");
  const [formSnap, setFormSnap] = useState(null);

  const readForm = (form) => ({
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    branch: form.branch.value,
    service: form.service.value,
    date: form.date.value,
    time: form.time.value,
    notes: form.notes.value.trim(),
  });

  const waText = (data) =>
    `Appointment request — Hailu Speciality Dental Clinic
Name: ${data.name}
Phone: ${data.phone}
Branch: ${data.branch}
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Notes: ${data.notes || "-"}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = readForm(e.target);
    setFormSnap(data);
    setStatus("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CLINIC.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New appointment request — ${data.name}`,
          name: data.name,
          phone: data.phone,
          branch: data.branch,
          service: data.service,
          date: data.date,
          time: data.time,
          notes: data.notes || "(none)",
        }),
      });
      if (!res.ok) throw new Error("formsubmit failed");
      window.open(whatsappLink(waText(data)), "_blank", "noopener");
      setStatus("ok");
    } catch {
      window.open(whatsappLink(waText(data)), "_blank", "noopener");
      setStatus("error");
    }
  };

  if (status === "ok" || status === "error") {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-slate-50 animate-fade-in">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-100 space-y-6">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{t("book.okTitle")}</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {status === "ok" ? t("book.okBody") : t("book.okError")}
          </p>
          {formSnap && (
            <a
              href={whatsappLink(waText(formSnap))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold"
            >
              <WhatsAppIcon />
              {t("book.whatsappAlt")}
            </a>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-cyan-600 font-semibold text-sm hover:underline"
          >
            {t("book.again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50/50 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{t("book.title")}</h1>
          <p className="text-slate-600 text-sm">{t("book.lead")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.name")}
              </label>
              <input
                required
                name="name"
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none text-sm"
                placeholder={t("book.namePh")}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.phone")}
              </label>
              <input
                required
                name="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none text-sm"
                placeholder={t("book.phonePh")}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.branch")}
              </label>
              <select
                required
                name="branch"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none bg-white text-sm"
              >
                <option value="">{t("book.branchPh")}</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={t(loc.nameKey)}>
                    {t(loc.nameKey)}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.service")}
              </label>
              <select
                required
                name="service"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none bg-white text-sm"
              >
                <option value="">{t("book.servicePh")}</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={t(s.titleKey)}>
                    {t(s.titleKey)}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.date")}
              </label>
              <input
                required
                name="date"
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {t("book.time")}
              </label>
              <select
                required
                name="time"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none bg-white text-sm"
              >
                <option value="anytime">{t("book.timeAny")}</option>
                <option value="morning">{t("book.morning")}</option>
                <option value="afternoon">{t("book.afternoon")}</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              {t("book.notes")}
            </label>
            <textarea
              name="notes"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 outline-none resize-none text-sm"
              placeholder={t("book.notesPh")}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:opacity-70 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-cyan-200"
          >
            {status === "sending" ? t("book.sending") : t("book.submit")}
          </button>
          <p className="text-center text-xs text-slate-500">{t("book.note")}</p>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const { t } = useLang();
  const [currentView, setCurrentView] = useState("home");

  const go = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView onNavigate={go} />;
      case "services":
        return <ServicesView onNavigate={go} />;
      case "locations":
        return <LocationsView />;
      case "contact":
        return <ContactView />;
      case "appointment":
        return <AppointmentView />;
      default:
        return <HomeView onNavigate={go} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col selection:bg-cyan-100 selection:text-cyan-900">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <Navbar currentView={currentView} onNavigate={go} />
      <main className="flex-grow">{renderView()}</main>

      <div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-2xl z-40 flex">
        <a
          href={`tel:${LOCATIONS[0].phoneTel}`}
          className="flex-1 py-3.5 flex flex-col items-center justify-center text-slate-700 border-r border-slate-100"
        >
          <Phone className="h-5 w-5 mb-1 text-cyan-600" />
          <span className="text-[11px] font-semibold">{t("bar.call")}</span>
        </a>
        <a
          href={whatsappLink("Hello Hailu Speciality Dental Clinic")}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3.5 flex flex-col items-center justify-center text-slate-700 border-r border-slate-100"
        >
          <WhatsAppIcon className="h-5 w-5 mb-1 text-[#25D366]" />
          <span className="text-[11px] font-semibold">{t("bar.wa")}</span>
        </a>
        <button
          type="button"
          onClick={() => go("appointment")}
          className="flex-1 py-3.5 flex flex-col items-center justify-center bg-cyan-600 text-white"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-[11px] font-semibold">{t("bar.book")}</span>
        </button>
      </div>

      <Footer onNavigate={go} />
      <div className="h-16 md:hidden bg-slate-900" />
    </div>
  );
}
