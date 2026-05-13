"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      if (!data?.success) {
        throw new Error(data?.error || "Failed to send email");
      }

      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatteremo al più presto.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-[80px] pb-20 md:pb-28 lg:pb-32 bg-charcoal">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-12">
            <GlowTitle className="text-3xl md:text-section text-warm-white md:!text-[40px]" variant="light">
              Iniziamo a parlare
            </GlowTitle>
            <p className="text-body text-warm-white/70 mt-4">
              Raccontaci la tua sfida. Nessun impegno, solo una conversazione per capire se possiamo aiutarti.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
            <div>
              <Input
                type="text"
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-warm-white h-12 glow-input"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="La tua email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-warm-white h-12 glow-input"
              />
            </div>
            <div>
            <Textarea
              placeholder="Descrivi brevemente la situazione che vuoi affrontare"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-warm-white/10 border-warm-white/20 text-warm-white placeholder:text-warm-white/50 focus:border-warm-white resize-none glow-input"
            />
          </div>
          <div className="flex items-start gap-3 mt-6 mb-4">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              required
              className="mt-0.5 border-warm-white/40 data-[state=checked]:bg-warm-white data-[state=checked]:text-charcoal"
            />
            <label 
              htmlFor="privacy" 
              className="text-[0.9rem] leading-relaxed text-warm-white/70 cursor-pointer"
            >
              Ho letto l'<Link href="/privacy" className="underline hover:text-warm-white transition-colors">informativa privacy</Link> e acconsento al trattamento dei miei dati personali per essere ricontattato in merito a questa richiesta.*
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-warm-white text-charcoal hover:bg-warm-white/90 shadow-medium hover:shadow-elevated text-base px-8 py-6 h-auto glow-btn-light"
            disabled={isSubmitting || !privacyAccepted}
          >
            {isSubmitting ? (
              "Invio in corso..."
            ) : (
              <>
                Invia messaggio
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
