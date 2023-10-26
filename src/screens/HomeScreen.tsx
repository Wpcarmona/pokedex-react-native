/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { ActivityIndicator } from 'react-native';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const {simplePokemonList, loadPokemons} = usePokemonPaginated();

   return (
      <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.globalaBG}
      />
      <View
         style={{
            // ...globalStyles.globalMargin,
            alignItems:'center',
         }}
      >
         <FlatList
            data={simplePokemonList}
            keyExtractor={(pokemon)=> pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={(
               <Text style={{
                  ...globalStyles.title,
                  ...globalStyles.globalMargin,
                  top:top + 20,
                  marginBottom:top + 20,
                  paddingBottom:10,
               }}>Pokédex</Text>
            )}
            renderItem={({item})=> (
               <PokemonCard
                  pokemon={item}
               />
            )}

            //Infinite Scroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            ListFooterComponent={(
            <ActivityIndicator
               style={{height:100}}
               size={20}
               color="grey"
            />
            )}
         />
      </View>
      </>
   );
};

