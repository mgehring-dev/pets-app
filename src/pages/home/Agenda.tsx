import { useMemo, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import {
  AgendaEntry,
  Agenda as RNCAgenda,
  AgendaSchedule,
  DateData,
} from "react-native-calendars";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components";
import { TNavigationProps } from "../../navigation/types";

export const Agenda = () => {
  const navigate = useNavigation<TNavigationProps>();

  // const [items, setItems] = useState<AgendaSchedule>({});

  // const loadItems = (day: DateData) => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);

  //       if (!items[strTime]) {
  //         items[strTime] = [];

  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: "Item for " + strTime + " #" + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //             day: strTime,
  //           });
  //         }
  //       }
  //     }

  //     const newItems: AgendaSchedule = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };

  const renderDay = (day: any) => {
    if (day) {
      return <Text>{day.getDay()}</Text>;
    }
    return <View />;
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        // style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const items = useMemo<AgendaSchedule>(
    () => ({
      "2025-10-10": [{ day: "10", height: 10, name: "" }],
    }),
    []
  );

  const handleLogOut = () => {
    navigate.navigate("Login");
  };

  return (
    <View style={{ marginTop: 80 }}>
      <RNCAgenda
        showClosingKnob
        items={items}
        // loadItemsForMonth={loadItems}
        selected={"2017-05-16"}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={this.renderDay}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
      <Button mode="outlined" icon="logout" onPress={handleLogOut}>
        Sair
      </Button>
    </View>
  );
};
