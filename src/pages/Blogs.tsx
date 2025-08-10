import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  { id: 1, title: "Agri-commerce: Dignity in the Supply Chain", cat: "agri" },
  { id: 2, title: "Marketing Ops: Systems that Scale", cat: "digital" },
  { id: 3, title: "Investor Education: Clarity Over Noise", cat: "investing" },
  { id: 4, title: "Creative with ROI: The Gro X Way", cat: "digital" },
];

const Blogs = () => {
  const canonical = typeof window !== 'undefined' ? window.location.origin + '/blogs' : undefined;
  return (
    <main>
      <SEO
        title="Blogs | Insights on Agri, Digital, and Investing"
        description="Featured articles and insights by Gargee Singha across agri-commerce, digital marketing, and investor education."
        canonical={canonical}
      />

      <section className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Blogs</h1>
            <p className="text-muted-foreground mt-3 max-w-3xl">Stories and frameworks from the field.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-responsive">
          {/* Featured */}
          <Reveal className="rounded-lg border p-6">
            <h2 className="font-display text-2xl font-semibold">Featured: Building Markets with Trust</h2>
            <p className="text-foreground/80 mt-2">A look at systems that create dignity and speed in agri-value chains.</p>
          </Reveal>

          {/* Filters */}
          <Reveal className="mt-8">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="agri">Agri</TabsTrigger>
                <TabsTrigger value="digital">Digital</TabsTrigger>
                <TabsTrigger value="investing">Investing</TabsTrigger>
              </TabsList>
              {(["all", "agri", "digital", "investing"] as const).map((cat) => (
                <TabsContent key={cat} value={cat} className="mt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {posts
                      .filter((p) => (cat === "all" ? true : p.cat === cat))
                      .map((p) => (
                        <div key={p.id} className="rounded-lg border p-4 hover-scale">
                          <h3 className="font-medium">{p.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">Category: {p.cat}</p>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
