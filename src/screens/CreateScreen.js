import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm.js'
const CreateScreen = ({navigation}) => {
   
    
    const {addBlogPost} = useContext(BlogContext);
    return <BlogPostForm 
    onSubmit={(title,content)=>{addBlogPost(title,content,()=>{navigation.navigate('IndexScreen')})}}

    />

};

export default CreateScreen;