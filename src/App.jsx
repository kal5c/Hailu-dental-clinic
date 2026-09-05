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
} from "lucide-react";

// Global styles: media queries, fluid type, focus states, professional polish.
import "./App.css";

// --- YOUR OWN CLINIC PHOTOS ---
// These come from src/assets/images/. If your project's folder is named
// differently, just update these three import paths to match.
import receptionPhoto from "./assets/images/3.jpg";
import treatmentRoomBluePhoto from "./assets/images/p2.png";
import treatmentRoomBeigePhoto from "./assets/images/p3.png";

// --- DATA ---

const CLINIC_INFO = {
  name: "Hailu Specialty Dental Clinic",
  email: "mahihailu13@gmail.com",
  socials: {
  
  },
};

const LOCATIONS = [
  {
    id: "summit",
    name: "Summit Branch",
    address: "Summit, near Fiyel Bet / Abagada, 1st Floor",
    phone: "093 828 3333",
    hours: "Mon - Sat: 8:00 AM - 7:00 PM",
    mapLink: "#",
  },
  {
    id: "branch2",
    name: "22 Branch",
    address: "22, Adonai Building, 4th Floor",
    phone: "090 728 3333",
    hours: "Mon - Sat: 8:00 AM - 7:00 PM",
    mapLink: "#",
  },
];

const SERVICES = [
  {
    id: "general",
    title: "General Dentistry",
    description:
      "Comprehensive check-ups, cleaning, scaling, and preventive care to keep your smile healthy and vibrant.",
    icon: Stethoscope,
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with professional teeth whitening, custom veneers, and aesthetic restorations.",
    icon: Smile,
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Straighten teeth and correct bite issues with modern braces and comfortable clear aligners.",
    icon: ShieldCheck,
  },
  {
    id: "implants",
    title: "Dental Implants & Surgery",
    description:
      "Permanent, natural-looking tooth replacement solutions and surgical procedures performed with precision.",
    icon: CheckCircle2,
  },
];

const REVIEWS = [
  {
    name: "Abebe K.",
    rating: 5,
    text: "Excellent service! The clinic is very clean, modern, and the staff is highly professional. Highly recommended.",
  },
  {
    name: "Sara M.",
    rating: 5,
    text: "I had a great experience at the Summit branch. The doctor took the time to explain everything thoroughly.",
  },
  {
    name: "Dawit T.",
    rating: 5,
    text: "Very state-of-the-art equipment and a relaxing environment. Makes going to the dentist stress-free!",
  },
];

// --- NAVBAR ---

