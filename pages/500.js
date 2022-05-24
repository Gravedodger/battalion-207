import React from 'react';
import Link from 'next/link';

export default function Custom500() {
    return <>
        <h1>500 - Сталася помилка на сервері</h1>
        <h2>500 - Server-side error occurred</h2>
        <Link href="/">
            <a>
                Повернутися на головну сторінку / Go back home
            </a>
        </Link>
    </>
}
