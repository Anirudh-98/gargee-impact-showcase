import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FormEvent } from "react";

const Connect = () => {
  const canonical = typeof window !== 'undefined' ? window.location.origin + '/connect' : undefined;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name");
    toast.success(`Thanks${name ? `, ${name}` : ""}! We’ll get back shortly.`);
    form.reset();
  };

  return (
    <main>
      <SEO
        title="Connect | Start a Conversation with Gargee"
        description="Send a message, ask a question, or propose a collaboration. Friendly invite — let’s build something meaningful."
        canonical={canonical}
      />

      <section className="section bg-secondary">
        <div className="container-responsive">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Let’s Connect</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">Friendly invite — reach out for partnerships, projects, or press.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-responsive grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-4 rounded-lg border p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we work together?" className="min-h-32" />
              </div>
              <Button type="submit" variant="cta" size="lg">Send Message</Button>
            </form>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border p-6">
              <h2 className="font-display text-2xl font-semibold">Direct Contact</h2>
              <div className="mt-4 space-y-2 text-foreground/80">
                <p>Email: <a className="story-link" href="mailto:hello@example.com">hello@example.com</a></p>
                <p>LinkedIn: <a className="story-link" href="#">linkedin.com/in/gargee</a></p>
                <p>Location: Kolkata, India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Connect;
