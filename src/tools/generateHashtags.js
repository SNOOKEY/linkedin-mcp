export function generateHashtags(topic) {
  const words = topic
    .split(" ")
    .filter(Boolean)
    .map((word) => `#${word.replace(/[^a-zA-Z0-9]/g, "")}`);

  return [...words, "#LinkedIn", "#CareerGrowth"];
}