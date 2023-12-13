export type Slideshow = {
  author: string;
  title: string;
};

export async function getData() {
  const res = await fetch("https://httpbin.org/json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch data");
  }

  const data = await res.json();
  return data.slideshow as Slideshow;
}
