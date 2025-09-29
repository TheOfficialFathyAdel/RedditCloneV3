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
import { Image, Text, View } from "react-native";
import { Post } from "@/src/types";

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  const hasImage = post.image;
  return (
    <View>
      <View style={tw`flex-row items-center gap-2 mt-6`}>
        <Image
          style={tw`w-7 h-7 rounded-full`}
          source={{ uri: post.group.image }}
        />
        <Text style={tw`font-bold text-base`}>{post.group.name}</Text>
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
      <Text style={tw`font-bold text-2xl tracking-tight mt-2`}>
        {post.title}
      </Text>
      {hasImage && (
        <Image
          style={[tw`w-full rounded-2xl mt-1`, { aspectRatio: 4 / 3 }]}
          source={{ uri: post.image || "" }}
        />
      )}
      {!hasImage && (
        <Text
          style={[tw`font-bold text-base leading-snug mt-2`, { color: "#888" }]}
          numberOfLines={4}
        >
          {post.description}
        </Text>
      )}
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
    </View>
  );
}
