import { FC } from "react"
import { View, Text, TextInput, Image } from "react-native"

type TeamLogoProps = {
    imageURL: string,
    teamName: string,
    style: string
}

export const CustomTeamLogo: FC<TeamLogoProps> = (props): JSX.Element => {

    if (props.style == "topTransfers") {
        return (<View className="items-center w-1/3">
            <Image className="w-8 aspect-square"
                source={{
                    uri: props.imageURL,
                }}
            />
            <Text className="mb-1 text-black text-center">{props.teamName}</Text>
        </View>)
    } else {
        return (
            <View className="items-center w-1/3">
                <Image className={`${props.style} aspect-square`}
                    source={{
                        uri: props.imageURL,
                    }}
                />
                <Text className="mb-1 text-black text-center">{props.teamName}</Text>
            </View>
        )
    }
}


