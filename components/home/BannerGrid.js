import React from "react";
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
export default function BannerGrid(){
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image
                        source={{ uri: 'https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png' }}
                        style={styles.elementImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        display: 'flex', // React Native uses flexbox by default
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
        width: "100%",
        height: "100%",
        // flex: 1,
        opacity: 1,
    }
})


