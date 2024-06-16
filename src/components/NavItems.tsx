"use client";
import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import classes from './NavItems.module.css';
import { routesArr } from '@/costants';
import { usePathname, useRouter } from 'next/navigation';
import { useDocumentTitle } from '@mantine/hooks';

export default function NavItems({ toggle }: { toggle: () => void }) {
    const [activeLink, setActiveLink] = useState(""); //Lascio stringa vuota se no typescript rompe
    const router = useRouter();

    //Prendo la path attuale
    const path = usePathname().substring(1);

    //Mi sorprendo di quanto fragile sia questo codice ma va bene, finche funziona
    useEffect(() => {
        setActiveLink(path)
    }, [path])

    //Aggiorno il titolo del documento ogni volta che viene cambiata pagina
    useDocumentTitle(path === "" ? 'Stagisti' : path[0].toUpperCase() + path.slice(1))

    return (
        <>
            {routesArr.map((route: string) => (
                <Button
                    fz="lg"
                    lh="xl"
                    mb="md"
                    key={route}
                    variant='subtle'
                    className={classes.link}
                    data-active={activeLink === route || undefined}
                    onClick={(event) => {
                        event.preventDefault();
                        setActiveLink(route);
                        toggle()
                        router.push(route);
                    }}
                >
                    {route[0].toUpperCase() + route.slice(1)}
                </Button>
            ))}
        </>
    );
}
