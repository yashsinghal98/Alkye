'use client';

import { useParams } from 'next/navigation';
import { useRespContext } from "../../_components/RespProvider";
import './new.css';

export default function SelectedPage() {
  const params = useParams();
  const { items } = useRespContext();
  const item = items.find((entry) => String(entry.id) === params?.id);

  if (!item) {
    return (
      <section>
        <p>Loading selected item...</p>
      </section>
    );
  }

  return (
    <section className='desc-page'>
      <img src={String(item.image_url)} className='main-img' alt={String(item.short_description)} />
      <div className='info-section'>
        <span className='tag'>Photography</span>
        <p className='meta-sum'>{String(item.short_description)}</p>
        <p className='meta-sub'>{String( item.content)}</p>
      </div>
    </section>
  );
}
 