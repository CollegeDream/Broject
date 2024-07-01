import { FC } from "react"
import { View, Text, TextInput } from "react-native"

interface InputTextboxProps {
    label: string
}

export const CustomInputTextbox: FC<InputTextboxProps> = (props): JSX.Element => {
    return(
        <View className="pb-4">
            <Text className="mb-1 text-black font-medium">{props.label}</Text>

            {props.label !== 'Password' ? (
                <TextInput className="border-black border-[1px] px-2"></TextInput>
            ) : (
                <TextInput secureTextEntry={true} className="border-black border-[1px] px-2"></TextInput>
            )}
        </View>
    )
}