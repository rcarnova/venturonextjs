/**
 * Modello Claude usato dagli strumenti del sito (Analisi EVP, EX Assessment, Toolkit).
 * Un solo punto da cambiare quando Anthropic ritira un modello:
 * claude-sonnet-4-20250514 è stato ritirato il 15 giugno 2026 e il Toolkit
 * ha continuato a chiamarlo fino a novembre, fallendo.
 */
export const CLAUDE_MODEL = "claude-sonnet-5-5";
