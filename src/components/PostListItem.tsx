import tw from "twrnc";
import moment from "moment";
import { Colors } from "@/colors/Colors";
import {
  ArrowBigDown,
  ArrowBigUp,
  DivideCircle,
  MessagesSquare,
  Share2,
  Trophy,
} from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { Post } from "@/src/types";
import { useRouter } from "expo-router";

interface PostListItemProps {
  post: Post;
  isDetailedPost?: boolean;
}

export default function PostListItem({
  post,
  isDetailedPost,
}: PostListItemProps) {
  const hasImage = post.image;
  const router = useRouter();

  return (
    <Pressable
      onPress={() => (isDetailedPost ? null : router.push(`/post/${post.id}`))}
    >
      <View style={tw`flex-row items-center gap-2 mt-6`}>
        <Image
          style={tw`w-7 h-7 rounded-full`}
          source={{ uri: post.group.image }}
        />
        <Text style={tw`font-bold text-lg`}>{post.group.name}</Text>
        <Text style={[tw`text-base font-bold`, { color: Colors.DateColor }]}>
          {moment(post.created_at).fromNow()}
        </Text>
        <View
          style={[
            tw`px-3 rounded-full ml-auto`,
            { backgroundColor: Colors.PostItemButtonColor },
          ]}
        >
          <Text style={tw`text-white font-bold text-base`}>Join</Text>
        </View>
      </View>
      {isDetailedPost && (
        <Text style={tw`font-bold text-base ml-9 mt-[-5]`}>
          {post.user.name}
        </Text>
      )}
      <Text style={tw`font-bold text-2xl tracking-tight mt-2`}>
        {post.title}
      </Text>
      {hasImage && (
        <Image
          style={[tw`w-full rounded-2xl mt-2`, { aspectRatio: 4 / 3 }]}
          source={{ uri: post.image || "" }}
        />
      )}

      <Text
        style={[tw`font-bold text-base leading-snug mt-2 text-gray-700`]}
        numberOfLines={isDetailedPost ? 10 : 4}
      >
        {post.description}
      </Text>

      <View style={tw`flex-row items-center mt-4`}>
        <View style={tw`flex-row rounded-full px-2 gap-1`}>
          <ArrowBigUp size={22} />
          <Text style={tw`font-bold text-base`}>{post.upvotes}</Text>
          <ArrowBigDown size={22} />
        </View>
        <View style={tw`flex-row rounded-full px-4 gap-1 ml-2`}>
          <MessagesSquare size={24} />
          <Text style={tw`font-bold text-base`}>{post.nr_of_comments}</Text>
        </View>
        <View style={tw`flex-row rounded-full px-4 gap-1 ml-auto`}>
          <Trophy size={24} />
        </View>
        <View style={tw`flex-row rounded-full px-4 gap-1 ml-2`}>
          <Share2 size={24} color="black" />
        </View>
      </View>
      <View style={tw`bg-gray-300 h-[1px] w-full mt-4`}></View>
    </Pressable>
  );
}
