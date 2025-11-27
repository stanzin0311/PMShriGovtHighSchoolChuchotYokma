import React, { useMemo, useState } from "react";

const DUMMY_NEWS = [
    {
        id: 1,
        title: "Admission Notifications for 2025-26",
        excerpt: "Admissions for Class 9 and other transfer cases are now open. Contact the school office for details.",
        date: "2025-11-01",
        category: "Admissions",
    },
    {
        id: 2,
        title: "Free Textbooks & Uniforms Distributed",
        excerpt: "As part of PM SHRI and Samagra Shiksha initiatives, students received textbooks and uniforms for the academic year.",
        date: "2025-09-15",
        category: "Programs",
    },
    {
        id: 3,
        title: "Sports Week Celebration",
        excerpt: "Students participated in football, basketball, yoga, and other activities to promote fitness and teamwork.",
        date: "2025-08-20",
        category: "Sports",
    },
    {
        id: 4,
        title: "Community Outreach Initiative",
        excerpt: "Students engaged with the local community in cleanliness drives and social awareness programs.",
        date: "2025-07-30",
        category: "Community",
    },
    {
        id: 5,
        title: "Special Education & Braille Learning",
        excerpt: "Students with special needs received support through Braille classes, physiotherapy, and adaptive learning resources.",
        date: "2025-06-10",
        category: "Inclusion",
    },
    {
        id: 6,
        title: "Middle & Secondary Stage Academic Updates",
        excerpt: "Teachers updated parents on student progress, emphasizing English communication and skill development.",
        date: "2025-05-25",
        category: "Academics",
    },
];

export default function News() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [page, setPage] = useState(1);
    const perPage = 4;

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(DUMMY_NEWS.map(n => n.category)))],
        []
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return DUMMY_NEWS.filter(n => {
            const matchesQuery =
                q === "" ||
                n.title.toLowerCase().includes(q) ||
                n.excerpt.toLowerCase().includes(q);
            const matchesCategory = category === "All" || n.category === category;
            return matchesQuery && matchesCategory;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [query, category]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const visible = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-10">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900">News & Updates</h1>
                    <p className="mt-2 text-gray-600">Latest announcements, programs, and activities at PM SHRI Govt. High School Chuchot Yokma.</p>
                </header>

                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
                    <div className="flex-1">
                        <input
                            type="search"
                            value={query}
                            onChange={e => { setQuery(e.target.value); setPage(1); }}
                            placeholder="Search title or excerpt..."
                            className="w-full rounded-md border border-gray-200 px-4 py-2 bg-white focus:ring-2 focus:ring-rose-500"
                        />
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <select
                            value={category}
                            onChange={e => { setCategory(e.target.value); setPage(1); }}
                            className="rounded-md border border-gray-200 bg-white px-4 py-2 focus:ring-2 focus:ring-rose-500"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* News Cards */}
                <section>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {visible.length === 0 ? (
                            <div className="col-span-full rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center">
                                <p className="text-gray-600">No news found.</p>
                            </div>
                        ) : visible.map(item => (
                            <article key={item.id} className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden">
                                {/* Category Banner */}
                                <div className="h-28 bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500 flex items-center justify-center text-white font-semibold">
                                    <span className="uppercase text-sm tracking-wider">{item.category}</span>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                                    <p className="mt-2 text-sm text-gray-600 flex-1">{item.excerpt}</p>
                                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                        <time>{new Date(item.date).toLocaleDateString()}</time>
                                        <button className="text-rose-700 hover:underline text-sm">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Pagination */}
                <footer className="mt-8 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Showing {(page - 1) * perPage + (visible.length ? 1 : 0)}–
                        {(page - 1) * perPage + visible.length} of {filtered.length}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <div className="text-sm text-gray-700">
                            Page {page} / {totalPages}
                        </div>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-3 py-1 rounded-md border bg-white text-sm disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}
