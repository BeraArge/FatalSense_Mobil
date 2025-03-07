import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import LayoutBackground from "./LayoutBackground";
import { useSelector } from "react-redux";

const MyBarChart = () => {
  const { fetalInfoData,loading } = useSelector((state) => state.fetal);
  const [isLandscape, setIsLandscape] = useState(false);
  const { width, height } = Dimensions.get("window");

  console.log("fetalAddedData", fetalInfoData?.data?.fetalDetails , loading);

  const chartData = fetalInfoData?.data?.fetalDetails.map((item) => [
    {
      value: item.sabahFetalCount || 0, // Sabah verisi
      label: item.date.slice(5, 10), // Format the date (YYYY-MM-DD)
      spacing: 2,
      labelWidth: 80,
      frontColor: "#4ABFF4", // Sabah verisi rengi
    },
    {
      value: item.aksamFetalCount || 0, // Akşam verisi (ensure 0 if no value)
      frontColor: "#FFA726", // Akşam verisi rengi
    },
  ]).flat();
  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(width > height);
    };
    const subscription = Dimensions.addEventListener("change", updateOrientation);
    updateOrientation();
    return () => {
      subscription.remove();
    };
  }, [width, height]);

  if(loading==true){
    return <ActivityIndicator size="large" color="#4ABFF4" style={{alignSelf:"center",flex:1}}  />
  }
  return (
    <View style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={3} backButton={true}>
        <Text
          style={{
            top: "13%",
            fontSize: 16,
            marginLeft: 10}}>
          Daha detetaylı görmek için telefonu yan çeviriniz. {isLandscape ? "Landscape Mode" : "Portrait Mode"}
        </Text>

        <View style={{ padding: 10, top: "20%" }}>
          <BarChart
            data={chartData}
            barWidth={isLandscape ? 20 : 20} // Adjust if needed
            height={isLandscape ? 300 : 400} // Adjust the height for landscape
            spacing={isLandscape ? 15 : 10} // Adjust spacing in landscape mode
            roundedTop
            roundedBottom
            hideRules={true}
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={10}
            maxValue={30}
            showFractionalValues={false}
            showYAxisIndices
            yAxisTextStyle={{ color: "black" }}
            labelWidth={100}
            initialSpacing={15}
            renderTooltip={(item, index) => (
              <View
                style={{
                  position: "absolute",
                  top: -20,
                  backgroundColor: "white",
                  padding: 4,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Text style={{ fontSize: 12, color: "black" }}>
                  {item?.value}
                </Text>
              </View>
            )}
            style={{
              // Rotate the chart when in landscape mode
              transform: isLandscape ? [{ rotate: "90deg" }] : [],
              // Adjust the position to fit the rotated chart
              marginLeft: isLandscape ? 40 : 0,
              marginTop: isLandscape ? 20 : 0,
            }}
          />
        </View>
      </LayoutBackground>
    </View>
  );
};

export default MyBarChart;