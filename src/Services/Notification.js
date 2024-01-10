import * as Notifications from "expo-notifications";
import messages from '../../assets/JSON/messages.json'


export default async function Notfication() {
  const random = Math.floor(Math.random() * 6);
  

  const message = messages;
  const Notify = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "um titulo",
        body: message.mensagens[random],
        data: [],
      },
      trigger: {
        seconds: 5500,
        repeats: true
      },
    });
  };
  Notify();
}