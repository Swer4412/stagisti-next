"use client";
import { Paper,Title,} from '@mantine/core';
import { Body, LinkInterface, MacroBloccoProps,} from '@/_models/commonModels';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { HEADER_HEIGHT } from '@/costants';
import SubTitleElement from '@/elements/subtitleElement';
import LinkElement from '@/elements/linkElement';
import ListElement from '@/elements/listElement';
import ImageElement from '@/elements/imageElement';
import TextElement from '@/elements/textElement';

const scrollWithOffset = (el: HTMLElement, offset: number): void => {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
};

// Use a switch statement to handle different types of elements
const renderElement = (element: Body) => {
    switch (true) {
        case !!element.testo:
            return <TextElement testo={element.testo!} />;
        case !!element.immagine:
            return <ImageElement link={element.immagine.url!} />;
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
    return ( 
        <Paper mb="sm" shadow="xl" p='md' className='flex flex-col'>
            {/* Nel caso sia un telefono, le scritte non devono essere troppo grandi se no "personalizzazione" sborda */}
            <Title mb='md' className={isMobile ? undefined : 'text-4xl'} id={title} >
                {counter ? counter + "° " + title : title}
            </Title>
            {body.map((element: Body, index: number) =>
                <div key={index}>
                    {renderElement(element)}
                </div>
            )}

        </Paper>
    );
};

export default MacroBlocco;