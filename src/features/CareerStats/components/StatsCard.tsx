import { FC } from "react"
import { View, Text } from "react-native"

interface CustomStatsCardProps {
    label: string,
    stat: string
}

export const CustomStatsCard: FC<CustomStatsCardProps> = (props): JSX.Element => {
    return (
        <View className="w-1/4 bg-gray-200 h-24 items-center justify-between rounded-lg">
            <View className="items-center justify-center w-full grow">
                <Text className="text-4xl font-extrabold text-black tracking-tighter">{props.stat}</Text>
            </View>
            <View className="border-t-[0.5px] w-[80%] items-center p-1 tracking-tighter">
                <Text className="text-black font-bold">{props.label}</Text>
            </View>
        </View>
    )
}