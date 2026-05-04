import { useState } from 'react';
import { Moon, Sun, FileText, Heart, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/hooks/useTheme';
import { TERMS_TEXT } from '@/components/pet/TermsGate';
import { useFavorites, useHistory } from '@/hooks/usePetStore';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();
  const { history, clear } = useHistory();

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-display"><span className="text-gradient">Ajustes</span></h1>
        <p className="text-sm text-muted-foreground">Personalize sua experiência</p>
      </header>

      <div className="rounded-3xl bg-card border border-border p-4 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-sunset flex items-center justify-center text-secondary-foreground">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </div>
            <div>
              <p className="font-semibold">Modo escuro</p>
              <p className="text-xs text-muted-foreground">Mais aconchegante à noite</p>
            </div>
          </div>
          <Switch checked={theme === 'dark'} onCheckedChange={toggle} />
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-3xl bg-card border border-border p-4 shadow-soft flex items-center gap-3 text-left hover:border-primary/40 transition"
      >
        <div className="h-10 w-10 rounded-xl gradient-ocean flex items-center justify-center text-accent-foreground">
          <FileText className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">Visualizar Termos de Uso</p>
          <p className="text-xs text-muted-foreground">Inclui aviso de anúncios</p>
        </div>
      </button>

      <div className="rounded-3xl bg-card border border-border p-4 shadow-soft space-y-3">
        <p className="font-semibold">Seus dados</p>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2"><Heart className="h-4 w-4 text-[hsl(var(--fun-pink))]" /> Favoritos</span>
          <span className="font-bold">{favorites.length}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Histórico</span>
          <span className="font-bold">{history.length}</span>
        </div>
        {history.length > 0 && (
          <Button
            variant="outline"
            className="w-full rounded-2xl"
            onClick={() => {
              clear();
              toast.success('Histórico limpo');
            }}
          >
            <Trash2 className="h-4 w-4 mr-2" /> Limpar histórico
          </Button>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground pt-4">
        PetNomes · Feito com 💜 para os pets
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Termos de Uso</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-80 rounded-2xl border bg-muted/40 p-4 text-sm whitespace-pre-line leading-relaxed">
            {TERMS_TEXT}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
