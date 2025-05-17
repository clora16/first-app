'use client';
import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps): React.JSX.Element {
    return (
        <input
            {...props}
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
}
