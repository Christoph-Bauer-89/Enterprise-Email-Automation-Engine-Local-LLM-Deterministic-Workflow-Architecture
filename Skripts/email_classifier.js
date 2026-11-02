// Liest den Text aus dem vorherigen IMAP-Knoten
const inputData = $input.item.json;
const rawText = inputData.textPlain || inputData.text || inputData.textHtml || "";
const lowerText = rawText.toLowerCase();

// Prüft auf typische Keywords
const keywords = ["kundennummer", "rechnung", "enterprise", "jahreslizenz", "upgrade", "support", "angebot", "hallo"];

// Ergibt true, wenn mindestens ein Wort zutrifft
const isCustomer = keywords.some(kw => lowerText.includes(kw));

return [{
  json: {
    isCustomer: isCustomer,
    emailText: rawText
  }
}];