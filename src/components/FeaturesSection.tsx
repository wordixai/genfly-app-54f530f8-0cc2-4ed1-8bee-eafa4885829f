import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProviderIcon = ({ name, delay = 0, className = "" }: { name: string; delay?: number; className?: string }) => (
  <div 
    className={`size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out ${className}`}
    style={{ animation: `float${delay % 5} 4s ease-in-out ${delay * 150}ms infinite`, opacity: 0.85 }}
    title={name}
  >
    <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
      <div className="overflow-hidden rounded-full">
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const providers = [
    "microsoft", "nvidia", "meta-llama", "google", "amazon",
    "deepseek", "qwen", "moonshotai", "minimax", "z-ai",
    "mistralai", "anthropic", "openai", "google ai studio", "x-ai",
    "cohere", "huggingface", "perplexity", "nousresearch", "together",
    "morph", "inflection", "liquid", "inception", "arcee-ai"
  ];

  return (
    <div className="space-y-4 md:space-y-8 max-w-screen-2xl">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {/* One API for Any Model */}
        <a className="h-full" href="#">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="absolute inset-0">
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                </div>
                <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
                  {providers.map((provider, index) => (
                    <ProviderIcon 
                      key={provider} 
                      name={provider} 
                      delay={index}
                      className={index >= 5 && index < 10 ? "translate-x-9" : index >= 15 ? "translate-x-9" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  One API for Any Model
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access all major models through a single, unified interface. OpenAI SDK works out of the box.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline flex items-center">
                Browse all
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Card>
        </a>

        {/* Higher Availability */}
        <a href="#" className="h-full">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
                  <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
                    anthropic/claude-3.7-sonnet
                  </div>
                  <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  <div className="flex justify-between w-full">
                    <div className="size-6 rounded-full bg-blue-500"></div>
                    <div className="size-6 rounded-full bg-orange-500"></div>
                    <div className="size-6 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Higher Availability
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline flex items-center">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Card>
        </a>

        {/* Price and Performance */}
        <a href="#" className="h-full">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="relative flex h-full items-center justify-center">
                <div className="w-full h-32 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-lg flex items-end justify-center p-4">
                  <div className="flex items-end gap-2 h-full w-full max-w-48">
                    <div className="bg-primary/60 rounded-sm flex-1 h-1/2"></div>
                    <div className="bg-primary/80 rounded-sm flex-1 h-3/4"></div>
                    <div className="bg-primary rounded-sm flex-1 h-full"></div>
                    <div className="bg-primary/70 rounded-sm flex-1 h-2/3"></div>
                    <div className="bg-primary/50 rounded-sm flex-1 h-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Price and Performance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline flex items-center">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Card>
        </a>

        {/* Custom Data Policies */}
        <a target="_blank" href="#" className="h-full" rel="noreferrer">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
            <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
              <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-52">
                  <div className="flex justify-between items-end w-full px-[45px] -mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                    <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                  </div>
                  <div className="w-full h-16 bg-muted rounded-lg mt-4"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-4 h-full">
              <div className="flex flex-col gap-2 h-full">
                <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                  Custom Data Policies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.
                </p>
              </div>
              <span className="text-primary group-hover/card:underline flex items-center">
                View docs
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default FeaturesSection;