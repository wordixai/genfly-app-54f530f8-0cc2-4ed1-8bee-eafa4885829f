import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, TrendingUp } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      title: "Tool Calling Accuracy",
      description: "After just one week on the platform, GPT-5 has taken the #1 spot for tool calling accuracy on OpenRouter. Here's how the leaderboard looks and what this means for developers.",
      date: "8/13/2025",
      isNew: true,
    },
    {
      title: "GPT-5 is now live",
      description: "GPT-5 is here on OpenRouter — long-context, built for complex reasoning and code workflows.",
      date: "8/6/2025",
    },
    {
      title: "Audio Inputs and PDF URLs for Apps",
      description: "Add voice input and send PDFs by URL, on any model.",
      date: "8/3/2025",
    },
  ];

  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-8 gap-16 md:gap-8">
      <div className="flex flex-col gap-4 h-full w-full md:col-span-3">
        <a className="flex-1" href="#">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold flex items-center gap-2">
                <Database className="w-5 h-5" />
                <span>Explore Models</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover AI models across our collection, from all major labs and providers.
              </p>
            </div>
            <span className="text-muted-foreground inline-flex items-center">
              View models
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Card>
        </a>
        <a className="flex-1" href="#">
          <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
            <div className="flex flex-col gap-2 h-full">
              <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Model & App Rankings</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore token usage across models, labs, and public applications.
              </p>
            </div>
            <span className="text-muted-foreground inline-flex items-center">
              View rankings
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Card>
        </a>
      </div>

      <div className="md:col-span-5 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Announcements</h3>
            <a className="text-slate-10 group inline-flex text-sm items-center" href="#">
              <span className="inline-flex items-center gap-1">
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-6">
            {announcements.map((announcement, index) => (
              <a key={index} className="group" href="#">
                <Card className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col gap-2 p-4">
                  <h3 className="group-hover/card:text-slate-12 duration-200 text-lg font-medium transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-slate-10 text-sm line-clamp-2">
                    {announcement.description}
                  </p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <time>{announcement.date}</time>
                    {announcement.isNew && (
                      <Badge variant="secondary" className="ml-2 text-[10px]">
                        New
                      </Badge>
                    )}
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsSection;