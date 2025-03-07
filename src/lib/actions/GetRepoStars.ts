export async function getRepoStars() {
  const url = "https://api.github.com/repos/StructuredLabs/preswald";
  try {
    const response = await fetch(url, {
      next: { revalidate: 86400 },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const starsCount = json.stargazers_count;
    if (starsCount >= 1000) {
      const formattedCount = (starsCount / 1000).toFixed(1);
      return formattedCount.endsWith(".0")
        ? formattedCount.slice(0, -2) + "k"
        : formattedCount + "k";
    }
    return starsCount;
  } catch (error) {
    console.error(error);
  }
}
