import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função genérica para scroll suave até qualquer id
  const scrollToSection = (id: string) => (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-3 px-4 sm:px-6 lg:px-8 border-b border-fuchsia-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.svg" className="h-8" alt="WhatsAI" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-fuchsia-900 hover:text-fuchsia-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  href="#hero"
                  onClick={scrollToSection('hero')}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-fuchsia-900 hover:text-fuchsia-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  href="#why-choose-whatsai"
                  onClick={scrollToSection('why-choose-whatsai')}
                >
                  Funcionalidades
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-fuchsia-900 hover:text-fuchsia-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  href="#planos"
                  onClick={scrollToSection('planos')}
                >
                  Preços
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-fuchsia-900 hover:text-fuchsia-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200">
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className=" min-w-[120px] px-4 border-fuchsia-900 text-fuchsia-900 hover:bg-fuchsia-50">
            Login
          </Button>
          <Button className="bg-fuchsia-900 hover:bg-fuchsia-700 text-white font-semibold">
            Cadastre-se
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-fuchsia-900"
          >
            {mobileMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-15 left-0 right-0 bg-white border-t border-fuchsia-100 shadow-lg py-8 h-[80vh] px-4">
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start text-fuchsia-900 hover:bg-fuchsia-50">
              Home
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-fuchsia-900 hover:bg-fuchsia-50"
              onClick={scrollToSection('why-choose-whatsai')}
            >
              Funcionalidades
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-fuchsia-900 hover:bg-fuchsia-50"
              onClick={scrollToSection('planos')}
            >
              Preços
            </Button>
            <Button variant="ghost" className="justify-start text-fuchsia-900 hover:bg-fuchsia-50">
              Contato
            </Button>
            <div className="pt-2 border-t border-fuchsia-100 space-y-2">
              <Button className=" bg-fuchsia-900 hover:bg-fuchsia-700 text-white">
                Começe agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}