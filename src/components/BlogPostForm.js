import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity,TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';


const BlogPostForm = ({ onSubmit,initialValues }) => {
    
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>edit the title</Text>
            <TextInput style={styles.inputContainer} value={title} onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>create a content</Text>
            <TextInput style={styles.inputContainer} value={content} onChangeText={text => setContent(text)} />
            <Button title='save blog' onPress={()=>onSubmit(title,content)}/>
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }
};



const styles = StyleSheet.create({
    inputContainer: {
        fontSize: 20,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 15
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginHorizontal: 10
    }

})

export default BlogPostForm;