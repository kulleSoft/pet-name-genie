import { useEffect, useState } from 'react';
import { Sparkles, RefreshCw, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/pet/Chip';
import { NameCard } from '@/components/pet/NameCard';
import { AdSlot } from '@/components/pet/AdSlot';
import {
  Gender,
  GENDER_LABELS,
  generateNames,
  PET_LABELS,
  PetType,
  Style,
  STYLE_LABELS,
} from '@/data/names';
import { useHistory } from '@/hooks/usePetStore';

export default function Generator() {
  const [pet, setPet] = useState<PetType>('dog');
  const [gender, setGender] = useState<Gender>('neutral');
  const [styles, setStyles] = useState<Style[]>(['cute', 'funny']);
  const [names, setNames] = useState<string[]>([]);
  const { push } = useHistory();

  const generate = () => {
    console.log('Gerar nomes clicado — pet:', pet, 'gender:', gender, 'styles:', styles);
    const result = generateNames({ pet, gender, styles, count: 8 });
    setNames(result);
    push(result);
  };

  // Sugestões aleatórias ao abrir
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleStyle = (s: Style) =>
    setStyles((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display leading-tight">
            <span className="text-gradient">Two Names Pet</span>
          </h1>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <PawPrint className="h-3.5 w-3.5" /> Encontre o nome perfeito
          </p>
        </div>
        <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center shadow-fun animate-float-slow">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </div>
      </header>

      <section className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tipo de pet</p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
          {(Object.keys(PET_LABELS) as PetType[]).map((p) => (
            <Chip key={p} active={pet === p} onClick={() => setPet(p)}>
              <span className="mr-1">{PET_LABELS[p].emoji}</span>
              {PET_LABELS[p].label}
            </Chip>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gênero</p>
        <div className="flex gap-2">
          {(Object.keys(GENDER_LABELS) as Gender[]).map((g) => (
            <Chip key={g} active={gender === g} onClick={() => setGender(g)} className="flex-1">
              {GENDER_LABELS[g]}
            </Chip>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estilo</p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
          {(Object.keys(STYLE_LABELS) as Style[]).map((s) => (
            <Chip key={s} active={styles.includes(s)} onClick={() => toggleStyle(s)}>
              <span className="mr-1">{STYLE_LABELS[s].emoji}</span>
              {STYLE_LABELS[s].label}
            </Chip>
          ))}
        </div>
      </section>

      <Button
        size="lg"
        onClick={generate}
        className="w-full h-14 rounded-2xl gradient-primary text-primary-foreground hover:opacity-90 font-display text-lg shadow-fun"
      >
        <Sparkles className="mr-2 h-5 w-5" /> Gerar nomes
      </Button>

      <AdSlot label="Banner de exemplo" />

      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl">Sugestões</h2>
          <Button variant="ghost" size="sm" onClick={generate} className="text-primary">
            <RefreshCw className="h-4 w-4 mr-1" /> Novos
          </Button>
        </div>
        <div className="space-y-2">
          {names.map((n, i) => (
            <NameCard key={`${n}-${i}`} name={n} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
