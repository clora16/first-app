'use client';
export default function ResultItem({ title }: { title: string }) {
  return <li className="p-2 border rounded">{title}</li>;
}