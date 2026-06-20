'use client';

import { useParams } from 'next/navigation';
import { useRespContext } from "../../_components/RespProvider";

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
    <section>
      <img src={String(item.image_url)} alt={String(item.short_description)} />
      <p>{String(item.short_description)}</p>
    </section>
  );
}
 