import React,{ useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather, Icon, EvilIcons } from '@expo/vector-icons';
const ShowScreen=({navigation})=>{
    const {state} = useContext(BlogContext);
    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};
ShowScreen.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            < EvilIcons name="pencil" size={20} />
        </TouchableOpacity>
    )
});
export default ShowScreen;