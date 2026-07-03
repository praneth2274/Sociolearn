'use client';

import { useState } from 'react';
import { FiHeart, FiBookmark, FiShare2, FiVolume2, FiGlobe } from 'react-icons/fi';

export default function ArticleActions() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [playing, setPlaying] = useState(false);

  const btn = (active: boolean) =>
    [
      'flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-xs font-medium transition',
      active ? 'border-primary bg-primary/10 text-primary' : 'border-line text-ink/60 hover:border-primary/40'
    ].join(' ');

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <button type="button" className={btn(liked)} onClick={() => setLiked((v) => !v)}>
        <FiHeart size={14} /> {liked ? 'Liked' : 'Like'}
      </button>
      <button type="button" className={btn(saved)} onClick={() => setSaved((v) => !v)}>
        <FiBookmark size={14} /> {saved ? 'Saved' : 'Bookmark'}
      </button>
      <button type="button" className={btn(false)}>
        <FiShare2 size={14} /> Share
      </button>
      <button type="button" className={btn(playing)} onClick={() => setPlaying((v) => !v)}>
        <FiVolume2 size={14} /> {playing ? 'Playing…' : 'Listen'}
      </button>
      <label className="ml-auto flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-body text-xs text-ink/60">
        <FiGlobe size={14} />
        <select className="bg-transparent outline-none">
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </label>
    </div>
  );
}
