import { Bookmark } from "@/types/Bookmarktypes";
const PER_PAGE = 50;
export const fetchBookmarks = async (page: number = 0) => {
    const bookmarks: Bookmark[] = [];

    const req = await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/35034229?perpage=${PER_PAGE}&page=${page}`,
        {
            headers: {
                Authorization: `Bearer f21f4f8b-1671-469c-8ce2-bd6766702861`,
            },
        }
    );

    const data = await req.json();
    bookmarks.push(
        ...data.items.map(({ cover, title, link, tags }: Bookmark) => ({
            link,
            title,
            cover,
            tags,
        }))
    );
    if (data.items.length === PER_PAGE) {
        bookmarks.push(...await fetchBookmarks(page + 1));
    }

    return bookmarks;
}