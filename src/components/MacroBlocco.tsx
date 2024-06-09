"use client";
import { Button, List, ListItem, Paper, Text, Title, Tooltip, useMantineTheme } from '@mantine/core';
import { Body, Immagine, LinkInterface, MacroBloccoProps, listInterface } from '@/_models/commonModels';
import { IconArrowBack } from '@tabler/icons-react';
import { FC } from 'react';
import Markdown from 'react-markdown';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { HEADER_HEIGHT } from '@/costants';
import ImageCustom from './ImageCustom';
import Link from 'next/link';


const SubTitleElement: FC<{ subtitle: string }> = ({ subtitle }) => {
    return <Title className='font-normal'>{subtitle}</Title>
};


const scrollWithOffset = (el: HTMLElement, offset: number): void => {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
};

// Create a custom component for the link element
const LinkElement: FC<{ fullLink: LinkInterface }> = ({ fullLink }) => {

    const theme = useMantineTheme();

    // Handle the case when the link is to go back
    if (fullLink.link == null) {
        return (
            <Button mb='md' className='shadow shadow-red-500/50 hover:shadow-lg  hover:shadow-red-500/50' bg={theme.colors.linkButtonRed[3]}
                onClick={() => window.history.back()}
            >
                <Tooltip label="Torna indietro">
                    <IconArrowBack size={40} />
                </Tooltip>
            </Button>
        );
    }

    //Substringo _modelAPiKey per ottenere il nome della pagina a cui é collegato il link
    const pageName = fullLink.link._modelApiKey.substring(0, fullLink.link._modelApiKey.indexOf("_"))

    const hashLinkName = "/" + pageName + "#" + fullLink.link.title

    return (
        //TODO gestire spazi per altezza header --> scroll={(el: any) => scrollWithOffset(el, HEADER_HEIGHT + 20)}
        <Link href={hashLinkName} >
            <Button mb='md' className='shadow shadow-red-500/50 hover:shadow-lg  hover:shadow-red-500/50' bg={theme.colors.linkButtonRed[3]}>
                <Text mb='none' size='md' className='no-underline'>
                    {fullLink.descrizioneLink}
                </Text>
            </Button>
        </Link>
    );
};

// Create a custom component for the image element
const ImageElement: FC<{ immagine: Immagine }> = ({ immagine }) => {
    //Lascio image in un altro file perchè rimane più oridinato
    return <div><ImageCustom link={immagine.url} /></div>
};

// Create a custom component for the list element
const ListElement: FC<{ list: listInterface[] }> = ({ list }) => {
    return (
        <List mb='md'>
            {list.map((item, index) => (
                <ListItem fz='lg' key={index}>{item.listElement}</ListItem>
            ))}
        </List>
    );
};

// Create a custom component for the text element
const TextElement: FC<{ testo: string }> = ({ testo }) => {
    return <Markdown className='-my-4'>{testo}</Markdown>; //Mi da problemi quindi gli metto un margine negativo :(
};

// Use a switch statement to handle different types of elements
const renderElement = (element: Body) => {
    switch (true) {
        case !!element.testo:
            return <TextElement testo={element.testo!} />;
        case !!element.immagine:
            return <ImageElement immagine={element.immagine!} />;
        case !!element.list:
            return <ListElement list={element.list!} />;
        case !!element.link || element.link === null: //Altro casino, se non scelgo un link sul cms, ritorna esclusivamente null, non undefined o altro 
            const fullLink = element as unknown as LinkInterface; //Casino
            return <LinkElement fullLink={fullLink} />;
        case !!element.subtitle:
            return <SubTitleElement subtitle={element.subtitle!} />;
        default:
            return null;
    }
};


const MacroBlocco = ({ title, counter, body }: MacroBloccoProps) => {
    const isMobile = useDeviceDetect()
    return ( /*TODO le immagini hano ancora un contenitore fantasma dopo aver metto flex flex-col 
    se metto div al di fuori di imageCustom, allora le immagini non si restingono più ma non cé più il contenitore fantasma
    */
        <Paper mb="sm" shadow="xl" p='md' className='flex flex-col'>
            {/* Nel caso sia un telefono, le scritte non devono essere troppo grandi se no "personalizzazione" sborda */}
            <Title mb='md' className={isMobile ? undefined : 'text-4xl'} id={title} >
                {counter ? counter + "° " + title : title}
            </Title>
            {body.map((element: Body) => renderElement(element))}
        </Paper>
    );
};

export default MacroBlocco;