import React, { useState } from 'react';
import {Button, Text, View } from 'react-native';

const LogOrSign = (props) => {
    const [logIn, signUp] =
    useState(true);

    return (
        <View>
            <Text>
                Choose:  {logIn ? "Click to Log in" : "Logging In"}!
            </Text>
            <Button
                onPress={() => {
                    signUp(false);
                }}
            disabled={!logIn}
            title={logIn ? "Log in" : "Sign Up"}
            />
        </View>
    );
}
// const MotherName = () => {
//     return (
//         <>
//             <Mother name = "Emily" />
//             <Mother name = "Marianne" />
//             <Mother name = "Mary" />
//             <Mother name = "Danielle" />
//         </>
//     );
// }
export default LogOrSign;