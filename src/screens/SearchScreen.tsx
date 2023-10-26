/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {  Dimensions, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { FlatList } from 'react-native';
import { globalStyles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemoninterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const {isFetching, simplePokemonList} = usePokemonSearch();
    const [term, setTerm] = useState('');

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {

      if (term.length === 0) {
         return setPokemonFiltered([]);
      }

      if (isNaN(Number(term))){
         setPokemonFiltered(
            simplePokemonList.filter(
               (poke) => poke.name.toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase()))
         );
      } else {

         const pokemonbyId = simplePokemonList.find(poke => poke.id === term);
         setPokemonFiltered(
            (pokemonbyId) ? [pokemonbyId] : []
         );
      }

    }, [term]);


    if (isFetching){
      return <Loading/>;
    }

   return (
      <View style={{
        flex:1,
      //   marginTop:(Platform.OS === 'ios') ? top : top + 10,
        marginHorizontal:20,
        }}>
         <SearchInput
         onDebounce = {(value) => setTerm(value)}
         style={{
            position:'absolute',
            zIndex:999,
            width:screenWidth - 40,
            top:(Platform.OS === 'ios') ? top : top + 10,
         }}/>
         <FlatList
            data={pokemonFiltered}
            keyExtractor={(pokemon)=> pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={(
               <Text style={{
                  ...globalStyles.title,
                  ...globalStyles.globalMargin,
                  paddingBottom:10,
                  marginTop:(Platform.OS === 'ios') ? top + 60 : top + 80,
               }}>{term}</Text>
            )}
            renderItem={({item})=> (
               <PokemonCard
                  pokemon={item}
               />
            )}
         />
      </View>
   );
};



