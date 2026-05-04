import { NavLink } from 'react-router-dom';
import { Sparkles, Heart, LayoutGrid, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { to: '/', label: 'Gerador', icon: Sparkles },
  { to: '/favoritos', label: 'Favoritos', icon: Heart },
  { to: '/categorias', label: 'Categorias', icon: LayoutGrid },
  { to: '/configuracoes', label: 'Ajustes', icon: Settings },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="mx-auto max-w-md rounded-3xl bg-card/95 backdrop-blur border border-border shadow-fun pointer-events-auto">
        <ul className="flex items-stretch justify-between px-2 py-1.5">
          {items.map(({ to, label, icon: Icon }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center justify-center gap-0.5 rounded-2xl py-2 px-1 text-xs font-semibold transition-all',
                    isActive
                      ? 'gradient-primary text-primary-foreground shadow-fun scale-[1.03]'
                      : 'text-muted-foreground hover:text-foreground',
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
