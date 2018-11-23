import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  //second try
  state = {
    splitText: [],
    articleId: 1
  };
  componentDidMount() {
      let splitText = 'uijk얼마 전 본지에서 고양이가 안기기 싫어하는 이유 네 가지를 소개한 적 있는데요. 이 기사의 내용(하단 참고)처럼 고양이는 여러 이유로 사람에게 안기기 싫어합니다.qwasuijk기분이 내킬 때만 자신을 안을 수 있도록 허락하는 고양이에게 가끔 섭섭한 마음 드는 것도 사실입니다. 그런데 이런 튕기기 선수 고양이가 집사에게 안아 달라고 조른다면 어떨까요?qwasrtfg3qwasuijk상자 위에서 한 점 흐트러짐 없이 차렷 자세로 앞을 똑바로 응시하고 있는 이 고양이. 어떻게 보면 군기가 바짝 든 군인같아 당장에라도 거수경례를 할 것처럼 보입니다.qwasuijk그런데 이 모습은 군기는 커녕 ‘집사에게 안아 달라’고 강력히 요청하기 위해 호시탐탐 기회를 엿보고 있는 장면이라고 합니다. 일본의 누리꾼 ’map_u_chin’에 의해 소개된 이 사진은 그녀의 남편이 마푸의 앞을 지나갈 때 포착했다고 합니다.qwasuijk그렇다면 과연 마푸는 원하는 대로 안길 수 있었을까요?qwasrtfg2qwastygh1qwasuijk상황 1. 마푸는 상자 위에 올라가 두 발로 서서 \'레이저 눈빛\'을 쏘며 집사가 다가오기를 기다립니다.qwasyuhj출처 : https://twitter.com/map_u_chinqwasrtfg1qwastygh2qwasuijk상황 2. 드디어 집사가 다가오자 손을 번쩍 들며 안아 달라고 조릅니다. 마치 어린아이가 안아 달라고 하는 거 같군요.qwasuijk집사야, 그냥 지나가지 말고 나 좀 안아줘 봐~.”qwasyuhj출처 : https://twitter.com/map_u_chinqwastygh3qwasuijk상황 3. “어라, 어라, 그냥 지나가네.”qwasuijk그렇게 주의를 끌었건만 그냥 지나쳐버린 집사를 바라보며 마푸는 허망해합니다.qwasyuhj출처:https://twitter.com/map_u_chinqwastygh4qwasuijk상황 4. 마음 상한 마푸는 가만있지 않습니다.qwasuijk“그냥 지나가기냥. 내 손짓 발짓이 안 보이더냥.”qwasuijk점점 멀어지는 집사의 뒷모습을 보면서 항의하듯 야옹거리는 마푸의 모습이 절로 웃음 짓게 합니다.qwasyuhj출처 : https://twitter.com/map_u_chinqwasrtfg2qwasuijk일반적인 고양이 성격에 비춰보면 마푸의 이런 행동은 상당히 특이한데요. 올해로 여섯 살이 된 마푸는 만화책을 보는 집사에게 놀아달라고 눈을 맞추며 조를 정도로 애교가 많은 고양이라고 합니다.qwasrtfg1qwasuijk직립 자세로 서서 앞발을 버둥거리며 집사에게 안아 달라는 마푸의 사진을 본 일본 누리꾼들은 ‘필사적으로 어필하는 모습이 참 귀엽다’, ‘나중에 안아 줬는지 궁금하다’ ‘마지막 사진의 항의하는 표정이 정말 참을 수 없을 정도로 귀엽다’,\‘달려가서 내가 안아 주고 싶다\’는 등 다양한 반응을 보였습니다.qwasuijk글 | 서하나'.split('qwas');
      console.log(splitText);
      this.setState({ splitText });
  }
  render(){
    const { mainContainer, scrollViewStyle, containerStyle, title, textStyle } = styles;
    return (
      <View style={{...mainContainer, marginTop: 30, marginBottom: 0 }}>
        <ScrollView
          style={scrollViewStyle}
          contentContainerStyle={containerStyle}
        >
          {(this.state.splitText!==null?this.state.splitText.map((spText, i)=>{
            if(spText.startsWith('uijk')){//normal paragraph
              return <Text key={i} style={{...textStyle, width: 375 }}>{spText.substring(4,spText.length)}</Text>;
            }
            else if(spText.startsWith('yuhj')){//source
              return <Text style={{...textStyle, width: 375, color: '#515151'}} key={i}>{spText.substring(4,spText.length)}</Text>;
            }
            else if(spText.startsWith('wesd')){//sub-title
              return <Text key={i} style={{...textStyle, fontSize:20, width: 375 }}>{spText.substring(4,spText.length)}</Text>;
            }
            else if(spText.startsWith('erdf')){//sub-sub-title
              return <Text key={i} style={{...textStyle, fontSize:18, width: 375 }}>{spText.substring(4,spText.length)}</Text>;
            }
            else if(spText.startsWith('rtfg')){//linechange
              if(spText.substring(4) === '1'){
                return <Text key={i} style={{...textStyle, width: 375}}></Text>;
              }
              else if(spText.substring(4) === '2'){
                return <Text key={i} style={{...textStyle, width: 375}}>{'\n'}</Text>;
              }
              else if(spText.substring(4) === '3'){
                return <Text key={i} style={{...textStyle, width: 375}}>{'\n'}{'\n'}</Text>;
              }
              else if(spText.substring(4) === '4'){
                return <Text key={i} style={{...textStyle, width: 375}}>{'\n'}{'\n'}{'\n'}</Text>;
              }
            }
            else if(spText.startsWith('tygh')){
              return (
                <Image
                  source={{uri: ('https://s3.ap-northeast-2.amazonaws.com/purrsongarticleimage/article'.concat(this.state.articleId).concat('/article').concat(this.state.articleId).concat('img').concat(spText.substring(spText.length-1)).concat('.jpeg')) }}
                  style={{width: 375, height: 375, marginBottom:10 }}
                  key={i}
                />
              );
            }
            else {
              return null;
            }

            // else if(spText.startsWith('mknjed')){//image
            //   return (
            //     <Image
            //       source={{uri: ('https://s3.ap-northeast-2.amazonaws.com/purrsongarticleimage/article'.concat(this.props.article.articleId).concat('/article').concat(this.props.article.articleId).concat('img').concat(spText.substring(spText.length-1)).concat('.jpeg')) }}
            //       style={{width: 375, height: 375, marginBottom:10 }}
            //       key={i}
            //     />
            //   );
            // }

          }):null)}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0
  },
  containerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: 10
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
    paddingLeft: 10
  },
  textStyle: {
    paddingHorizontal: 10,
    color: 'black',
    lineHeight: 20,
    fontSize: 15
  }
};
