import { navLinks, specialtyLinks, brandInfo } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-3xl tracking-[0.2em] uppercase mb-6">
              {brandInfo.name}
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              {brandInfo.description}
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase mb-6 font-semibold">
              Explore
            </h3>
            <ul className="space-y-4">
              {navLinks.filter(link => link.name !== 'Contact').map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase mb-6 font-semibold">
              Habitats
            </h3>
            <ul className="space-y-4">
              {specialtyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} {brandInfo.name}. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 text-neutral-500">
            Built by <span className="text-neutral-300">{brandInfo.developer}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
