import { useState } from 'react';
import { NAME_BANK, PET_LABELS, PetType, Style, STYLE_LABELS } from '@/data/names';
import { Chip } from '@/components/pet/Chip';
import { NameCard } from '@/components/pet/NameCard';

export default function Categories() {
  const [pet, setPet] = useState<PetType>('dog');
  const [style, setStyle] = useState<Style>('cute');

  const all = NAME_BANK[pet][style];
  const list = Array.from(new Set([...all.male, ...all.female, ...all.neutral]));

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-display"><span className="text-gradient">Categorias</span></h1>
        <p className="text-sm text-muted-foreground">Explore nomes por pet e estilo</p>
      </header>

      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        {(Object.keys(PET_LABELS) as PetType[]).map((p) => (
          <Chip key={p} active={pet === p} onClick={() => setPet(p)}>
            <span className="mr-1">{PET_LABELS[p].emoji}</span>{PET_LABELS[p].label}
          </Chip>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        {(Object.keys(STYLE_LABELS) as Style[]).map((s) => (
          <Chip key={s} active={style === s} onClick={() => setStyle(s)}>
            <span className="mr-1">{STYLE_LABELS[s].emoji}</span>{STYLE_LABELS[s].label}
          </Chip>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">{list.length} nomes encontrados</p>

      <div className="space-y-2">
        {list.map((n, i) => (
          <NameCard key={n} name={n} index={i} />
        ))}
      </div>
    </div>
  );
}
