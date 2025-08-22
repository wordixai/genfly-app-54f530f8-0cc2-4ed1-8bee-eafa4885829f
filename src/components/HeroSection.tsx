import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, ArrowRight } from "lucide-react";

const ModelCard = ({ title, provider, tokens, latency, growth, isHighlighted = false }: {
  title: string;
  provider: string;
  tokens: string;
  latency: string;
  growth: string;
  isHighlighted?: boolean;
}) => (
  <Card className={`group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${isHighlighted ? 'border-primary md:border-primary' : 'border-slate-6'} transition-all duration-200 hover:shadow-lg`}>
    <div className="space-y-2">
      <div>
        <a className="hover:underline" href="#">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <h3 className="text-foreground font-medium">{title}</h3>
            </div>
            <div className="size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex">
              <div className="overflow-hidden rounded-full">
                <div className="h-full w-full bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex items-center">
          <span className="text-muted-foreground text-xs">
            by <a className="text-primary hover:underline" href="#">{provider}</a>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
        <div>
          <p className="text-green-10 text-sm font-medium">{tokens}</p>
          <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
        </div>
        <div>
          <p className="text-sm font-medium">{latency}</p>
          <p className="text-muted-foreground text-[10px]">Latency</p>
        </div>
        <div>
          <p className="text-sm font-medium text-red-10">{growth}</p>
          <p className="text-muted-foreground text-[10px]">Weekly growth</p>
        </div>
      </div>
    </div>
  </Card>
);

const HeroSection = () => {
  const models = [
    { title: "Gemini 2.5 Pro", provider: "google", tokens: "136.1B", latency: "2.6s", growth: "-18.54%" },
    { title: "GPT-5 Chat", provider: "openai", tokens: "16.8B", latency: "761ms", growth: "-27.9%", isHighlighted: true },
    { title: "Claude Sonnet 4", provider: "anthropic", tokens: "520.9B", latency: "1.8s", growth: "-10.96%" },
  ];

  return (
    <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
      <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
        <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
          <h1 className="my-0 w-full py-0 text-5xl font-semibold">
            <span className="mb-1 hidden md:block">The Unified</span>
            <span className="hidden md:block">Interface For LLMs</span>
            <span className="flex flex-col gap-0.5 text-3xl md:hidden">
              <div>The Unified</div>
              <div>Interface For LLMs</div>
            </span>
          </h1>
          <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
            Better <a href="#" className="text-primary hover:underline">prices</a>, 
            better <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex w-full items-center justify-between gap-3 flex-row">
              <Input
                className="w-full py-2 placeholder:text-foreground/30 text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 shadow-none focus-visible:ring-0"
                placeholder="Start a message..."
                type="text"
              />
              <Button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          <div className="w-full min-w-80 space-y-3 md:w-auto">
            {/* Mobile view */}
            <div className="block md:hidden">
              <div className="grid grid-cols-3 gap-4 pb-3">
                <Button variant="ghost" className="h-11 flex items-center justify-center rounded-lg p-4">
                  <div className="size-8 rounded-full border border-border/50 shadow bg-muted p-0.5">
                    <div className="h-full w-full bg-blue-500 rounded-full"></div>
                  </div>
                </Button>
                <Button variant="ghost" className="h-11 flex items-center justify-center rounded-lg p-4">
                  <div className="size-8 rounded-full border border-border/50 shadow bg-muted p-0.5">
                    <div className="h-full w-full bg-green-500 rounded-full"></div>
                  </div>
                </Button>
                <Button variant="ghost" className="h-11 flex items-center justify-center rounded-lg p-4">
                  <div className="size-8 rounded-full border border-border/50 shadow bg-muted p-0.5">
                    <div className="h-full w-full bg-orange-500 rounded-full"></div>
                  </div>
                </Button>
              </div>
              <ModelCard {...models[1]} />
              <div className="flex items-center justify-between px-2 pt-4">
                <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                <a className="text-primary text-xs hover:underline flex items-center gap-1" href="#">
                  View Trending
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden space-y-3 md:block">
              <div className="flex items-center justify-between">
                <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                <Button variant="link" className="text-primary gap-0 text-xs hover:underline p-0 h-auto">
                  View Trending
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
              {models.map((model, index) => (
                <ModelCard key={index} {...model} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;