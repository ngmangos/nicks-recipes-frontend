import { getToken } from '@/storage';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack, usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Error in query:', error);
      // Global error handling here (e.g., Toast notification)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error('Error in mutation:', error);
      // Global error handling for mutations
    },
  }),
});

const RootLayout = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      if (pathname === '/login') {
        return; // Don't check auth if we're already on the login page
      }
      try {
        const token = await getToken();
        if (!token) {
          router.replace('/login');
        }
      } catch (err) {
        console.error('Failed to read token from SecureStore:', err);
        router.replace('/login');
      }
    };

    checkAuth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
      </Stack>
    </QueryClientProvider>
  );
}

export default RootLayout