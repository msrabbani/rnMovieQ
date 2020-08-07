import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get("screen").width;

const MovieList: React.FC<Props> = (props) => {
  const renderItems = ({item}) => {
    return (
      <Card width={screenWidth * 0.474}>
        <ImageStyle
            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            resizeMode={"center"}
          />
        <Title>{item.title}</Title>
        <Subtitle>Release Date: {item.release_date}</Subtitle>
        <Subtitle>Vote: {item.vote_average}</Subtitle>
      </Card>
    );
  };

  return(
    <Container>
        <FlatList
          data={props.data}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex:1;
  background-color: lightgrey;
`
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  
`
const Subtitle = styled.Text`
  font-size: 11px;
`
const Card = styled.View`
 width: ${props => props.width};
 padding:10px;
 margin:5px;
 align-items:center;
 justify-content:center;
 border-radius:5px;
 box-shadow: 0px 3px 3px #00000029;
 background-color:lightgrey;
`
const ImageStyle = styled.Image`
  width: 150px;
  height: 220px;
  border-radius:10px;
  margin-bottom:10px;
`;

// interface T{}
type Props = {  
 data:[]
}

export default MovieList