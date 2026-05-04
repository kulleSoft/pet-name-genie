import { Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites, useHistory } from '@/hooks/usePetStore';
import { NameCard } from '@/components/pet/NameCard';

export default function Favorites() {
  const { favorites } = useFavorites();
  const { history, clear } = useHistory();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-display"><span className="text-gradient">Favoritos</span></h1>
        <p className="text-sm text-muted-foreground">Os nomes que você mais amou 💜</p>
      </header>

      {favorites.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-8 text-center text-muted-foreground">
          <Heart className="h-10 w-10 mx-auto mb-2 text-[hsl(var(--fun-pink))]" />
          <p className="text-sm">Toque no coração para favoritar nomes.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {favorites.map((n, i) => (
            <NameCard key={n} name={n} index={i} />
          ))}
        </div>
      )}

      <section className="space-y-2 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl">Histórico</h2>
          {history.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clear} className="text-destructive">
              <Trash2 className="h-4 w-4 mr-1" /> Limpar
            </Button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum nome gerado ainda.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {history.map((n) => (
              <span key={n} className="rounded-full bg-muted px-3 py-1 text-sm">{n}</span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
