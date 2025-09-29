import PostListItem from "@/src/components/PostListItem";
import { FlatList, View } from "react-native";
import tw from "twrnc";
import posts from "@/assets/data/posts.json";

export default function App() {
  return (
    <View style={tw`px-4 py-2 flex-1 bg-white`}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <PostListItem post={item} />;
        }}
      />
    </View>
  );
}
