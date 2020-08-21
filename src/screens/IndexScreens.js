import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { Container, Header, Content, List, ListItem, Text, Button } from 'native-base';
const IndexScreen = () => {
	const { state, addBlogPost } = useContext(BlogContext);
	return (
		<Container>
			<Content>
				<Button primary onPress={addBlogPost}>
					<Text>Add Posts</Text>
				</Button>
				<List>
					{state.map((post) => (
						<ListItem key={post.id}>
							<Text>{post.title}</Text>
						</ListItem>
					))}
				</List>
			</Content>
		</Container>
	);
};

export default IndexScreen;
