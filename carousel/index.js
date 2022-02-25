import React, { useRef, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Container, Bullets, Bullet, Item, BoxMonth, BoxValue, ItemBottom } from './styles' 

const Carousel = ({ items }) => {

    const [imageIndex, setImageIndex] = useState(0)

    const indexChanged = useRef((info) => {
        setImageIndex(info.viewableItems[0].index)
    })

    return (
        <Container>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                data={items}
                keyExtractor={(_, index) => index}
                onViewableItemsChanged={indexChanged.current}
                renderItem={({item}) => (
                    <Item>
                        <BoxMonth>{item.reference}</BoxMonth>
                        <BoxValue>{item.fmtAmount}</BoxValue>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'lightgray', marginTop: 5, marginBottom: 5 }}>Vence em 20/08/21</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <ItemBottom><Text>Extrato</Text></ItemBottom>
                            <ItemBottom><Text>Pagar</Text></ItemBottom>
                        </View>
                    </Item>
                )}
            />

            <Bullets>
                {items.map((_, index) => (
                    <Bullet key={index} active={index === imageIndex}/>
                ))}
            </Bullets>

        </Container>
    )
}

export default Carousel;