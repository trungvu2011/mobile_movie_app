import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild >
            <TouchableOpacity className='w-[30%]'>
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />

                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4' />

                    <Text className='text-xs text-white font-bold uppercase'>{(vote_average / 2).toFixed(1)}</Text>
                </View>

                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split('-')[0]}
                    </Text>
                    {/* <Text className='text-xs font-medium text-light-300 uppercase'>
                        { }
                    </Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard