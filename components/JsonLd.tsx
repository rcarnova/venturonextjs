/**
 * Dati strutturati (schema.org) nella pagina. Componente server: finisce
 * nell'HTML statico, quindi lo leggono anche i crawler che non eseguono JS.
 */
type Props = { data: Record<string, unknown> | Record<string, unknown>[] };

const JsonLd = ({ data }: Props) => {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      // "<" escapato: nessun testo può chiudere il tag script per sbaglio
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
};

export default JsonLd;
