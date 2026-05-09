import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Stethoscope, Users, ShieldCheck, Activity, Apple, Cigarette, Sun, Phone, Mail, MapPin } from "lucide-react";
import hero from "@/assets/hero-awareness.jpg";
import ribbon from "@/assets/ribbon.png";

const signs = [
  { icon: Activity, title: "Unexplained changes", text: "Persistent fatigue, weight loss, or fevers without clear cause." },
  { icon: ShieldCheck, title: "Lumps & skin changes", text: "New lumps, moles changing color or size, or non-healing sores." },
  { icon: Stethoscope, title: "Persistent symptoms", text: "Lasting cough, hoarseness, or changes in bowel or bladder habits." },
];

const prevention = [
  { icon: Cigarette, title: "Avoid tobacco", text: "Tobacco use is linked to at least 15 types of cancer." },
  { icon: Apple, title: "Eat well, move daily", text: "A plant-rich diet and 30 min of activity reduce risk significantly." },
  { icon: Sun, title: "Protect your skin", text: "Use SPF 30+ daily and avoid peak UV hours." },
  { icon: Stethoscope, title: "Screen regularly", text: "Early detection saves lives. Talk to your doctor about screenings." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <span className="w-8 h-8 rounded-full bg-gradient-ribbon shadow-soft" aria-hidden />
            <span>Hope<span className="text-primary">Together</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#signs" className="hover:text-foreground transition-smooth">Warning Signs</a>
            <a href="#prevent" className="hover:text-foreground transition-smooth">Prevention</a>
            <a href="#support" className="hover:text-foreground transition-smooth">Support</a>
          </div>
          <Button size="sm" className="rounded-full">Donate</Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <img
          src={hero}
          alt="People raising hands together at sunrise in solidarity"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative py-32 md:py-44 text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm border border-white/20">
              <Heart className="w-4 h-4" /> World Cancer Awareness
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Together, we turn fear into hope.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
              Early detection. Education. Empathy. Join a global community standing with patients, survivors, and families.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 shadow-soft">
                Learn the signs
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                Get involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="py-20 md:py-28 bg-gradient-soft">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { num: "20M+", label: "New cases each year worldwide" },
            { num: "1 in 3", label: "People will face cancer in their lifetime" },
            { num: "40%", label: "Of cancers are preventable through awareness" },
          ].map((s) => (
            <Card key={s.label} className="p-8 text-center border-0 shadow-soft bg-card/80 backdrop-blur rounded-3xl">
              <div className="text-5xl md:text-6xl font-bold text-gradient">{s.num}</div>
              <p className="mt-4 text-muted-foreground">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Signs */}
      <section id="signs" className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Know the signs</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Listen to your body</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Recognizing changes early can be life-saving. If symptoms persist for more than two weeks, consult your doctor.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {signs.map((s) => (
              <Card key={s.title} className="p-8 rounded-3xl border-border/60 hover:shadow-soft transition-smooth hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-secondary">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevent" className="py-24 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-ribbon opacity-20 blur-3xl rounded-full" />
            <img
              src={ribbon}
              alt="Cancer awareness ribbon"
              width={768}
              height={768}
              loading="lazy"
              className="relative w-72 md:w-96 animate-float drop-shadow-2xl"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Prevention</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Small choices, lasting impact</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Up to 40% of cancers can be prevented. Your daily habits matter more than you think.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {prevention.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-card shadow-soft flex items-center justify-center text-primary">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support / CTA */}
      <section id="support" className="py-24">
        <div className="container">
          <Card className="relative overflow-hidden rounded-[2rem] border-0 shadow-soft p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="relative max-w-2xl mx-auto text-primary-foreground">
              <Users className="w-12 h-12 mx-auto opacity-90" />
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">You are not alone.</h2>
              <p className="mt-4 text-lg text-white/90">
                Connect with survivors, caregivers, and certified counselors. Free, confidential support, 24/7.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8">Find support</Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
                  Volunteer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-12">
        <div className="container grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <div className="flex items-center gap-2 font-semibold text-foreground text-base">
              <span className="w-7 h-7 rounded-full bg-gradient-ribbon" aria-hidden />
              HopeTogether
            </div>
            <p className="mt-3">A non-profit initiative dedicated to cancer awareness, prevention, and patient support.</p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1-800-HOPE-NOW</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@hopetogether.org</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Worldwide</p>
          </div>
          <p className="md:text-right">© {new Date().getFullYear()} HopeTogether. Made with care.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
