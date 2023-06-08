import { Bookmark } from "@/types/Bookmarktypes";
const PER_PAGE = 50;
export const fetchBookmarks = async (page: number = 0) => {
    const bookmarks: Bookmark[] = [];
    const  url:any = process.env.RAINDROP;


    const req = await fetch(
    url,
        {
            headers: {
                Authorization: `Bearer ${process.env.RAINDROPTOKEN}`,
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