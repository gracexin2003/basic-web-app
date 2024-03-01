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

  match = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)/i)
  if (match) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    const z = parseInt(match[3], 10);

    if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
      const max = Math.max(x, Math.max(y, z));
      return max.toString();
    }
  }
  // What is 60 multiplied by 36?

  match = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)/i)
  if (match) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    if (!isNaN(x) && !isNaN(y)) {
      const product = x * y;
      return product.toString();
    }
  }

  return "";
}
