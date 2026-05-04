import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { TermsGate } from './TermsGate';

export function AppShell() {
  return (
    <TermsGate>
      <div className="min-h-screen pb-safe">
        <div className="mx-auto max-w-md px-4 pt-6">
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </TermsGate>
  );
}
