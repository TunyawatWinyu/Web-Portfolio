export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 lg:px-12 py-8 text-white/70">
      <div className="max-w-280 mx-auto border-t border-white/15 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm font-sans">
            © 2026 Tunyawat Winyu Tunyawat Winyu
          </p>

          {/* Footer Description */}
          <p className="text-xs md:text-sm font-sans">
            Built with clarity & character.
          </p>
        </div>
      </div>
    </footer>
  );
}
