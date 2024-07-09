import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BarChart3, Activity, Users } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Dashboard from "./pages/Dashboard";
import ActivityFeed from "./pages/ActivityFeed";
import Members from "./pages/Members";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Activity Feed",
    to: "/activity",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: "Members",
    to: "/members",
    icon: <Users className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="activity" element={<ActivityFeed />} />
              <Route path="members" element={<Members />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;