import { listInterface } from "@/_models/commonModels";
import { List, ListItem } from "@mantine/core";
import { FC } from "react";

const ListElement: FC<{ list: listInterface[] }> = ({ list }) => {
    return (
        <List mb='md'>
            {list.map((item, index) => (
                <ListItem fz='lg' key={index}>{item.listElement}</ListItem>
            ))}
        </List>
    );
};

export default ListElement