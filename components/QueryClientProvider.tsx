'use client';

import { PropsWithChildren, useState } from 'react';
import {
  QueryClientProvider as Provider,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
};

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient(queryClientConfig));

  return <Provider client={queryClient}>{children}</Provider>;
}
