import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated,Image } from 'react-native'


const { width, heigth } = Dimensions.get('window')



const scrollX = new Animated.Value(0)
let position = Animated.divide(width, width)
const dummyData = [
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
    "COMMING SOON",
]

const Carousel = () => {

    const [dataList, setDataList] = useState(dummyData)

    useEffect(()=> {
        infiniteScroll(dataList)

    },[])



    function infiniteScroll(){
        let scrollValue = 0
    
        setInterval(function() {
           
            scrollValue = scrollValue + 2
            this.flatList.scrollToOffset({ animated: false, offset: scrollValue})
            this.flat.scrollToOffset({ animated: false, offset: scrollValue})

            if(scrollValue == 1800){
                scrollValue = 0
            }
            
        }, 50)
    }


    if (dataList && dataList.length) {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:70,marginBottom:60,position:'relative'}}>
                <FlatList data={dataList}
                ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    // scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    style={{position:'absolute', top:0}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            // <View style={{width:100,height:100}}>
                                // <Image  style={{+resizeMode:'cover',width:190}} source={require('../assets/eng2.png')}/>
                            // </View>
                            // <Text style={styles.text}قريب  على</Text>
                            <Text style={styles.textArbi}> على قريب  

!</Text>

                            

                        )
                    }}
                   
                />

                <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image style={{resizeMode:'contain',marginTop:10, width:150,height:150}} source={require('../assets/logo12.png')}/>

                </View>

                <FlatList data={dataList}
                ref = {(flatList) => {this.flat = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    inverted
                    snapToAlignment="center"
                    // scrollEventThrottle={16}
                    style={{position:'absolute', bottom:0}}

                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.text}>OPENING SOON !</Text>
                        // <Image style={{resizeMode:'contain', width:50,height:50}} source={require('../assets/eng.png')}/>

                        )
                    }}
                   
                />
              
            </View>
        )
    }

}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' },
    text : {fontSize:24, fontFamily:'FontsFree-Net-Poppins-Black',marginRight:20,color:'white'},
    textArbi : {fontSize:30, fontFamily:'AwanZaman-Bold',marginRight:15,color:'white'},
    
})

export default Carousel
