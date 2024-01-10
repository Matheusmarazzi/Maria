import * as Notifications from "expo-notifications";


export default async function GoodMorning() {
  

  const Good = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bom diaa!❤️",
        body: "Dormiu bem?",
        data: [],
      },
      trigger: {
        hour: 9,
        minute: 0,
        repeats: true
      },
    });
  };
  Good();
}