'use client'
import { LinkInterface } from "@/_models/commonModels";
import { Button, Tooltip, useMantineTheme, Text } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

// Create a custom component for the link element
const LinkElement: FC<{ fullLink: LinkInterface }> = ({ fullLink }) => {

    const scrollWithOffset = (el: HTMLElement, offset: number): void => {
        const elementPosition = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    };

    const theme = useMantineTheme();
    const router = useRouter()

    // Handle the case when the link is to go back
    if (fullLink.link == null) {
        return (
            <Button mb='md' className='shadow shadow-red-500/50 hover:shadow-lg  hover:shadow-red-500/50' bg={theme.colors.linkButtonRed[3]}
                onClick={() => router.back()} 
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
        <Link href={hashLinkName}>
            <Button mb='md' className='shadow shadow-red-500/50 hover:shadow-lg  hover:shadow-red-500/50' bg={theme.colors.linkButtonRed[3]}>
                <Text mb='none' size='md' className='no-underline'>
                    {fullLink.descrizioneLink}
                </Text>
            </Button>
        </Link>
    );
};

export default LinkElement