const Navbar = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", view: "home" },
    { name: "Services", view: "services" },
    { name: "Locations", view: "locations" },
    { name: "Contact", view: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-cyan-600 text-white p-2.5 rounded-xl font-bold text-xl shadow-md shadow-cyan-100">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 tracking-tight leading-tight">
                  HAILU SPECIALITY
                </span>
                <span className="text-xs font-semibold text-cyan-600 tracking-wider">
                  DENTAL CLINIC
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.view}
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
              onClick={() => onNavigate("appointment")}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-cyan-100 transform active:scale-95"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => {
                  onNavigate(link.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentView === link.view
                    ? "bg-cyan-50 text-cyan-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate("appointment");
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-medium shadow-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- FOOTER ---
// Kept simple on purpose: brand, quick links, and one line for email.
// Full addresses/phone/hours live in ONE place only — the Locations page —
// so this footer no longer repeats an address box on every view.

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white text-cyan-600 p-2 rounded-xl font-bold text-xl">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white tracking-tight leading-tight">
                  HAILU SPECIALITY
                </span>
                <span className="text-xs text-cyan-400 tracking-wider">
                  DENTAL CLINIC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Providing specialized, professional, and comfortable dental care
              with convenient locations across Addis Ababa.
            </p>

             
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {["home", "services", "locations", "contact"].map((view) => (
                <li key={view}>
                  <button
                    onClick={() => {
                      onNavigate(view);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-white transition-colors capitalize text-sm flex items-center gap-2"
                  >
                    <ChevronRight className="h-3 w-3 text-cyan-500" />
                    {view}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + pointer to full address details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-cyan-400">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <button
                onClick={() => {
                  onNavigate("locations");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                View branch addresses & hours
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} Hailu Specialty Dental Clinic. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- HOME VIEW ---

const HomeView = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-cyan-50/50 via-white to-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-semibold tracking-wide">
                <Star className="h-3.5 w-3.5 fill-current text-cyan-600" />
                
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Specialized Care for a{" "}
                <span className="text-cyan-600">Confident Smile</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience modern, patient-centered dental care with experienced
                specialists at our fully-equipped branches in Summit and 22.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => onNavigate("appointment")}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-xl shadow-cyan-200 flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Calendar className="h-5 w-5" />
                  Book an Appointment
                </button>

                <a
                  href={`tel:${LOCATIONS[0].phone.replace(/\s/g, "")}`}
                  className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="h-5 w-5 text-cyan-600" />
                  Call Summit Branch
                </a>
              </div>
            </div>

            {/* Hero Image — your reception photo */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[420px] lg:h-[480px] bg-slate-100 border-4 border-white">
                <img
                  src={receptionPhoto}
                  alt="Hailu Speciality Dental Clinic reception desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="font-semibold text-sm">
                    A Warm Welcome, Every Visit
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Our reception is designed for comfort from the moment you
                    arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-amber-400 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <h3 className="font-bold text-slate-900">5-Star Care</h3>
              <p className="text-xs text-slate-500">Trusted by hundreds</p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">2 Convenient Hubs</h3>
              <p className="text-xs text-slate-500">Summit & 22 Branches</p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">Specialized Dentists</h3>
              <p className="text-xs text-slate-500">Expert care standards</p>
            </div>

            <div className="space-y-1 p-4 rounded-xl bg-slate-50/50">
              <div className="flex justify-center text-cyan-600 mb-2">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">Flexible Booking</h3>
              <p className="text-xs text-slate-500">
                Online & instant phone help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Dental Services
            </h2>
            <p className="text-slate-600 text-sm">
              Comprehensive dental treatments tailored for patients of all ages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate("services")}
                    className="text-cyan-600 font-semibold text-sm flex items-center gap-1 hover:text-cyan-700"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 shadow-sm text-sm font-semibold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              Explore All Services & Details
            </button>
          </div>
        </div>
      </section>

      {/* Clinic Intro — your treatment room photo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[240px] sm:h-[320px] lg:h-[380px] bg-slate-100 border-4 border-slate-50">
              <img
                src={treatmentRoomBluePhoto}
                alt="Modern treatment room at Hailu Speciality Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome to Hailu Specialty Dental Clinic
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our clinic is built on the pillars of advanced technology,
                rigorous hygiene standards, and compassionate patient care.
                Whether you need a routine check-up or complex specialty work,
                our team ensures a relaxed experience from reception to
                treatment.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Qualified & welcoming dental practitioners",
                  "Modern sterilization & advanced equipment",
                  "Comfortable patient lounges & treatment rooms",
                  "Convenient branches in Summit and 22",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SERVICES VIEW ---

const ServicesView = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">
          Comprehensive Dental Services
        </h1>
        <p className="text-slate-600">
          We offer specialized treatments utilizing modern tools and
          compassionate care protocols.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-[220px] sm:h-[300px] lg:h-[340px] bg-slate-100 border-4 border-slate-50 order-2 lg:order-1">
          <img
            src={treatmentRoomBeigePhoto}
            alt="Dental treatment chair at Hailu Speciality Dental Clinic"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onNavigate("appointment")}
                    className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Book for {service.title}
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

// --- LOCATIONS VIEW ---
// This is the ONE dedicated address section for the whole site.

const LocationsView = () => (
  <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <h1 className="text-4xl font-bold text-slate-900">
        Our Clinic Locations
      </h1>
      <p className="text-slate-600">
        Visit either of our two accessible branches in Addis Ababa.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {LOCATIONS.map((loc) => (
        <div
          key={loc.id}
          className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 space-y-6"
        >
          <h2 className="text-2xl font-bold text-cyan-600">{loc.name}</h2>

          <div className="space-y-4 text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
              <span>{loc.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-slate-400 shrink-0" />
              <span className="font-semibold text-slate-900">{loc.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-slate-400 shrink-0" />
              <span>{loc.hours}</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={`tel:${loc.phone.replace(/\s/g, "")}`}
              className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-xl font-semibold text-sm transition-colors shadow-md"
            >
              Call Now
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- CONTACT VIEW ---

const ContactView = () => (
  <div className="animate-fade-in pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
      <p className="text-slate-600">
        Have questions or need assistance? Reach out to our team directly.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>

        <div className="space-y-4 text-slate-600">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-cyan-600 shrink-0" />
            <span>
              Summit Branch: <strong>093 828 3333</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-cyan-600 shrink-0" />
            <span>
              22 Branch: <strong>090 728 3333</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-cyan-600 shrink-0" />
            <span>{CLINIC_INFO.email}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Patient Reviews</h2>

        <div className="space-y-4">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl space-y-1">
              <div className="flex text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic">"{rev.text}"</p>
              <p className="text-xs font-semibold text-slate-900 text-right">
                — {rev.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- APPOINTMENT VIEW ---

const AppointmentView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-slate-50 animate-fade-in">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-100 space-y-6">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Request Received!
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Thank you for requesting an appointment. Our front desk team will
            call you shortly to confirm your slot.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-cyan-600 font-semibold text-sm hover:underline"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50/50 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Book an Appointment
          </h1>
          <p className="text-slate-600 text-sm">
            Fill out the form below and we will contact you to finalize your
            visit.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all text-sm"
                placeholder="Abebe Kebede"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                required
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all text-sm"
                placeholder="09XX XXX XXX"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Preferred Branch
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all bg-white text-sm"
              >
                <option value="">Select branch...</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Service Needed
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all bg-white text-sm"
              >
                <option value="">Select service...</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Preferred Date
              </label>
              <input
                required
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Preferred Time
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all bg-white text-sm"
              >
                <option value="">Any time</option>
                <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (1:00 PM - 7:00 PM)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 outline-none transition-all resize-none text-sm"
              placeholder="Describe any specific symptoms or requests..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-bold text-base transition-colors shadow-lg shadow-cyan-200"
          >
            Request Appointment
          </button>

          <p className="text-center text-xs text-slate-500">
            * Note: Our team will contact you to verify exact time slots based
            on daily availability.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView onNavigate={setCurrentView} />;
      case "services":
        return <ServicesView onNavigate={setCurrentView} />;
      case "locations":
        return <LocationsView />;
      case "contact":
        return <ContactView />;
      case "appointment":
        return <AppointmentView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
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

      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <main className="flex-grow">{renderView()}</main>

      {/* Sticky Mobile Contact Bar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-2xl z-40 flex">
        <a
          href={`tel:${LOCATIONS[0].phone.replace(/\s/g, "")}`}
          className="flex-1 py-3.5 flex flex-col items-center justify-center text-slate-700 border-r border-slate-100 active:bg-slate-50"
        >
          <Phone className="h-5 w-5 mb-1 text-cyan-600" />
          <span className="text-[11px] font-semibold">Call Branch</span>
        </a>

        <button
          onClick={() => {
            setCurrentView("appointment");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex-1 py-3.5 flex flex-col items-center justify-center bg-cyan-600 text-white active:bg-cyan-700"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-[11px] font-semibold">Book Now</span>
        </button>
      </div>

      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* spacer so the sticky mobile bar doesn't cover the footer */}
      <div className="h-16 md:hidden bg-slate-900"></div>
    </div>
  );
}
