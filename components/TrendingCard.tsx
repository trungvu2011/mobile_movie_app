import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import MaskedView from '@react-native-masked-view/masked-view'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TrendingCard = ({ movie: { movie_id, title, poster_url, vote_average, release_date }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity
                className='w-32 relative pl-5'
            >
                <Image
                    source={{ uri: poster_url }}
                    className='w-32 h-48 rounded-lg'
                    resizeMode='cover'
                />

                <View className='flex flex-row items-center absolute -right-3 top-2 bg-black/70 px-1.5 py-0.5 rounded-sm'>
                    <Image source={icons.star} className='w-3 h-3 mr-1' />
                    <Text className='text-xs text-white font-bold uppercase'>{(vote_average / 2).toFixed(1)}</Text>
                </View>

                <View className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'>
                    <MaskedView
                        maskElement={
                            <Text className='font-bold text-white text-6xl'>{index + 1}</Text>
                        }
                    >
                        <Image source={images.rankingGradient} className='size-14' resizeMode='cover' />
                    </MaskedView>
                </View>

                <Text className='text-sm font-bold mt-2 text-light-200' numberOfLines={1}>
                    {title}
                </Text>

                <Text className='text-xs text-light-300 font-medium mt-1'>
                    {release_date?.split('-')[0]}
                </Text>
            </TouchableOpacity>
        </Link>

    )
}

export default TrendingCard