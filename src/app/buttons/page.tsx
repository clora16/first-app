'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import ResultItem from '@/components/ui/ResultItem';

type Result = { id: number; title: string };

export default function ButtonPage(): React.JSX.Element {
	// 状態変数queryを宣言、初期値は空文字列
  const [query, setQuery] = useState('');

  const [results, setResults] = useState<Result[]>([]);

	// ボタン押下時に呼ばれるイベントハンドラ
	// 今はalertで検索ワードを表示する動作のみ
  const handleSearch = async () => {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const { results } = await res.json();
    setResults(results);
  };

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">検索ページ</h1>
      <div className="flex gap-2">
	      {/* 入力欄の描画 */}
        <Input
          placeholder="検索ワードを入力"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>検索</Button> {/* ボタンの描画 */}
      </div>
      <ul className="space-y-2">
        {results.map(item => (
          <ResultItem key={item.id} title={item.title} />
        ))}
      </ul>
    </main>
  );
}