import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "@/hooks/useTheme";
import { AppShell } from "@/components/pet/AppShell";
import Generator from "@/pages/app/Generator";
import Favorites from "@/pages/app/Favorites";
import Categories from "@/pages/app/Categories";
import SettingsPage from "@/pages/app/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ThemeBoot = ({ children }: { children: React.ReactNode }) => {
  useTheme();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <ThemeBoot>
          <Routes>
            <Route element={<AppShell />}>
              <Route path="/" element={<Generator />} />
              <Route path="/favoritos" element={<Favorites />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/configuracoes" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeBoot>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
