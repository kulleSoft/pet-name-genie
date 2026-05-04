import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PawPrint } from 'lucide-react';

export const TERMS_TEXT = `Bem-vindo ao PetNomes! 🐾

Ao usar este aplicativo você concorda com:

1. Uso pessoal e não comercial das sugestões de nomes geradas.
2. As sugestões são geradas a partir de listas pré-definidas e podem ser repetidas.
3. O aplicativo armazena localmente, no seu dispositivo, suas preferências, favoritos, histórico e a aceitação destes termos. Nenhum dado é enviado a servidores externos.
4. O aplicativo pode exibir anúncios (Ads) para manter o serviço gratuito. Os anúncios são fornecidos por terceiros e podem coletar dados próprios conforme suas políticas.
5. Não nos responsabilizamos por escolhas feitas a partir das sugestões — divirta-se e use o bom senso!
6. Estes termos podem ser atualizados; novas versões serão exibidas quando relevantes.

Ao tocar em "Aceitar" você confirma que leu e concorda com estes termos.`;

export function TermsGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useLocalStorage<boolean>('petnomes:terms-accepted', false);

  if (!accepted) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
          <div className="space-y-3">
            <PawPrint className="h-12 w-12 mx-auto text-primary animate-float-slow" />
            <h1 className="text-2xl font-display">PetNomes</h1>
            <p className="text-muted-foreground text-sm">Aceite os termos para continuar.</p>
          </div>
        </div>
        <Dialog open>
          <DialogContent className="max-w-md rounded-3xl" onPointerDownOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
            <DialogHeader>
              <div className="mx-auto h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mb-2">
                <PawPrint className="h-7 w-7 text-primary-foreground" />
              </div>
              <DialogTitle className="text-center font-display text-2xl">Termos de Uso</DialogTitle>
              <DialogDescription className="text-center">
                Antes de começar, leia e aceite os termos. O app exibe anúncios.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-64 rounded-2xl border bg-muted/40 p-4 text-sm leading-relaxed whitespace-pre-line">
              {TERMS_TEXT}
            </ScrollArea>
            <Button
              size="lg"
              onClick={() => setAccepted(true)}
              className="w-full rounded-2xl gradient-primary text-primary-foreground hover:opacity-90 font-semibold"
            >
              Aceitar e continuar
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return <>{children}</>;
}
