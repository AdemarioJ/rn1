import React from 'react';
import styled from 'styled-components/native';
import AddItemArea from './src/components/AddItemArea';
import ListaItem from './src/components/ListaItem';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {
  return (
    <Page>
      <AddItemArea />
      <Listagem
        data={lista}
        renderItem={({item}) => <ListaItem data={item} />}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};
