import { Title } from "@mantine/core";
import { FC } from "react";

const SubTitleElement: FC<{ subtitle: string }> = ({ subtitle }) => {
    return <Title className='font-normal'>{subtitle}</Title>
};

export default SubTitleElement;