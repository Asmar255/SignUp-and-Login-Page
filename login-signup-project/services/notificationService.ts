import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true, 
    shouldShowList: true,   
  }),
});

//request for notification token
export async function registerForPushNotificationsAsync():Promise<string | undefined>{
    let token:string | undefined;

    if(Device.isDevice){
        const {status:existingStatus}=await Notifications.getPermissionsAsync();
        let finalStatus=existingStatus

        if(existingStatus!== 'granted'){
            const {status}=await Notifications.requestPermissionsAsync();
            finalStatus=status;
        }

        if(finalStatus!=='granted'){
            console.log("permision not granted for notifications")
            return undefined
        }
        const pushTokenData = await Notifications.getExpoPushTokenAsync();
        token = pushTokenData.data;
    }
    else{
        console.log("push notifications require a ohysical device")
    }

    if(Platform.OS=== 'android'){
        await Notifications.setNotificationChannelAsync('default',{
            name:'default',
            importance:Notifications.AndroidImportance.MAX,
            vibrationPattern:[0,250,250,250],
            lightColor:'#FF236C'
        })
    }
    return token
}

//sending notification
export async function sendPushNotifications(expoPushToken:string,title:string,body:string){
    const message={
        to: expoPushToken,
        sound:'default',
        title:title,
        body:body
    }
    try{
        await fetch('https://exp.host/--/api/v2/push/send',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
    }
    catch (error) {
        console.error('Error sending push notification:', error);
    }
}