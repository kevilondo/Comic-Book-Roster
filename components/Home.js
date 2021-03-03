import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import globalStyles from './globalStyles';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

export default function Home({ navigation }) {

  const [heroName, setHeroName] = useState();
  const [heroResult, setHeroResult] = useState();

  //state for loading time
  const [isLoading, setIsLoading] = useState(false);

  const [RequestSuccess, setRequestSuccess] = useState(false)

  const handleSubmit = async () => {
    
    //clear the state when the user searches a new hero
    setHeroResult([]);

    //Set the state to false to hide the message
    setRequestSuccess(false);

    //headers for the request
    const headers = {
      'Content-Type': 'text/plain',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, OPTIONS, X-Requested-With, Content-Type, Accept'
    };

    if (heroName)
    {
      setIsLoading(true)

      await fetch("https://superheroapi.com/api/4969844879755361/search/"+heroName, {
        method: 'GET',
        headers: headers,
      }).then(res => res.json())
      .then(responseJson => {
        if (responseJson.error)
        {
          alert(responseJson.error)
        }
        else
        {
          setRequestSuccess(true)
          setHeroResult(responseJson.results)
        }
        
      }).catch(error => {
        alert(error.message)
      })
      
    }
    else
    {
      alert("Enter a character name") 
    }

    setIsLoading(false)

  }

  const handleNavigation = (item) => {
      navigation.navigate('Profile', {character:  item});
  }

  /*useEffect(() => {
    console.log(heroResult)
  })*/

  return (
    <View style={globalStyles.container}>
        <Header />

      <View style={globalStyles.searchContainer}>
        <TextInput style={globalStyles.searchBar} onChangeText={setHeroName}/>
        <TouchableOpacity style={globalStyles.searchButton} onPress={handleSubmit}>
          <FontAwesomeIcon style={globalStyles.buttonCaption} icon={ faSearch } />
        </TouchableOpacity>
      </View>

      <View style={globalStyles.resultContainer}>

        {isLoading && (<ActivityIndicator size="small" color="#095385"/>)}

        {RequestSuccess && (<Text style={globalStyles.seeMore}>Click on a character to see more</Text>)}

        <FlatList 
          data={heroResult}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleNavigation(item)}>
                <View style={globalStyles.characterCard} key={item.id}>
                <Image 
                    source={{uri: item.image.url}}
                    style={globalStyles.thumbnail}
                />
                
                <View style={globalStyles.characterDetails}>
                    <Text style={globalStyles.details}>{item.name}</Text>
                    <Text style={globalStyles.details}>{item.biography['full-name']}</Text>
                </View>

                </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


