import React from "react";
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Dimensions} from "react-native-web";
export default function BannerGrid(){
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/tikimsp/25/82/73/c461f68672c24febe36609bc83277024.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        display: 'flex', // React Native uses flexbox by default
        flexWrap: 'wrap',
        flexDirection: 'row', // Horizontal direction, similar to grid-template-columns
        justifyContent: 'space-between', // Align items along the main axis (horizontal in this case)
        alignItems: 'stretch', // Align items along the cross axis (vertical in this case)
        gap: 12,
    },
    element: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'var(--alias-outline-overlay, rgba(0, 0, 0, 0.05))',
        backgroundColor: 'var(--alias-theme, #fff)',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        flexShrink: 0,
        display: 'flex',
        aspectRatio: 1, // React Native uses aspectRatio property
    },
    elementImage: {
        width: (width - 32 - 16) * 0.5,
        height: (width - 32 - 16) * 0.5,
        flex: 1,
        opacity: 1,
    }
})


