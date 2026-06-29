import { Menu, Moon } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
            M
          </div>

          <div>
            <h1 className="font-bold text-white tracking-wide text-lg">
              MARIA SUNIL ANTONY
            </h1>

            <p className="text-gray-400 text-xs">
              Aspiring Full Stack Developer
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

       <ul className="hidden md:flex items-center gap-8 text-gray-300">

  <li>
    <a href="#home" className="hover:text-cyan-400 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-cyan-400 transition">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-cyan-400 transition">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-cyan-400 transition">
      Projects
    </a>
  </li>

  <li>
    <a href="#education" className="hover:text-cyan-400 transition">
      Education
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>
  </li>

</ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button
  title="Dark/Light Mode (Coming Soon)"
  className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition cursor-not-allowed"
>
            <Moon className="w-5 h-5 text-white" />
          </button>

          <button className="md:hidden">
            <Menu className="w-7 h-7 text-white" />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;