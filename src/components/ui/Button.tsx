'use client';
import React from 'react';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps): React.JSX.Element {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {children}
      </button>
    );
  }