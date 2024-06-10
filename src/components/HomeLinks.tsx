"use client"
import { Paper, Text, Image, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { routesArr } from '@/costants';

const imagesArr = [
  "/usb-stick.jpeg",
  "/first-desktop.png",
  "/hold-power-button.jpeg",
  "/gpu.jpg",
  "/brain.jpg",
  "/other.png"
];

const LinkCard = ({ link, image }: { link: string, image: string }) => {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  const linkStyle = {
    color: colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.blue[6],
    textDecoration: 'none', // Questo rimuove il sottolineato
    // Aggiungi qui altri stili se necessario
  };

  return (
    <div className="w-full md:w-1/4 lg:w-1/3 xl:w-1/2 p-4">
      <Paper shadow="md" p="md" className="h-full flex flex-col items-center">
        <Link href={link} className="text-center" style={linkStyle}>
          <Text fz='xl'>{link.toUpperCase()}</Text>
          <Image src={image} alt={"Guida " + link} className="w-full h-auto" />
        </Link>
      </Paper>
    </div>
  );
};

const HomeLinks = () => (
  <div className='flex flex-wrap -m-4'>
    {routesArr.map((link, index) => (
      <LinkCard key={index} link={link} image={imagesArr[index]} />
    ))}
  </div>
);

export default HomeLinks;
