import { FlatList, View } from "react-native";
import tw from "twrnc";
import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/postListItem";

export default function App() {
  return (
    <View style={tw`px-4 py-2 flex-1 bg-white`}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <PostListItem post={item} />;
        }}
      />
    </View>
  );
}
