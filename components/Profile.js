import React, {useState, useEffect} from 'react';
import globalStyles from './globalStyles';
import { Text, View, Image, ScrollView } from 'react-native';
import Header from './Header';

export default function Profile ({route}) {

    const character = route.params.character;

    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Header />
                <View style={globalStyles.profileContainer}>
                    <Text style={[globalStyles.characterName, globalStyles.text]}>{character.name}</Text>
                    <Image 
                        source={{uri: character.image.url}}
                        style={globalStyles.profilePicture}
                    />
                    <View style={globalStyles.stats}>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Combat:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.combat >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.combat}
                            </Text>
                        </View>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Durability:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.durability >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.durability}
                            </Text>
                        </View>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Intelligence:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.intelligence >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.intelligence}
                            </Text>
                        </View>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Power:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.power >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.power}
                            </Text>
                        </View>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Speed:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.speed >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.speed}
                            </Text>
                        </View>
                        <View style={globalStyles.statsGroup}>
                            <Text style={[globalStyles.text,globalStyles.stats]}>Strength:</Text>
                            <Text style={[globalStyles.statsValue, globalStyles.stats, (character.powerstats.strength >= 50) ? globalStyles.green: globalStyles.red]}>
                                {character.powerstats.strength}
                            </Text>
                        </View>
                    </View>
                    
                    <View style={globalStyles.biographyContainer}>
                        <Text style={[globalStyles.title, globalStyles.text]}>Biography</Text>
                        <View style={globalStyles.biographyList}>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Full Name:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography['full-name']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Aliases:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography.aliases.join(', ')}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Alignment:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography.alignment}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Alter Ego:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography['alter-egos']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Base:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.work.base}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Occupation:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.work.occupation}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Affiliation:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.connections['group-affiliation']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Relatives:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.connections.relatives}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>First Appearance:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography['first-appearance']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Place of Birth:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography['place-of-birth']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Publisher:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.biography.publisher}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={globalStyles.biographyContainer}>
                        <Text style={[globalStyles.title, globalStyles.text]}>Appearance</Text>
                        <View style={globalStyles.biographyList}>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Eye color:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance['eye-color']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Gender:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance.gender}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Hair color:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance['hair-color']}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Height:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance.height.join(', ')}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Race:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance.race}</Text>
                            </View>
                            <View style={globalStyles.biographyGroup}>
                                <Text style={[globalStyles.stats, globalStyles.text]}>Weight:</Text>
                                <Text style={[globalStyles.biographyValue]}>{character.appearance.weight.join(', ')}</Text>
                            </View>
                            
                        </View>
                    </View>

                </View>    
            </View>
        </ScrollView>
    )
}