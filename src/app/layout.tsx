"use client"; //Definisco che layout è un client component
import { AppShell, Burger, ColorSchemeScript, Container, Group, MantineColorsTuple, MantineProvider, Title, createTheme, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavItems from '../components/NavItems';
import ToggleColorScheme from '../components/ToggleColorScheme';
import useIsSmallDevice from '@/hooks/useIsSmallDevice';
import { ReactNode } from 'react';
import Link from 'next/link';
import { HEADER_HEIGHT } from '@/costants'; // Si utilizza la chiocciola per indicare la root della cartella src, va comunque bene utilizzare ../ in questo caso
import useScrollProgress from '@/hooks/useScrollProgress';
import '@mantine/core/styles.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NavigationProgress } from '@mantine/nprogress';
import '@mantine/nprogress/styles.css';

const linkButtonRed: MantineColorsTuple = [
  "#ffebeb",
  "#fad6d6",
  "#efabab",
  "#e57e7d",
  "#dd5857",
  "#d83f3e",
  "#d73232",
  "#bf2424",
  "#aa1d1f",
  "#961318",
];

const theme = createTheme({
  autoContrast: true,
  components: {
    Text: {
      defaultProps: {
        size: "lg",
        lh: "xl",
      },
    },
  },

  fontFamily: "Helvetica",

  colors: {
    linkButtonRed,
  },

});

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" /> {/*Next.js dice di chiamarla favicon.ico ma funziona solo se si chiama icon.ico */}
        <title>Stagisti</title>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <NavigationProgress />
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
        <Analytics mode={'production'} />
        <SpeedInsights />
      </body>
    </html>
  )
}

function Layout({ children }: { children: ReactNode }) {

  //Cambio lo stile del link in base al color theme
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  const linkStyle = {
    color: colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.blue[6],
    textDecoration: 'none',
  };

  //Gestisco menu
  const [opened, { close, toggle }] = useDisclosure();

  //Hook per responsiveness
  const isSmallDevice = useIsSmallDevice()

  //Hook per muovere il navigation progress
  useScrollProgress();

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{ width: { md: 200, lg: 250 }, breakpoint: 'md', collapsed: { mobile: !opened } }}
      aside={{ width: { md: 200, lg: 250 }, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header className='shadow border-none'>
        <Group h="100%" px="md" justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <Title>
            <Link href="/" style={linkStyle} onClick={toggle}>
              Stagisti
            </Link>
          </Title>
          <ToggleColorScheme />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className={`min-[992px]:bg-opacity-[0.05] min-[992px]:bg-[#000000] bg-opacity-50 border-none`} >
        <NavItems toggle={close} />
      </AppShell.Navbar>
      <AppShell.Main className='bg-opacity-[0.08] bg-[#000000] border-none'>
        <Container p={isSmallDevice ? '0' : undefined}>
          {children}
        </Container>
      </AppShell.Main>
      <AppShell.Aside p="md" className='border-none z-0'></AppShell.Aside>
    </AppShell>
  );
}