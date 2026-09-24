"use client";

import { useState } from "react";

/**
 * Logo del format con fallback tipografico.
 * Se il PNG non e ancora stato caricato (o non risponde) mostra il nome
 * in Space Grotesk invece dell'icona di immagine rotta.
 * Appena il file esiste in public/images/ il logo vero compare da solo.
 */
type Props = {
  /** classi sul contenitore: margini, allineamento */
  wrapperClassName?: string;
  /** classi sull'immagine: dimensioni */
  imgClassName?: string;
  /** dimensione in px del testo di fallback */
  fallbackSize?: number;
};

const VenturoConversationLogo = ({
  wrapperClassName = "",
  imgClassName = "",
  fallbackSize = 32,
}: Props) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={wrapperClassName}>
      {failed ? (
        <p
          className="font-bold"
          style={{
            color: "#000000",
            fontSize: fallbackSize,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Venturo Conversation
        </p>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/venturo-conversation-logo.png"
          alt="Venturo Conversation"
          className={imgClassName}
          /* dimensioni intrinseche del file: riservano lo spazio ed evitano il salto di layout */
          width={880}
          height={395}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default VenturoConversationLogo;
