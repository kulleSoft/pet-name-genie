export function AdSlot({ label = 'Espaço para Anúncio' }: { label?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-muted/40 px-4 py-3 text-center text-xs text-muted-foreground">
      <span className="font-semibold tracking-wide uppercase">Ad</span> · {label}
    </div>
  );
}
