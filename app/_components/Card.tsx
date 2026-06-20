'use client';

import { useRouter } from 'next/navigation';
import './Card.css';
import Test from '../../test.png';
import { useEffect } from 'react';

export default function Card({ data }) {
    const router = useRouter();
    return (
        <article
            id={data.id}
            className='card'
            role='button'
            tabIndex={0}
            style={{ backgroundImage: `url(${data.image_url})` }}
            onClick={() => router.push(`/products/${data.id}`)}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    router.push(`/products/${data.id}`);
                }
            }}
        >
            <span className='tag'>Photography</span>
            <p className='desc'>{data.short_description}</p>
        </article>
    );
}