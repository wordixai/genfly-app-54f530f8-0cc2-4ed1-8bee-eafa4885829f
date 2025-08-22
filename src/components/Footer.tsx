import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = [
    { label: "Status", href: "#" },
    { label: "Announcements", href: "#" },
    { label: "Docs", href: "#" },
    { label: "About", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer>
      <div className="flex flex-col flex-wrap items-center justify-between gap-4 p-4 border-t bg-background font-medium md:flex-row-reverse">
        <menu className="flex flex-1 flex-wrap text-center md:justify-end">
          {footerLinks.map((link, index) => (
            <li key={index} className="basis-1/2 shrink md:basis-auto">
              <a className="text-muted-foreground" href={link.href}>
                <Button variant="ghost" className="h-9 rounded-md px-3 text-muted-foreground">
                  {link.label}
                </Button>
              </a>
            </li>
          ))}
          <li className="basis-1/2 shrink md:basis-auto" aria-hidden="true">&nbsp;</li>
        </menu>
        
        <div className="flex flex-col items-center gap-4 m-auto md:flex-row md:gap-8 lg:m-0">
          <div className="text-center text-muted-foreground">
            © 2023 – 2025 OpenRouter, Inc
          </div>
          <div className="md:mr-auto">
            <div className="flex items-center justify-center gap-2">
              <a target="_blank" className="text-muted-foreground" href="#" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="size-6 p-0 hover:bg-transparent hover:text-foreground">
                  <div className="w-4 h-4 bg-current rounded"></div>
                </Button>
              </a>
              <a target="_blank" className="text-muted-foreground" href="#" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="size-6 p-0 hover:bg-transparent hover:text-foreground">
                  <div className="w-4 h-4 bg-current rounded"></div>
                </Button>
              </a>
              <a target="_blank" className="text-muted-foreground" href="#" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="size-6 p-0 hover:bg-transparent hover:text-foreground">
                  <div className="w-4 h-4 bg-current rounded"></div>
                </Button>
              </a>
              <a target="_blank" className="text-muted-foreground" href="#" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="size-6 p-0 hover:bg-transparent hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-4">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;