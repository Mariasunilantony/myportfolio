function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <h3 className="text-lg font-semibold">
          Maria Sunil Antony
        </h3>

        <p className="text-gray-400 text-sm mt-3 md:mt-0">
          © {new Date().getFullYear()} Maria Sunil Antony. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;