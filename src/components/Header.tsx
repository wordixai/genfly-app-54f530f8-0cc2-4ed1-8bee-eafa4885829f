import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 transition-all duration-150 bg-background mx-auto px-6 py-3.5 lg:py-6 max-w-screen-4xl">
      <div className="align-center relative flex flex-row justify-between text-sm md:text-base">
        <div className="flex flex-1 items-center gap-4">
          <a href="/" className="text-muted-foreground">
            <Button variant="ghost" className="gap-2 leading-6 h-9 rounded-md px-3">
              <span className="flex items-center gap-2 text-base font-medium">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
                OpenRouter
              </span>
            </Button>
          </a>
          
          <div className="relative flex items-center gap-2 rounded-md h-9 w-0 md:w-64 transition-colors bg-slate-3 text-slate-11 focus-within:bg-slate-4 focus-within:text-slate-12">
            <div className="flex items-center px-3 w-full">
              <Search className="h-4 w-4 mr-2 shrink-0 opacity-50" />
              <Input 
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm border-0 shadow-none focus-visible:ring-0"
                placeholder="Search"
                type="text"
              />
            </div>
            <kbd className="absolute right-3.5 h-4 w-4 p-1 rounded-sm bg-border text-xs text-muted-foreground">/</kbd>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-1 text-sm">
          <Button variant="ghost" className="text-muted-foreground h-9 rounded-md px-3">
            Models
          </Button>
          <Button variant="ghost" className="text-muted-foreground h-9 rounded-md px-3">
            Chat
          </Button>
          <Button variant="ghost" className="text-muted-foreground h-9 rounded-md px-3">
            Rankings
          </Button>
          <Button variant="ghost" className="text-muted-foreground h-9 rounded-md px-3">
            Enterprise
          </Button>
          <Button variant="ghost" className="text-muted-foreground h-9 rounded-md px-3">
            Docs
          </Button>
          <div className="flex w-24 justify-end">
            <Button variant="outline" className="h-full w-full rounded-full">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;