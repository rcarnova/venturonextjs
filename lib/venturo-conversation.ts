/**
 * Dati della prossima Venturo Conversation.
 *
 * Cambiano a ogni puntata: la registrazione e la grafica sono legate al
 * singolo incontro, non al format. Aggiornare qui e basta, la pagina e il
 * pop-up leggono entrambi da queste costanti.
 */

export const REGISTRATION_URL =
  "https://us06web.zoom.us/meeting/register/7k2pPKMQT7yAekG44wpx7A#/registration";

export const EPISODE_IMAGE = {
  src: "/images/venturo-conversation-20-ottobre.webp",
  width: 1280,
  height: 720,
  /**
   * L'alt porta tutto il contenuto della grafica: titolo, data, ospite e host
   * esistono solo dentro l'immagine, quindi senza questo testo non sarebbero
   * leggibili da screen reader ne dai motori di ricerca.
   */
  alt:
    "Venturo Conversation del 20 ottobre alle ore 12, in diretta: " +
    "« Motivazione ed engagement delle persone, cosa ne pensa un CFO? ». " +
    "Ne parliamo con Elena Alemanno, CFO di Inter Ikea Systems. " +
    "Host: Rosario Carnovale e Massimo Benedetti, Venturo.",
} as const;
