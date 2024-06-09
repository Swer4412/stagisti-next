export interface Body {
  testo?: string;
  immagine?: Immagine;
  link?: LinkInterface;
  subtitle?: string;
  list?: listInterface[];
}

export interface Immagine {
  url: string;
}

export interface LinkInterface {
  link: {
    title: string;
    _modelApiKey: string;
  };
  descrizioneLink: string;
}

//Per problemi di ambiguitá di nomi, devo chiamare List come ListElement
export interface listInterface {
  listElement: string;
}

export interface MacroBloccoProps {
  counter?: number;
  title: string;
  body: Body[];
}

export interface paginaProps {
  pathName: string;
  count?: boolean;
}
