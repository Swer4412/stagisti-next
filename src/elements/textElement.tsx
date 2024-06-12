import { FC } from "react";
import Markdown from "react-markdown";
import { Text } from "@mantine/core";

const TextElement: FC<{ testo: string }> = ({ testo }) => { //TODO Non vanno lh e mb e non so perché
    return <Text component='span'><Markdown className='-my-4'>{testo}</Markdown></Text>; //Mi da problemi quindi gli metto un margine negativo :(
};

export default TextElement