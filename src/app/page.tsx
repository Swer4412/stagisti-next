import { FC } from 'react';
import { Paper, Stack} from '@mantine/core';
import { HomeQuery } from '../queries/Queries';
import MacroBlocco from '../components/MacroBlocco';
import HomeLinks from '../components/HomeLinks';
import {query } from '@/lib/client';
import { gql } from '@apollo/client';

const Home: FC = async () => {

  //Apollo client accetta le query di tipo non string qundi utilizzo la funzione gql
  const { data } = await query({ query: gql(HomeQuery) })
 
  //Ritorno i macroblocchi
  return <Paper p="md" shadow="xl">
    <Stack>
      <MacroBlocco title={data.homeModel.title} body={data.homeModel.body} />
      <HomeLinks/>
    </Stack>
  </Paper>
};

export default Home;