import { Container } from '@/components/Container';
import { Bookmark } from '@/types/Bookmarktypes';
import { fetchBookmarks } from '@/utils/bookmarkutils';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

type Props = {
  bookmarks: Bookmark[];
  tags: string[];
};

const Bookmarks = ({ bookmarks, tags }: Props) => {
  const [displayBookmarks, setDisplayBookmarks] = useState(bookmarks);
  const [selectedTag, setSelectedTag] = useState<string>();
  const filterBookmarks = (tag?: string) => {
    if (tag) {
      setDisplayBookmarks(bookmarks.filter(({ tags }) => tags.includes(tag)));
    } else {
      setDisplayBookmarks(bookmarks);
    }
    setSelectedTag(tag);
  };

  return (
    <Container className="rounded-2xl mt-10 border border-neutral-200 p-6 dark:border-neutral-700/40">

    <ol className="mt-6 space-y-4">
      {bookmarks.map(({ cover, title, tags,link }, roleIndex) => (
        <li
          key={roleIndex}
          className="flex items-center gap-4 border-b border-neutral-200 pb-4 dark:border-neutral-700/40"
        >
          <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
            <img src={cover} alt="" className="h-12 w-12" />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
        
            <dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
              <a href={title}>{title}</a>
            </dd>
            <dd className="w-full text-xs text-neutral-500 dark:text-neutral-400">
              #{tags}
            </dd>
          
          
          </dl>
        </li>
      ))}
    </ol>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const bookmarks = await fetchBookmarks();

  const tags = Array.from(new Set(bookmarks.flatMap(({ tags }) => tags)));

  const props: Props = { bookmarks, tags };

  return {
    props,
    revalidate: 60 * 60,
  };
};

export default Bookmarks;