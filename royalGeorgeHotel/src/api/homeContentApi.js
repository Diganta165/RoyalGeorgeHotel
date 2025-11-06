const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export async function getHomeContent() {
  const res = await fetch(`${API_BASE_URL}/api/home-content`);
  if (!res.ok) throw new Error("Failed to load home page content");
  return res.json();
}

export async function saveHomeContent(payload) {
  const res = await fetch(`${API_BASE_URL}/api/home-content`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to save home page content");
  return res.json();
}
