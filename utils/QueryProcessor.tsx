export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "gxin"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "Grace"
    )
  }

  let match = query.toLowerCase().match(/what is (\d+) plus (\d+)/i)
  if (match) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    if (!isNaN(x) && !isNaN(y)) {
      const sum = x + y;
      return sum.toString();
    }
  }

  return "";
}
