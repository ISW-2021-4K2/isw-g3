import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import FontLoader from "../components/FontLoader";
import colors from "../config/colors";
import ImageInput from "./ImageInput";

function AppTextInput({
  width = "100%",
  imageUri,
  onChangeImage,
  allowImageInput,
  textInputStyle,
  viewStyle,
  onPress,
  onImageNotJpg,
  onImageExceed,
  ...otherProps
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, viewStyle]}>
        <FontLoader>
          <TextInput
            style={[styles.textInput, textInputStyle]}
            placeholderTextColor="#8b9199"
            maxLength={255}
            {...otherProps}
          />
        </FontLoader>
        {allowImageInput && (
          <View style={styles.imageContainer}>
            <ImageInput onChangeImage={onChangeImage} imageUri={imageUri} onImageExceed={onImageExceed} onImageNotJpg={onImageNotJpg} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.c4 + "70",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    height: 60,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
    flex: 10,
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppTextInput;
