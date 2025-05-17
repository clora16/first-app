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
  const [isLoading, setIsLoading] = useState(false);        // ← ローディング
  const [error, setError] = useState<string | null>(null);  // ← エラー

	// ボタン押下時に呼ばれるイベントハンドラ
	// 今はalertで検索ワードを表示する動作のみ
  const handleSearch = async () => {
    setError(null);
    setIsLoading(true);
    try{
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

      if (!res.ok) throw new Error(`${res.status}`);
      const { results } = await res.json();
      setResults(results);
    } catch (e: any){
      setError('検索に失敗しました');
    } finally {
      setIsLoading(false);
    }
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

      {/* ローディング中 */}
      {isLoading && <p>検索中…</p>}

      {/* エラー表示 */}
      {error && <p className="text-red-500">{error}</p>}

      {/* 結果リスト */}
      {!isLoading && !error && (
        <ul className="space-y-2">
          {results.map(item => (
            <ResultItem key={item.id} title={item.title} />
          ))}
        </ul>
      )}
    </main>
  );
}