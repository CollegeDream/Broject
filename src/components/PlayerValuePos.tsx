import { FC } from "react"
import { View, Text, TextInput } from "react-native"

type PlayerValuePosProps = {
    name: string,
    position: string,
    value: string,
}

export const CustomPlayerValuePos: FC<PlayerValuePosProps> = (props): JSX.Element => {
    return (
        <View className="items-center">
            <Text className="font-bold text-black">{props.name}</Text>
            <Text>{props.position}</Text>
            <View className= "bg-primary-800 py-0.5 px-2 rounded-md"> 
                <Text className="text-white">{props.value}</Text>
            </View>
        </View>
    )
}
 