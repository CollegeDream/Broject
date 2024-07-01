import { FC } from "react"
import { View, Text, TextInput, Image } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const CustomSearchBar = () => {
    return (
        <View className="flex-row items-center bg-gray-200 px-2 rounded-md" >
            <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="gray"/>
            <TextInput className="ml-1" placeholder="Search for league, team, player, etc."></TextInput>
        </View>
    )
}