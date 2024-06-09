import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";

export default function useScrollProgress() {
    useEffect(() => {
      const handleScroll = () => {
        //windows.ScrollY indica quanto si ha scrollato (pixel)
        //document.body.scrollHeight indica l'altezza totale della pagina (pixel)
        //window.innerHieght indica la altezza del campo visivo (pixel)
        //Facendo altezza totale - altezza campo visivo, ottengo quanto posso scrollare concretamente
        //Facendo il rapporto tra quanto ho scrollato e quanto posso scrollare ottengo un numero tra 0 e 1
        //Che indica il progresso fatto, moltiplico per 100 e ottengo la percentuale 
        const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        //Utilizzo la funzione set per inserire la percentuale
        nprogress.set(progress);
      };
      
      //Ascolta tutti gli eventi di scroll, sia mouse che barra e triggera la funzione handleScroll
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  }