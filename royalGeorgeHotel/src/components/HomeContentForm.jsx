// src/components/HomeContentForm.jsx
import React, { useEffect, useState } from "react";
import { getHomeContent, saveHomeContent } from "../api/homeContentApi";

const emptyHero = {
    overline: "",
    title: "",
    subtitle: "",
    tagline: "",
};

const HomeContentForm = () => {
    const [hero, setHero] = useState(emptyHero);
    const [bars, setBars] = useState([]);
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const data = await getHomeContent();
                setHero(data.hero ?? emptyHero);
                setBars(data.bars ?? []);
                setMenu(data.menu ?? []);
            } catch (err) {
                setError(err.message || "Failed to load home page content");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleHeroChange = (field, value) => {
        setHero((prev) => ({ ...prev, [field]: value }));
    };

    const handleBarChange = (index, field, value) => {
        setBars((prev) =>
            prev.map((bar, i) => (i === index ? { ...bar, [field]: value } : bar))
        );
    };

    const handleMenuChange = (index, field, value) => {
        setMenu((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    const addBar = () =>
        setBars((prev) => [
            ...prev,
            { title: "", description: "", tags: [] },
        ]);

    const removeBar = (index) =>
        setBars((prev) => prev.filter((_, i) => i !== index));

    const addMenuItem = () =>
        setMenu((prev) => [...prev, { name: "", category: "" }]);

    const removeMenuItem = (index) =>
        setMenu((prev) => prev.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError("");
        setSuccess("");

        try {
            await saveHomeContent({ hero, bars, menu });
            setSuccess("Home page content updated successfully.");
        } catch (err) {
            setError(err.message || "Failed to save home page content");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <p className="p-4 text-sm text-gray-700">Loading home content…</p>;
    }

    return (
        <div className="p-6" style={{ width: '80vw', height: 'auto' }}>
            <h1 className="text-2xl font-semibold mb-4">Home Page Content</h1>

            {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
            {success && <p className="mb-3 text-sm text-green-600">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* HERO SECTION */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Hero Section</h2>
                    <div className="grid gap-3 md:grid-cols-2">
                        <label className="flex flex-col text-sm md:col-span-2">
                            Overline
                            <input
                                className="mt-1 rounded border px-3 py-2"
                                value={hero.overline}
                                onChange={(e) =>
                                    handleHeroChange("overline", e.target.value)
                                }
                            />
                        </label>
                        <label className="flex flex-col text-sm md:col-span-2">
                            Title
                            <input
                                className="mt-1 rounded border px-3 py-2"
                                value={hero.title}
                                onChange={(e) => handleHeroChange("title", e.target.value)}
                                required
                            />
                        </label>
                        <label className="flex flex-col text-sm md:col-span-2">
                            Subtitle
                            <input
                                className="mt-1 rounded border px-3 py-2"
                                value={hero.subtitle}
                                onChange={(e) =>
                                    handleHeroChange("subtitle", e.target.value)
                                }
                            />
                        </label>
                        <label className="flex flex-col text-sm md:col-span-2">
                            Tagline / Description
                            <textarea
                                className="mt-1 rounded border px-3 py-2"
                                rows={3}
                                value={hero.tagline}
                                onChange={(e) =>
                                    handleHeroChange("tagline", e.target.value)
                                }
                            />
                        </label>
                    </div>
                </section>

                {/* BARS SECTION */}
                <section>
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">Bars Section</h2>
                        <button
                            type="button"
                            onClick={addBar}
                            className="px-3 py-1 text-sm rounded bg-yellow-400 hover:bg-yellow-500"
                        >
                            + Add Bar
                        </button>
                    </div>

                    <div className="space-y-4">
                        {bars.map((bar, index) => (
                            <div
                                key={index}
                                className="border rounded p-4 space-y-2 bg-white"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-sm">
                                        Bar #{index + 1}
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={() => removeBar(index)}
                                        className="text-xs text-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <label className="flex flex-col text-sm">
                                    Title
                                    <input
                                        className="mt-1 rounded border px-3 py-2"
                                        value={bar.title}
                                        onChange={(e) =>
                                            handleBarChange(index, "title", e.target.value)
                                        }
                                    />
                                </label>

                                <label className="flex flex-col text-sm">
                                    Tags (comma-separated)
                                    <input
                                        className="mt-1 rounded border px-3 py-2"
                                        value={bar.tags?.join(", ") || ""}
                                        onChange={(e) =>
                                            handleBarChange(
                                                index,
                                                "tags",
                                                e.target.value
                                                    .split(",")
                                                    .map((t) => t.trim())
                                                    .filter(Boolean)
                                            )
                                        }
                                    />
                                </label>

                                <label className="flex flex-col text-sm">
                                    Description
                                    <textarea
                                        className="mt-1 rounded border px-3 py-2"
                                        rows={3}
                                        value={bar.description || ""}
                                        onChange={(e) =>
                                            handleBarChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                </label>
                            </div>
                        ))}

                        {bars.length === 0 && (
                            <p className="text-sm text-gray-500">
                                No bar cards yet. Click “Add Bar” to create one.
                            </p>
                        )}
                    </div>
                </section>

                {/* MENU SECTION */}
                <section>
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">Menu Section</h2>
                        <button
                            type="button"
                            onClick={addMenuItem}
                            className="px-3 py-1 text-sm rounded bg-yellow-400 hover:bg-yellow-500"
                        >
                            + Add Menu Item
                        </button>
                    </div>

                    <div className="space-y-4">
                        {menu.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded p-4 grid gap-3 md:grid-cols-2 items-end bg-white"
                            >
                                <label className="flex flex-col text-sm">
                                    Name
                                    <input
                                        className="mt-1 rounded border px-3 py-2"
                                        value={item.name}
                                        onChange={(e) =>
                                            handleMenuChange(index, "name", e.target.value)
                                        }
                                    />
                                </label>

                                <label className="flex flex-col text-sm">
                                    Category
                                    <input
                                        className="mt-1 rounded border px-3 py-2"
                                        value={item.category}
                                        onChange={(e) =>
                                            handleMenuChange(index, "category", e.target.value)
                                        }
                                    />
                                </label>

                                <button
                                    type="button"
                                    onClick={() => removeMenuItem(index)}
                                    className="text-xs text-red-600 md:col-span-2 justify-self-start"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        {menu.length === 0 && (
                            <p className="text-sm text-gray-500">
                                No menu items yet. Click “Add Menu Item” to create one.
                            </p>
                        )}
                    </div>
                </section>

                <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 rounded bg-black text-white hover:bg-gray-900 disabled:opacity-60"
                >
                    {saving ? "Saving…" : "Save Changes"}
                </button>
            </form>
        </div>
    );
};

export default HomeContentForm;
