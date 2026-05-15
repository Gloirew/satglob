// client/src/App.tsx
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import { MessageCircle, MessageCircleQuestionIcon } from "lucide-react";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/243XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-8 right-8 z-[9999]
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-green-500 hover:bg-green-600
        text-white
        shadow-xl
        transition-all duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <MessageCircleQuestionIcon className="w-10 h-10" />
    </a>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />

            <Router />

            {/* Bouton WhatsApp flottant */}
            <WhatsAppFloatButton />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;