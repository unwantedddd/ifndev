import { FaEnvelope, FaMapPin, FaDiscord, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router";

const Contacts = () => {
  return (
    // Изменил p-6 на pt-24 (отступ сверху) и px-6
    <div className="flex-1 bg-background text-foreground font-sans px-6 pt-24 pb-20">
      
      {/* Ограничил ширину max-w-3xl и выровнял по центру mx-auto */}
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Блок с текстом и контактами */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in touch</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a question, feedback, or just want to say hi? Fill out the form below or reach us directly.
            </p>
          </div>

          {/* Карточки с контактами (Email/Office) теперь горизонтально или плиткой */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-4 bg-card/50 px-6 py-4 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaEnvelope size={18} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xs uppercase tracking-wide text-muted-foreground">Email</h3>
                <p className="font-medium">support@ifndev.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card/50 px-6 py-4 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaMapPin size={18} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xs uppercase tracking-wide text-muted-foreground">Office</h3>
                <p className="font-medium">Kyiv, Ukraine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Форма теперь по центру и снизу */}
        <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>
            
            <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all text-sm uppercase tracking-wide">
              Send Message
            </button>
          </form>
        </div>

        {/* Соцсети в самом низу */}
        <div className="text-center pt-8 border-t border-border/50">
          <h3 className="font-bold text-xs uppercase tracking-wide mb-6 text-muted-foreground">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <Link to="https://t.me/ifnotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all shadow-sm"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={20} />
            </Link>

            <Link to="https://discord.gg/9J5ZQvVFZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] hover:-translate-y-1 transition-all shadow-sm"
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </Link>

            <Link to="https://github.com/unwantedddd/ifndev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-1 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacts;