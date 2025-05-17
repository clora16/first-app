import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // リクエストURLからクエリパラメータを取得
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';

    // 本来はDBや外部API呼び出しを行う
    const results = [
        { id: 1, title: `${q} の結果1` },
        { id: 2, title: `${q} の結果2` },
    ];

    // JSONレスポンスを返す
    return NextResponse.json({ results });
}