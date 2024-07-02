import { Image, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { CustomTeamLogo } from "../../components/TeamLogo";
import { CustomStatsCard } from "./components/StatsCard";

export const CareerStatsScreen = () => {
    return (
        // Parent View 
        <View className="flex-1 justify-between items-center">
            {/* View1 */}
            <LinearGradient className="flex-1 justify-center w-full" start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#6B1EC5', '#9A43DC', '#9B44DD']}>
                <View className="ml-7 w-2/4">
                    <Text className="text-white font-extrabold text-3xl">Zlatan</Text>
                    <Text className="text-white font-extrabold text-3xl">Ibrahimovic</Text>
                    <Text className="text-4xl text-candy_corn-300 font-extrabold pt-2">#10</Text>
                </View>
                <View className="z-10 w-56 h-64 absolute right-8 -bottom-6">
                    <Image
                        source={require('../../assets/images/zlatan.png')}
                        className="w-full h-full object-contain"
                    />
                </View>
            </LinearGradient>

            {/* View2 */}
            <View className="mt-7 flex-row w-[90%] space-x-2 justify-between h-fit">
                <CustomStatsCard label="Goals" stat="570"></CustomStatsCard>
                <CustomStatsCard label="Age" stat="39"></CustomStatsCard>
                <CustomStatsCard label="Position" stat="ST"></CustomStatsCard>
            </View>


            {/* View3 */}
            <View className=" w-[90%]">
                <Text className='text-base text-black my-4'>Team Played for</Text>
                <View className="flex-row w-full justify-between">
                    <View className="w-1/5 justify-center items-center aspect-square border-[0.5px] rounded-lg border-primary-300">
                        <Image className="w-12 aspect-square"
                            source={{
                                uri: "https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png",
                            }}
                        />
                    </View>
                    <View className="w-1/5 justify-center items-center aspect-square border-[0.5px] rounded-lg border-primary-300">
                        <Image className="w-12 aspect-square"
                            source={{
                                uri: "https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png",
                            }}
                        />
                    </View>
                    <View className="w-1/5 justify-center items-center aspect-square border-[0.5px] rounded-lg border-primary-300">
                        <Image className="w-12 aspect-square"
                            source={{
                                uri: "https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png",
                            }}
                        />
                    </View>
                    <View className="w-1/5 justify-center items-center aspect-square border-[0.5px] rounded-lg border-primary-300">
                        <Image className="w-12 aspect-square"
                            source={{
                                uri: "https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png",
                            }}
                        />
                    </View>
                </View>
            </View>


            {/* View4 */}
            <View className="flex-1 mb-8 w-[90%]">
                <Text className='text-base text-black my-4'>Latest Match</Text>
                {/* Section 1 */}
                <View className='bg-gray-200 rounded-lg px-2 pt-2'>
                    <Text className='font-bold text-center my-4 text-black'>Champions League - Group Stage: Matchday 3</Text>
                    {/* Scores */}
                    <View className='flex-row justify-around pt-1'>
                        <CustomTeamLogo imageURL='https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png' teamName='Juventus' style="w-12"></CustomTeamLogo>
                        <View className="items-center ">
                            <Text className='font-bold text-4xl text-black'>2-1</Text>
                            <Text className='font-bold text-1x text-black'>Full-Time</Text>
                        </View>
                        <CustomTeamLogo imageURL='https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png' teamName='Manchester United' style="w-12"></CustomTeamLogo>

                    </View>
                    <View>
                        <TouchableOpacity className='py-4 items-center border-t-[0.5px]'>
                            <Text className='text-gray-600'>See full stats</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}