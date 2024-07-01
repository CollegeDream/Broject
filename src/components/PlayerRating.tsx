import React from "react"
import { FC } from "react"
import { View, Text, TextInput, Image } from "react-native"

type PlayerRatingProps = {
    playerName: string,
    title: string,
    rating: number,
    imageURL: string
}

export const CustomPlayerRating: FC<PlayerRatingProps> = (props): JSX.Element => {
    return (
        <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center">
                <View className="rounded-full truncate  mr-2 aspect-square">
                    <Image className=" object-cover w-10 h-12"
                        source={{ uri: props.imageURL, }}
                    />
                </View>

                <View className="flex-col">
                    <Text className="font-semibold text-black">{props.playerName}</Text>
                    <Text className="text-[12px]">{props.title}</Text>
                </View>
            </View>
            <View className="p-2 bg-success-500 rounded-full">
                <Text className="text-white">{props.rating}</Text>
            </View>
        </View >
    )
}
