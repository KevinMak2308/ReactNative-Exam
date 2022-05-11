import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
}

 const AppButton = (props: Props) => {
        const {title, onPress} = props;

        return (
            <View style={styles.appbuttonstyle}>
           <Button title={title} onPress={onPress} />
           </View>
        )
 };

  const styles = StyleSheet.create({
    // ...
    appbuttonstyle: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });


export default AppButton;