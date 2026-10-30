/**
 * Le pagine inglesi usano il layout principale, che dichiara lang="it".
 * Questo involucro dichiara in HTML che il contenuto è in inglese (lo leggono
 * screen reader e motori di ricerca) senza cambiare l'impaginazione.
 */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" style={{ display: "contents" }}>
      {children}
    </div>
  );
}
