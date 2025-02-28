import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import LayoutBackground from "./LayoutBackground";

const MyBarChart = () => {
  const data = [
    {
      value: 5, // Sabah verisi
      label: "14-02-2025",
      spacing: 2,
      labelWidth: 80,
      frontColor: "#4ABFF4", // Sabah verisi rengi
    },
    {
      value: 7, // Akşam verisi
      frontColor: "#FFA726", // Akşam verisi rengi
    },
    {
      value: 3,
      label: "15-02-2025",
      spacing: 2,
      labelWidth: 80,
      frontColor: "#4ABFF4",
    },
    {
      value: 8,
      frontColor: "#FFA726",
    },
    // Diğer tarihler için de aynı şekilde devam edin...
  ];

  return (
    <View style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={3} backButton={true}>
        <View style={{ padding: 10, marginVertical: "50%" }}>
          <BarChart
            data={data}
            barWidth={20}
            spacing={20}
            roundedTop
            roundedBottom
            hideRules={true}
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={8}
            maxValue={32}
            showFractionalValues={false}
            showYAxisIndices
            yAxisTextStyle={{ color: "black" }}
            labelWidth={100}
            initialSpacing={20}
            renderTooltip={(item, index) => (
              <View
                style={{
                  position: "absolute",
                  top: -20, // Çubuğun üzerinde konumlandır
                  backgroundColor: "white",
                  padding: 4,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Text style={{ fontSize: 12, color: "black" }}>
                  {item.value}
                </Text>
              </View>
            )}
          />
        </View>
      </LayoutBackground>
    </View>
  );
};

export default MyBarChart;
