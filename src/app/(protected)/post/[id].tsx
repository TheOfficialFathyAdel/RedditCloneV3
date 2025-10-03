import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import tw from "twrnc";
import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/postListItem";

export default function DetailedPostPage() {
  const { id } = useLocalSearchParams();
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return;
  }
  return (
    <View style={tw`px-4 flex-1 bg-white`}>
      <PostListItem post={post} isDetailedPost />
    </View>
  );
}
