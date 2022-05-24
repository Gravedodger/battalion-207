import React from 'react';
import Link from 'next/link';

export default function Custom404() {
    return <>
        <h1>404 - Сторінка на знайдена чи була переміщена</h1>
        <h2>404 - Page Not Found Or Had Been Moved Elsewhere</h2>
        <Link href="/">
            <a>
                Повернутися на головну сторінку / Go back home
            </a>
        </Link>
    </>
}
