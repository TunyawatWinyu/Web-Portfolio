export default function Footer() {
  return (
    <footer className="px-6 md:px-8 lg:px-12 py-8 text-white/70">
      <div className="border-t border-white/15 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          {/* Copyright */}
          <p className="text-sm md:text-base font-sans">
            © 2026 Tunyawat Winyu
          </p>

          {/* Footer Description */}
          <p className="text-sm md:text-base font-sans">
            Built with clarity & character.
          </p>
        </div>
      </div>
    </footer>
  );
}
