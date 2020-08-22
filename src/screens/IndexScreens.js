import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { Container, Header, Content, List, ListItem, Text, Button, Icon } from 'native-base';
const IndexScreen = () => {
	const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
	return (
		<Container>
			<Content>
				<Button style={{ flex: 1, alignSelf: 'center', marginTop: 20 }} primary onPress={addBlogPost}>
					<Text>Add Posts</Text>
				</Button>
				<List>
					{state.map((post) => (
						<ListItem key={post.id}>
							<Text>
								{post.title} - {post.id}
							</Text>

							<Text style={{ textAlign: 'right', flex: 1 }}>
								<Icon onPress={() => deleteBlogPost(post.id)} name="trash" />
							</Text>
						</ListItem>
					))}
				</List>
			</Content>
		</Container>
	);
};

export default IndexScreen;
