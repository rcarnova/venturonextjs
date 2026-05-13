"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type AccessCode = {
  id: string;
  code: string;
  client_name: string;
  notes: string | null;
  is_active: boolean;
  created_at: string;
  last_accessed_at: string | null;
  access_count: number;
};

const ToolkitAdmin = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [codes, setCodes] = useState<AccessCode[]>([]);
  const [newName, setNewName] = useState("");
  const [newNotes, setNewNotes] = useState("");

  const callAdmin = async (action: string, body: Record<string, unknown> = {}) => {
    const { data, error } = await supabase.functions.invoke("toolkit-admin", {
      body: { action, ...body },
      headers: { "x-admin-password": password },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data;
  };

  const loadCodes = async () => {
    setLoading(true);
    try {
      const data = await callAdmin("list");
      setCodes(data.codes || []);
    } catch (err) {
      toast.error((err as Error).message || "Errore nel caricamento");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setLoading(true);
    try {
      const data = await callAdmin("list");
      setCodes(data.codes || []);
      setAuthed(true);
    } catch {
      toast.error("Password non valida");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    try {
      await callAdmin("create", { clientName: newName, notes: newNotes });
      toast.success("Codice creato");
      setNewName("");
      setNewNotes("");
      loadCodes();
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  const handleToggle = async (id: string, isActive: boolean) => {
    try {
      await callAdmin("toggle", { id, isActive: !isActive });
      loadCodes();
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  const copyLink = (code: string) => {
    const url = `${window.location.origin}/toolkit?code=${code}`;
    navigator.clipboard.writeText(url);
    toast.success("Link copiato");
  };

  useEffect(() => {
    document.title = "Toolkit Admin";
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-md mx-auto px-5">
            <h1
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Admin Toolkit
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <Label htmlFor="pwd">Password</Label>
              <Input
                id="pwd"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Verifica…" : "Entra"}
              </Button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h1
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Codici di accesso al Toolkit
          </h1>

          <form onSubmit={handleCreate} className="border border-foreground/10 p-6 mb-10 space-y-4">
            <h2 className="font-semibold text-lg">Nuovo codice</h2>
            <div>
              <Label htmlFor="name">Nome cliente</Label>
              <Input
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Es. Acme Spa"
                maxLength={200}
              />
            </div>
            <div>
              <Label htmlFor="notes">Note (opzionale)</Label>
              <Textarea
                id="notes"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                rows={2}
              />
            </div>
            <Button type="submit">Genera codice</Button>
          </form>

          <div className="space-y-3">
            {codes.length === 0 && (
              <p className="text-muted-foreground">Nessun codice ancora generato.</p>
            )}
            {codes.map((c) => (
              <div
                key={c.id}
                className="border border-foreground/10 p-4 flex flex-wrap items-center gap-4"
              >
                <div className="flex-1 min-w-[200px]">
                  <p className="font-mono font-bold text-lg">{c.code}</p>
                  <p className="text-sm">{c.client_name}</p>
                  {c.notes && <p className="text-xs text-muted-foreground mt-1">{c.notes}</p>}
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Accessi: {c.access_count}</p>
                  <p>
                    Ultimo:{" "}
                    {c.last_accessed_at
                      ? new Date(c.last_accessed_at).toLocaleDateString("it-IT")
                      : "mai"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyLink(c.code)}>
                    Copia link
                  </Button>
                  <Button
                    size="sm"
                    variant={c.is_active ? "outline" : "default"}
                    onClick={() => handleToggle(c.id, c.is_active)}
                  >
                    {c.is_active ? "Disattiva" : "Attiva"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolkitAdmin;
