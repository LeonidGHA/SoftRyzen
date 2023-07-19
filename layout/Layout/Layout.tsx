import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer } from '../Footer';
import { Header } from '../Header';

import { LayoutProps } from './Layout.props';

export const Layout: FC<LayoutProps> = ({ children }: any) => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-grow pt-[60px] md:pt-[100px]">
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 15000,
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>,
) => {
  return function withLayoutComponent(props: any) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
};
