'use client';

import './index.css';
import Card from "./_components/Card";
import { useRespContext } from "./_components/RespProvider";

export default function Home() {
  const { items } = useRespContext();

  return (
    <div className="">
      <main className="card-cont">
        {items.length === 0 ? (
          <p>Loading cards…</p>
        ) : (
          items.map((cardData) => <Card key={String(cardData.id)} data={cardData} />)
        )}
      </main>
    </div>
  );
}
