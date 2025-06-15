import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './components/ui/Loader';
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./utils/toasterConfig";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster {...toastConfig} />
      <div className="font-nunito" >
        <Loader loading={loading} />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
