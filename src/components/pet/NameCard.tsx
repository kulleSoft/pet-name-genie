import { Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/usePetStore';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const accents = ['gradient-primary', 'gradient-sunset', 'gradient-ocean'];

export function NameCard({ name, index = 0 }: { name: string; index?: number }) {
  const { isFav, toggle } = useFavorites();
  const [copied, setCopied] = useState(false);
  const fav = isFav(name);
  const accent = accents[index % accents.length];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(true);
      toast.success(`"${name}" copiado!`);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error('Não foi possível copiar');
    }
  };

  const handleFav = () => {
    toggle(name);
    toast(fav ? 'Removido dos favoritos' : '⭐ Adicionado aos favoritos');
  };

  return (
    <div
      className="animate-pop-in rounded-3xl bg-card border border-border p-4 shadow-soft flex items-center gap-3"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className={cn('h-12 w-12 rounded-2xl flex items-center justify-center text-xl shrink-0', accent)}>
        🐾
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-lg leading-tight truncate">{name}</p>
      </div>
      <div className="flex items-center gap-1">
        <Button size="icon" variant="ghost" onClick={handleCopy} className="rounded-full h-9 w-9">
          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button size="icon" variant="ghost" onClick={handleFav} className="rounded-full h-9 w-9">
          <Heart className={cn('h-4 w-4', fav && 'fill-current text-[hsl(var(--fun-pink))]')} />
        </Button>
      </div>
    </div>
  );
}
