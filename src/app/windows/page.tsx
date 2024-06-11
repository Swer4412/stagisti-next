import { MacroBloccoProps } from "@/_models/commonModels";
import MacroBlocco from "@/components/MacroBlocco";
import { routesArr } from "@/costants";
import { GetQuery } from "@/queries/Queries";
import { query } from '@/lib/client';
import { gql } from "@apollo/client";

const Pagina = async () => {

    //Il primo [0] indica windows, il secondo [0] indica il primo carattere della string
    const capitalizedPath = routesArr[0][0].toUpperCase() + routesArr[0].slice(1);

    const strQuery: string = GetQuery(capitalizedPath)

    const { data } = await query({ query: gql(strQuery) })

    //Gestisco dinamicame il nome del modello
    const modelName = `all${capitalizedPath}Models`;

    //Ritorno i macroblocchi
    let counter = 0;
    return data[modelName]?.map((macroBlocco: MacroBloccoProps) => (
        <>
            <MacroBlocco title={macroBlocco.title} body={macroBlocco.body} counter={++counter} />
        </>
    )
    )
};

export default Pagina;
